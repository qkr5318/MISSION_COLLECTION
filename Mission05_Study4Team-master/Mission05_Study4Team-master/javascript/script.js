// jQuery 문법 : HTML 태그를 선택한 후 그 태그에 수행할 액션을 지정함
// document.ready() 함수 사용 이유는 jQuery 코드가 "문서가 준비되기 전에 
// 실행이 먼저 되는 것을 막기 위한 것" 입니다. 하나의 웹페이지에서는 ready()를 
// 한번만 사용하는 것이 좋습니다.
// document.ready() : HTML 문서를 구조적으로 표현하는 DOM이 모두 로딩되어
//                            준비된 후 자바스크립트 문서 코드가 실행되도록 함
// $ : jQuery() 함수의 별칭(또는 축약 표현) : 선택자와 일하는 DOM 태그의
//     배열을 가진 특별한 객체를 반환함. 기본 형식 : $(선택자(select)).action

$(document).ready(function(){
    //.navi의 li 태그에 mouseover 이벤트 설정
    $('.navi > li').mouseover(function(){
        //$(this) : 현재 선택된 태그(요소)
        //find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는 태그를 찾아서 반환함 . 만약에 , children()를 사용할 경우 직계 자식 태그를 반환함
        //stop() : 현재 동작하고 있는 애니메이션 동작을 즉시 중단함. 
        //slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의 height값을 낮추거나 높여가며 슬라이드 업 또는 다운 전환되게 함. 이때, 매개변수값(인수) 500은 0.5초를 의미함
        $(this).find('.submenu').stop().slideDown(500); //500 = 500ms = 0.5s (0.5초)
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    $('.imgslide > a:gt(0)').hide();

    //setInterval(function(){}), 3000 : 일정시간마다 반복적으로 동작을 실행하게 함. 
    //3000 = 3000ms = 3s (3초)  마다 반복실행함.
    setInterval(function(){
        //가상 클래스 선택자로 부모 요소가 가지고 있는 자식 요소 중 첫번째를 선택함. imgslide의 자식 요소 a태그에서 첫 번째를 선택하여 페이드 아웃 실행함
        $('.imgslide a:first-child').fadeOut()
        //다음 요소를 선택하여 페이드인 실행함
        .next('a').fadeIn()
        // 끝에다 appendTo() 함수 내용을 붙여줌
        //즉, 선택한 요소를 .imgslide 선택자 요소의 자식 요소로 추가해 줌
        .end().appendTo('.imgslide');
    },3000);

    $(function(){
        //('.tabmenu > li > a').click : .tabmenu 요소의 자식 요소 <li>의 자식 요소인 a 태그 영역을 클릭하면
        $('.tabmenu > li > a').click(function(){
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