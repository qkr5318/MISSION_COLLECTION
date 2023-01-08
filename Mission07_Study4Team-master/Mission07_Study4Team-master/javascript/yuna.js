
jQuery(function($){
	$(".faq_list .answer").hide();
	$(".faq_list button").click(function(){
		var answer = $(".faq_list .answer");
		var button= $(".faq_list button").index(this);
		for (i=0; i<answer.length; i++ ){
			if(i==button){
				$(answer[button]).slideToggle(100);
			} else if (i!=button){
				$(answer[i]).slideUp(100);
			}
		}
	});
});

