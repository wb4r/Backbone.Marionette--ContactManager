

App.module("ContactsApp.List", function(List, App, Backbone, Marionette, $, _) {

  List.ContactView = Marionette.ItemView.extend({
    tagName: "li",
    template: "#contact-list-item"
  });

  List.ContactsView = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: List.ContactView
  })
})

//
// ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
//   // We’ve declared a ContactsApp.List sub-module,
//   // but we’ve never declared the ContactsApp module.
//   // Then why does this code work?
//   // -->  When defining sub-modules using the dot-notation, the parent modules do not need to
//   //      exist. They will be created for you if they don’t exist.
//
//   // Model ItemView
//   // PREV: ContactManager.ContactItemView = Marionette.ItemView.extend({
//   List.Contact = Marionette.ItemView.extend({
//     tagName: "li",
//     template: "#contact-list-item"
//   });
//
//   // Collection 'ItemView'
//   // PREV: ContactManager.ContactsView = Marionette.CollectionView.extend({
//   List.Contacts = Marionette.CollectionView.extend({
//     tagName: "ul",
//     childView: List.Contact
//   });
//
// })
