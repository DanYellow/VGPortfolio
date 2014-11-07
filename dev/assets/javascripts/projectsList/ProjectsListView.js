var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var ProjectsListTpl = require('../tpl/ProjectsListTpl.hbs');
var ProjectsListItemTpl = require('../tpl/ProjectsListItemTpl.hbs'); // Unique thumb

Backbone.$ = $;


module.exports = Backbone.View.extend({
    initialize: function () {
        this.render();
    },

    render: function () {
        var _that = this;
        _that.$el.empty();
        _.each(this.collection.toJSON(), function(model){
          _that.$el.append(ProjectsListItemTpl(model));
        });
        return this;
    }
});