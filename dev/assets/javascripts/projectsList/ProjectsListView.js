var $ = require('jquery');
var Backbone = require('backbone');
var ProjectsListTpl = require('../tpl/ProjectsListTpl.hbs');

Backbone.$ = $;


module.exports = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(ProjectsListTpl(this.collection.toJSON()));

        return this;
    }
});