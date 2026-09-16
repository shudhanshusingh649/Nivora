document.addEventListener(
    "DOMContentLoaded",
    () => {

        const auth =
            NivoraStorage.get(
                "auth"
            );


        const profile =
            NivoraStorage.get(
                "profile"
            );


        if (
            !auth ||
            auth.status !== "profile_completed" ||
            !profile
        ) {

            window.location.href =
                "login.html";

            return;

        }



        /* =================================
           USER DATA
        ================================== */

        const name =
            profile.fullName ||
            "User";


        const city =
            profile.currentCity ||
            "Location";


        const role =
            profile.role ||
            "User";


        const initial =
            name
                .charAt(0)
                .toUpperCase();



        /* =================================
           PROFILE DISPLAY
        ================================== */

        const dashboardName =
            document.getElementById(
                "dashboardName"
            );


        const profileName =
            document.getElementById(
                "profileName"
            );


        const profileCity =
            document.getElementById(
                "profileCity"
            );


        const profileRole =
            document.getElementById(
                "profileRole"
            );


        const locationChip =
            document.getElementById(
                "locationChip"
            );


        const headerAvatar =
            document.getElementById(
                "headerAvatar"
            );


        const profileAvatar =
            document.getElementById(
                "profileAvatar"
            );


        const mobileProfileInitial =
            document.getElementById(
                "mobileProfileInitial"
            );


        if (dashboardName) {

            dashboardName.textContent =
                name;

        }


        if (profileName) {

            profileName.textContent =
                name;

        }


        if (profileCity) {

            profileCity.textContent =
                city;

        }


        if (profileRole) {

            profileRole.textContent =
                role;

        }


        if (locationChip) {

            locationChip.textContent =
                `⌖ ${city}`;

        }


        if (headerAvatar) {

            headerAvatar.textContent =
                initial;

        }


        if (profileAvatar) {

            profileAvatar.textContent =
                initial;

        }


        if (mobileProfileInitial) {

            mobileProfileInitial.textContent =
                initial;

        }



        /* =================================
           SEARCH
        ================================== */

        function performSearch(
            value
        ) {

            const query =
                value
                    .trim();


            if (!query) {

                return;

            }


            NivoraStorage.set(
                "search",
                {
                    query: query,

                    location: city
                }
            );


            window.location.href =
                "explore.html";

        }



        const smartSearch =
            document.getElementById(
                "smartSearch"
            );


        const headerSearch =
            document.getElementById(
                "headerSearch"
            );



        if (smartSearch) {

            smartSearch.addEventListener(
                "keydown",
                (
                    event
                ) => {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        performSearch(
                            smartSearch.value
                        );

                    }

                }
            );

        }



        if (headerSearch) {

            headerSearch.addEventListener(
                "keydown",
                (
                    event
                ) => {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        performSearch(
                            headerSearch.value
                        );

                    }

                }
            );

        }



        /* =================================
           EXPLORE BUTTON
        ================================== */

        const exploreButton =
            document.getElementById(
                "dashboardExploreButton"
            );


        if (exploreButton) {

            exploreButton.addEventListener(
                "click",
                () => {

                    performSearch(
                        smartSearch
                            ? smartSearch.value
                            : ""
                    );

                }
            );

        }



        /* =================================
           NEAR ME
        ================================== */

        const nearButton =
            document.getElementById(
                "nearButton"
            );


        if (nearButton) {

            nearButton.addEventListener(
                "click",
                () => {

                    NivoraStorage.set(
                        "search",
                        {
                            query: "",

                            location: city,

                            nearMe: true
                        }
                    );


                    window.location.href =
                        "explore.html";

                }
            );

        }



        /* =================================
           CATEGORY CARDS
        ================================== */

        const categoryCards =
            document.querySelectorAll(
                "[data-category]"
            );


        categoryCards.forEach(
            (
                card
            ) => {

                card.addEventListener(
                    "click",
                    () => {

                        const category =
                            card.dataset.category;


                        NivoraStorage.set(
                            "search",
                            {
                                query:
                                    category,

                                location:
                                    city
                            }
                        );


                        window.location.href =
                            "explore.html";

                    }
                );

            }
        );



        /* =================================
           MOBILE NAV
        ================================== */

        const navItems =
            document.querySelectorAll(
                ".mobile-nav-item"
            );


        const currentPage =
            window.location
                .pathname
                .split("/")
                .pop()
                .toLowerCase();


        navItems.forEach(
            (
                item
            ) => {

                const target =
                    item
                        .getAttribute(
                            "href"
                        )
                        .split("/")
                        .pop()
                        .toLowerCase();


                if (
                    target ===
                    currentPage
                ) {

                    item.classList.add(
                        "active"
                    );

                } else {

                    item.classList.remove(
                        "active"
                    );

                }

            }
        );



        /* =================================
           NOTIFICATION
        ================================== */

        const notificationButton =
            document.querySelector(
                ".notification-btn"
            );


        if (
            notificationButton
        ) {

            notificationButton.addEventListener(
                "click",
                () => {

                    alert(
                        "Nivora notifications will be connected to the backend in a later phase."
                    );

                }
            );

        }



        /* =================================
           VOICE BUTTON
        ================================== */

        const voiceButton =
            document.querySelector(
                ".voice-symbol"
            );


        if (
            voiceButton
        ) {

            voiceButton.addEventListener(
                "click",
                () => {

                    alert(
                        "Voice search will be connected in a later phase."
                    );

                }
            );

        }

    }
);