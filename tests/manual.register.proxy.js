define([
    'jquery',
    'ProxyEventRequire'
], function ($, proxy) {

    proxy.attach('.js-test-register', 'click', ['manual.register']);

});