modules = ['backbone', 'underscore']

define modules, (Backbone, _) ->
  EditView = Backbone.View.extend(
    tagName: 'form'
    attributes: {'action': '#'}

    template: '#editInfo'
    mod: {}

    events:
      'click #saveButton': 'saveClicked',
      'click #closeButton': 'closeClicked'

    saveClicked: ->
      @mod.name = @$('#name').val()
      @mod.lastName = @$('#lastName').val()
      @mod.gender = @$('#gender').val()
      @mod.age = @$('#age').val()
      @mod.phoneNumber = @$('#phoneNumber').val()
      if @model.set(@mod, {validate: true})
        @$('ul').removeClass 'editError'
        @model.trigger 'saveClicked'
        @remove()
      else
        @$('ul').addClass 'editError'
        errors = @model.validationError
        @$('span').empty()
        for key, value of errors
          @$("##{key}Span").text value

    closeClicked: ->
      @model.trigger 'itemClicked'
      @remove()

    render: ->
      template = _.template $(@template).html()
      @$el.html template @model.toJSON()

      return this
  )

  return EditView