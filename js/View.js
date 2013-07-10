(function() {
    var modules;

    modules = ['jquery', 'backbone', 'underscore'];

    define(modules, function($, Backbone, _) {
        var View;
        View = Backbone.View.extend({
            tagName: 'li',
            className: 'item',
            template: _.template($('#user').html()),
            events: {
                'click': 'clicked'
            },
            initialize: function() {
                this.html = this.template(this.model.toJSON());
                return this.model.on('change', this.repaint, this);
            },
            repaint: function() {
                this.$el.removeClass('selected');
                return this.render();
            },
            clicked: function() {
                this.model.trigger('itemClicked', this.model);
                return this.$el.addClass('selected');
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
        return View;
    });

}).call(this);