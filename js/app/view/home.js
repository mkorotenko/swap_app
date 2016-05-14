define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Accounts            = require('app/view/accounts'),
        Transactions        = require('app/view/transaction'),
        template            = _.template(require('text!tpl/home.html'));
        
    var accounts = new Accounts({el: $('#data-container')}),
        transactions = new Transactions();

    return Backbone.View.extend({
      el: '#app-container',
      accounts: function() {
        this.render();
        accounts.update();
      },
      transactions: function(accountId) {
        this.render();
        transactions.update(accountId);
      },
      render: function () {
        //this.$el.html(template());
        var header = _.template(require('text!tpl/header.html')),
          body = _.template(require('text!tpl/body.html'));
        this.$el.html('');
        this.$el.append(header());
        this.$el.append(body());
        // accounts.update();
        return this;
      }
    });

});