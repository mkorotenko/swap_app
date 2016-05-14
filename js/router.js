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
      renderPath: function(path) {
        var currentPath = $('#current-path');
        currentPath.html('');
        currentPath.append('<a href="#/">Account list</a>');
        for(var i=0; i<path.length; i++){
          currentPath.append('<span>/</span>');
          currentPath.append('<a href="#/card/'+path[i]+'">'+path[i]+'</a>');
        }
      },
      accounts: function() {
        // pages.accounts();
        app.switchPage('accounts');
        this.renderPath([]);
      },
      transactions: function(account) {
        // pages.transactions(account);
        app.switchPage('transactions',account);
        this.renderPath([account]);
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
