define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Account = Backbone.Model.extend({
            defaults: {
              title: '',
              amount: 0
            }
        }),
        AccountCollection = Backbone.Collection.extend({
          model: Account,
          url: 'http://swap.korotenko.me/swap_restful.php?action=list'
        });

    return {
      Account: Account,
      AccountCollection: AccountCollection
    };

});
