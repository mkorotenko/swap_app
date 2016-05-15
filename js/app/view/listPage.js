define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Accounts            = require('view/accounts'),
        header              = _.template(require('text!tpl/header.html')),
        body                = _.template(require('text!tpl/body.html')),
        spinner             = _.template(require('text!tpl/spinner.html'));

    var accounts      = new Accounts({el: $('#data-container')});

    return Backbone.View.extend({
      el: '#app-container',
      accounts: function() {
        this.render();
        accounts.update();
        return this;
      },
      transactions: function(accountId) {
        var account = accounts.collection.get(accountId);
        if(!account){
          this.pageNotFound();
          return;
        }
        account.transactions.update();
      },
      pageNotFound: function(){
        this.render(true);
        $('#data-container').html('Page not found');
        return this;
      },
      render: function (hideSpinner) {
        this.$el.html('');
        this.$el.append($(header()).append('<header id="header" style="padding: 5px;">'+
              '<h1><font color="red">A</font>ccounts</h1>'+
              '<input id="serach" placeholder="What needs to be done?">'+
              '<div id="current-path">'+
              '</div>'+
              '</header>'));
        if(!hideSpinner) this.$el.append($(body()).append(spinner()));
        else this.$el.append(body());
        return this;
      }
    });

});