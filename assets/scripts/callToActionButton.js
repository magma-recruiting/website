---
---
const toggle = () => {
	if (document.getElementById("call-to-action-word").innerText === "Student") {
		document.getElementById("call-to-action-chevron").style.rotate = "-180deg";
		document.getElementById("call-to-action").children[0].style.width = "195px";
		document.getElementById("call-to-action-looking-for").innerText = "smart students";
		document.getElementById("call-to-action-go").href = "javascript:delay('{{ '/companies' | relative_url }}')";

		setTimeout( function() {
			document.getElementById("call-to-action-word").innerText = "Company";
		}, 80 );
	}
	else {
		document.getElementById("call-to-action-word").innerText = "Student";
		document.getElementById("call-to-action-looking-for").innerText = "work";
		document.getElementById("call-to-action-chevron").style.rotate = "0deg";
		document.getElementById("call-to-action").children[0].style.width = "156px";
		document.getElementById("call-to-action-go").href = "javascript:delay('{{ '/students' | relative_url }}')";
	}
}