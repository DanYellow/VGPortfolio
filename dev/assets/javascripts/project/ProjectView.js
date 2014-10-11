var $ = require('jquery');
var Backbone = require('backbone');
var ProjectTpl = require('../tpl/ProjectTpl.hbs');


Backbone.$ = $;


module.exports = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(ProjectTpl(this.model.attributes));

        return this;
    }

});