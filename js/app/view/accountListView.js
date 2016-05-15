define(function (require) {

  "use strict";
  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      tpl                 = require('text!tpl/accounts.html'),
      ListPageView        = require('view/listPage'),
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
