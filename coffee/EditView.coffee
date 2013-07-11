define ['backbone', 'underscore'], (Backbone, _) ->
  class EditView extends Backbone.View
    tagName: 'form'
    attributes: 'action': '#'

    template: _.template $('#editInfo').html()
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
      if @model.set @mod, {validate: true}
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
      @$el.html template @model.toJSON()
      @

  EditView