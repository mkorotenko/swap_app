define([
  'jquery',
  'underscore',
  'backbone',
   'view/home'
], function($, _, Backbone, Pages){

  //var router;
  var pages = new Pages();
  var Application = Backbone.Model.extend({
    start: function(){
    },
    switchPage: function(page){
      pages[page](arguments[1]);
    }
  });

  var application = new Application();
  
  return application;
  
});
