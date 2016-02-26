

App.module("ContactsApp.List", function(List, App, Backbone, Marionette, $, _) {
  List.Controller = {
    listContacts: function() {
      var loadingView = new App.Common.Views.Loading();
      App.regions.main.show(loadingView);

      var fetchingContacts = App.request("contact:entities");
      $.when(fetchingContacts).done(function(contacts) {
        var contactsListView = new List.Contacts({
          collection: contacts
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

        App.regions.main.show(contactsListView);
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
