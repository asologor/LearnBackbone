/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 05.07.13
 * Time: 14:35
 * To change this template use File | Settings | File Templates.
 */
var EditView = Backbone.View.extend({
    tagName: 'form',
    attributes: {'action': '#'},

    template: '#editInfo',
    mod: {},

    events: {
        'click #saveButton': 'saveClicked',
        'click #closeButton': 'closeClicked'
    },

    saveClicked: function(){
        this.mod.name = this.$('#name').val();
        this.mod.lastName = this.$('#lastName').val();
        this.mod.gender = this.$('#gender').val();
        this.mod.age = this.$('#age').val();
        this.mod.phoneNumber = this.$('#phoneNumber').val();
        if( this.model.set(this.mod, {validate: true}) ){
            this.$('ul').removeClass('editError');
            this.model.trigger('saveClicked');
            this.remove();
        }else{
            this.$('ul').addClass('editError');
            var errors = this.model.validationError;
            this.$('span').empty();
            for(var el in errors){
                this.$('#'+el+'Span').text(errors[el]);
            }
        }
    },

    closeClicked: function(){
        this.model.trigger('itemClicked');
        this.remove();
    },

    render: function(){
        var template = _.template( $(this.template).html() );
        this.$el.html( template(this.model.toJSON()) );

        return this;
    }
});