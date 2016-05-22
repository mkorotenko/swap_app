define(function (require) {

  "use strict";
  
  var $                   = require('jquery'),
      Backbone            = require('backbone');

  return Backbone.Model.extend({
    initialize: function(){
    },
    defaults: {
      date: '',
      category: '',
      note: '',
      amount: 0,
      left: 0
    }
  });

});
