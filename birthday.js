// ==========================================
// SHOPBLESS BIRTHDAY JOURNEY
// STAGE 1
// ==========================================


// ==========================================
// STAGE 1 ANSWER
// ==========================================

const stageOneAnswer = "thubalenkosi";


// ==========================================
// HTML ELEMENTS
// ==========================================

const answerInput =
    document.getElementById("answerInput");

const submitAnswer =
    document.getElementById("submitAnswer");

const feedback =
    document.getElementById("feedback");

const stageOne =
    document.getElementById("stageOne");

const successCard =
    document.getElementById("successCard");

const continueButton =
    document.getElementById("continueButton");


// ==========================================
// CHECK IF STAGE 1 WAS ALREADY COMPLETED
// ==========================================

const stageOneCompleted =
    localStorage.getItem("birthdayStage1");


// ==========================================
// LOAD PROGRESS
// ==========================================

function loadBirthdayProgress() {

    if (stageOneCompleted === "completed") {

        stageOne.style.display = "none";

        successCard.style.display = "block";

    }

}


// ==========================================
// CHECK STAGE 1 ANSWER
// ==========================================

function checkStageOne() {

    const answer =
        answerInput.value
            .trim()
            .toLowerCase();


    // ======================================
    // EMPTY ANSWER
    // ======================================

    if (!answer) {

        feedback.textContent =
            "Come on birthday girl... give it a try. 🤭";

        feedback.className =
            "feedback error";

        return;

    }


    // ======================================
    // CORRECT ANSWER
    // ======================================

    if (answer === stageOneAnswer) {


        // Save progress

        localStorage.setItem(
            "birthdayStage1",
            "completed"
        );


        // Show success message

        feedback.textContent =
            "Correct! 💗";

        feedback.className =
            "feedback success";


        // Give her a moment to see success

        setTimeout(function () {

            stageOne.style.display = "none";

            successCard.style.display = "block";

        }, 700);


    }


    // ======================================
    // WRONG ANSWER
    // ======================================

    else {

        feedback.textContent =
            "Hmm... not quite. Think carefully. 👀💗";

        feedback.className =
            "feedback error";


        // Shake input

        answerInput.classList.add("shake");


        setTimeout(function () {

            answerInput.classList.remove("shake");

        }, 400);

    }

}


// ==========================================
// BUTTON
// ==========================================

submitAnswer.addEventListener(
    "click",
    checkStageOne
);


// ==========================================
// ENTER KEY
// ==========================================

answerInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            checkStageOne();

        }

    }
);


// ==========================================
// CONTINUE TO STAGE 2
// ==========================================

continueButton.addEventListener(
    "click",
    function () {

        window.location.href = "stage2.html";

    }
);


// ==========================================
// INITIALIZE
// ==========================================

loadBirthdayProgress();
