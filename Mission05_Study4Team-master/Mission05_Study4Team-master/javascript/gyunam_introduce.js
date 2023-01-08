
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

  
