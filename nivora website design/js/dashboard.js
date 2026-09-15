document.addEventListener("DOMContentLoaded", () => {

    const profile =
        JSON.parse(
            localStorage.getItem(
                "nivora_profile"
            ) || "null"
        );


    if (!profile) {

        window.location.href =
            "login.html";

        return;

    }


    const name =
        document.getElementById(
            "dashName"
        );


    const role =
        document.getElementById(
            "dashRole"
        );


    const avatar =
        document.getElementById(
            "dashboardAvatar"
        );


    if (name) {

        name.textContent =
            profile.fullName || "User";

    }


    if (role) {

        role.textContent =
            profile.role || "User";

    }


    if (
        avatar &&
        profile.fullName
    ) {

        avatar.textContent =
            profile.fullName
                .charAt(0)
                .toUpperCase();

    }


    const search =
        document.getElementById(
            "smartSearch"
        );


    if (search) {

        search.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" &&
                    search.value.trim()
                ) {

                    window.location.href =
                        "explore.html?search=" +
                        encodeURIComponent(
                            search.value.trim()
                        );

                }

            }
        );

    }

});