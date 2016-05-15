define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var Application = Backbone.Model.extend({
    pageViewers: {},
    start: function(){
    },
    switchPage: function(page,unitId){
      if(!this.pageViewers[page]){
        require(['view/listPage'],function(ListPageView){
          var view = this.pageViewers[page] = new ListPageView();
          view[page](unitId);
        }.bind(this));
        return;
      }
      this.pageViewers[page][page](unitId);
    }
  });

  var application = new Application();
  
  return application;
  
});
//this.url = 'http://swap.korotenko.me/swap_restful.php?action=transactions&category='+this.currentParent.get('id');
