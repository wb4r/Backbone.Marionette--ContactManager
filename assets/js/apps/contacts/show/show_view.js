

App.module("ContactsApp.Show", function(Show, App, Backbone, Marionette, $, _){

  Show.Contact = Marionette.ItemView.extend({
    template: "#contact-view"
  })

})
