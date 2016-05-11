define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/accounts.html'),
        spinner             = require('text!tpl/spinner.html'),
        models              = require('app/model/account');
        // template            = _.template(tpl);

    var accountList = new models.AccountCollection();
        // accountList.fetch();
    var AccountView = Backbone.View.extend({
      tagName: 'li',
      template: _.template(tpl),
      initialize: function(){
        this.render();
      },
      render: function(){
        this.$el.html(this.template(this.model.toJSON()));
      }
    });

    return Backbone.View.extend({
        el: '#data-container',
        tagName: 'ul',
        initialize: function () {
          this.collection.on("reset", this.render, this);
          this.collection.on("add", this.renderNew, this);
          return this;
        },
        collection: accountList,
        update: function() {
          var spin = _.template(spinner),
              that = this;
          this.$el.html(spin());
          this.collection.fetch({
            success: function(){that.$el.html('');}
          });
          return this;
        },
        renderNew: function(model) {
            var accountView = new AccountView({model: model});
            this.$el.append(accountView.el);
        },
        render: function () {
          this.collection.each(function(item){
            var accountView = new AccountView({model: item});
            this.$el.append(accountView.el);
          }, this);
          return this;
        }

    });

});