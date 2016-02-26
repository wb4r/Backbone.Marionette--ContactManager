

App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Contact = Backbone.Model.extend()

  Entities.Contacts = Backbone.Collection.extend({
    model: Entities.Contact
  })

  var contacts;

  var initializeContacts = function() {
    contacts = new Entities.Contacts([
      { id: 1, firstName: "Alice", lastName: "Arten",
      phoneNumber: "555-0184" },
      { id: 2, firstName: "Bob", lastName: "Brigham",
      phoneNumber: "555-0163" },
      { id: 3, firstName: "Charlie", lastName: "Campbell",
      phoneNumber: "555-0129" }
    ])
  }

  var API = {
    getContactEntities: function() {
      if (contacts === undefined) {
        initializeContacts()
      }
      return contacts;
    }
  }

  App.reqres.setHandler("contact:entities", function(){
    return API.getContactEntities()
  })
})































//
//
//
//
//
//
//
// // Module Declaration
// ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
//
//   // Model Contstructor
//   // PREV: ContactManager.Contact = Backbone.Model.extend({})
//   Entities.Contact = Backbone.Model.extend()
//
//   // Collection Constructor
//   // PREV: ContactManager.ContactCollection = Backbone.Collection.extend({
//   Entities.ContactCollection = Backbone.Collection.extend({
//     // PREV: model: ContactManager.Contact,
//     model: Entities.Contact,
//     comparator: function(contact) {
//       return contact.get("firstName") + " " + contact.get("lastName");
//     }
//   });
//
//   // private
//   var contacts;
//
//   // private
//   var initializeContacts = function() {
//
//     // new Collection Instance
//     contacts = new Entities.ContactCollection([
//       { id: 1, firstName: "Alice", lastName: "Arten",
//       phoneNumber: "555-0184" },
//       { id: 2, firstName: "Bob", lastName: "Brigham",
//       phoneNumber: "555-0163" },
//       { id: 3, firstName: "Charlie", lastName: "Campbell",
//       phoneNumber: "555-0129" }
//     ])
//   };
//
//   // API object to contain the functions we will allow the rest of the Application
//   // to use.
//   var API = {
//     getContactEntities: function() {
//       if (contacts === undefined) { initializeContacts() }
//       return contacts;
//     }
//   };
//
//   // We provide a way to access API.getContactEntities() from outside the Entities
//   // the request will be --> ---- ContactManager.reqres("contact:entities") ----
//   ContactManager.reqres.setHandler("contact:entities", function() {
//     return API.getContactEntities()
//   });
//
// });
