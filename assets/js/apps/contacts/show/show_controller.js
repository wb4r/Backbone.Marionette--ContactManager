
App.module("ContactsApp.Show", function(Show, App, Backbone, Marionette, $, _){
  Show.Controller = {
    showContact: function(id){
      var contact = App.request("contact:entity", id);
      var contactView;
      if(contact !== undefined){
        contactView = new Show.Contact({
          model: contact
        });
      } else{
        contactView = new Show.MissingContact();
      }
      App.regions.main.show(contactView);
    }
  }
})
