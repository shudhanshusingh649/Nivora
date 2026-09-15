document.addEventListener("DOMContentLoaded", () => {

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const phone =
                    document
                        .getElementById("phone")
                        .value
                        .replace(/\D/g, "");


                if (phone.length !== 10) {

                    alert(
                        "Please enter a valid 10-digit mobile number."
                    );

                    return;

                }


                localStorage.setItem(
                    "nivora_phone",
                    phone
                );


                localStorage.setItem(
                    "nivora_demo_otp",
                    "123456"
                );


                window.location.href =
                    "otp.html";

            }
        );

    }


    const googleLogin =
        document.getElementById("googleLogin");


    if (googleLogin) {

        googleLogin.addEventListener(
            "click",
            () => {

                alert(
                    "Google login will be connected in the backend phase."
                );

            }
        );

    }


    const emailLogin =
        document.getElementById("emailLogin");


    if (emailLogin) {

        emailLogin.addEventListener(
            "click",
            () => {

                alert(
                    "Email verification will be connected in the backend phase."
                );

            }
        );

    }

});