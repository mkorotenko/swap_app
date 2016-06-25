define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  
  var MainPage = Backbone.View.extend({
    el: '#app-container',
    head: _.template($('#tmpl_head').html()),
    navBar: _.template($('#tmpl_nav').html()),
    searchBar: _.template($('#tmpl_search_bar').html()),
    render: function() {
      this.$el.html(
        this.head(this.model.attributes) +
        this.navBar(this.model) +
        this.searchBar()
      );
      return this;
    }
  });
  
  var Application = Backbone.Model.extend({
    path: [],
    menu: [
        {
          name: 'Accounts',
          selected: true
        },
        {
          name: 'Transactions',
          selected: false
        },
        {
          name: 'Repots',
          selected: false
        }
      ],
    initialize: function() {
      this.on('change:page', function(app, page){ 
        console.log(page);
        this.mainPage.render();
      });
      return this;
    }
  });

  var application = new Application();
  
  application.mainPage = new MainPage({
    model: application
  });

  return application;
  
});
