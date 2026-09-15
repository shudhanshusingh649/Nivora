document.addEventListener("DOMContentLoaded", () => {

    const phone =
        localStorage.getItem("nivora_phone") || "";


    const phoneDisplay =
        document.getElementById("phoneDisplay");


    if (phoneDisplay) {

        phoneDisplay.textContent =
            "+91 " + phone;

    }


    const inputs =
        [
            ...document.querySelectorAll(
                ".otp-grid input"
            )
        ];


    inputs.forEach((input, index) => {


        input.addEventListener(
            "input",
            () => {

                input.value =
                    input.value
                        .replace(/\D/g, "")
                        .slice(0, 1);


                if (
                    input.value &&
                    index < inputs.length - 1
                ) {

                    inputs[index + 1].focus();

                }

            }
        );


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Backspace" &&
                    !input.value &&
                    index > 0
                ) {

                    inputs[index - 1].focus();

                }

            }
        );


    });


    const resend =
        document.getElementById("resendOtp");


    if (resend) {

        resend.addEventListener(
            "click",
            () => {

                alert(
                    "Demo OTP: 123456"
                );

            }
        );

    }


    const otpForm =
        document.getElementById("otpForm");


    if (otpForm) {

        otpForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const entered =
                    inputs
                        .map(input => input.value)
                        .join("");


                const correctOtp =
                    localStorage.getItem(
                        "nivora_demo_otp"
                    ) || "123456";


                if (entered !== correctOtp) {

                    alert(
                        "Invalid OTP. Use 123456 for demo."
                    );

                    return;

                }


                localStorage.setItem(
                    "nivora_verified",
                    "true"
                );


                window.location.href =
                    "profile.html";

            }
        );

    }

});