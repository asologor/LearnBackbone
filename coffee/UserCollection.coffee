define ['backbone', 'UserModel'] , (Backbone, UserModel) ->
  class UsersCollection extends Backbone.Collection
    model: UserModel

  UsersCollection