define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Accounts            = require('app/view/accounts'),
        Transactions        = require('app/view/transaction'),
        template            = _.template(require('text!tpl/home.html'));
        
    var accounts = new Accounts(),
        transactions = new Transactions();

    return Backbone.View.extend({
      accounts: function() {
        this.render();
        accounts.update();
      },
      transactions: function(accountId) {
        this.render();
        transactions.update(accountId);
      },
      render: function () {
        this.$el.html(template());
        // accounts.update();
        return this;
      }
    });

});