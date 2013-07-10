(function() {
  var modules;

  modules = ['jquery', 'backbone', 'underscore', 'UsersCollection', 'UsersView', 'InfoView', 'EditView'];

  define(modules, function($, Backbone, _, UsersCollection, UsersView, InfoView, EditView) {
    var Router;
    Router = Backbone.Router.extend({
      routes: {
        '': 'index',
        'info/:id': 'info',
        'edit/:id': 'edit'
      },
      usersCollection: {},
      Views: {
        usersView: null,
        infoView: null,
        editView: null
      },
      initialize: function(people) {
        this.usersCollection = new UsersCollection(people);
        Backbone.history.start();
        this.listenTo(this.usersCollection, 'itemClicked', this.itemClicked);
        return this.listenTo(this.usersCollection, 'editClicked', this.editClicked);
      },
      itemClicked: function(model) {
        var modelId;
        this.Views.usersView.deselect();
        if (model) {
          modelId = this.usersCollection.indexOf(model);
          return this.navigate("info/" + modelId, true);
        }
      },
      editClicked: function(model) {
        var modelId;
        modelId = this.usersCollection.indexOf(model);
        return this.navigate("edit/" + modelId, true);
      },
      index: function() {
        if (!this.Views.usersView) {
          this.Views.usersView = new UsersView({
            collection: this.usersCollection
          });
          return $("#users").append(this.Views.usersView.render().el);
        }
      },
      info: function(id) {
        var model;
        if (!this.Views.usersView) {
          this.index();
        }
        model = this.usersCollection.at(id);
        this.Views.infoView = new InfoView({
          model: model
        });
        return $('#information').html(this.Views.infoView.render().el);
      },
      edit: function(id) {
        var model;
        if (!this.Views.usersView) {
          this.index();
        }
        this.Views.infoView.remove();
        model = this.usersCollection.at(id);
        this.Views.editView = new EditView({
          model: model
        });
        return $('#information').html(this.Views.editView.render().el);
      }
    });
    return Router;
  });

}).call(this);