define(function (require) {

  "use strict";
  
  var $                   = require('jquery'),
      Backbone            = require('backbone'),
      Transaction         = require('app/model/transactionItem');

  return Backbone.Collection.extend({
    initialize: function(){
      this.url += this.category;
    },
    model: Transaction,
    category: '',
    url: 'http://swap.korotenko.me/swap_restful.php?action=transactions&category='
  });

});
