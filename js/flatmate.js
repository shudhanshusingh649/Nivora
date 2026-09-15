document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(
                ".connection-card button"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        alert(
                            "Demo connection request sent."
                        );

                    }
                );

            });

    }
);