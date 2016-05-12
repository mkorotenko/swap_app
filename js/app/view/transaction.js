define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/transactions.html'),
        models              = require('app/model/transaction');

    var transactionList = new models.TransactionCollection();
    var TransactionView = Backbone.View.extend({
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
        //el: '#data-container',
        //tagName: 'ul',
        collection: transactionList,
        initialize: function () {
          this.collection.on("reset", this.render, this);
          this.collection.on("add", this.renderNew, this);
          return this;
        },
        busy: function(isBusy){
          var blanket = $('#Blanket');
          if(!isBusy) blanket.css('display','none');
          else blanket.css('display','block');
          return this;
        },
        update: function() {
          $('#data-container').html('<div id="transaction-list" class="data-table"></div>');
          this.el = '#transaction-list';
          this.$el = $(this.el);
          this.$el.html('');
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
          }
          return this;
        },
        renderNew: function(model) {
          var transactionView = new TransactionView({model: model});
          this.$el.append(transactionView.el);
          return this;
        },
        render: function () {
          $('#data-container').html('<div id="transaction-list" class="data-table"></div>');
          this.el = '#transaction-list';
          this.$el = $(this.el);
          this.$el.html('');
          this.collection.each(function(item){
            var transactionView = new TransactionView({model: item});
            this.$el.append(transactionView.el);
          }, this);
          return this;
        }
    });
});