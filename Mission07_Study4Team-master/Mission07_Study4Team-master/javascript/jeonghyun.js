                       
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
    
    
    


 
$(document).ready(function(){
    // $(".headJfnt").delay(1000).animate() 의미는 .txt1에 적용된 animate() 메서드가 1000ms(1s = 1초)후에 작동함을 의미합니다.
    $(".headJfnt").delay(300).animate({opacity:1, top:80}, 800, "swing",
    function(){
        $(".headJfnt_img").delay(500).animate({opacity:0.8, top:0}, 800, "swing");
    })
});
