define ['jquery', 'backbone', 'underscore'], ($, Backbone, _) ->
  class InfoView extends Backbone.View
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
      @

  InfoView