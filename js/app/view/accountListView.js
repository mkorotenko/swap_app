define(function (require) {

  "use strict";
  
  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      ListPageView        = require('view/listPage'),
      tpl                 = require('text!tpl/accounts.html'),
      AccountView = Backbone.View.extend({
        tagName: 'div',
        className: 'table-row-box',
        template: _.template(tpl),
        initialize: function(){
          this.render();
        },
        render: function(){
          this.$el.html(this.template(this.model.toJSON()));
        }
      });

  return ListPageView.extend({
    renderNew: function(model) {
      var accountView = new AccountView({model: model});
      $('#account-list').append(accountView.el);
      return this;
    },
    render: function () {
      this.constructor.__super__.render.apply(this,arguments);
      this.collection.each(function(item){
        var accountView = new AccountView({model: item});
        $('#account-list').append(accountView.el);
      }, this);
      return this;
    }
  });

});
