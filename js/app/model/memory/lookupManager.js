define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),
        lookups = [
        ],
        findByType = function (type) {
            var deferred = $.Deferred(),
                lookup = null,
                l = lookups.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (lookups[i].type === type) {
                    lookup = lookups[i];
                    break;
                }
            }
            deferred.resolve(lookup);
            return deferred.promise();
        },
        LookupManager = Backbone.Model.extend({
            defaults: {
              id: '',
              date: 0,
              lookup: {}
            },
            sync: function (method, model, options) {
              if (method === "read") {
                findByType(this.type).done(function (data) {
                  options.success(data);
                });
              }
            }
        }),

        LookupCollection = Backbone.Collection.extend({

            model: LookupManager,

            getCreate: function(type) {
              var entity = this.get(type);
              if(!entity){
                this.add({id:type,date:new Date(),lookup:{}});
                entity = this.get(type);
              }
              return entity;
            },
            sync: function (method, model, options) {
                if (method === "read") {
                    //findById(options.data.id).done(function (data) {
                    var loptions = options,
                        laccounts = lookups;
                    setTimeout(function(){
                      loptions.success(laccounts);
                    },100);
                }
            }

        });

  return LookupCollection;

});
