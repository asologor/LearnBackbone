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
            lastName: 'Залупупкин',
            gender: 'Мужиг',
            age: 52
        },
        {
            name: 'Алёша',
            lastName: 'Адекватный',
            gender: 'Мужиг',
            age: 13
        },
        {
            name: 'Алёна',
            lastName: 'Жопова',
            gender: 'Баба',
            age: 124
        }
    ];

    var usersCollection = new UsersCollection(people);
    var usersView = new UsersView({collection: usersCollection});
    usersView.render();
    $("body").append(usersView.el);
}

$(main);