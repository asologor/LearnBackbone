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

require([ 'jquery', 'UsersCollection', 'UsersView', 'Router'], function($, UsersCollection, UsersView, Router){
    var users = [
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

    new Router(users);
});