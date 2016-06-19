// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
   'js/main'
], function($, _, Backbone, application){

    "use strict";

  var app = application,
      AppRouter = Backbone.Router.extend({
      routes: {
        '' : 'accounts',
        'card/:account': 'transactions',
        'card/:account/:record': 'editTransaction'
      },
      accounts: function() {
        app.switchPage('account');
      },
      transactions: function(account) {
        app.switchPage('transaction', account);
      },
      editTransaction: function(account,record) {
        var currentModel = app.currentCollection.get(record);
        app.editPage('transaction', currentModel);
      }
      // setFilter: function(params) {
      //   console.log('app.router.params = ' + params);
      //   window.filter = params.trim() || '';
      //   app.accList.trigger('reset');
      // },
    });

  return AppRouter;
  
});
