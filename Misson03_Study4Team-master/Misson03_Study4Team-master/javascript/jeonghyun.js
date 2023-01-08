$(document).ready(function(){
    $(".faq .question .q").click(function(){
        if($(this).siblings(".a").hasClass("on")){
                $(this).siblings(".a").stop().slideUp().removeClass("on");
                $(this).css("border","").css("border-radius","").css("font-weight","");
        }

        else{
            $(this).siblings(".a").stop().slideDown().addClass("on");
            $(this).parents().siblings().children(".a").removeClass("on").slideUp();
            $(this).parents().siblings().children(".q").css("border","").css("border-radius","").css("font-weight","");
            $(this).css("border","1px solid black").css("border-radius","3px").css("font-weight","bold");
        }
    });
})
    
    
    