var $ = require('jquery');
var Backbone = require('backbone');
var ProjectTpl = require('../tpl/ProjectTpl.hbs'); 

var preloadjs = require('PreloadJS');
console.log(preloadjs);


Backbone.$ = $;


module.exports = Backbone.View.extend({

    initialize: function () {
        this.render(); 

        var _this = this;
        $.ajaxSetup({
             beforeSend: _this.showLoader,
             complete: _this.hideLoader
        }); 
    },
 
    render: function () {
        this.$el.html(ProjectTpl(this.model.attributes));
/*        $("img").unveil(0, function() {
            console.log("foo");
          $(this).load(function() {
            this.style.opacity = 1;
          });  
        });*/
        this.$el.removeAttr('class').addClass(this.model.attributes.category);

        return this;
    },

    showLoader: function () {
        $("#loader").show();
    },

    hideLoader: function () {
        $("#loader").hide();
    }

});