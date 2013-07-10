(function() {
    var modules;

    modules = ['backbone', 'UserModel'];

    define(modules, function(Backbone, UserModel) {
        var UsersCollection;
        UsersCollection = Backbone.Collection.extend({
            model: UserModel
        });
        return UsersCollection;
    });

}).call(this);