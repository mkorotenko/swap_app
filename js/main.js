define([
  'jquery',
  'underscore',
  'backbone',
  'model/memory/lookupManager'
], function($, _, Backbone, LookupCollection){
  
  var manager = new LookupCollection();

  var Application = Backbone.Model.extend({
    entitySchema: 'applicationView',
    path: [],
    currentCollection: {},
    initialize: function() {
      console.log('Application started');
      return this;
    },
    switchPage: function(page,unitId){
      require(['view/'+page+'ListView','app/model/'+page],function(ListPageView,Collection){
        var lookup = manager.getCreate(page,unitId);
        this.currentCollection = lookup.collection;//new (Collection.extend({category:unitId}))();
        var view = new ListPageView({
          collection: this.currentCollection,
          path:(unitId? [unitId]:[])
        });
        view.open(unitId).update();
      }.bind(this));
      return this;
    },
    editPage: function(page,entity){
      require(['view/'+page+'View'],function(ModelPageView){
        var view = new ModelPageView({model: entity, path: [entity.get('category'),entity.get('id')]});
        view.open(entity).update();
      }.bind(this));
      return this;
    }
  });

  var application = new Application();

  return application;
  
});
