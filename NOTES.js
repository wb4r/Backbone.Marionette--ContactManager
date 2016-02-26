///////////////
//    6. DEFINITIONS
//////////////

APPLICATION

REGIONS
- Define the major structure elements
    > #header-region
    > #main-region
    > #footer-region

- Represent the outer most frame where all top level Layouts and
  Views are inserted into.
- Manage showing and closing view instances.

MODULES
- They are a way to encapsulate and namespace the app further into
  specific groups of functionality
    > HeaderApp (into #header-region Region)
    > UsersApp.List (Sub-module into #main-region)
    > FooterApp (into #footer-region Region)

- They represent the top level authority and are responsible for
  everything attached and defined to them.

- Can have unlimited sub-modules.
    > Module ShoppingCart.
    Based on functionality we can create 2 submodules:
    > Module ShoppingCart Submodule Controller
    > Module ShoppingCart Submodule Views

- Support multiple file operations

ROUTER
- Defined in a top level module.
- Triggering routing events:
    Execute controller actions corresponding to the URL with which the user first
    “entered” the app. The route-handling code gets fired only when a user enters
    the application by a URL, not each time the URL changes.
- Updating the URL:
    Update the URL in the address bar as the user navigates within the app. Keeping
    the URL up to date enables the browser’s “back” & “forward” buttons to function,
    URL sync with the app and bookmarking.

CONTROLLER
- Responsible for managing within a sub-module
- Intantiate and wire up Views
- Manage Entities (models/collections)
- Respond to View events
- Bubble up information to parent module

LAYOUTS
- Has the ability to define a set of regions
    > #main-region > UsersApp.List > Layout >   - #panel-region
                                                - #aside-region
                                                - #table-region
- Manages nested views inside those regions easily.

VIEWS

COMPOSITEVIEW
- Extends from a CollectionView but more powerful like i.e. has
a template attr.










///////////////
//    6
//////////////


APPLICATION
  + new application
  + LayoutView before:start
  - Module.Controller call

MODULE ContactsApp.List
  --> VIEW
    + ItemView for Model / Collection

  --> CONTROLLER
    -- Controller.call responds to Application Module.Controller call (request)

MODULE Entities
  + Declare Model / Collection Constructors
  + Initializes M/C
  +- Provides reqres.setHandler to be available outside the module































///////////////
//    5
//////////////

Controller: It’s basically the application equivalent of an orchestra
conductor: it coordinates the various pieces (typically models/collections and views), and gets them
to produce a coherent result (i.e. a displayed page).

Can be instantiated or long lived. We will use them to coordinate which views need to
be created and which models and collections are fetch. Are responsible for managing
within a sub-module too.

Modules: modules are organized in a way where they represent the top level authority
(independent top level applications) and are responsible for everything attached
and defined to them (highest level of responsabilities)

Can have unlimited sub-modules attached directly to them, which is how you organize
responsabilities into sucinct sections. (??)

Zimmerman: A module is an independent unit of code that ideally does one thing.
It can be used in conjunction with other modules to create an entire system.














///////////////
//    4
//////////////

RELATIONSHIP BETWEEN MODEL AND COLLECTION AND ItemView AND CollectionView


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
          var contact = new ContactManager.Contact({
            data: ""
          });

          // COLLECTION Instance
          // ---- Merge with Collection View Instance ----
          var contactlist = new ContactManager.ContactList();

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
            childView: ContactManager.ContactView
          })

          ////////////////////////////
          //--------------------------
          //  ItemView Instances
          // -------------------------
          ////////////////////////////

          // MODEL View
          // ---- NOT NECESSARY ----
          var contactview = new ContactManager.ContactView({model: contact});

          // COLLECTION View
          // ---- Merge with Collection Instance ----
          var contactlistview = ContactManager.ContactListView()


          // COLLECTION View  AND   COLLECTION View Instance
          var contacstview = new App.ContactsView({collection: contacts});


























///////////////
//    3
///////////////

Backbone models’ escape 39 works the same way as get 40: they both return
the value of the attribute provided as an argument, but escape will escape
HTML content, protecting you from XSS attacks if you’re displaying
user-provided data within the HTML.

--> The same return:
console.log(this.model.escape("phone"));
console.log(this.model.get("phone"));
console.log(this.model.toJSON().phone);
console.log(this.model.attributes.phone);






///////////////
//    2
///////////////
A LayoutView can be thought of as “a view containing other views”.

What do you need to actually render a view?
  - A ItemView (or similar) where to Construct it + a template
  - An instance from ItemView
  - optional: a container such as LayoutView or Regions
  - show/render it



///////////////
//    1
///////////////
• Templates
– are basically HTML
– govern “how things should be displayed” (what HTML should be in the view, CSS
  styles, where data should be displayed, etc.)

• Views
– are javascript objects
– take care of “reacting to things that happen” (clicks, keeping track of a
  model, etc.)

  This is the VIEWS RESPONSABILITY in Marionette:
  it monitors the models it’s displaying,
  and if those models change, the view renders itself again (using the same template).

  And to follow the “separation of concerns” pattern, the “views” functionality
  has been separated into templates (how to display information) and views
  (how to react to changes in the environment).
