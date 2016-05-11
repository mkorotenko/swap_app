// Filename: main.js
require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../tpl'
    },

    // map: {
    //     '*': {
    //         'app/models/employee': 'app/models/memory/employee'
    //     }
    //},

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', '../router'], function ($, Backbone, Router) {
    var router = new Router();
    Backbone.history.start();
});

// define([
//   'jquery',
//   'underscore',
//   'backbone',
//   'router'
// ], function($, _, Backbone, Router){
  
//     Date.prototype.toString = function() {
//       var yyyy = this.getFullYear().toString(),
//           mm = (this.getMonth()+1).toString(), // getMonth() is zero-based
//           dd  = this.getDate().toString();             
//       return yyyy+'-'+(mm[1]?mm:"0"+mm[0])+'-'+(dd[1]?dd:"0"+dd[0]);
//     };
       
//     var app = {}; // create namespace for our app
    
//     // var Bc = Backbone.Collection.prototype;
//     // Bc.needFetch = true;
//     // Bc.needUpdate = false;
//     // Bc._superFetch = Bc.fetch;
//     // Bc.fetch = function() {
//     //   var that = this;
//     //   this._superFetch.apply(this,arguments).done(function(){
//     //     that.needFetch=false;
//     //   });
//     // };
//     //[Models]
//     // instance of the Collection
//     // app.accList = new app.AccList();

//     //--------------
//     // Views
//     //--------------
    
//     //#todoapp
//     app.AppView = Backbone.View.extend({
//       el: '#todoapp',
//       initialize: function () {
//         //this.input = this.$('#new-todo');
//         // app.accList.on('add', this.addAll, this);
//         // app.accList.on('reset', this.addAll, this);
//       },
//       events: {
//         // 'keypress #new-todo': 'createTodoOnEnter',
//       }
//       // addOne: function(todo){
//       //   var view = new app.TodoView({model: todo});
//       //   $('#acc-list').append(view.render().el);
//       // },
//       // addAll: function(){
//       //   this.$('#acc-list').html(''); // clean the todo list
//       //   this.$('#edit-record').html(''); // clean the todo list
//       //   app.accList.each(this.addOne, this);
//       // },
//       // accountingsPage: function(){
//       //   app.accList.fetch();
//       // }
//       // transactionsPage: function(category){
//       //   app.transactionList.url = 'http://swap.korotenko.me/swap_restful.php?' + $.param({action: 'transactions', category: category});//action=transactions&category='+category;
//       //   if(!app.transactionList.length) app.transactionList.fetch();
//       //   else app.transactionList.reset(app.transactionList.toJSON());
//       // }
//     });

//     //--------------
//     // Initializers
//     //--------------   
    
//     var initialize = function(){
//       app.appView = new app.AppView();
//       Router.initialize(app);
//     };
    
//     return {
//       initialize: initialize
//     };

// });
