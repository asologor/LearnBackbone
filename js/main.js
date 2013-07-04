/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 04.07.13
 * Time: 12:18
 * To change this template use File | Settings | File Templates.
 */
function main(){
    var UserModel = Backbone.Model.extend({
        defaults: {
            name: '-',
            lastName: '-',
            gender: '-',
            age: 0
        }
    });

    var UsersCollection = Backbone.Collection.extend({
        model: UserModel
    });

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


    var View = Backbone.View.extend({
        tagName: 'li',

        template: '#user',

        render: function(){
            var template = _.template( $(this.template).html() );
            this.$el.html( template(this.model.toJSON()) );

            return this;
        }
    });

    var UsersView = Backbone.View.extend({
        tagName: 'ol',

        render: function(){
            this.collection.each(function(user){
                var userView = new View({model: user});
                this.$el.append(userView.render().el);

                return this;
            }, this);
        }
    });

    var usersCollection = new UsersCollection(people);
    var usersView = new UsersView({collection: usersCollection});
    usersView.render();
    $("body").append(usersView.el);
}

$(main);