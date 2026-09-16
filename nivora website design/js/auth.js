document.addEventListener(
    "DOMContentLoaded",
    () => {

        const loginForm =
            document.getElementById(
                "loginForm"
            );


        const phoneInput =
            document.getElementById(
                "phone"
            );


        const phoneMessage =
            document.getElementById(
                "phoneMessage"
            );


        if (!loginForm) {
            return;
        }


        function setMessage(
            message,
            isError = true
        ) {

            if (!phoneMessage) {
                return;
            }


            phoneMessage.textContent =
                message;


            phoneMessage.classList.toggle(
                "error",
                isError
            );


            phoneMessage.classList.toggle(
                "success",
                !isError
            );

        }


        function cleanPhone(
            value
        ) {

            return value
                .replace(/\D/g, "")
                .slice(0, 10);

        }


        if (phoneInput) {

            phoneInput.addEventListener(
                "input",
                () => {

                    phoneInput.value =
                        cleanPhone(
                            phoneInput.value
                        );

                    setMessage(
                        ""
                    );

                }
            );

        }


        loginForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const phone =
                    cleanPhone(
                        phoneInput.value
                    );


                if (
                    phone.length !== 10
                ) {

                    setMessage(
                        "Enter a valid 10-digit mobile number."
                    );

                    phoneInput.focus();

                    return;
                }


                /*
                 * Phase 1:
                 *
                 * We only store the phone number
                 * locally so the complete frontend
                 * journey can be tested.
                 *
                 * Phase 2:
                 * Replace this with the real
                 * authentication API.
                 */

                NivoraStorage.set(
                    "auth",
                    {
                        phone:
                            `+91${phone}`,

                        status:
                            "otp_pending"
                    }
                );


                window.location.href =
                    "otp.html";

            }
        );


        const googleButton =
            document.getElementById(
                "googleButton"
            );


        if (googleButton) {

            googleButton.addEventListener(
                "click",
                () => {

                    alert(
                        "Google authentication will be connected in Phase 2."
                    );

                }
            );

        }


        const emailButton =
            document.getElementById(
                "emailButton"
            );


        if (emailButton) {

            emailButton.addEventListener(
                "click",
                () => {

                    alert(
                        "Email authentication will be connected in Phase 2."
                    );

                }
            );

        }

    }
);