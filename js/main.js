define([
  'jquery',
  'underscore',
  'backbone',
  'app/model/account'
], function($, _, Backbone, Account){

  var Application = Backbone.Model.extend({
    pageViewers: {},
    accountList: new Account(),
    start: function(){
    },
    switchPage: function(page,unitId){
      //if(!this.pageViewers[page]){
        require(['view/'+page+'ListView'],function(ListPageView){
          var view = new ListPageView({
            collection: this[page+'List']
          });
          this.pageViewers[page] = view;
          view.open(unitId).update();
        }.bind(this));
        return;
      //}
      //this.pageViewers[page].open(unitId).update();
    }
  });

  var application = new Application();

  return application;
  
});
//this.url = 'http://swap.korotenko.me/swap_restful.php?action=transactions&category='+this.currentParent.get('id');
