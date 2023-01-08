      // 스크린 990보다 작을때 on 클래스 생기면서 display-non
	  $(document).ready(function(){
		if($(this).width() < 990){
		  console.log(this);
			$(".navbar-form > div").addClass("on");
		} else {
			$(" .navbar-form > div").removeClass("on");
		}
		$(window).resize(function(){
		  if($(this).width() < 990){
		  console.log(this);
			$(".navbar-form > div").addClass("on");
		} else {
			$(".navbar-form > div").removeClass("on");
		}
		});
		});
			
$(function($){
	$(".faq_wrap .answer").hide();
	$(".faq_wrap button").click(function(){
		var answer = $(".faq_wrap .answer");
		var button= $(".faq_wrap button").index(this);
  
		for (i=0; i<answer.length; i++ ){
			if(i==button){
				$(answer[button]).slideToggle(100);
			} else if (i!=button){
				$(answer[i]).slideUp(100);
			}
    //   if ($.answer.css("display") == "none") {//dd태그가 없다면 ture이기 때문에 부모태그에서 span태그를 찾아  ▼
    //     $button.find("span").html("▼");
    //  } else {//dd태그가 있다면 false이기 때문에 부모태그에서 span태그를 찾아 ▲
    //     $button.find("span").html("▲");
    //  }
     
      
		}
	});
});

