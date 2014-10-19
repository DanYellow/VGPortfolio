var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;


var ProjectsListView       = require('./projectsList/ProjectsListView');
var ProjectsListCollection = require('./projectsList/ProjectsListCollection');
var ProjectsListItem = require('./projectsListItem/ProjectsListItem');

var ProjectView            = require('./project/ProjectView');

var projectsListCollection = new ProjectsListCollection();
var ProjectsListItem       = new ProjectsListItem();

var flag = false;

module.exports = Backbone.Router.extend({

    routes: {
        "":                 "projects",
        "projects":                 "projects",

        ":id":        "project",
        "project/:id":        "project"
    },

    projects: function() {
        this.projectsList();
        this.fetchProject(projectsListCollection.length - 1);
    },

    project: function(id) {
        if(!flag) {
            this.projectsList();
        }
        this.fetchProject(id);
    },

    fetchProject: function (id) {
        projectsListCollection.fetch({
            success: function (datas) {
                //var projectView = new ProjectView({ model: projectsListCollection.get(id), el: $("#project") });
                var projectView = new ProjectView({ model: projectsListCollection.get(id), el: $("#project") });
            }
        });
    },

    lastProject: function  () {

    },

    projectsList: function () {
        // Avoid calling each times thumbsnails
        if(Number(projectsListCollection.length) !== 0) {
            return;
        }
        projectsListCollection.fetch({
            success: function (datas) {
                var projectsListView = new ProjectsListView({collection: projectsListCollection, model: ProjectsListItem, el: $("#projects")});
            }
        });
    }
});