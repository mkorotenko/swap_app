define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

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
//this.url = 'http://swap.korotenko.me/swap_restful.php?action=transactions&category='+this.currentParent.get('id');
