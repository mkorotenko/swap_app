define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        transactions = [
            {"id": 1, "date": new Date(), "note": "President and CEO", "amount": 100},
            {"id": 2, "date": new Date(), "note": "VP of Marketing", "amount": 200},
            {"id": 3, "date": new Date(), "note": "CFO", "amount": 300},
            {"id": 4, "date": new Date(), "note": "VP of Engineering", "amount": 400},
        ],

    // 'http://swap.korotenko.me/swap_restful.php?action=transactions&category='+category;

        findById = function (id) {
            var deferred = $.Deferred(),
                transaction = null,
                l = transactions.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (transactions[i].id === id) {
                    transaction = transactions[i];
                    break;
                }
            }
            deferred.resolve(transaction);
            return deferred.promise();
        },

        Transaction = Backbone.Model.extend({
            defaults: {
              date: new Date(),
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

        TransactionCollection = Backbone.Collection.extend({

            model: Transaction,

            sync: function (method, model, options) {
                if (method === "read") {
                    var loptions = options,
                        ltransactions = transactions;
                    setTimeout(function(){
                      loptions.success(ltransactions);
                    },1500);
                }
            }

        });

    // return {
    //   Transaction: Transaction,
    //   TransactionCollection: TransactionCollection
    // };
    return TransactionCollection;
    
});
