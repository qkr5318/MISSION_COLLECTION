// .silide li 에 index[0] 보다 큰 요소를 hide() 메서드를 활용하여 숨깁니다.
$(document).ready(function () {
	$(".slide li:gt(0)").hide();
	setInterval(function () {
		$(".slide li:first-child")
			// .slide li 에 첫번째 요소를 fadeOut() 메서드를 활용하여, fadeOut 시키며 그다음 li 요소를 fadeIn() 메서드 활용합니다.
			.fadeOut()
			.next("li")
			.fadeIn()
			.end()
			// .end 선택자로 .slide li 첫번째 요소를 선택하여 appenTo() 메서드를 적용해줍니다.
			.appendTo(".slide");
	}, 3000);
	console.log($(".slide li:gt(0)"));
});
