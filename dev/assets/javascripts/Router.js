var GalleryView = Backbone.View.extend({
      el: $("body"),
      render: function() {
        console.log('fgogr');
        console.log(this.model.toJSON().id);
      }
});

var Router = Backbone.Router.extend({

  routes: {
    "":                 "projects",
    "project/:id":        "project"
  },

  projects: function() {
    console.log('projects');
  },

  project: function(id) {
    var projects = new Projects();
    projects.fetch({
      success: function () {
        var galleryView = new ProjectView();
        galleryView.model = projects.get(0);
        galleryView.render();
      }
    });
  }
});

var router = new Router();
Backbone.history.start();