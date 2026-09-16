document.addEventListener(
    "DOMContentLoaded",
    () => {

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        if (menuButton) {

            menuButton.addEventListener(
                "click",
                () => {

                    document.body.classList.toggle(
                        "menu-open"
                    );

                }
            );

        }


        const heroForm =
            document.getElementById(
                "heroSearchForm"
            );


        if (heroForm) {

            heroForm.addEventListener(
                "submit",
                (event) => {

                    event.preventDefault();


                    const query =
                        document
                            .getElementById(
                                "heroQuery"
                            )
                            .value
                            .trim();


                    const location =
                        document
                            .getElementById(
                                "heroLocation"
                            )
                            .value
                            .trim();


                    NivoraStorage.set(
                        "search",
                        {
                            query,
                            location
                        }
                    );


                    window.location.href =
                        "pages/login.html";

                }
            );

        }


        document
            .querySelectorAll(
                ".quick-tags button"
            )
            .forEach(
                (button) => {

                    button.addEventListener(
                        "click",
                        () => {

                            const query =
                                button.textContent.trim();


                            NivoraStorage.set(
                                "search",
                                {
                                    query,
                                    location:
                                        ""
                                }
                            );


                            window.location.href =
                                "pages/login.html";

                        }
                    );

                }
            );

    }
);