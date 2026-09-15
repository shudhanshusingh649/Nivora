document.addEventListener(
    "DOMContentLoaded",
    () => {

        const params =
            new URLSearchParams(
                window.location.search
            );


        const type =
            params.get("type");


        const title =
            document.getElementById(
                "propertyTitle"
            );


        const names = {

            Hotel:
                "Nivora City Stay",

            Hostel:
                "Campus View Boys Hostel",

            PG:
                "Sunrise Luxury PG & Co-Living",

            "Rental Flat":
                "Green Valley 2BHK Shared Flat",

            Room:
                "City View Single Room",

            Mess:
                "Annapurna Student Mess",

            Flatmate:
                "Aman Kumar"

        };


        if (
            type &&
            title &&
            names[type]
        ) {

            title.textContent =
                names[type];

        }


        document
            .querySelectorAll(
                ".action-row .btn"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        alert(
                            "Demo interaction. This will be connected to the backend later."
                        );

                    }
                );

            });

    }
);