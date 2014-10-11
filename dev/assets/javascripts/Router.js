var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;


var ProjectsListView       = require('./projectsList/ProjectsListView');
var ProjectsListCollection = require('./projectsList/ProjectsListCollection');

var ProjectView            = require('./project/ProjectView');

module.exports = Backbone.Router.extend({

    routes: {
        "":                 "projects",
        "projects":                 "projects",

        ":id":        "project",
        "project/:id":        "project"
    },

    projects: function() {
        var projectsListCollection = new ProjectsListCollection();
        projectsListCollection.fetch({
            success: function (datas) {
                var projectsListView = new ProjectsListView({collection: projectsListCollection, el: $("#projects")});
            }
        });
    },

    project: function(id) {
        this.projects();

        var projectsListCollection = new ProjectsListCollection();
        projectsListCollection.fetch({
            success: function (datas) {
                var projectView = new ProjectView({ model: projectsListCollection.get(id), el: $("#project") });
            }
        });
    }
});