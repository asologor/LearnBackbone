modules = [ 'jquery', 'backbone', 'underscore', 'EditView' ]

define modules, ($, Backbone, _) ->
  InfoView = Backbone.View.extend(
    tagName: 'ul'
    className: 'info'
    template: _.template $('#infoTempl').html()

    events:
      'click #close': 'close'
      'click #edit': 'edit'

    close: ->
      @model.trigger 'itemClicked'
      @remove()

    edit: ->
      @model.trigger 'editClicked', @model

    render: ->
      @$el.html @template @model.toJSON()
      return this
  )

  return InfoView