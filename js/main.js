define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var Application = Backbone.Model.extend({
    start: function(){
    },
    currentCollection: {},
    switchPage: function(page,unitId){
      require(['view/'+page+'ListView','app/model/'+page],function(ListPageView,Collection){
        this.currentCollection = new (Collection.extend({category:unitId}))();
        var view = new ListPageView({
          collection: this.currentCollection
        });
        view.open(unitId).update();
      }.bind(this));
      return;
    },
    editPage: function(page,unitId){
      require(['view/'+page+'View'],function(ModelPageView){
        var view = new ModelPageView({model: unitId});
        view.open(unitId).update();
      }.bind(this));
      return;
    },
  });

  var application = new Application();

  return application;
  
});
