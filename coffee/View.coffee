define ['jquery', 'backbone', 'underscore'], ($, Backbone, _) ->
  class View extends Backbone.View
    tagName: 'li'
    className: 'item'

    template: _.template $('#user').html()

    events:
      'click': 'clicked'

    constructor: ->
      super
      @html = @template(@model.toJSON())
      @model.on('change', @repaint, this)

    repaint: ->
      @$el.removeClass('selected')
      @render()

    clicked: ->
      @model.trigger 'itemClicked', @model
      @$el.addClass 'selected'

    render: ->
      @$el.html( @template(@model.toJSON()) )
      @

  View