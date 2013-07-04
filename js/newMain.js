/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 04.07.13
 * Time: 13:38
 * To change this template use File | Settings | File Templates.
 */
function main(){
    var people = [
        {
            name: 'Вася',
            lastName: 'Петров',
            gender: 'male',
            age: 52
        },
        {
            name: 'Алёша',
            lastName: 'Адекватный',
            gender: 'male',
            age: 13
        },
        {
            name: 'Алёна',
            lastName: 'Глушко',
            gender: 'female',
            age: 124
        }
    ];

    var usersCollection = new UsersCollection(people);
    var usersView = new UsersView({collection: usersCollection});

    $("body").append(usersView.render().el);
}

$(main);