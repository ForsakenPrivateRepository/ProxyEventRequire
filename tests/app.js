require.config({

    paths: {
        "jquery": "http://code.jquery.com/jquery-1.11.2.min",
        "underscore": "http://underscorejs.org/underscore-min",
        "ProxyEventRequire": "../src/ProxyEventRequire",

        // tests
        "manual.copyright": "./manual.copyright",
        "manual.register":  "./manual.register",
        "manual.together":  "./manual.together"
    },

    shim: {
        "jquery": {
            exports: "$"
        },
        "underscore": {
            exports: "_"
        },
        "ProxyEventRequire": {
            deps: ["jquery", "underscore"],
            exports: "proxy"
        }
    },

    // запустить приложение
    deps: [
        './manual.copyright.proxy',
        './manual.register.proxy',
        './manual.together.proxy'
    ]
});