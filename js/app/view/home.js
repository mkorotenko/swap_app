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
        this.$el.append($(header()).append('<header id="header" style="padding: 5px;">'+
              '<h1><font color="red">A</font>ccounts</h1>'+
              '<input id="serach" placeholder="What needs to be done?">'+
              '<div id="current-path">'+
              '</div>'+
              '</header>'));
        this.$el.append($(body()).append(spinner()));
        return this;
      }
    });

});