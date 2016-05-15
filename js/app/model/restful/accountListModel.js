define(function (require) {

  "use strict";
  
  var $                   = require('jquery'),
      Backbone            = require('backbone'),
      Account = Backbone.Model.extend({
        initialize: function(){
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
      
  return AccountCollection;
  
});
