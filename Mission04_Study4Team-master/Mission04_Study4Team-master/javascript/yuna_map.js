window.onload = function () {
	var mapContainer = document.getElementById("map"),
		mapOption = {
			center: new kakao.maps.LatLng(37.52258524107889, 126.87405658065883), // 지도의 중심좌표
			level: 4, // 지도의 확대 레벨
		};

	var mapContainer = document.getElementById("map"),
		mapOption = {
			center: new kakao.maps.LatLng(37.52258524107889, 126.87405658065883), // 지도의 중심좌표
			level: 4, // 지도의 확대 레벨
		};

	var map = new kakao.maps.Map(mapContainer, mapOption);

	var imageSrc = "https://i.ibb.co/86n9mTd/marker.png", // 마커이미지의 주소 입니다.
		imageSize = new kakao.maps.Size(64, 69),
		imageOption = { offset: new kakao.maps.Point(27, 69) };

	var markerImage = new kakao.maps.MarkerImage(
			imageSrc,
			imageSize,
			imageOption
		),
		markerPosition = new kakao.maps.LatLng(
			37.52258524107889,
			126.87405658065883
		);

	var marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	marker.setMap(map);

	var content =
		'<div class="customoverlay">' +
		'  <a href="https://map.kakao.com/?q=%EC%84%9C%EC%9A%B8%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%EB%AA%A9%EB%8F%99%EB%8F%99%EB%A1%9C12%EA%B8%B8%2024" target="_blank">' +
		'    <span class="title">미생</span>' +
		"  </a>" +
		"</div>";

	var position = new kakao.maps.LatLng(37.52258524107889, 126.87405658065883);

	var customOverlay = new kakao.maps.CustomOverlay({
		map: map,
		position: position,
		content: content,
		yAnchor: 1,
	});
};
