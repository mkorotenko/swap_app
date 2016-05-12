define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Accounts            = require('app/view/accounts'),
        Transactions        = require('app/view/transaction'),
        tpl                 = require('text!tpl/home.html'),
        template            = _.template(tpl);
        
    var accounts = new Accounts(),
        transactions = new Transactions();

    return Backbone.View.extend({
      
      accounts: function() {
        this.render();
        accounts.update();
      },
      transactions: function(trId) {
        this.render();
        transactions.update();
      },

        render: function () {
            this.$el.html(template());
            // accounts.update();
            return this;
        }

    });

});