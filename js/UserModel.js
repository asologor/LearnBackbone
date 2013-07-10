/**
 * Created with JetBrains WebStorm.
 * User: Андрей
 * Date: 08.07.13
 * Time: 17:50
 * To change this template use File | Settings | File Templates.
 */
define( ['backbone'], function(Backbone){

    var UserModel = Backbone.Model.extend({
        defaults: {
            name: '-',
            lastName: '-',
            gender: '-',
            age: 0,
            phoneNumber: '00000'
        },

        validate: function( attrs ){
            var errors = {};
            if( attrs.name.length < 2 ){
                errors.name = 'You must enter a name!';
            }
            if( attrs.lastName.length < 2 ){
                errors.lastName = 'You must enter a last name!';
            }
            if( !isFinite(attrs.age) || attrs.age.length < 1){
                errors.age = 'You must enter an age!';
            }
            if( parseInt(attrs.age) <= 0){
                errors.age = 'Age must be greater than 0!';
            }
            var reg = new RegExp("^\\+?[0-9]{10,14}$");
            if( !reg.test(attrs.phoneNumber) ){
                errors.phoneNumber = 'Invalid phone number!';
            }

            if(!_.isEmpty(errors)){
                return errors;
            }
        }
    });

    return UserModel;
});