modules = ['backbone', 'UserModel']

define modules , (Backbone, UserModel) ->
  UsersCollection = Backbone.Collection.extend(
    model: UserModel
  )
  return UsersCollection