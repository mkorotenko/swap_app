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
    accounts: function() {
      // homeView.render();
      homeView.accounts();
    },
    transactions: function(account) {
      console.log('Account id: '+account);
      homeView.transactions(account);
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
