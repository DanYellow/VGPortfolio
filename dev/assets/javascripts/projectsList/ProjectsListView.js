var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');


var ProjectsListTpl = require('../tpl/ProjectsListTpl.hbs');

var ProjectsListViewItem = require('../projectsListItem/ProjectsListViewItem');


Backbone.$ = $;



module.exports = Backbone.View.extend({
  tagName: 'ul',
	events: {
   'click' : 'selectedProject'
  },
  initialize: function () {

      this.render();
  },

  render: function () {
/*      var _that = this;
      _.each(this.collection.models, function (project)
      {
        _that.$el.html(new ProjectsListViewItem({model:project}).render());
      })*/

      return this;
  }
});