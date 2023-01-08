$(document).ready(function(){
    // $(".headJfnt").delay(1000).animate() 의미는 .txt1에 적용된 animate() 메서드가 1000ms(1s = 1초)후에 작동함을 의미합니다.
    $(".headJfnt").delay(300).animate({opacity:1, top:80}, 800, "swing",
    function(){
        $(".headJfnt_img").delay(500).animate({opacity:0.8, top:0}, 800, "swing");
    })
});


window.addEventListener('resize',
  function(){
  map.setCenter(new kakao.maps.LatLng(37.503019, 126.879023));
});


   
  


  