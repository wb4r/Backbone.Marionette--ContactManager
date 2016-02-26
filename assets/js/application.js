var App = new Marionette.Application();

// MODEL Constructor
App.Contact = Backbone.Model.extend({
  defaults: {
    phone: "No phone number."
  }
})

// COLLECTION Constructor
App.ContactCollection = Backbone.Collection.extend({
  model: App.Contact
})

// MODELS ItemView
App.ContactItemView = Marionette.ItemView.extend({
  template: "#contact-template",
  events: {
    "click p":  "alertPhone"
  },
  alertPhone: function() {
    alert(this.model.escape("phone"))
  }
})

// COLLECTION ItemView
App.ContactsView = Marionette.CollectionView.extend({
  tagName: "ul",
  childView: App.ContactItemView
})

App.on("before:start", function() {
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app.container",
    regions: {
      main: "#main-region"
    }
  });

  App.regions = new RegionContainer();
});

App.on("start", function() {
  // MODEL Intance/s
  var contacts = new App.ContactCollection([
    {
      firstName: "Bob",
      lastName: "Brigham",
      phoneNumber: "555-0163"
    },
    {
      firstName: "Alice",
      lastName: "Arten",
      phoneNumber: "555-0184"
    },
    {
      firstName: "Charlie",
      lastName: "Campbell",
      phoneNumber: "555-0129"
    }
  ]);

  // MODEL View

  // COLLECTION View  AND   COLLECTION View Instance
  var contacstview = new App.ContactsView({collection: contacts});

  App.regions.main.show(contacstview);
})

App.start();





////////////////////////////
//--------------------------
//  Collection/Model Constructor
// -------------------------
////////////////////////////

// MODEL Constructor
ContactManager.Contact = Backbone.Model.extend({
  defaults: {
  }
})

// COLLECTION Constructor
ContactManager.ContactList = Backbone.Collection.extend({
  model: ContactManager.Contact
})

////////////////////////////
//--------------------------
//  Collection/Model Instances
// -------------------------
////////////////////////////

// MODEL Intance/s

// COLLECTION Instance
var contacts = new ContactManager.ContactList([
  { firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },
  { firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
  { firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
]);

////////////////////////////
//--------------------------
//  ItemView Constructors
// -------------------------
////////////////////////////

// MODELS ItemView
ContactManager.ContactView = Marionette.ItemView.extend({
  template: "#contact-template",
  events: {
  }
})

// COLLECTION ItemView
ContactManager.ContactListView = Marionette.CollectionView.extend({
  tagName: "ul",
  childView: ContactManager.ContactView
})

////////////////////////////
//--------------------------
//  ItemView Instances
// -------------------------
////////////////////////////

// MODEL View

// COLLECTION View

// COLLECTION View  AND   COLLECTION Instance
var contacstview = new App.ContactsView({collection: contacts});















PRACTICE


////////////////////////////
//--------------------------
//  APP
// -------------------------
////////////////////////////

var App = new Marionette.Application()

////////////////////////////
//--------------------------
//  Collection/Model Instances
// -------------------------
////////////////////////////

// MODEL Intance/s
App.Contact = Backbone.Model.extend()

// COLLECTION Instance
App.Contacts = Backbone.Collection.extend({
  model: App.Contact
})

////////////////////////////
//--------------------------
//  ItemView Constructors
// -------------------------
////////////////////////////

// MODELS ItemView
App.ContactItemView = Marionette.ItemView.extend({
  template: "#contact-template"
})

// COLLECTION ItemView
App.ContactListView = Marionette.CollectionView.extend({
  tagname: "ul",
  childView: App.ContactItemView
})

////////////////////////////
//--------------------------
//  ItemView Instances
// -------------------------
////////////////////////////

// COLLECTION Instance
var contacts = new App.Contacts([
  { firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },
  { firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
  { firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
])

// COLLECTION Instance View
var contacsview = new App.ContactListView({ collection: contacts })






//
