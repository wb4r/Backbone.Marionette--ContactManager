

App.module("ContactsApp.Show", function(Show, App, Backbone, Marionette, $, _){

  Show.MissingContact = Marionette.ItemView.extend({
    template: "#missing-contact-view",

    events: {
      "click .goBack" : "backToContacts"
    },

    backToContacts: function(e) {
      e.preventDefault();
      App.trigger("contacts:list")
    }
  })

  Show.Contact = Marionette.ItemView.extend({
    template: "#contact-view",

    events: {
      "click a.js-edit": "editClicked",
      "click .goBack" : "backToContacts"
    },

    editClicked: function(e) {
      e.preventDefault();
      this.trigger("contact:edit", this.model)
    },
    backToContacts: function(e) {
      e.preventDefault();
      App.trigger("contacts:list")
    }
  })

})
