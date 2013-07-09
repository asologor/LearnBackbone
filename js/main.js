/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 08.07.13
 * Time: 17:26
 * To change this template use File | Settings | File Templates.
 */
require.config({
    shim: {
        'backbone' : {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },
        'underscore' : {
            exports: '_'
        }
    }
});

require([ 'jquery', 'UsersCollection', 'UsersView'], function($, UsersCollection, UsersView){
    var people = [
        {
            name: 'Вася',
            lastName: 'Петров',
            gender: 'male',
            age: 52,
            phoneNumber: '05021'
        },
        {
            name: 'Алёша',
            lastName: 'Адекватный',
            gender: 'male',
            age: 13,
            phoneNumber: '05132'
        },
        {
            name: 'Алёна',
            lastName: 'Глушко',
            gender: 'female',
            age: 124,
            phoneNumber: '05384'
        }
    ];

    var usersCollection = new UsersCollection(people);
    var usersView = new UsersView({collection: usersCollection});
    $("#users").append(usersView.render().el);
});