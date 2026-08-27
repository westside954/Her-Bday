// ==========================================
// SHOPBLESS BIRTHDAY JOURNEY
// STAGE 3
// ==========================================


// ==========================================
// MANUAL STAGE CONTROL
// ==========================================
//
// true  = Stage 3 unlocked
// false = Stage 3 locked
//
// ==========================================

const stage3Unlocked = true;


// ==========================================
// CHECK STAGE 2
// ==========================================

const stage2Completed =
    localStorage.getItem("birthdayStage2");


if (stage2Completed !== "completed") {

    window.location.href = "stage2.html";

}


// ==========================================
// ELEMENTS
// ==========================================

const answerInput =
    document.getElementById("answerInput");

const submitAnswer =
    document.getElementById("submitAnswer");

const feedback =
    document.getElementById("feedback");

const stageThree =
    document.getElementById("stageThree");

const successCard =
    document.getElementById("successCard");

const continueButton =
    document.getElementById("continueButton");


// ==========================================
// CHECK STAGE 3 UNLOCK
// ==========================================

if (!stage3Unlocked) {

    stageThree.innerHTML = `

        <div class="stage-number">
            STAGE 03
        </div>

        <div class="lock-icon">
            🔒
        </div>

        <h2>
            Not Yet... 👀
        </h2>

        <p class="question-intro">
            You've made it this far...
        </p>

        <div class="question-box">

            <p class="question">
                Stage 03 is still locked.
            </p>

            <p class="hint">
                Come back when you're told
                it's time. 💗
            </p>

        </div>

    `;

}


// ==========================================
// CORRECT ANSWER
// ==========================================

const correctAnswers = [

    "circle around you",

    "i circle around you",

    "and i circle around you"

];


// ==========================================
// NORMALIZE ANSWER
// ==========================================

function normalizeAnswer(value) {

    return value
        .trim()
        .toLowerCase()
        .replace(/[.!?,]/g, "")
        .replace(/\s+/g, " ");

}


// ==========================================
// CHECK STAGE 3 ANSWER
// ==========================================

function checkStageThree() {

    const answer =
        normalizeAnswer(answerInput.value);


    // ======================================
    // EMPTY ANSWER
    // ======================================

    if (!answer) {

        feedback.textContent =
            "You have to finish it first. 🌙💗";

        feedback.className =
            "feedback error";

        answerInput.focus();

        return;

    }


    // ======================================
    // CORRECT ANSWER
    // ======================================

    if (correctAnswers.includes(answer)) {

        // Save Stage 3 completion

        localStorage.setItem(
            "birthdayStage3",
            "completed"
        );


        // Success message

        feedback.textContent =
            "You remembered... 🥹💗";

        feedback.className =
            "feedback success";


        // Disable controls

        submitAnswer.disabled =
            true;

        answerInput.disabled =
            true;


        submitAnswer.textContent =
            "You Did It 💗";


        // ======================================
        // SHOW SUCCESS CARD
        // ======================================

        setTimeout(function () {

            stageThree.style.display =
                "none";

            successCard.style.display =
                "block";

            successCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 900);

    }


    // ======================================
    // WRONG ANSWER
    // ======================================

    else {

        feedback.textContent =
            "Almost... think about what comes next. 🌙👀";

        feedback.className =
            "feedback error";


        // Shake input

        answerInput.classList.add(
            "shake"
        );


        setTimeout(function () {

            answerInput.classList.remove(
                "shake"
            );

        }, 400);

    }

}


// ==========================================
// SUBMIT BUTTON
// ==========================================

submitAnswer.addEventListener(
    "click",
    checkStageThree
);


// ==========================================
// ENTER KEY
// ==========================================

answerInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            checkStageThree();

        }

    }
);


// ==========================================
// CONTINUE TO FINAL MESSAGE
// ==========================================

continueButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "final.html";

    }
);


// ==========================================
// LOAD SAVED PROGRESS
// ==========================================

const stage3Completed =
    localStorage.getItem("birthdayStage3");


if (stage3Completed === "completed") {

    stageThree.style.display =
        "none";

    successCard.style.display =
        "block";

}
