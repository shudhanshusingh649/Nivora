document.addEventListener(
    "DOMContentLoaded",
    () => {

        const form =
            document.getElementById(
                "listingForm"
            );


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const selected =
                    document.querySelector(
                        'input[name="listingType"]:checked'
                    );


                if (!selected) {

                    alert(
                        "Please select a listing type."
                    );

                    return;

                }


                const get =
                    id =>
                        document
                            .getElementById(id)
                            ?.value
                            .trim() || "";


                const listing = {

                    type:
                        selected.value,

                    name:
                        get("listingName"),

                    price:
                        get("listingPrice"),

                    city:
                        get("listingCity"),

                    area:
                        get("listingArea"),

                    landmark:
                        get("landmark"),

                    availability:
                        get("availability"),

                    description:
                        get("description"),

                    status:
                        "Pending Verification",

                    createdAt:
                        new Date().toISOString()

                };


                localStorage.setItem(
                    "nivora_last_listing",
                    JSON.stringify(listing)
                );


                alert(
                    "Listing saved in demo mode and marked as Pending Verification."
                );


                window.location.href =
                    "owner-dashboard.html";

            }
        );


        const detectLocation =
            document.getElementById(
                "detectLocation"
            );


        if (detectLocation) {

            detectLocation.addEventListener(
                "click",
                () => {

                    alert(
                        "Real location API will be connected later."
                    );

                }
            );

        }

    }
);