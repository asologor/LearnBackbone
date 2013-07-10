modules = [ 'backbone', 'underscore', 'View' ]

define modules, (Backbone, _, View) ->
  UsersView = Backbone.View.extend(
    tagName: 'ol'
  
    deselect: ->
      @$('.selected').removeClass 'selected'
  
    render: ->
      @collection.each( (user) ->
        userView = new View {model: user}
        @$el.append userView.render().el
      , this)
      return this
  )
  
  return UsersView