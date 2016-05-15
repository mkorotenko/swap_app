// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
   'js/main'
], function($, _, Backbone, application){

    "use strict";
  var app = application;
  // var $content = $("#header"),
  //     $main = $("#data-container"),
  //     pages = new Pages({el: $content});
  var AppRouter = Backbone.Router.extend({
      routes: {
        '' : 'accounts',
        'card/:account': 'transactions',
        'card/:account/:record': 'editTransaction'
      },
      accounts: function() {
        // pages.accounts();
        app.switchPage('account');
        // this.renderPath([]);
      },
      transactions: function(account) {
        // pages.transactions(account);
        app.switchPage('transaction',account);
        // this.renderPath([account]);
      },
      editTransaction: function(account,record) {
        //pages.transactions(account);
        //this.renderPath([account]);
        console.log('Path: account '+account+' / record '+record);
      }
        // setFilter: function(params) {
        //   console.log('app.router.params = ' + params);
        //   window.filter = params.trim() || '';
        //   app.accList.trigger('reset');
        // },
    });

  return AppRouter;
  
});
