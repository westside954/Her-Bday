// =====================================
// Blessing Birthday
// Stage 2
// =====================================


// =====================================
// MANUAL STAGE CONTROL
// =====================================
//
// true  = Stage 2 unlocked
// false = Stage 2 locked
//
// =====================================

const stage2Unlocked = true;


// =====================================
// CHECK STAGE 1
// =====================================

const stage1Completed =
    localStorage.getItem("birthdayStage1");


if (stage1Completed !== "completed") {

    window.location.href = "birthday.html";

}


// =====================================
// CHECK STAGE 2 UNLOCK
// =====================================

if (!stage2Unlocked) {

    document.body.innerHTML = `

        <div style="
            min-height:100vh;
            background:#080808;
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            text-align:center;
            font-family:Poppins,sans-serif;
            padding:30px;
        ">

            <div>

                <div style="
                    font-size:60px;
                    margin-bottom:20px;
                ">
                    🔒
                </div>

                <h1>
                    Stage 2 is still locked
                </h1>

                <p style="
                    color:#aaa;
                    margin-top:15px;
                    line-height:1.7;
                ">

                    You're not supposed to be
                    here just yet. 👀

                    <br><br>

                    Come back when you're told
                    it's time. 💗

                </p>

            </div>

        </div>

    `;

    throw new Error("Stage 2 is locked.");

}


// =====================================
// ELEMENTS
// =====================================

const answerInput =
    document.getElementById("answer");

const submitButton =
    document.getElementById("submit-answer");

const message =
    document.getElementById("message");

const questionBox =
    document.getElementById("questionBox");

const successCard =
    document.getElementById("successCard");

const continueButton =
    document.getElementById("continueButton");


// =====================================
// CHECK IF STAGE 2 WAS COMPLETED
// =====================================

const stage2Completed =
    localStorage.getItem("birthdayStage2");


// =====================================
// LOAD SAVED PROGRESS
// =====================================

function loadStage2Progress() {

    if (stage2Completed === "completed") {

        questionBox.style.display = "none";

        successCard.style.display = "block";

    }

}


// =====================================
// CORRECT ANSWERS
// =====================================

const correctAnswers = [

    "the best man",
    "best man",
    "the bestman",
    "bestman"

];


// =====================================
// CHECK ANSWER
// =====================================

function checkAnswer() {

    const answer =
        answerInput.value
            .trim()
            .toLowerCase();


    // =====================================
    // EMPTY ANSWER
    // =====================================

    if (!answer) {

        message.textContent =
            "Come on... think carefully. 👀❤️";

        message.style.color =
            "#ff6b6b";

        return;

    }


    // =====================================
    // CORRECT ANSWER
    // =====================================

    if (correctAnswers.includes(answer)) {


        // Save Stage 2 completion

        localStorage.setItem(
            "birthdayStage2",
            "completed"
        );


        // Show success message

        message.textContent =
            "You remembered. ❤️";

        message.style.color =
            "#ff69b4";


        // Give her a moment

        setTimeout(function () {

            questionBox.style.display =
                "none";

            successCard.style.display =
                "block";

            successCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 700);

    }


    // =====================================
    // WRONG ANSWER
    // =====================================

    else {

        message.textContent =
            "Hmm... think carefully. 👀❤️";

        message.style.color =
            "#ff6b6b";


        answerInput.value = "";

        answerInput.focus();

    }

}


// =====================================
// SUBMIT BUTTON
// =====================================

submitButton.addEventListener(
    "click",
    checkAnswer
);


// =====================================
// ENTER KEY
// =====================================

answerInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            checkAnswer();

        }

    }
);


// =====================================
// CONTINUE TO STAGE 3
// =====================================

continueButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "stage3.html";

    }
);


// =====================================
// INITIALIZE
// =====================================

loadStage2Progress();
