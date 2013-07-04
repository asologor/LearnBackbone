/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 04.07.13
 * Time: 13:37
 * To change this template use File | Settings | File Templates.
 */
var View = Backbone.View.extend({
    tagName: 'li',
    className: 'item',

    template: '#user',

    events: {
        'click': 'clicked'
    },

    initialize: function(){
        this.template = _.template( $(this.template).html() );
    },

    clicked: function(){
        this.model.trigger('click');
        this.$el.addClass('selected');
        var infoView = new InfoView({model: this.model, parentView: this});
        $('#information').html(infoView.render().el);
    },

    render: function(){
        this.$el.html( this.template(this.model.toJSON()) );

        return this;
    }
});