define ['backbone'], (Backbone) ->
  class UserModel extends Backbone.Model
    defaults:
      name: '-',
      lastName: '-',
      gender: '-',
      age: 0,
      phoneNumber: '00000'

    validate: (attrs) ->
      errors = {}
      if attrs.name.length < 2
        errors.name = 'You must enter a name!'

      if attrs.lastName.length < 2
        errors.lastName = 'You must enter a last name!'

      if not isFinite(attrs.age) or attrs.age.length < 1
        errors.age = 'You must enter an age!'

      if parseInt(attrs.age) <= 0
        errors.age = 'Age must be greater than 0!'

      reg = new RegExp "^\\+?[0-9]{10,14}$"
      unless reg.test(attrs.phoneNumber)
        errors.phoneNumber = 'Invalid phone number!'

      unless _.isEmpty(errors)
        errors

  UserModel