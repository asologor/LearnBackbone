(function() {
    var modules;

    modules = ['backbone', 'underscore'];

    define(modules, function(Backbone, _) {
        var EditView;
        EditView = Backbone.View.extend({
            tagName: 'form',
            attributes: {
                'action': '#'
            },
            template: '#editInfo',
            mod: {},
            events: {
                'click #saveButton': 'saveClicked',
                'click #closeButton': 'closeClicked'
            },
            saveClicked: function() {
                var errors, key, value, _results;
                this.mod.name = this.$('#name').val();
                this.mod.lastName = this.$('#lastName').val();
                this.mod.gender = this.$('#gender').val();
                this.mod.age = this.$('#age').val();
                this.mod.phoneNumber = this.$('#phoneNumber').val();
                if (this.model.set(this.mod, {
                    validate: true
                })) {
                    this.$('ul').removeClass('editError');
                    this.model.trigger('saveClicked');
                    return this.remove();
                } else {
                    this.$('ul').addClass('editError');
                    errors = this.model.validationError;
                    this.$('span').empty();
                    _results = [];
                    for (key in errors) {
                        value = errors[key];
                        _results.push(this.$("#" + key + "Span").text(value));
                    }
                    return _results;
                }
            },
            closeClicked: function() {
                this.model.trigger('itemClicked');
                return this.remove();
            },
            render: function() {
                var template;
                template = _.template($(this.template).html());
                this.$el.html(template(this.model.toJSON()));
                return this;
            }
        });
        return EditView;
    });

}).call(this);