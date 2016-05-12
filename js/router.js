// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'app/view/home'
], function($, _, Backbone, HomeView){
  var $content = $("#header"),
      $main = $("#data-container"),
      homeView = new HomeView({el: $content});
  var AppRouter = Backbone.Router.extend({
    routes: {
      '' : 'accounts',
      'card/:account': 'transactions'
    },
    renderPath: function(path) {
      var currentPath = $('#current-path');
      currentPath.html();
      currentPath.append('<a href="#/">Account list</a>');
      for(var i=0; i<path.length; i++){
        currentPath.append('<span>/</span>');
        currentPath.append('<a href="#/card/'+path[i]+'">'+path[i]+'</a>');
      }
    },
    accounts: function() {
      // homeView.render();
      homeView.accounts();
      this.renderPath([]);
    },
    transactions: function(account) {
      // console.log('Account id: '+account);
      homeView.transactions(account);
      this.renderPath([account]);
      // var currentPath = $('#current-path');
      // currentPath.html();
      // currentPath.append('<a href="#/">Account list</a>');
      // currentPath.append('<span>/</span>');
      // currentPath.append('<a href="#/card/'+account+'">'+account+'</a>');
    }
      // setFilter: function(params) {
      //   console.log('app.router.params = ' + params);
      //   window.filter = params.trim() || '';
      //   app.accList.trigger('reset');
      // },
      // newRecord: function(params) {
      //   console.log('New record = ' + params);
      // },
      // corRecord: function(params) {
      //   console.log('Cor record = ' + params);
      // },
      // transactions: function(category) {
      //   //console.log('Transactions = ' + category);
      //   app.appView.transactionsPage(category);
      // },
      // editRecord: function(recId) {
      //   if(recId == 'new'){
          
      //   }
      //   else
      //   {
      //     var mod = app.transactionList.get(recId);
      //     app.appView.editModel(mod);
      //   }
      // }
  });

  return AppRouter;
  
});
