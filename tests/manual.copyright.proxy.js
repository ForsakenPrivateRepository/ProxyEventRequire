define([
    'jquery',
    'ProxyEventRequire'
], function ($, proxy) {

    proxy.attach('.js-test-copyright', 'click', ['manual.copyright']);

});