document.addEventListener(
    "DOMContentLoaded",
    () => {

        const auth =
            NivoraStorage.get(
                "auth"
            );


        if (
            !auth ||
            auth.status !== "verified"
        ) {

            window.location.href =
                "login.html";

            return;
        }


        const form =
            document.getElementById(
                "profileForm"
            );


        const steps =
            Array.from(
                document.querySelectorAll(
                    ".profile-step"
                )
            );


        const nextButton =
            document.getElementById(
                "nextButton"
            );


        const backButton =
            document.getElementById(
                "backButton"
            );


        const finishButton =
            document.getElementById(
                "finishButton"
            );


        const currentStepElement =
            document.getElementById(
                "currentStep"
            );


        const progressBar =
            document.getElementById(
                "progressBar"
            );


        const progressLabels =
            document.querySelectorAll(
                ".progress-labels span"
            );


        let currentStep =
            1;


        function value(
            id
        ) {

            const element =
                document.getElementById(
                    id
                );


            return element
                ? element.value.trim()
                : "";

        }


        function selectedRole() {

            const role =
                document.querySelector(
                    'input[name="role"]:checked'
                );


            return role
                ? role.value
                : "";

        }


        /* ==========================
           VALIDATE
        =========================== */

        function validateCurrentStep() {

            const section =
                steps[
                    currentStep - 1
                ];


            const required =
                section.querySelectorAll(
                    "[required]"
                );


            for (
                const field
                of required
            ) {

                if (
                    field.type ===
                        "radio"
                ) {

                    continue;

                }


                if (
                    !field.value.trim()
                ) {

                    field.focus();


                    alert(
                        "Please complete the required fields."
                    );


                    return false;
                }

            }


            if (
                currentStep === 1
            ) {

                const age =
                    Number(
                        value("age")
                    );


                if (
                    !Number.isInteger(age) ||
                    age < 13 ||
                    age > 100
                ) {

                    alert(
                        "Please enter a valid age between 13 and 100."
                    );


                    document
                        .getElementById(
                            "age"
                        )
                        .focus();


                    return false;
                }

            }


            if (
                currentStep === 3
            ) {

                if (
                    !selectedRole()
                ) {

                    alert(
                        "Please select your role."
                    );


                    return false;

                }

            }


            return true;

        }


        /* ==========================
           SUMMARY
        =========================== */

        function updateSummary() {

            const name =
                value(
                    "fullName"
                );


            const username =
                value(
                    "username"
                );


            const age =
                value(
                    "age"
                );


            const gender =
                value(
                    "gender"
                );


            const city =
                value(
                    "currentCity"
                );


            const educationType =
                value(
                    "educationType"
                );


            const institution =
                value(
                    "institution"
                );


            const course =
                value(
                    "course"
                );


            const studyYear =
                value(
                    "studyYear"
                );


            const educationParts =
                [
                    educationType,
                    institution,
                    course,
                    studyYear
                ]
                    .filter(Boolean)
                    .join(" · ");


            document.getElementById(
                "summaryName"
            ).textContent =
                name || "Not provided";


            document.getElementById(
                "summaryBasic"
            ).textContent =
                `${username || "username"} · ${age || "-"} · ${gender || "Not specified"}`;


            document.getElementById(
                "summaryCity"
            ).textContent =
                city || "Not provided";


            document.getElementById(
                "summaryEducation"
            ).textContent =
                educationParts ||
                "Not provided";


            document.getElementById(
                "summaryRole"
            ).textContent =
                selectedRole() ||
                "Not selected";

        }


        /* ==========================
           RENDER STEP
        =========================== */

        function renderStep() {

            steps.forEach(
                (
                    step,
                    index
                ) => {

                    step.classList.toggle(
                        "active",
                        index ===
                            currentStep - 1
                    );

                }
            );


            currentStepElement.textContent =
                currentStep;


            const percentage =
                (
                    (currentStep - 1) /
                    (steps.length - 1)
                ) * 100;


            progressBar.style.width =
                `${percentage}%`;


            progressLabels.forEach(
                (
                    label,
                    index
                ) => {

                    label.classList.toggle(
                        "active",
                        index <=
                            currentStep - 1
                    );

                }
            );


            backButton.style.visibility =
                currentStep === 1
                    ? "hidden"
                    : "visible";


            const lastStep =
                currentStep ===
                steps.length;


            nextButton.style.display =
                lastStep
                    ? "none"
                    : "inline-flex";


            finishButton.style.display =
                lastStep
                    ? "inline-flex"
                    : "none";


            if (lastStep) {

                updateSummary();

            }

        }


        /* ==========================
           NEXT
        =========================== */

        nextButton.addEventListener(
            "click",
            () => {

                if (
                    !validateCurrentStep()
                ) {

                    return;
                }


                if (
                    currentStep <
                    steps.length
                ) {

                    currentStep +=
                        1;


                    renderStep();

                }

            }
        );


        /* ==========================
           BACK
        =========================== */

        backButton.addEventListener(
            "click",
            () => {

                if (
                    currentStep > 1
                ) {

                    currentStep -=
                        1;


                    renderStep();

                }

            }
        );


        /* ==========================
           FINISH
        =========================== */

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                if (
                    !validateCurrentStep()
                ) {

                    return;

                }


                const profile = {

                    phone:
                        auth.phone,

                    fullName:
                        value(
                            "fullName"
                        ),

                    username:
                        value(
                            "username"
                        ),

                    age:
                        Number(
                            value(
                                "age"
                            )
                        ),

                    gender:
                        value(
                            "gender"
                        ),

                    currentCity:
                        value(
                            "currentCity"
                        ),

                    permanentCity:
                        value(
                            "permanentCity"
                        ),

                    educationType:
                        value(
                            "educationType"
                        ),

                    institution:
                        value(
                            "institution"
                        ),

                    course:
                        value(
                            "course"
                        ),

                    studyYear:
                        value(
                            "studyYear"
                        ),

                    role:
                        selectedRole(),

                    profileCompleted:
                        true,

                    createdAt:
                        new Date()
                            .toISOString()

                };


                NivoraStorage.set(
                    "profile",
                    profile
                );


                NivoraStorage.set(
                    "auth",
                    {
                        ...auth,

                        status:
                            "profile_completed"
                    }
                );


                window.location.href =
                    "dashboard.html";

            }
        );


        renderStep();

    }
);