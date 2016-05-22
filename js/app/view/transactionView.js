define(function (require) {

  "use strict";

  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      ListPageView        = require('view/listPage'),
      tpl                 = require('text!tpl/transactionPage.html');

  return ListPageView.extend({
    tagName: 'div',
    className: 'table-row-box',
    template: _.template(tpl),
    initialize: function(){
      this.render();
      return this;
    },
    open: function() {
      this.render();
      this.renderPath();
      return this;
    },
    update: function() {
      this.busy(false);
      this.$el.html(this.template(this.model.toJSON()));
      $('#account-list').append(this.$el);
      return this;
    },
    render: function(){
      this.constructor.__super__.render.apply(this,arguments);
      return this;
    }
  });

});