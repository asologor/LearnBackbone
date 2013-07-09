/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 04.07.13
 * Time: 15:24
 * To change this template use File | Settings | File Templates.
 */
var InfoView = Backbone.View.extend({
    tagName: 'ul',
    template: '#infoTempl',
    className: 'info',

    events: {
        'click #close': 'close',
        'click #edit': 'edit'
    },

    close: function(){
        this.model.trigger('itemClicked');
        this.remove();
    },

    edit: function(){
        var editView = new EditView({model: this.model});
        $('#information').html(editView.render().el);
        this.remove();
    },

    render: function(){
        var template = _.template( $(this.template).html() );
        this.$el.html( template(this.model.toJSON()) );

        return this;
    }
});