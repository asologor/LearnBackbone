define( [ 'backbone', 'underscore', 'View' ], function(Backbone, _, View){
    var UsersView = Backbone.View.extend({
        tagName: 'ol',

        deselect: function(){
            this.$('.selected').removeClass('selected');
        },

        render: function(){
            this.collection.each(function(user){
                var userView = new View({model: user});
                this.$el.append(userView.render().el);
            }, this);
            return this;
        }
    });

    return UsersView;
});