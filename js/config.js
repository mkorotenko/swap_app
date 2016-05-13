// Filename: main.js
require.config({

    baseUrl: 'js/lib',

    paths: {
      app: '../app',
      tpl: '../tpl',
      js: '../../js',
      view: '../app/view'
    },

    map: {
      '*': {
          'app/model/account': 'app/model/restful/account',
          'app/model/transaction': 'app/model/memory/transaction'
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

require(['jquery', 'backbone', 'js/main'], function ($, Backbone, application) {

    Date.prototype.toString = function() {
      var yyyy = this.getFullYear().toString(),
          mm = (this.getMonth()+1).toString(), // getMonth() is zero-based
          dd  = this.getDate().toString();             
      return yyyy+'-'+(mm[1]?mm:"0"+mm[0])+'-'+(dd[1]?dd:"0"+dd[0]);
    };
    
    application.start();
    
});
