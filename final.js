// ==========================================
// SHOPBLESS BIRTHDAY
// FINAL REVEAL
// ==========================================


// ==========================================
// CHECK STAGE 3
// ==========================================

const stage3Completed =
    localStorage.getItem("birthdayStage3");


if (stage3Completed !== "completed") {

    window.location.href =
        "stage3.html";

}


// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// ==========================================
// BUTTON
// ==========================================

// ==========================================
// CINEMATIC GIFT REVEAL
// ==========================================

const readyButton =
    document.getElementById("readyButton");

const cinematicReveal =
    document.getElementById("cinematicReveal");


readyButton.addEventListener(
    "click",
    function () {

        // Prevent multiple clicks
        readyButton.disabled = true;

        // Change button text
        readyButton.textContent =
            "Opening your present... ❤️";


        // Slight delay before the cinematic begins
        setTimeout(function () {

            // Activate cinematic overlay
            cinematicReveal.classList.add("active");

            cinematicReveal.setAttribute(
                "aria-hidden",
                "false"
            );


            // Lock scrolling
            document.body.style.overflow =
                "hidden";


            /*
             * Keep the cinematic scene
             * on screen for approximately
             * 7 seconds.
             */

            setTimeout(function () {

                window.location.href =
                    "https://westside954.github.io/jewelry-website/";

            }, 7000);

        }, 700);

    }
);

