modules = [ 'jquery', 'backbone', 'underscore' ]

define modules, ($, Backbone, _) ->
  View = Backbone.View.extend(
    tagName: 'li'
    className: 'item'

    template: _.template $('#user').html()

    events:
      'click': 'clicked'

    initialize: ->
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
      return @
  )

  return View