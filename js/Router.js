define( ['jquery', 'backbone', 'underscore',
    'UsersCollection', 'UsersView', 'InfoView', 'EditView'], function($, Backbone, _, UsersCollection, UsersView, InfoView, EditView){
    var Router = Backbone.Router.extend({
        routes: {
            ''          :   'index',
            'info/:id'  :   'info',
            'edit/:id'  :   'edit'
        },

        usersCollection: {},

        Views: {
            usersView: null,
            infoView: null,
            editView: null
        },

        initialize: function(people){
            this.usersCollection = new UsersCollection(people);
            Backbone.history.start();

            this.listenTo(this.usersCollection, 'itemClicked', this.itemClicked);
            this.listenTo(this.usersCollection, 'editClicked', this.editClicked);
        },

        itemClicked: function(model){
            this.Views.usersView.deselect();
            if( model ){
                var modelId = this.usersCollection.indexOf(model);
                this.navigate('info/' + modelId, true);
            }
        },

        editClicked: function(model){
            var modelId = this.usersCollection.indexOf(model);
            this.navigate('edit/' + modelId, true);
        },

        index: function(){
            if( !this.Views.usersView ){
                this.Views.usersView = new UsersView({collection: this.usersCollection});
                $("#users").append(this.Views.usersView.render().el);
            }
        },

        info: function(id){
            if( !this.Views.usersView ) this.index();
            var model = this.usersCollection.at(id);
            this.Views.infoView = new InfoView({model: model});
            $('#information').html(this.Views.infoView.render().el);
        },

        edit: function(id){
            if( !this.Views.usersView ) this.index();
            this.Views.infoView.remove();
            var model = this.usersCollection.at(id);
            this.Views.editView = new EditView({model: model});
            $('#information').html(this.Views.editView.render().el);
        }
    });

    return Router;
});