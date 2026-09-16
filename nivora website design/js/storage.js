const NivoraStorage = {

    PREFIX:
        "nivora_",


    set(
        key,
        value
    ) {

        localStorage.setItem(
            `${this.PREFIX}${key}`,
            JSON.stringify(
                value
            )
        );

    },


    get(
        key,
        fallback = null
    ) {

        const raw =
            localStorage.getItem(
                `${this.PREFIX}${key}`
            );


        if (!raw) {

            return fallback;

        }


        try {

            return JSON.parse(
                raw
            );

        } catch (
            error
        ) {

            console.error(
                "Nivora storage parse error:",
                error
            );

            return fallback;

        }

    },


    remove(
        key
    ) {

        localStorage.removeItem(
            `${this.PREFIX}${key}`
        );

    },


    clear() {

        Object.keys(
            localStorage
        )
            .filter(
                (key) =>
                    key.startsWith(
                        this.PREFIX
                    )
            )
            .forEach(
                (key) =>
                    localStorage.removeItem(
                        key
                    )
            );

    }

};


window.NivoraStorage =
    NivoraStorage;