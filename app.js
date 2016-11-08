$(document).ready(function() {
    console.log("ready!");
    // checkCookie();
    // setAnimation();
});

function setCookie() {
	var name= ($("#name").val());
	var name1= ($("#name").val());
	var name2= ($("#name").val());
	console.log("Cookie set")
	Cookies.set("name", name);
}

