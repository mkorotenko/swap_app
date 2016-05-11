// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'app/view/home'
  //'app/view/accounts'
  //'views/accountsList'
  //'views/transactionsList'
], function($, _, Backbone, HomeView){//, Accounts){//, Transactions){
  var $content = $("#header"),
      $main = $("#data-container"),
      homeView = new HomeView({el: $content});
  var AppRouter = Backbone.Router.extend({
    routes: {
      '' : 'accounts'
      // 'filter/:search' : 'setFilter',
      // 'add/:category' : 'newRecord',
      // 'cor/:category' : 'corRecord',
      // 'edit/:recId' : 'editRecord',
      // 'transactions/:category' : 'transactions'
    },
    accounts: function() {
      //var accounts = new AccountsView({el: $main});
        homeView.render();
        //accounts.render();
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
