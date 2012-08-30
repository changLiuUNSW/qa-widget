define(['lists/questions','views/question','backbone'],
  function(QuestionsList,QuestionView){

  return Backbone.View.extend({
  	name: "QuestionsView",

    el: $("#questions"),

    initialize: function() {
      this.log("init");

      this.list = new QuestionsList();
      this.list.bind('reset', this.addAll, this);
      this.list.fetch();
    },

    render: function(){
      this.log("render");
    },

    addAll: function() {
      //this.$el.html('');
      this.list.each(this.addOne,this);
    },

    addOne: function(model) {
      var questionView = new QuestionView({model: model});
      this.$el.append(questionView.render());
    }
    
  });
});
