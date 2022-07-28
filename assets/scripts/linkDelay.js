function delay(URL) {
	document.getElementsByClassName("logo")[0].classList += " clicked";
	setTimeout( function() {
		window.location = URL;
	}, 100 );
}