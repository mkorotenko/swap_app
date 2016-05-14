define([
  'jquery',
  'underscore',
  'backbone',
   //'js/router',
   'view/home'
], function($, _, Backbone, Pages){

  //var router;
  var $content = $("#header"),
      $main = $("#data-container"),
      pages = new Pages({el: $content});
  var Application = Backbone.Model.extend({
    start: function(){
      //router = new Router();
      //Backbone.history.start();
    },
    switchPage: function(page){
      pages[page](arguments[1]);
    }
  });

  var application = new Application();
  
  return application;
  
});
