define(function (require) {

  "use strict";
  
  var $                   = require('jquery'),
      Backbone            = require('backbone'),
      Account = Backbone.Model.extend({
        initialize: function(){
        },
        defaults: {
          title: '',
          amount: 0
        }
      });
      
  return Backbone.Collection.extend({
    model: Account,
    url: 'http://swap.korotenko.me/swap_restful.php?action=list'
  });

});
