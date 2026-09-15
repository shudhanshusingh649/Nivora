const NIVORA_LISTINGS = [

    {
        type: "PG",
        title: "Sunrise Luxury PG & Co-Living",
        location: "Kankarbagh, Patna",
        price: 6500,
        distance: 0.7,
        rating: 4.8,
        description: "Boys / Students · Food · Wi-Fi · Security",
        image: "image-pg"
    },

    {
        type: "Hostel",
        title: "Campus View Boys Hostel",
        location: "Patna",
        price: 5200,
        distance: 1.6,
        rating: 4.7,
        description: "Wi-Fi · Security · Mess nearby",
        image: "image-hostel"
    },

    {
        type: "Rental Flat",
        title: "Green Valley 2BHK Shared Flat",
        location: "Patna",
        price: 12000,
        distance: 1.2,
        rating: 4.6,
        description: "Furnished · Parking · Study friendly",
        image: "image-flat"
    },

    {
        type: "Room",
        title: "City View Single Room",
        location: "Boring Road, Patna",
        price: 5000,
        distance: 1.1,
        rating: 4.4,
        description: "Single · Furnished · Near market",
        image: "image-room"
    },

    {
        type: "Hotel",
        title: "Nivora City Stay",
        location: "Fraser Road, Patna",
        price: 2500,
        distance: 2.0,
        rating: 4.6,
        description: "Short stay · Wi-Fi · Breakfast",
        image: "image-hotel"
    },

    {
        type: "Mess",
        title: "Annapurna Student Mess",
        location: "Patna",
        price: 2800,
        distance: 0.6,
        rating: 4.7,
        description: "Veg · Monthly plan · Student offer",
        image: "image-mess"
    },

    {
        type: "Mess",
        title: "Home Food Mess",
        location: "Patna",
        price: 2600,
        distance: 0.9,
        rating: 4.4,
        description: "Home style · Lunch & Dinner",
        image: "image-mess"
    },

    {
        type: "Flatmate",
        title: "Aman Kumar",
        location: "Patna",
        price: 4000,
        distance: 0.8,
        rating: 4.9,
        description: "21 · Student · Looking for 2BHK flatmate",
        image: "image-flatmate"
    }

];


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const grid =
            document.getElementById(
                "listingGrid"
            );


        const search =
            document.getElementById(
                "listingSearch"
            );


        const title =
            document.getElementById(
                "listingTitle"
            );


        const count =
            document.getElementById(
                "resultCount"
            );


        const sort =
            document.getElementById(
                "sortSelect"
            );


        if (!grid) {
            return;
        }


        let activeFilter = "all";


        const params =
            new URLSearchParams(
                window.location.search
            );


        const urlType =
            params.get("type");


        const urlSearch =
            params.get("search");


        if (urlType) {

            activeFilter =
                urlType;


            document
                .querySelectorAll(
                    "[data-filter]"
                )
                .forEach(button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.filter ===
                            urlType
                    );

                });

        }


        if (
            urlSearch &&
            search
        ) {

            search.value =
                urlSearch;

        }


        function render(list) {


            if (!list.length) {

                grid.innerHTML = `

                    <div class="empty-state">

                        <div>🔍</div>

                        <h3>
                            No matching listings
                        </h3>

                        <p>
                            Try another category
                            or search term.
                        </p>

                    </div>

                `;

                return;

            }


            grid.innerHTML =
                list
                    .map(item => {

                        const unit =
                            item.type === "Hotel"
                                ? "/night"
                                : "/month";


                        const label =
                            item.type === "Flatmate"
                                ? "Compatible flatmate profile"
                                : "Verified property";


                        return `

                            <article class="listing-card">

                                <a
                                    href="property.html?type=${encodeURIComponent(item.type)}"
                                >

                                    <div
                                        class="listing-image ${item.image}"
                                    >

                                        <span class="verified-badge">
                                            ✓ VERIFIED
                                        </span>


                                        <button
                                            class="heart-btn"
                                            onclick="event.preventDefault()"
                                        >
                                            ♡
                                        </button>

                                    </div>


                                    <div class="listing-body">

                                        <div class="meta-row">

                                            <span>
                                                ${item.type.toUpperCase()}
                                            </span>

                                            <span>
                                                ${item.distance} KM
                                            </span>

                                        </div>


                                        <h3>
                                            ${item.title}
                                        </h3>


                                        <p>
                                            ${item.location}
                                            ·
                                            ${item.description}
                                        </p>


                                        <div class="price-row">

                                            <strong>

                                                ₹${item.price.toLocaleString("en-IN")}

                                                <small>
                                                    ${unit}
                                                </small>

                                            </strong>


                                            <span>
                                                ⭐ ${item.rating}
                                            </span>

                                        </div>


                                        <div class="listing-tag">
                                            ${label}
                                        </div>

                                    </div>

                                </a>

                            </article>

                        `;

                    })
                    .join("");

        }


        function update() {

            let filtered =
                [...NIVORA_LISTINGS];


            if (
                activeFilter !== "all"
            ) {

                filtered =
                    filtered.filter(
                        item =>
                            item.type ===
                            activeFilter
                    );

            }


            const query =
                search?.value
                    .trim()
                    .toLowerCase() || "";


            if (query) {

                filtered =
                    filtered.filter(
                        item => {

                            const data =
                                (
                                    item.type +
                                    " " +
                                    item.title +
                                    " " +
                                    item.location +
                                    " " +
                                    item.description
                                ).toLowerCase();


                            return data.includes(query);

                        }
                    );

            }


            if (
                sort?.value ===
                "rating"
            ) {

                filtered.sort(
                    (a,b) =>
                        b.rating - a.rating
                );

            }


            if (
                sort?.value ===
                "price"
            ) {

                filtered.sort(
                    (a,b) =>
                        a.price - b.price
                );

            }


            render(filtered);


            if (title) {

                title.textContent =
                    activeFilter === "all"
                        ? "All verified listings"
                        : `Verified ${activeFilter}`;

            }


            if (count) {

                count.textContent =
                    `${filtered.length} verified option${
                        filtered.length === 1
                            ? ""
                            : "s"
                    } around you`;

            }

        }


        document
            .querySelectorAll(
                "[data-filter]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(
                                "[data-filter]"
                            )
                            .forEach(
                                b =>
                                    b.classList.remove(
                                        "active"
                                    )
                            );


                        button.classList.add(
                            "active"
                        );


                        activeFilter =
                            button.dataset.filter;


                        update();

                    }
                );

            });


        search?.addEventListener(
            "input",
            update
        );


        sort?.addEventListener(
            "change",
            update
        );


        update();

    }
);