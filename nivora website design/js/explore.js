document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       STORAGE
    ===================================================== */

    const profile =
        NivoraStorage.get("profile");


    const searchState =
        NivoraStorage.get("search") || {};



    /* =====================================================
       USER DATA
    ===================================================== */

    const userName =
        profile?.fullName ||
        "User";


    const userCity =
        profile?.currentCity ||
        searchState?.location ||
        "Your location";


    const initial =
        userName
            .charAt(0)
            .toUpperCase();



    /* =====================================================
       DOM ELEMENTS
    ===================================================== */

    const searchInput =
        document.getElementById(
            "exploreSearch"
        );


    const mainSearch =
        document.getElementById(
            "mainSearch"
        );


    const searchButton =
        document.getElementById(
            "exploreSearchButton"
        );


    const resultCount =
        document.getElementById(
            "resultCount"
        );


    const activeSearchText =
        document.getElementById(
            "activeSearchText"
        );


    const listingGrid =
        document.getElementById(
            "listingGrid"
        );


    const emptyState =
        document.getElementById(
            "emptyState"
        );


    const emptyStateReset =
        document.getElementById(
            "emptyStateReset"
        );


    const filterPanel =
        document.getElementById(
            "filterPanel"
        );


    const filterToggle =
        document.getElementById(
            "filterToggle"
        );


    const minBudget =
        document.getElementById(
            "minBudget"
        );


    const maxBudget =
        document.getElementById(
            "maxBudget"
        );


    const roomType =
        document.getElementById(
            "roomType"
        );


    const clearFilters =
        document.getElementById(
            "clearFilters"
        );


    const sortSelect =
        document.getElementById(
            "sortSelect"
        );


    const locationButton =
        document.getElementById(
            "useLocationButton"
        );


    const locationChip =
        document.getElementById(
            "exploreLocation"
        );


    const avatar =
        document.getElementById(
            "exploreAvatar"
        );


    const mobileAvatar =
        document.getElementById(
            "mobileExploreInitial"
        );



    /* =====================================================
       USER UI
    ===================================================== */

    if (locationChip) {

        locationChip.textContent =
            `⌖ ${userCity}`;

    }


    if (avatar) {

        avatar.textContent =
            initial;

    }


    if (mobileAvatar) {

        mobileAvatar.textContent =
            initial;

    }



    /* =====================================================
       LISTING DATA LAYER
       
       Future production flow:

       API
        ↓
       Database
        ↓
       Approved Listings
        ↓
       Explore

       This data is only the frontend layer used
       while we are building Phase 2.
    ===================================================== */

    const listings = [

        {
            id: "nv-001",

            title: "Sunrise Student PG",

            category: "pg",

            location: "Patna",

            locality: "Kankarbagh",

            price: 6500,

            rating: 4.8,

            reviews: 126,

            distance: 0.8,

            roomType: "single",

            verified: true,

            badge: "Verified",

            image:
                "../assets/images/placeholders/property-placeholder.svg",

            description:
                "Student-friendly PG with food, Wi-Fi and security.",

            amenities: [
                "Wi-Fi",
                "Food",
                "Security"
            ]

        },


        {
            id: "nv-002",

            title: "Green Valley Hostel",

            category: "hostel",

            location: "Patna",

            locality: "Rajendra Nagar",

            price: 5200,

            rating: 4.6,

            reviews: 94,

            distance: 1.2,

            roomType: "shared",

            verified: true,

            badge: "Verified",

            image:
                "../assets/images/placeholders/property-placeholder.svg",

            description:
                "Verified hostel with shared rooms and essential facilities.",

            amenities: [
                "CCTV",
                "Laundry",
                "Power backup"
            ]

        },


        {
            id: "nv-003",

            title: "City View 2BHK",

            category: "flat",

            location: "Patna",

            locality: "Boring Road",

            price: 12000,

            rating: 4.5,

            reviews: 62,

            distance: 2.1,

            roomType: "single",

            verified: true,

            badge: "Verified",

            image:
                "../assets/images/placeholders/property-placeholder.svg",

            description:
                "Spacious 2BHK rental near transit, markets and daily essentials.",

            amenities: [
                "Parking",
                "Water",
                "Balcony"
            ]

        },


        {
            id: "nv-004",

            title: "Comfort Shared Room",

            category: "room",

            location: "Patna",

            locality: "Patliputra Colony",

            price: 4800,

            rating: 4.2,

            reviews: 43,

            distance: 2.8,

            roomType: "shared",

            verified: true,

            badge: "Verified",

            image:
                "../assets/images/placeholders/property-placeholder.svg",

            description:
                "Affordable shared room for students and young professionals.",

            amenities: [
                "Bed",
                "Wi-Fi",
                "Cleaning"
            ]

        },


        {
            id: "nv-005",

            title: "Annapurna Student Mess",

            category: "mess",

            location: "Patna",

            locality: "Ashok Nagar",

            price: 2800,

            rating: 4.7,

            reviews: 181,

            distance: 1.5,

            roomType: "shared",

            verified: true,

            badge: "Verified",

            image:
                "../assets/images/placeholders/property-placeholder.svg",

            description:
                "Monthly meal plans with balanced menu options.",

            amenities: [
                "Lunch",
                "Dinner",
                "Monthly plan"
            ]

        },


        {
            id: "nv-006",

            title: "Compatible Flatmate",

            category: "flatmate",

            location: "Patna",

            locality: "Boring Road",

            price: 7000,

            rating: 4.4,

            reviews: 21,

            distance: 2.4,

            roomType: "shared",

            verified: true,

            badge: "Profile verified",

            image:
                "../assets/images/placeholders/person-placeholder.svg",

            description:
                "Looking for a compatible flatmate for a shared 2BHK.",

            amenities: [
                "2BHK",
                "Shared rent",
                "Verified profile"
            ]

        }

    ];



    /* =====================================================
       CATEGORY LABELS
    ===================================================== */

    const categoryNames = {

        hostel: "Hostel",

        pg: "PG",

        flat: "Rental Flat",

        room: "Room",

        mess: "Mess",

        flatmate: "Flatmate"

    };



    /* =====================================================
       INITIAL CATEGORY
       
       This is important.

       Dashboard can send:

       search.category = "pg"

       or

       query = "PG"

       We support both.
    ===================================================== */

    function normalizeCategory(value) {

        if (!value) {

            return "all";

        }


        const normalized =
            String(value)
                .toLowerCase()
                .trim();


        const categoryMap = {

            hostel: "hostel",

            hostels: "hostel",

            pg: "pg",

            "rental flat": "flat",

            "rental flats": "flat",

            flat: "flat",

            flats: "flat",

            room: "room",

            rooms: "room",

            mess: "mess",

            flatmate: "flatmate",

            flatmates: "flatmate"

        };


        return (
            categoryMap[
                normalized
            ] || "all"
        );

    }



    /* =====================================================
       INFER CATEGORY FROM SEARCH
       
       Example:

       "PG"
       "PG near college"
       "I need a PG"

       → PG category

       But:

       "Boring Road"

       → All categories
    ===================================================== */

    function detectCategoryFromQuery(
        query
    ) {

        if (!query) {

            return null;

        }


        const normalized =
            query
                .toLowerCase()
                .trim();


        if (
            /\bpg\b/.test(
                normalized
            )
        ) {

            return "pg";

        }


        if (
            /\bhostel\b/.test(
                normalized
            )
        ) {

            return "hostel";

        }


        if (
            /\brental flat\b/.test(
                normalized
            ) ||
            /\bflat\b/.test(
                normalized
            )
        ) {

            return "flat";

        }


        if (
            /\broom\b/.test(
                normalized
            )
        ) {

            return "room";

        }


        if (
            /\bmess\b/.test(
                normalized
            )
        ) {

            return "mess";

        }


        if (
            /\bflatmate\b/.test(
                normalized
            ) ||
            /\broommate\b/.test(
                normalized
            )
        ) {

            return "flatmate";

        }


        return null;

    }



    /* =====================================================
       STATE
    ===================================================== */

    const dashboardCategory =
        normalizeCategory(
            searchState.category
        );


    const detectedQueryCategory =
        detectCategoryFromQuery(
            searchState.query
        );


    const state = {

        category:
            dashboardCategory !== "all"
                ? dashboardCategory
                : detectedQueryCategory ||
                  "all",

        query:
            searchState.query ||
            "",

        minBudget:
            "",

        maxBudget:
            "",

        roomType:
            "all",

        sort:
            "relevance"

    };



    /* =====================================================
       INITIAL SEARCH VALUES
    ===================================================== */

    if (state.query) {

        searchInput.value =
            state.query;

        mainSearch.value =
            state.query;

    }



    /* =====================================================
       ACTIVATE CURRENT CATEGORY TAB
    ===================================================== */

    function updateCategoryTabs() {

        document
            .querySelectorAll(
                ".category-tab"
            )
            .forEach(
                tab => {

                    const tabCategory =
                        tab.dataset.category;


                    if (
                        tabCategory ===
                        state.category
                    ) {

                        tab.classList.add(
                            "active"
                        );

                    } else {

                        tab.classList.remove(
                            "active"
                        );

                    }

                }
            );

    }


    updateCategoryTabs();



    /* =====================================================
       FILTER LISTINGS
    ===================================================== */

    function getFilteredListings() {

        let result =
            [...listings];


        /* ---------------------------------------------
           CATEGORY FILTER

           This is the main rule:

           PG selected
           ↓
           ONLY PG

           Hostel selected
           ↓
           ONLY Hostel
        --------------------------------------------- */

        if (
            state.category !==
            "all"
        ) {

            result =
                result.filter(
                    listing =>
                        listing.category ===
                        state.category
                );

        }



        /* ---------------------------------------------
           SEARCH FILTER
        --------------------------------------------- */

        if (state.query) {

            const query =
                state.query
                    .toLowerCase()
                    .trim();


            if (query) {

                result =
                    result.filter(
                        listing => {

                            const searchableText =
                                [

                                    listing.title,

                                    listing.category,

                                    listing.location,

                                    listing.locality,

                                    listing.description,

                                    ...listing.amenities

                                ]
                                    .join(" ")
                                    .toLowerCase();


                            return searchableText
                                .includes(
                                    query
                                );

                        }
                    );

            }

        }



        /* ---------------------------------------------
           BUDGET
        --------------------------------------------- */

        if (
            state.minBudget !==
            ""
        ) {

            result =
                result.filter(
                    listing =>
                        listing.price >=
                        Number(
                            state.minBudget
                        )
                );

        }


        if (
            state.maxBudget !==
            ""
        ) {

            result =
                result.filter(
                    listing =>
                        listing.price <=
                        Number(
                            state.maxBudget
                        )
                );

        }



        /* ---------------------------------------------
           ROOM TYPE
        --------------------------------------------- */

        if (
            state.roomType !==
            "all"
        ) {

            result =
                result.filter(
                    listing =>
                        listing.roomType ===
                        state.roomType
                );

        }



        /* ---------------------------------------------
           SORT
        --------------------------------------------- */

        switch (
            state.sort
        ) {


            case "price-low":

                result.sort(
                    (a, b) =>
                        a.price -
                        b.price
                );

                break;


            case "price-high":

                result.sort(
                    (a, b) =>
                        b.price -
                        a.price
                );

                break;


            case "rating":

                result.sort(
                    (a, b) =>
                        b.rating -
                        a.rating
                );

                break;


            case "distance":

                result.sort(
                    (a, b) =>
                        a.distance -
                        b.distance
                );

                break;


            default:

                result.sort(
                    (a, b) => {

                        const scoreA =
                            a.rating * 2 -
                            a.distance * 0.2;


                        const scoreB =
                            b.rating * 2 -
                            b.distance * 0.2;


                        return (
                            scoreB -
                            scoreA
                        );

                    }
                );

                break;

        }


        return result;

    }



    /* =====================================================
       CREATE CARD
    ===================================================== */

    function createListingCard(
        listing
    ) {

        const amenities =
            listing.amenities
                .slice(
                    0,
                    3
                )
                .map(
                    amenity => `
                        <span>
                            ${amenity}
                        </span>
                    `
                )
                .join("");


        const categoryLabel =
            categoryNames[
                listing.category
            ] ||
            listing.category;


        return `

            <article
                class="listing-card-modern"
                data-listing-id="${listing.id}"
            >

                <div class="listing-media">

                    <img
                        src="${listing.image}"
                        alt="${listing.title}"
                        loading="lazy"
                    >


                    <span class="listing-category-badge">
                        ${categoryLabel}
                    </span>


                    <button
                        class="save-listing-button"
                        type="button"
                        data-save-id="${listing.id}"
                        aria-label="Save listing"
                    >
                        ♡
                    </button>

                </div>


                <div class="listing-card-body">


                    <div class="listing-card-topline">

                        <span class="listing-status">

                            <span>
                                ✓
                            </span>

                            ${listing.badge}

                        </span>


                        <span class="listing-distance">
                            ${listing.distance} km
                        </span>

                    </div>


                    <h3>
                        ${listing.title}
                    </h3>


                    <p class="listing-location">

                        ⌖ ${listing.locality},
                        ${listing.location}

                    </p>


                    <p class="listing-description">
                        ${listing.description}
                    </p>


                    <div class="listing-amenities">

                        ${amenities}

                    </div>


                    <div class="listing-card-footer">


                        <div>

                            <strong>
                                ₹${listing.price.toLocaleString("en-IN")}
                            </strong>

                            <small>
                                / month
                            </small>

                        </div>


                        <div class="listing-rating">

                            <span>
                                ★
                            </span>

                            ${listing.rating}

                            <small>
                                (${listing.reviews})
                            </small>

                        </div>

                    </div>


                    <button
                        class="listing-view-button"
                        type="button"
                        data-view-id="${listing.id}"
                    >
                        View details →
                    </button>

                </div>

            </article>

        `;

    }



    /* =====================================================
       RENDER
    ===================================================== */

    function renderListings() {

        const result =
            getFilteredListings();


        resultCount.textContent =
            result.length;



        /* ---------------------------------------------
           RESULT DESCRIPTION
        --------------------------------------------- */

        if (
            state.category !==
            "all"
        ) {

            const categoryText =
                categoryNames[
                    state.category
                ] ||
                state.category;


            if (state.query) {

                activeSearchText.textContent =
                    `${categoryText} results for “${state.query}”`;

            } else {

                activeSearchText.textContent =
                    `${categoryText} near ${userCity}`;

            }

        } else if (
            state.query
        ) {

            activeSearchText.textContent =
                `Results for “${state.query}”`;

        } else {

            activeSearchText.textContent =
                `Near ${userCity}`;

        }



        /* ---------------------------------------------
           EMPTY STATE
        --------------------------------------------- */

        if (
            result.length ===
            0
        ) {

            listingGrid.innerHTML =
                "";

            emptyState.hidden =
                false;

            return;

        }


        emptyState.hidden =
            true;



        listingGrid.innerHTML =
            result
                .map(
                    createListingCard
                )
                .join("");


        attachCardEvents();

    }



    /* =====================================================
       CARD EVENTS
    ===================================================== */

    function attachCardEvents() {


        document
            .querySelectorAll(
                "[data-view-id]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const listingId =
                                button.dataset.viewId;


                            NivoraStorage.set(
                                "selectedListing",
                                listingId
                            );


                            window.location.href =
                                "property.html";

                        }
                    );

                }
            );



        document
            .querySelectorAll(
                "[data-save-id]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const listingId =
                                button.dataset.saveId;


                            const saved =
                                NivoraStorage.get(
                                    "savedListings"
                                ) || [];


                            if (
                                saved.includes(
                                    listingId
                                )
                            ) {

                                const updated =
                                    saved.filter(
                                        id =>
                                            id !==
                                            listingId
                                    );


                                NivoraStorage.set(
                                    "savedListings",
                                    updated
                                );


                                button.textContent =
                                    "♡";


                                button.classList.remove(
                                    "saved"
                                );


                            } else {

                                saved.push(
                                    listingId
                                );


                                NivoraStorage.set(
                                    "savedListings",
                                    saved
                                );


                                button.textContent =
                                    "♥";


                                button.classList.add(
                                    "saved"
                                );

                            }

                        }
                    );

                }
            );

    }



    /* =====================================================
       SEARCH
    ===================================================== */

    function runSearch(
        value
    ) {

        state.query =
            value
                .trim();



        /*
           Automatically detect category.

           Example:

           PG
           ↓
           PG category

           hostel near college
           ↓
           Hostel category
        */

        const detectedCategory =
            detectCategoryFromQuery(
                state.query
            );


        if (
            detectedCategory
        ) {

            state.category =
                detectedCategory;

        }



        updateCategoryTabs();



        NivoraStorage.set(
            "search",
            {

                query:
                    state.query,

                category:
                    state.category,

                location:
                    userCity

            }
        );


        renderListings();

    }



    searchButton.addEventListener(
        "click",
        () => {

            runSearch(
                searchInput.value
            );

        }
    );



    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                runSearch(
                    searchInput.value
                );

            }

        }
    );



    searchInput.addEventListener(
        "input",
        () => {

            const value =
                searchInput.value;


            mainSearch.value =
                value;

        }
    );



    mainSearch.addEventListener(
        "input",
        () => {

            const value =
                mainSearch.value;


            searchInput.value =
                value;


            state.query =
                value;


            const detectedCategory =
                detectCategoryFromQuery(
                    value
                );


            if (
                detectedCategory
            ) {

                state.category =
                    detectedCategory;

                updateCategoryTabs();

            }


            renderListings();

        }
    );



    /* =====================================================
       CATEGORY TABS
    ===================================================== */

    document
        .querySelectorAll(
            ".category-tab"
        )
        .forEach(
            tab => {

                tab.addEventListener(
                    "click",
                    () => {

                        state.category =
                            normalizeCategory(
                                tab.dataset.category
                            );


                        /*
                           Important:
                           When the user manually chooses
                           a category, category becomes the
                           primary filter.
                        */


                        if (
                            state.category !==
                            "all"
                        ) {

                            state.query =
                                "";

                            searchInput.value =
                                "";

                            mainSearch.value =
                                "";

                        }


                        updateCategoryTabs();


                        NivoraStorage.set(
                            "search",
                            {

                                query:
                                    state.query,

                                category:
                                    state.category,

                                location:
                                    userCity

                            }
                        );


                        renderListings();

                    }
                );

            }
        );



    /* =====================================================
       FILTER TOGGLE
    ===================================================== */

    filterToggle.addEventListener(
        "click",
        () => {

            filterPanel.hidden =
                !filterPanel.hidden;

        }
    );



    /* =====================================================
       BUDGET VALIDATION
    ===================================================== */

    function validateBudget() {

        const min =
            Number(
                minBudget.value
            ) || 0;


        const max =
            Number(
                maxBudget.value
            ) || 0;


        if (
            min > 0 &&
            max > 0 &&
            min > max
        ) {

            maxBudget.setCustomValidity(
                "Maximum budget must be greater than minimum budget."
            );

            return false;

        }


        maxBudget.setCustomValidity(
            ""
        );


        return true;

    }



    /* =====================================================
       FILTER EVENTS
    ===================================================== */

    minBudget.addEventListener(
        "input",
        () => {

            state.minBudget =
                minBudget.value;


            if (
                validateBudget()
            ) {

                renderListings();

            }

        }
    );



    maxBudget.addEventListener(
        "input",
        () => {

            state.maxBudget =
                maxBudget.value;


            if (
                validateBudget()
            ) {

                renderListings();

            }

        }
    );



    roomType.addEventListener(
        "change",
        () => {

            state.roomType =
                roomType.value;


            renderListings();

        }
    );



    /* =====================================================
       SORT
    ===================================================== */

    sortSelect.addEventListener(
        "change",
        () => {

            state.sort =
                sortSelect.value;


            renderListings();

        }
    );



    /* =====================================================
       CLEAR FILTERS
    ===================================================== */

    clearFilters.addEventListener(
        "click",
        () => {

            state.minBudget =
                "";

            state.maxBudget =
                "";

            state.roomType =
                "all";


            minBudget.value =
                "";

            maxBudget.value =
                "";

            roomType.value =
                "all";


            validateBudget();


            renderListings();

        }
    );



    /* =====================================================
       NEAR ME
    ===================================================== */

    locationButton.addEventListener(
        "click",
        () => {

            NivoraStorage.set(
                "search",
                {

                    query:
                        state.query,

                    category:
                        state.category,

                    location:
                        userCity,

                    nearMe:
                        true

                }
            );


            activeSearchText.textContent =
                state.category ===
                    "all"
                    ? `Near ${userCity}`
                    : `${categoryNames[state.category]} near ${userCity}`;


            renderListings();

        }
    );



    /* =====================================================
       EMPTY STATE RESET
    ===================================================== */

    emptyStateReset.addEventListener(
        "click",
        () => {

            state.category =
                "all";

            state.query =
                "";

            state.minBudget =
                "";

            state.maxBudget =
                "";

            state.roomType =
                "all";

            state.sort =
                "relevance";


            searchInput.value =
                "";

            mainSearch.value =
                "";

            minBudget.value =
                "";

            maxBudget.value =
                "";

            roomType.value =
                "all";

            sortSelect.value =
                "relevance";


            updateCategoryTabs();


            NivoraStorage.set(
                "search",
                {

                    query: "",

                    category: "all",

                    location: userCity

                }
            );


            renderListings();

        }
    );



    /* =====================================================
       INITIAL RENDER
    ===================================================== */

    renderListings();

});