// parllaxScroll 영역

$(function () {
	//브라우저 창의 크기를 조절했을때 내용 전체가 브라우저 창의 너비와 높이가 딱맞게 표시되도록 jQuery를 사용해 브라우저 창의 크기를 알아낸 후 현재 문서의 너비와 높이로 지정해야합니다. 그러면, 섹션이 화면에 가득차게 만드는 효과구현이 가능합니다.
	$(window).resize(function () {
		$(".container").width($(window).width()).height($(window).height());
	});

	setTimeout(function () {
		$(window).resize();
	}, 1000);

	//.bg-holder 요소에서 paralloxScroll을 실행합니다.

	$(".bg-holder").parallaxScroll({
		//parallax-scroll 플러그인의 옵션릉 friction 옵션 하나뿐입니다. 이 옵션 값은 0에서 1사이의 소수로 표시하는데, 0이면 배경 이미지가 콘텐츠를 따라 스크롤이 되고, 1이면 배경이 완전히 고정되어 콘텐츠만 스크롤 합니다. 0과 1사이의 값을 적절히 사용하면 콘텐츠와 배경의 스크롤 속도를 다르게 해서 페럴렉스 효과를 낼 수 있습니다.
		friction: 0.3,
	});
});

//tubular 영역
$("document").ready(function () {
	var options = { videoId: "CwLWV3k9h2Y", mute: true };
	$("#video_wrapper").tubular(options);
	// f-UGhWj1xww cool sepia hd
	// 49SKbS7Xwf4 beautiful barn sepia
});

//vegas 영역
$(document).ready(function () {
	$("body").vegas({
		delay: 2000,
		timer: false,
		shuffle: true,
		firstTransition: "fade",
		firstTransitionDuration: 5000,
		transition: "slideDown2",
		transitionDuration: 2000,
		slides: [
			{ src: "../resources/images/yn_vegas01.jpg" },
			{ src: "../resources/images/yn_vegas02.jpg" },
			{ src: "../resources/images/yn_vegas05.jpg" },
			{ src: "../resources/images/yn_vegas04.jpg" },
		],
	});
});
