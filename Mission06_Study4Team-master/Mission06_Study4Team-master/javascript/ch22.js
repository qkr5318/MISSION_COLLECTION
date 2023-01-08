

$(function(){
    $(".listWrap .qa_li .question").click(function(){
    $(this).next(".answer").slideToggle(200);
    $(this).parent("li").siblings(".answer").children("p").slideUp(200);
    });
  });


