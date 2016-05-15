define(function (require) {

  "use strict";
  var $                   = require('jquery'),
      Backbone            = require('backbone'),
      TransactionCollection = require('view/transaction'),
      Account = Backbone.Model.extend({
        initialize: function(){
          this.transactions = new TransactionCollection();
        },
        defaults: {
          title: '',
          amount: 0,
          transactions: null
        }
      }),
      AccountCollection = Backbone.Collection.extend({
        model: Account,
        url: 'http://swap.korotenko.me/swap_restful.php?action=list'
      });
      
  var transactionList = new AccountCollection();
  return transactionList;
  
});
