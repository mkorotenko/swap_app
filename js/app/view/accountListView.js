define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/accounts.html'),
        accountList         = require('app/model/account');

    var AccountView = Backbone.View.extend({
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

    return Backbone.View.extend({
        collection: accountList,
        initialize: function () {
          this.collection.on("reset", this.render, this);
          this.collection.on("add", this.renderNew, this);
          $('#data-container').html('<div id="account-list" class="data-table"></div>');
          this.el = '#account-list';
          this.$el = $(this.el);
          return this;
        },
        busy: function(isBusy){
          var blanket = $('.blanket-spinner','.content');
          if(!isBusy) blanket.css('display','none');
          else blanket.css('display','flex');
          return this;
        },
        update: function() {
          $('#data-container').html('<div id="account-list" class="data-table"></div>');
          this.el = '#account-list';
          this.$el = $(this.el);
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
          this.$el.append(accountView.el);
          return this;
        },
        render: function () {
          this.$el.html('');
          this.collection.each(function(item){
            var accountView = new AccountView({model: item});
            this.$el.append(accountView.el);
          }, this);
          return this;
        }

    });
});