document.addEventListener("DOMContentLoaded", () => {

    const verified =
        localStorage.getItem("nivora_verified");


    if (verified !== "true") {

        window.location.href =
            "login.html";

        return;

    }


    const form =
        document.getElementById("profileForm");


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const getValue =
                id =>
                    document
                        .getElementById(id)
                        ?.value
                        .trim() || "";


            const profile = {

                fullName:
                    getValue("fullName"),

                username:
                    getValue("username"),

                age:
                    getValue("age"),

                gender:
                    getValue("gender"),

                currentCity:
                    getValue("currentCity"),

                permanentCity:
                    getValue("permanentCity"),

                occupation:
                    getValue("occupation"),

                college:
                    getValue("college"),

                course:
                    getValue("course"),

                year:
                    getValue("year"),

                role:
                    getValue("role")

            };


            localStorage.setItem(
                "nivora_profile",
                JSON.stringify(profile)
            );


            window.location.href =
                "dashboard.html";

        }
    );

});