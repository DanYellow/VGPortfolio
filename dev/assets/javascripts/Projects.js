var Projects = Backbone.Collection.extend({
    model: Project,
    url: App.apiPath
});


/*window.Project = Backbone.Model.extend({
    urlRoot: "http://caroleoreb.fr/api.json", // Lien dans lequel on va inscrire / chercher les donnÃ©es
});

window.Projects = Backbone.Collection.extend({
    model: Project,
    url: "http://caroleoreb.fr/api.json",
    comparator: function(collection){
        var date = new Date(collection.get('realisedAt'));
        return date.getTime();
    }
});*/