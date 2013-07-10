(function() {
    var modules;

    modules = ['jquery', 'backbone', 'underscore', 'EditView'];

    define(modules, function($, Backbone, _) {
        var InfoView;
        InfoView = Backbone.View.extend({
            tagName: 'ul',
            className: 'info',
            template: _.template($('#infoTempl').html()),
            events: {
                'click #close': 'close',
                'click #edit': 'edit'
            },
            close: function() {
                this.model.trigger('itemClicked');
                return this.remove();
            },
            edit: function() {
                return this.model.trigger('editClicked', this.model);
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
        return InfoView;
    });

}).call(this);