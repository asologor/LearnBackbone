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
        this.listenTo(this.collection, 'click', this.clicked);
    },

    clicked: function(){
        this.$('.selected').removeClass('selected');
    },

    render: function(){
        this.collection.each(function(user){
            var userView = new View({model: user});
            this.$el.append(userView.render().el);
        }, this);
        return this;
    }
});