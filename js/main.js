document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const mainNav =
        document.getElementById("mainNav");


    if (menuButton && mainNav) {

        menuButton.addEventListener("click", () => {

            mainNav.classList.toggle("open");

        });

    }


    const heroQuery =
        document.getElementById("heroQuery");

    const heroSearchButton =
        document.getElementById("heroSearchBtn");


    document
        .querySelectorAll("[data-quick]")
        .forEach(button => {

            button.addEventListener("click", () => {

                if (heroQuery) {

                    heroQuery.value =
                        button.dataset.quick;

                }

            });

        });


    if (heroSearchButton) {

        heroSearchButton.addEventListener(
            "click",
            () => {

                const query =
                    heroQuery?.value.trim() || "";


                const url =
                    query
                    ? `pages/explore.html?search=${encodeURIComponent(query)}`
                    : "pages/explore.html";


                window.location.href = url;

            }
        );

    }

});