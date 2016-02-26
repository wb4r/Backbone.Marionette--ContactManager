App.module("ContactsApp.Edit", function(Edit, App, Backbone, Marionette, $, _){
  Edit.Controller = {
    editContact: function(id){
      var loadingView = new App.Common.Views.Loading({
        title: "Artificial Loading Delay",
        message: "Data loading is delayed to demonstrate using a loading view."
      });
      App.regions.main.show(loadingView);
      var fetchingContact = App.request("contact:entity", id);

      $.when(fetchingContact).done(function(contact){
        var view;
        if(contact !== undefined){
          view = new Edit.Contact({
            model: contact
          });

          view.on("form:submit", function(data) {
            if (contact.save(data)) {
              App.trigger("contact:show", contact.get("id"))
            } else {
              view.triggerMethod("form:data:invalid", contact.validationError);
            }
            // contact.save(data);
            // App.trigger("contact:show", contact.get("id"))
          })
        } else{
          view = new App.ContactsApp.Show.MissingContact();
        }

        App.regions.main.show(view);
      });
    }
  };
});
