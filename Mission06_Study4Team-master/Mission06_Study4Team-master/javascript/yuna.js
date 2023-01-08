// 비밀번호 재확인
function pwcf() {
	var pw = document.getElementById("pw1").value;
	var rpw = document.getElementById("pw2").value;
	if (pw !== rpw) {
		alert("비밀번호가 일치하지 않습니다");
		return false;
	}
}

// 주소api
function b_lPostcode() {
	new daum.Postcode({
		oncomplete: function (data) {
			var roadAddr = data.roadAddress;
			var extraRoadAddr = "";
			if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
				extraRoadAddr += data.bname;
			}
			if (data.buildingName !== "" && data.apartment === "Y") {
				extraRoadAddr +=
					extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
			}
			if (extraRoadAddr !== "") {
				extraRoadAddr = " (" + extraRoadAddr + ")";
			}
			document.getElementById("postcode").value = data.zonecode;
			document.getElementById("roadAddress").value = roadAddr;
			document.getElementById("jibunAddress").value = data.jibunAddress;
			if (roadAddr !== "") {
				document.getElementById("extraAddress").value = extraRoadAddr;
			} else {
				document.getElementById("extraAddress").value = "";
			}
			var guideTextBox = document.getElementById("guide");
			if (data.autoRoadAddress) {
				var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
				guideTextBox.innerHTML = "(예상 도로명 주소 : " + expRoadAddr + ")";
				guideTextBox.style.display = "block";
			} else if (data.autoJibunAddress) {
				var expJibunAddr = data.autoJibunAddress;
				guideTextBox.innerHTML = "(예상 지번 주소 : " + expJibunAddr + ")";
				guideTextBox.style.display = "block";
			} else {
				guideTextBox.innerHTML = "";
				guideTextBox.style.display = "none";
			}
		},
	}).open();
}
