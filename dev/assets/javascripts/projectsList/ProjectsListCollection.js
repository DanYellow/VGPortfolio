var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;


var Project = Backbone.Model.extend();


module.exports = Backbone.Collection.extend({
    url: App.apiPath,
    model: Project
});