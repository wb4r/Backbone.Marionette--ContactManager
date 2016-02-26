
App.module("ContactsApp.Show", function(Show, App, Backbone, Marionette, $, _){
  Show.Controller = {
    showContact: function(model) {
      var contactView = new Show.Contact({
        model : model
      });
      App.regions.main.show(contactView)
    }
  }
})
