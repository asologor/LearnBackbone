/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 09.07.13
 * Time: 12:18
 * To change this template use File | Settings | File Templates.
 */
define( [ 'jquery', 'backbone', 'underscore', 'View' ], function($, Backbone, _, View){
    var UsersView = Backbone.View.extend({
        tagName: 'ol',

        render: function(){
            this.collection.each(function(user){
                var userView = new View({model: user});
                this.$el.append(userView.render().el);
            }, this);
            return this;
        }
    });

    return UsersView;
});