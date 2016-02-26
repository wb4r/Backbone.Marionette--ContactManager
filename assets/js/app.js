

var App = new Marionette.Application();

App.on("before:start", function() {

  Marionette.ItemView.prototype.onRemove = function(){};

  var Layout = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      main: "#main-region"
    }
  });

  App.regions = new Layout();
})

App.on("start", function() {
  App.ContactsApp.List.Controller.listContacts()
})



//
// // before:start
// ContactManager.on("before:start", function() {
//
//   // Layout extend
//   var RegionContainer = Marionette.LayoutView.extend({
//     el: "#app-container",
//     regions: {
//       main: "#main-region"
//     }
//   });
//
//   // App.regions = previous LayoutView extended
//   ContactManager.regions = new RegionContainer();
// })
//
// ContactManager.on("start", function() {
//   ContactManager.ContactsApp.List.Controller.listContacts();
// })
//
// // ContactManager.start();
