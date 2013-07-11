define ['backbone', 'underscore', 'View'], (Backbone, _, View) ->
  class UsersView extends Backbone.View
    tagName: 'ol'
  
    deselect: ->
      @$('.selected').removeClass 'selected'
  
    render: ->
      @collection.each( (user) ->
        userView = new View {model: user}
        @$el.append userView.render().el
      , @)
      @
  
  UsersView