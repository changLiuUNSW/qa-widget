define(['backbone'], function() {

  return Backbone.Model.extend({

    name: "QuestionModel",
    defaults: {
      'score'       : 0,
      'source'      : 'local',
      'tags'        : []
    },
    initialize: function() {
      this.log("init")
    }
  });

});