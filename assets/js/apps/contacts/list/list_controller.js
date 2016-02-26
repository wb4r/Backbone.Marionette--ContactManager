

App.module("ContactsApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.Controller = {
    listContacts: function() {
      var contacts = App.request("contact:entities");
      var contactsListView = new List.Contacts({
        collection: contacts
      });

      contactsListView.on("childview:contact:delete",
        function(childView, model) {
          // contacts.remove(model)
          model.destroy();
      });

      contactsListView.on("childview:contact:show",
        function(childView, model) {
          // App.navigate("contacts/" + model.get("id"))
          // App.ContactsApp.Show.Controller.showContact(model);
        App.trigger("contact:show", model.get("id"))
      })

      App.regions.main.show(contactsListView);
    }
  }
})

//
//
// ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
//
//   // here inside will be what will be publicly available
//   List.Controller = {
//     listContacts: function() {
//       var contacts = ContactManager.request("contact:entities");
//
//       var contactsListView = new List.Contacts({
//         collection: contacts
//       });
//
//       ContactManager.regions.main.show(contactsListView)
//     }
//   }
// })
