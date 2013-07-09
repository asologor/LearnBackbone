/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 09.07.13
 * Time: 12:16
 * To change this template use File | Settings | File Templates.
 */
define( [ 'jquery', 'backbone', 'underscore', 'InfoView' ], function($, Backbone, _, InfoView){
    var View = Backbone.View.extend({
        tagName: 'li',
        className: 'item',

        template: '#user',

        events: {
            'click': 'clicked'
        },

        initialize: function(){
            this.template = _.template( $(this.template).html() );
            this.model.on('change', this.repaint, this);
        },

        repaint: function(){
            this.$el.removeClass('selected');
            this.render();
        },

        clicked: function(){
            this.model.trigger('itemClicked', this.model);
            this.$el.addClass('selected');
        },

        render: function(){
            this.$el.html( this.template(this.model.toJSON()) );

            return this;
        }
    });

    return View;
});