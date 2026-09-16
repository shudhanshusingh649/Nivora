const NIVORA_CONFIG = Object.freeze({

    appName: "Nivora",

    environment: "development",

    version: "1.0.0",

    api: {
        baseUrl:
            "http://localhost:3000/api"
    },

    routes: {
        home:
            "index.html",

        login:
            "pages/login.html",

        otp:
            "pages/otp.html",

        profile:
            "pages/profile.html",

        dashboard:
            "pages/dashboard.html",

        explore:
            "pages/explore.html",

        listing:
            "pages/create-listing.html",

        flatmate:
            "pages/flatmate.html",

        support:
            "pages/support.html"
    }

});


window.NIVORA_CONFIG =
    NIVORA_CONFIG;