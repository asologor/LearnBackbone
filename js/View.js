define( [ 'jquery', 'backbone', 'underscore' ], function($, Backbone, _){
    var View = Backbone.View.extend({
        tagName: 'li',
        className: 'item',

        template: _.template( $('#user').html() ),

        events: {
            'click': 'clicked'
        },

        initialize: function(){
            this.html = this.template(this.model.toJSON());
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