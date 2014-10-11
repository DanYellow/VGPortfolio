var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./Router');


var router = new Router();
Backbone.history.start();