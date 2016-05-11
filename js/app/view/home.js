define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        Accounts            = require('app/view/accounts'),
        tpl                 = require('text!tpl/home.html'),
        template            = _.template(tpl);
        
    var accounts = new Accounts();

    return Backbone.View.extend({

        render: function () {
            this.$el.html(template());
            accounts.update();
            return this;
        }

    });

});