$(document).ready(function(){
    $(".navi>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    })
});


window.onload = function(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            // 지도의 중심좌표
            center: new kakao.maps.LatLng(37.50311297490148, 126.87901172363914), 
            // 지도의 확대 레벨
            level: 2
        };
    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.50311297490148, 126.87901172363914); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);    
}