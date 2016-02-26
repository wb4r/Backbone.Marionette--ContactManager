

App.module("ContactsApp.List", function(List, App, Backbone, Marionette, $, _) {

  List.Controller = {
    listContacts: function() {
      var loadingView = new App.Common.Views.Loading();
      App.regions.main.show(loadingView);

      var fetchingContacts = App.request("contact:entities");

      var contactsListLayout = new List.Layout();
      var contactsListPanel = new List.Panel();

      $.when(fetchingContacts).done(function(contacts) {
        var contactsListView = new List.Contacts({
          collection: contacts
        })

        contactsListLayout.on("show", function() {
          contactsListLayout.panelRegion.show(contactsListPanel)
          contactsListLayout.contactsRegion.show(contactsListView)
        })

        contactsListPanel.on("contact:new", function() {
          var newContact = new App.Entities.Contact();

          var view = new App.ContactsApp.New.Contact({
            model: newContact,
            asModal: true
          })
          view.on("form:submit", function(data){
            if(contacts.length > 0){
              var highestId = contacts.max(function(c){
                return c.id;
              }).get("id");
              data.id = highestId + 1;
            } else {
              data.id = 1;
            }
            if(newContact.save(data)){
              contacts.add(newContact);
              App.regions.dialog.empty();
              contactsListView.children.findByModel(newContact).
              flash("success");
            } else {
              view.triggerMethod("form:data:invalid",
              newContact.validationError);
            }
          });
          App.regions.dialog.show(view)
        })

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

        contactsListView.on("childview:contact:edit",
          function(childView, model) {
            var view = new App.ContactsApp.Edit.Contact({
              model: model,
              asModal: true
            });

            view.on("form:submit", function(data) {
              if(model.save(data)) {
                childView.render();
                App.regions.dialog.empty();
                childView.flash("success")
              } else {
                view.triggerMethod("form:data:invalid", model.validationError)
              }
            })

            view.on("show", function() {
              this.$el.dialog({
                modal: true,
                title: view.title,
                width: "auto"
              })
            })
            App.regions.dialog.show(view)
          })
        App.regions.main.show(contactsListLayout)
        // App.regions.main.show(contactsListView);
      })
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
