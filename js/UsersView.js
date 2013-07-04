/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 04.07.13
 * Time: 13:37
 * To change this template use File | Settings | File Templates.
 */
var UsersView = Backbone.View.extend({
    tagName: 'ol',

    initialize: function(){
        this.collection.on('click', this.clicked, this);
    },

    clicked: function(){
        this.$('.selected').removeClass('selected');
    },

    render: function(){
        console.log(this);
        this.collection.each(function(user){
            var userView = new View({model: user});
            this.$el.append(userView.render().el);
        }, this);
        return this;
    }
});