(function() {
    var modules;

    modules = ['backbone', 'underscore', 'View'];

    define(modules, function(Backbone, _, View) {
        var UsersView;
        UsersView = Backbone.View.extend({
            tagName: 'ol',
            deselect: function() {
                return this.$('.selected').removeClass('selected');
            },
            render: function() {
                this.collection.each(function(user) {
                    var userView;
                    userView = new View({
                        model: user
                    });
                    return this.$el.append(userView.render().el);
                }, this);
                return this;
            }
        });
        return UsersView;
    });

}).call(this);