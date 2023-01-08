  // 스크린 990보다 작을때 on 클래스 생기면서 display-non
  $(document).ready(function(){
    if($(this).width() < 990){
      console.log(this);
        $(".navbar-form > div").addClass("logo2");
    } else {
        $(" .navbar-form > div").removeClass("logo2");
    }
    $(window).resize(function(){
      if($(this).width() < 990){
      console.log(this);
        $(".navbar-form > div").addClass("logo2");
    } else {
        $(".navbar-form > div").removeClass("logo2");
    }
    });
    
     
    
    });
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
    // alert 아이디 중복 버튼 추후 아이디수 및 검수 수정예정
   
    
    });
        
    


    //아이디 영역
    $(document).ready(function(){
      $(".id_overlap button").on("click", function id(){
        var i1 = document.getElementById("id").value;
        if(i1.length < 8) {
          alert('입력한 글자가 8글자 이상이어야 합니다.');
          return false;
      }else{
        alert("사용할 수 있는 ID 입니다.")
        return true
      }
       
      
      });
    })
    // 비밀번호 배열값 확인 및 논리연산자로 문자 확인
    function test() {
      var p1 = document.getElementById('id').value;
      var p2 = document.getElementById('pw1').value;
      var p3 = document.getElementById('pw2').value;
      var p4 = document.getElementById('name').value;
      
      if(p1 == "") {
        alert('ID를 입력해주세요');
        return false;
      }else if(p2 == ""){
        alert("비밀번호를 입력해주세요")
        return false;
      }else if( p2.length < 6 ) {
        alert("입력한 글자가 6글자 이상이어야 합니다.");
        return false;
      }else if(p2 != p3){
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      }else if(p4 == ""){
       alert("이름을 입력해주세요");
       return false;
      }else {
       alert("가입이 완료되었습니다.")
       return false;
      }
    
  }
 
 
  
