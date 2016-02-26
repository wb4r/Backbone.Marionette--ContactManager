App.module("ContactsApp", function(ContactsApp, App, Backbone, Marionette, $, _) {
  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      // listContacts referes to in API
      "contacts": "listContacts",
      "contacts/:id": "showContact"
    }
  });

  var API = {
    listContacts: function() {
      ContactsApp.List.Controller.listContacts();
    },

    showContact: function(id) {
      ContactsApp.Show.Controller.showContact(id)
    }
  };

  App.on("contacts:list", function() {
    App.navigate("contacts");
    API.listContacts();
  })

  App.on("contact:show", function(id) {
    App.navigate("contacts/" + id);
    API.showContact(id);
  })

  ContactsApp.on("start", function() {
    new ContactsApp.Router({
      controller: API
    })
  })
})
