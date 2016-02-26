

var App = new Marionette.Application();

// helper on routing common on several programs
App.navigate = function(route, options) {
  options || (options = {});
  Backbone.history.navigate(route, options)
};

// helper on routing common on several programs
App.getCurrentRoute = function() {
  return Backbone.history.fragment
}

App.on("before:start", function() {

  Marionette.ItemView.prototype.onRemove = function(){};

  var Layout = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      main: "#main-region",
      dialog: "#dialog-region"
    }
  });

  App.regions = new Layout();
})

App.on("start", function() {
  // App.ContactsApp.List.Controller.listContacts()
  if(Backbone.history) {
    Backbone.history.start();

    if (this.getCurrentRoute() === "") {
      App.trigger("contacts:list");
    }
  }
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
