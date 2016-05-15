define(function (require) {

  "use strict";
  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      header              = _.template(require('text!tpl/header.html')),
      body                = _.template(require('text!tpl/body.html')),
      spinner             = _.template(require('text!tpl/spinner.html'));

  var ListPageView = Backbone.View.extend({

    renderPath: function(path) {
      var currentPath = $('#current-path');
      currentPath.html('');
      currentPath.append('<a href="#">Account list</a>');
      for(var i=0; i<path.length; i++){
        currentPath.append('<span>/</span>');
        currentPath.append('<a href="#card/'+path[i]+'">'+path[i]+'</a>');
      }
    },
    busy: function(isBusy){
      var blanket = $('.blanket-spinner','.content');
      if(!isBusy) blanket.css('display','none');
      else blanket.css('display','flex');
      return this;
    },
    initialize: function () {
      this.collection.on("reset", this.render, this);
      this.collection.on("add", this.renderNew, this);
      $('#app-container').html('<div id="account-list" class="data-table"></div>');
      this.el = '#account-list';
      this.$el = $(this.el);
      return this;
    },
    open: function(){
      this.render();
      this.renderPath([]);
      return this;
    },
    pageNotFound: function(){
      this.render(true);
      $('#data-container').html('Page not found');
      return this;
    },
    render: function (hideSpinner) {
      this.$el.html('');
      this.$el.append($(header()).append('<header id="header" style="padding: 5px;">'+
            '<h1><font color="red">A</font>ccounts</h1>'+
            '<input id="serach" placeholder="What needs to be done?">'+
            '<div id="current-path">'+
            '</div>'+
            '</header>'));
      if(!hideSpinner) this.$el.append($(body()).append(spinner()));
      else this.$el.append(body());
      return this;
    }
  });

  return ListPageView;

});
