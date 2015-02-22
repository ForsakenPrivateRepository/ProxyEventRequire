define([
    'jquery',
    'ProxyEventRequire'
], function ($, proxy) {

    proxy.attach(
        '.js-test-together',
        'click',
        ['manual.together', 'manual.copyright', 'manual.register']
    );
});