
// faq js
// $(function(){
//     $(".listWrap .qa_li .question").click(function(){
//     $(this).next(".answer").slideToggle(200);
//     $(this).parent("li").siblings(".answer").children("p").slideUp(200);
//     });
//   });




//링크 hover 적용//
$(".bigmap").hover(function(){
$(this).css("color","red");
});

$(document).ready(function(){
    //.navi의 li 태그에 mouseover 이벤트 설정
    $('.navi > li').mouseover(function(){
    
        $(this).find('.submenu').stop().slideDown(500); //500 = 500ms = 0.5s (0.5초)
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

  

    $(function(){
        //('.tabmenu > li > a').click : .tabmenu 요소의 자식 요소 <li>의 자식 요소인 a 태그 영역을 클릭하면
        $('.submenu > li > a').click(function(){
            //(this).parent().addClass("active") : 현재 태그의 부모 태그를 찾아 'active'클래스를 추가해줌.
            //a 태그의 부모 태그는 li이므로 ,클릭하면 li에 'active'클래스를 추가해줍니다.
            $(this).parent().addClass("active")
            //.siblings().removeClass("active") : 다른 형제 태그를 찾은 후 'active' 클래스를 삭제해 줍니다.
            .siblings().removeClass("active")
            // return false : 클릭 이벤트 처리를 중단하고 함수를 호출한 곳으로
            // 즉시 돌아가도록 함. 이것은 HTML에서 태그들은 중첩되어 있기 때문에
            // <a> 태그를 클릭하면 이 요소를 감싸고 있는 부모 태그들도 클릭한
            // 것처럼 이벤트에 반응하게 됨. 이런 것을 이벤트 버블링(Event bubbling)이라고 함.
            // 따라서, 현재 이벤트를 중지시키고, 그 이벤트가 부모 태그에 전달되지 않도록
            // 중지하기 위해서 return false를 사용함.
            // 단, return false를 사용하면 자바스크립트 해석기가 이 구문을 만나는 즉시
            // 코드 실행을 중지하기 때문에 return false 다음에 다른 문장을 쓰지 않도록 주의가 필요함.
            return false;
        });
    });


      //$(".notice li:first").click 의미는 ".notice 요소의 후손 요소 중에서 첫번째 요소를 클릭하면"
    $(".notice li:first").click(function(){
        //#modal과 일치하는 요소에 'active' 클래스를 추가함
        $("#layer").addClass("active");
    });

    //.btn 요소를 클릭하면
    $(".btn").click(function(){
        //#modal의 'active'클래스를 삭제함
        $("#layer").removeClass("active");
    });

});

var options = { videoId: '8YE7o5hrkQc', start: 3 };


// 질문


$(function(){
    $(".listWrap .qa_li .question").click(function(){
    $(this).next(".answer").slideToggle(200);
    $(this).parent("li").siblings(".answer").children("p").slideUp(200);
    });
  });


