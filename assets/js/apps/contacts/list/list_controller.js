

App.module("ContactsApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.Controller = {
    getContacts: function() {
      var contacts = App.request("contact:entities");

      var contactsListView = new List.ContactsView({
        collection: contacts
      });

      App.regions.main.show(contactsListView)
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
