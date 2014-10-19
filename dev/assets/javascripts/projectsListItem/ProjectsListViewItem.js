var $ = require('jquery');
var Backbone = require('backbone');
var ProjectsListItemTpl = require('../tpl/ProjectsListItemTpl.hbs');

Backbone.$ = $;


module.exports = Backbone.View.extend({
	events: {
   'click' : 'selectedProject'

  	},
  	selectedProject: function(e){
      if(typeof(Storage) !== "undefined")
      {
        console.log(e.target);
      }
  },
    initialize: function () {
        this.render();
    },

    render: function () {
      console.log(this.model);
      this.$el.html(ProjectsListItemTpl(this.model.toJSON()));

        return this;
    }
});