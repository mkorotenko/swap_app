define([
  'jquery',
  'underscore',
  'backbone',
  'js/router'
], function($, _, Backbone, Router){

  var router;

  var Application = Backbone.Model.extend({
    start: function(){
      router = new Router();
      Backbone.history.start();
    }
  });
  var application = new Application();
  
  return application;
  
});
