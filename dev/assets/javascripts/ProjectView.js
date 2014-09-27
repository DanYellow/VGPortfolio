var ProjectView = Backbone.View.extend({
      el: $("body"),
      initialize: function(){
        _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
        this.el = $("body");
      },
      render: function() {
console.log(this.model.toJSON().id);
        $(this.el).append("<ul> <li>hello world</li> </ul>");
      }
});
