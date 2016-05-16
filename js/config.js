// Filename: main.js
require.config({

    baseUrl: 'js/lib',

    paths: {
      app: '../app',
      tpl: '../tpl',
      js: '../../js',
      view: '../app/view',
      model: '../app/model'
    },

    map: {
      '*': {
          'app/model/account': 'app/model/restful/accountListModel',
          'app/model/transaction': 'app/model/restful/transactionListModel',
          'view/accounts': 'app/view/accountListView',
          'view/transaction': 'app/view/transactionListView',
          'view/home': 'app/view/listPage',
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

require(['jquery', 'backbone', 'js/router', 'js/main'], function ($, Backbone, Router, application) {

    Date.prototype.toString = function() {
      var yyyy = this.getFullYear().toString(),
          mm = (this.getMonth()+1).toString(),
          dd  = this.getDate().toString();
      return yyyy+'-'+(mm[1]?mm:"0"+mm[0])+'-'+(dd[1]?dd:"0"+dd[0]);
    };

    router = new Router();
    Backbone.history.start();
    application.start();

});
