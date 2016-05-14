define([
  'jquery',
  'underscore',
  'backbone',
   'js/router'
], function($, _, Backbone, Router){

  var router;
  // var $content = $("#header"),
  //   $main = $("#data-container");
    //Pages = require('view/home'),
    //pages = new Pages({el: $content});
  var Application = Backbone.Model.extend({
    start: function(){
      router = new Router();
      Backbone.history.start();
    }
  });

  var application = new Application();
  
  return application;
  
});
