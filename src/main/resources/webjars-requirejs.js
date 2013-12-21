/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'jquery-mockjax': [ 'webjars!jquery.js' ]
    }
});
