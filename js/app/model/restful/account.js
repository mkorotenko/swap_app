define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        findById = function (id) {
            var deferred = $.Deferred(),
                account = null,
                l = accounts.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (accounts[i].id === id) {
                    account = accounts[i];
                    break;
                }
            }
            deferred.resolve(account);
            return deferred.promise();
        },

        Account = Backbone.Model.extend({
            defaults: {
              title: '',
              amount: 0
            },
            sync: function (method, model, options) {
              if (method === "read") {
                findById(parseInt(this.id)).done(function (data) {
                  options.success(data);
                });
              }
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
