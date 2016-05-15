define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  //var router;
  var pages;// = require('view/listPage');
  var Application = Backbone.Model.extend({
    start: function(){
    },
    switchPage: function(page,unitId){
      require(['view/listPage'],function(pages){
        pages[page](unitId);
      });
    }
  });

  var application = new Application();
  
  return application;
  
});
