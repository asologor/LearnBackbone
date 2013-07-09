/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 09.07.13
 * Time: 12:07
 * To change this template use File | Settings | File Templates.
 */
define( ['backbone', 'UserModel'], function(Backbone, UserModel){
    var UsersCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return UsersCollection;
});