define ['jquery', 'backbone', 'UsersCollection'
        'UsersView', 'InfoView', '../js/EditView'],
($, Backbone, UsersCollection, UsersView, InfoView, EditView) ->
  class Router extends Backbone.Router
    routes:
      ''          :   'index'
      'info/:id'  :   'info'
      'edit/:id'  :   'edit'

    usersCollection: {}

    Views:
      usersView: null
      infoView: null
      editView: null


    constructor: (people) ->
      super
      @usersCollection = new UsersCollection people
      Backbone.history.start()
      @listenTo @usersCollection, 'itemClicked', @itemClicked
      @listenTo @usersCollection, 'editClicked', @editClicked

    itemClicked: (model) ->
      @Views.usersView.deselect()
      if model
        modelId = @usersCollection.indexOf model
        @navigate "info/#{modelId}", true

    editClicked: (model) ->
      modelId = @usersCollection.indexOf model
      @navigate "edit/#{modelId}", true

    index: ->
      unless @Views.usersView
        @Views.usersView = new UsersView {collection: @usersCollection}
        $("#users").append @Views.usersView.render().el

    info: (id) ->
      unless @Views.usersView
        @index()
      model = @usersCollection.at id
      @Views.infoView = new InfoView model: model
      $('#information').html @Views.infoView.render().el

    edit: (id)->
      unless @Views.usersView
        @index()
      @Views.infoView.remove()
      model = @usersCollection.at id
      @Views.editView = new EditView model: model
      $('#information').html @Views.editView.render().el

  Router