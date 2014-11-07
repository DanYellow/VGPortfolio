var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ProjectTpl = require('../tpl/ProjectTpl.hbs');

var PreloadJS = require('PreloadJS');
var preload = new createjs.LoadQueue();


Backbone.$ = $;


module.exports = Backbone.View.extend({

    initialize: function () {
        var _this = this;
        preload.addEventListener("fileload", _this.hideLoader());
        _.each(this.model.attributes.images, function(val){
            preload.loadFile(val);
        });

        $.ajaxSetup({
             beforeSend: _this.showLoader
        }); 
    },

    render: function () {
        this.$el.html(ProjectTpl(this.model.attributes));
        this.$el.removeAttr('class').addClass(this.model.attributes.category);

        return this;
    },

    showLoader: function () {
        $("#loader").show();
    },

    hideLoader: function () {
        this.render();
        $("#loader").hide();
    }

});