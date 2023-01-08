$(document).ready(function(){
	$(".wrap > dd").hide(); //dd가 열려있을때 숨김
  $(".wrap > dt").click(function(event) {
    //.click() dt를 클릭시 slideToggle 이용하여 0.5초 슬라이드 업다운
  	$(event.currentTarget).next().slideToggle(500, function() { // currentTarget으로 dt(이벤트타겟)를 눌렀을때만 slideToggle 작동
    	var $dd = $(this);//this = dd 
      var $dl = $dd.prev();
console.log(this); 
    //   console.log($dd.css("display"));
    	if ($dd.css("display") == "none") {//dd태그가 없다면 ture이기 때문에 부모태그에서 span태그를 찾아  ▼
      	$dl.find("span").html("▼");
      } else {//dd태그가 있다면 false이기 때문에 부모태그에서 span태그를 찾아 ▲
      	$dl.find("span").html("▲");
      }
    });
  });
});