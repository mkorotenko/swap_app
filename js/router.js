// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
   'js/main'
], function($, _, Backbone, app){

    "use strict";

  var AppRouter = Backbone.Router.extend({
      routes: {
        '' : 'accounts',
        'card/:account': 'transactions'
      },
      accounts: function() {
        app.set('page','accounts');
      },
      transactions: function(account) {
        app.set('page','transactions');
      }
    });

  return AppRouter;
  
});
