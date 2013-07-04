/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 04.07.13
 * Time: 13:37
 * To change this template use File | Settings | File Templates.
 */
var View = Backbone.View.extend({
    tagName: 'li',

    template: '#user',

    render: function(){
        var template = _.template( $(this.template).html() );
        this.$el.html( template(this.model.toJSON()) );

        return this;
    }
});