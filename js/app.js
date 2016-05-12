// Filename: main.js
require.config({

    baseUrl: 'js/lib',

    paths: {
      app: '../app',
      tpl: '../tpl'
    },

    map: {
      '*': {
          'app/model/account': 'app/model/restful/account'
        }
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', '../router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});
