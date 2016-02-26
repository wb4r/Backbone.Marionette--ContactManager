

App.module("ContactsApp.List", function(List, App, Backbone, Marionette, $, _) {

  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: "#contact-list-item",

    events: {
      "click"               :     "highlightName",
      "click .js-delete"    :     "removeContact",
      "click .js-show"      :     "showClicked",
      "click td a.js-edit"  :     "editClicked"
    },
    flash: function(cssClass) {
      var $view = this.$el;
      $view.hide().toggleClass(cssClass).fadeIn(800, function() {
        setTimeout(function() {
          $view.toggleClass(cssClass)
        }, 500)
      })
    },
    highlightName: function() {
      this.$el.toggleClass("warning");
    },
    removeContact: function(e) {
      e.stopPropagation();
      // this.model instanceof App.Entities.Contact                 TRUE
      // this.model.collection instanceof App.Entities.Contacts     TRUE
      // this.model.collection.remove(this.model)
      this.trigger("contact:delete", this.model);
      // this.trigger(List.ContactsView.fade());
    },
    showClicked: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:show", this.model)
    },
    onRender: function() {
      this.$el.fadeIn("slow");
    },
    remove: function() {
      var self = this;
      this.$el.fadeOut("slow", function(){
        Marionette.ItemView.prototype.remove.call(self);
      });
    },
    editClicked: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.trigger("contact:edit", this.model)
    }

  });

  // List.ContactsView = Marionette.CollectionView.extend({
  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#contact-list",
    childView: List.Contact,
    childViewContainer: "tbody",

    // activated from:
    //("childview:contact:delete")
    // onChildviewContactDelete: function() {
    //   this.$el.fadeOut(1000, function() {
    //     $(this).fadeIn(1000)
    //   })
    // }
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
