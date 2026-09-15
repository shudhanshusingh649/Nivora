document.addEventListener(
    "DOMContentLoaded",
    () => {

        const issueType =
            document.getElementById(
                "issueType"
            );


        document
            .querySelectorAll(
                ".support-card"
            )
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        const topic =
                            card.dataset.topic;


                        if (issueType) {

                            issueType.value =
                                topic;

                        }


                        document
                            .querySelector(
                                ".support-contact"
                            )
                            ?.scrollIntoView({
                                behavior:
                                    "smooth"
                            });

                    }
                );

            });


        const supportForm =
            document.getElementById(
                "supportForm"
            );


        if (supportForm) {

            supportForm.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    alert(
                        "Demo support request submitted."
                    );


                    supportForm.reset();

                }
            );

        }

    }
);