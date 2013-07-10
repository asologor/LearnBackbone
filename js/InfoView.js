define( [ 'jquery', 'backbone', 'underscore', 'EditView' ], function($, Backbone, _){
    var InfoView = Backbone.View.extend({
        tagName: 'ul',
        className: 'info',
        template: _.template( $('#infoTempl').html() ),

        events: {
            'click #close': 'close',
            'click #edit': 'edit'
        },

        close: function(){
            this.model.trigger('itemClicked');
            this.remove();
        },

        edit: function(){
            this.model.trigger('editClicked', this.model);
        },

        render: function(){
            this.$el.html( this.template(this.model.toJSON()) );

            return this;
        }
    });

    return InfoView;
});