define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var Application = Backbone.Model.extend({
    start: function(){
    },
    switchPage: function(page,unitId){
      require(['view/'+page+'ListView','app/model/'+page],function(ListPageView,Collection){
        var view = new ListPageView({
          collection: new (Collection.extend({category:unitId}))()
        });
        view.open(unitId).update();
      }.bind(this));
      return;
    }
  });

  var application = new Application();

  return application;
  
});
//this.url = 'http://swap.korotenko.me/swap_restful.php?action=transactions&category='+this.currentParent.get('id');
