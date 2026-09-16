document.addEventListener(
    "DOMContentLoaded",
    () => {

        const auth =
            NivoraStorage.get(
                "auth"
            );


        if (
            !auth ||
            !auth.phone
        ) {

            window.location.href =
                "login.html";

            return;
        }


        const phoneDisplay =
            document.getElementById(
                "phoneDisplay"
            );


        phoneDisplay.textContent =
            auth.phone;


        const inputs =
            Array.from(
                document.querySelectorAll(
                    ".otp-grid input"
                )
            );


        const form =
            document.getElementById(
                "otpForm"
            );


        const errorElement =
            document.getElementById(
                "otpError"
            );


        const resendButton =
            document.getElementById(
                "resendButton"
            );


        const countdown =
            document.getElementById(
                "countdown"
            );


        let secondsLeft =
            30;


        let timer;


        function showError(
            message
        ) {

            errorElement.textContent =
                message;

        }


        function clearError() {

            errorElement.textContent =
                "";

        }


        function focusFirst() {

            if (inputs[0]) {

                inputs[0].focus();

            }

        }


        /* ==========================
           OTP INPUT
        =========================== */

        inputs.forEach(
            (
                input,
                index
            ) => {


                input.addEventListener(
                    "input",
                    () => {

                        input.value =
                            input.value
                                .replace(
                                    /\D/g,
                                    ""
                                )
                                .slice(
                                    0,
                                    1
                                );


                        clearError();


                        if (
                            input.value &&
                            index <
                                inputs.length - 1
                        ) {

                            inputs[
                                index + 1
                            ].focus();

                        }

                    }
                );


                input.addEventListener(
                    "keydown",
                    (event) => {

                        if (
                            event.key ===
                            "Backspace" &&
                            !input.value &&
                            index > 0
                        ) {

                            inputs[
                                index - 1
                            ].focus();

                        }

                    }
                );


                input.addEventListener(
                    "paste",
                    (event) => {

                        const pasted =
                            (
                                event
                                    .clipboardData
                                    ?.getData("text") ||
                                ""
                            )
                                .replace(
                                    /\D/g,
                                    ""
                                )
                                .slice(
                                    0,
                                    6
                                );


                        if (
                            pasted.length !==
                            6
                        ) {

                            return;

                        }


                        event.preventDefault();


                        pasted
                            .split("")
                            .forEach(
                                (
                                    digit,
                                    digitIndex
                                ) => {

                                    inputs[
                                        digitIndex
                                    ].value =
                                        digit;

                                }
                            );


                        inputs[
                            inputs.length - 1
                        ].focus();

                    }
                );

            }
        );


        /* ==========================
           VERIFY
        =========================== */

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const otp =
                    inputs
                        .map(
                            (input) =>
                                input.value
                        )
                        .join("");


                if (
                    otp.length !== 6
                ) {

                    showError(
                        "Please enter all 6 digits."
                    );

                    return;
                }


                /*
                 * Phase 1:
                 * Accept any 6-digit value.
                 *
                 * Phase 2:
                 * Replace this with real
                 * backend OTP verification.
                 */

                NivoraStorage.set(
                    "auth",
                    {
                        ...auth,

                        status:
                            "verified"
                    }
                );


                window.location.href =
                    "profile.html";

            }
        );


        /* ==========================
           RESEND TIMER
        =========================== */

        function startTimer() {

            secondsLeft =
                30;


            resendButton.disabled =
                true;


            timer =
                window.setInterval(
                    () => {

                        secondsLeft -=
                            1;


                        countdown.textContent =
                            `You can resend in ${secondsLeft}s`;


                        if (
                            secondsLeft <=
                            0
                        ) {

                            window.clearInterval(
                                timer
                            );


                            resendButton.disabled =
                                false;


                            countdown.textContent =
                                "You can request a new code now.";

                        }

                    },
                    1000
                );

        }


        resendButton.addEventListener(
            "click",
            () => {

                if (
                    resendButton.disabled
                ) {

                    return;
                }


                alert(
                    "Real OTP resend will be connected in Phase 2."
                );


                startTimer();

            }
        );


        startTimer();


        focusFirst();

    }
);