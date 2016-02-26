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
