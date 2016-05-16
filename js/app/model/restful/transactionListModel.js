define(function (require) {

  "use strict";
  
  var $                   = require('jquery'),
      Backbone            = require('backbone'),
      Transaction = Backbone.Model.extend({
        initialize: function(){
        },
        defaults: {
          // id:     '',
          date:   '',
          category: '',
          note:   '',
          amount: 0,
          left:   0
        }
      }),
      TransactionCollection = Backbone.Collection.extend({
        initialize: function(){
          this.url += this.category;
        },
        model: Transaction,
        category: '',
        url: 'http://swap.korotenko.me/swap_restful.php?action=transactions&category='
      });
      
  return TransactionCollection;
  
});
