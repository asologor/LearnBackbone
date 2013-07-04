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

    events: {
        'click #close': 'close'
    },

    close: function(){
        $(".selected").removeClass('selected');
        $('#information').empty();
    },

    render: function(){
        var template = _.template( $(this.template).html() );
        this.$el.html( template(this.model.toJSON()) );

        return this;
    }
});