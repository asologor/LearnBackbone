/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 04.07.13
 * Time: 13:10
 * To change this template use File | Settings | File Templates.
 */
var UserModel = Backbone.Model.extend({
    defaults: {
        name: '-',
        lastName: '-',
        gender: '-',
        age: 0
    }
});