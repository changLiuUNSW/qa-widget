define(['util/ga','jquery'], function(ga) {


  var ajax = function(opts) {
    $.ajax(opts);//$.extend(true,{ },opts));
  };

  return {
    local: {
      question: {
        get: function(context,success) {

        },
        submit: function(title,body,tags,context,success) {
          ga.event("question","submit",title);
          ajax({
            method: "post"
            dataType: "json",
            url:'question/submit/',
            data: {
              title: title,
              body: body,
              tags: tags

            },
            context: context,
            success: success
          });

        }
      }
    },
    stackOverflow: {
      question: {
        get: function(questionIds,context,success) {
          //if(!String(questionIds).match(/^\d+(;\d+)*$/)) return;

          ga.event("question","ids",questionIds);
          context.log("fetch so question: " + questionIds);
          ajax({
            //url: 'json/question.json',
            dataType: "jsonp",
            url:'//api.stackexchange.com/2.0/questions/'+questionIds,
            data: {
              filter: '!.Kza89Q*3UOKzWNXb)jYMiQwk.-fs',
              order:'desc',
              sort:'activity',
              site:'stackoverflow'
            },
            context: context,
            success: success
          });
        },
        similar: function(title,context,success) {
          ga.event("question","similar",title);
          context.log("fetching similar...");
          ajax({
            //url: '/json/similars.json',
            dataType: "jsonp",
            url:'//api.stackexchange.com/2.0/similar',
            data: {
              title: title,
              order:'desc',
              sort:'activity',
              site:'stackoverflow'
            },
            context: context,
            success: success
          });
        }
      }
    }//end stackoverflow 
  };


});