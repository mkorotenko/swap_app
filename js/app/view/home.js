define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Accounts            = require('app/view/accounts'),
        Transactions        = require('app/view/transaction'),
        header              = _.template(require('text!tpl/header.html')),
        body                = _.template(require('text!tpl/body.html')),
        spinner             = _.template(require('text!tpl/spinner.html'));

    var accounts      = new Accounts({el: $('#data-container')}),
        transactions  = new Transactions({el: $('#data-container')});

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
        this.$el.html('');
        this.$el.append(header());
        this.$el.append($(body()).append(spinner()));
        return this;
      }
    });

});