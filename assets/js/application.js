var ContactManager = new Marionette.Application();

ContactManager.Contact = Backbone.Model.extend({
  defaults: {
    phone: "No phone number."
  }
})

ContactManager.ContactView = Marionette.ItemView.extend({
  template: "#contact-template",
  events: {
    "click p":  "alertPhone"
  },
  alertPhone: function() {
    alert(this.model.escape("phone"))
  }
})

ContactManager.on("before:start", function() {
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app.container",
    regions: {
      main: "#main-region"
    }
  });

  ContactManager.regions = new RegionContainer();
});

ContactManager.on("start", function() {
  var contact = new ContactManager.Contact({
    firstName: "mada",
    lastName: "faca"
    // phone: "123-45678-90"
  });
  var contactview = new ContactManager.ContactView({model: contact});
  ContactManager.regions.main.show(contactview);
})

ContactManager.start();
