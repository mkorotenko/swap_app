define(function (require) {

  "use strict";

  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      header              = _.template(require('text!tpl/header.html')),
      body                = _.template(require('text!tpl/body.html')),
      spinner             = _.template(require('text!tpl/spinner.html'));

  var ApplicationView = Backbone.View.extend({
    options: {path: []},
    renderPath: function() {
      var currentPath = $('#current-path'),
          pathStr = '',
          path = this.path || this.options.path || [];
      currentPath.html('');
      currentPath.append('<a href="#">Account list</a>');
      for(var i=0; i<path.length; i++){
        currentPath.append('<span>/</span>');
        pathStr += '/'+path[i];
        currentPath.append('<a href="#card'+pathStr+'">'+path[i]+'</a>');
      }
      return this;
    },
    update: function() {
      if(!this.collection.length){
        this.busy(true);
        this.collection.fetch({
          success:  function(){
            this.busy(false);
          }.bind(this),
          error:  function(){
            this.busy(false);
          }.bind(this)
        });
      }
      else {
        this.render();
        this.busy(false);
      }
      return this;
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
      return this;
    },
    open: function(){
      this.render();
      this.renderPath();
      return this;
    },
    pageNotFound: function(){
      this.render(true);
      $('#data-container').html('Page not found');
      return this;
    },
    renderNew: function() {
      return this;
    },
    render: function (hideSpinner) {
      var container = $('#app-container').html('');
      container.append($(header()).append('<header id="header" style="padding: 5px;">'+
            '<h1><font color="red">A</font>ccounts</h1>'+
            '<input id="serach" placeholder="What needs to be done?">'+
            '<div id="current-path">'+
            '</div>'+
            '</header>'));
      if(!hideSpinner) container.append($(body()).append(spinner()));
      else container.append(body());
      $('#data-container').html('<div id="account-list" class="data-table"></div>');
      return this;
    }
  });

  return ListPageView;

});
