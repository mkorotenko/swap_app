define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        accounts = [
            {"id": 1, "title": "President and CEO", "amount": 100},
            {"id": 2, "title": "VP of Marketing", "amount": 200},
            {"id": 3, "title": "CFO", "amount": 300},
            {"id": 4, "title": "VP of Engineering", "amount": 400},
        ],

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

            sync: function (method, model, options) {
                if (method === "read") {
                    //findById(options.data.id).done(function (data) {
                    var loptions = options,
                        laccounts = accounts;
                    setTimeout(function(){loptions.success(laccounts);},200);
                }
            }

        });

    return {
        Account: Account,
        AccountCollection: AccountCollection
    };

});
