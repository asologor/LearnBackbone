define ['backbone'], (Backbone) ->
  class UserModel extends Backbone.Model
    defaults:
      name: '-',
      lastName: '-',
      gender: '-',
      age: 0,
      phoneNumber: '00000'

    validation:
      name:
        required: true
        minLength: 2
        msg: 'You must enter a name!'

      lastName:
        required: true
        minLength: 2
        msg: 'You must enter a last name!'

      age:
        [
          required: true
          msg: 'You must enter an age!'
        ,
          min: 1
          msg: 'Age must be greater than 0!'
        ]

      phoneNumber:
        required: true
        pattern: "^\\+?[0-9]{10,14}$"
        msg: 'Invalid phone number!'