var ContactManager = new Marionette.Application();

ContactManager.StaticView = Marionette.ItemView.extend({
  template: "#static-template"
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
  var staticview = new ContactManager.StaticView();
  ContactManager.regions.main.show(staticview);
})

ContactManager.start();
