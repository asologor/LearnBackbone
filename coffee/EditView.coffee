define ['backbone', 'underscore', 'backbone-validation-amd'], (Backbone, _) ->
  class EditView extends Backbone.View
    tagName: 'form'
    attributes: 'action': '#'

    mafaka: {}
    template: _.template $('#editInfo').html()
    mod: {}

    events:
      'click #saveButton': 'saveClicked'
      'click #closeButton': 'closeClicked'

    constructor: ->
      super
      Backbone.Validation.bind @
      @model.on 'validated:invalid', @invalid, @

    invalid: (model, errors)->
      @$('ul').addClass 'editError'
      @$('span').empty()
      for key, value of errors
        @$("##{key}Span").text value

    saveClicked: ->
      @mod.name = @$('#name').val()
      @mod.lastName = @$('#lastName').val()
      @mod.gender = @$('#gender').val()
      @mod.age = @$('#age').val()
      @mod.phoneNumber = @$('#phoneNumber').val()
      if @model.set(@mod, {validate: true})
        @$('ul').removeClass 'editError'
        @remove()

    closeClicked: ->
      @model.trigger 'itemClicked'
      @remove()

    render: ->
      @$el.html @template @model.toJSON()
      @

  EditView