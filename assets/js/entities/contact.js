

App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Contact = Backbone.Model.extend({
    urlRoot: "contacts",

    defaults: {
      firstName: "",
      lastName: "",
      phoneNumber: ""
    },

    validate: function(attrs, options) {
      var errors = {};
      if (! attrs.firstName) {
        errors.firstName = "Can't be blank"
      };
      if (! attrs.lastName) {
        errors.lastName = "Can't be blank"
      };
      if (! _.isEmpty(errors)) {
        return errors;
      }
    }
  })

  Entities.configureStorage("App.Entities.Contact")

  Entities.Contacts = Backbone.Collection.extend({
    url: "contacts",
    model: Entities.Contact,
    comparator: "firstName"
  })

  Entities.configureStorage("App.Entities.Contacts")

  var contacts;

  var initializeContacts = function() {
    contacts = new Entities.Contacts([
      { id: 1, firstName: "Alice", lastName: "Arten",
      phoneNumber: "555-0184" },
      { id: 2, firstName: "Bob", lastName: "Brigham",
      phoneNumber: "555-0163" },
      { id: 3, firstName: "Charlie", lastName: "Campbell",
      phoneNumber: "555-0129" }
    ]);
    contacts.forEach(function(contact) {
      contact.save()
    })
    return contacts.models;
  }

  var API = {
    getContactEntities: function() {
      var contacts = new Entities.Contacts();
      var defer = $.Deferred();
      contacts.fetch({
        success: function(data) {
          defer.resolve(data)
        }
      });
      var promise = defer.promise();
      $.when(promise).done(function(fetchedContacts) {
        if(fetchedContacts.length === 0) {
          var models = initializeContacts();
          contacts.reset(models)
        }
      })
      return promise;
    },
    getContactEntity: function(contactId){
      var contact = new Entities.Contact({id: contactId});
      // declare a Deferred object instance
      // (:) is essentially “something that will happen later”: it is used
      //   to synchronize code by having it react as the promise is updated
      //   (typically with succeess/failure).
      var defer = $.Deferred();
      setTimeout(function() {
        contact.fetch({
          success: function(data) {
            defer.resolve(data);
          },
          error: function(data) {
            defer.resolve(undefined)
          }
        });
      }, 2000)
      // return a promise on the defer object
      return defer.promise();
    }
  }

  App.reqres.setHandler("contact:entities", function(){
    return API.getContactEntities()
  })

  App.reqres.setHandler("contact:entity", function(id){
    return API.getContactEntity(id)
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
