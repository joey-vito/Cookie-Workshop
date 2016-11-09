$(document).ready(function() {
    console.log("ready!");
    firstTime();
    // checkCookie();

});


var chocoVal= $("#choco").val();
var sugarVal= $("#sugar").val();
var lemonVal= $("#lemon").val();

function firstTime() {
	var value = Cookies.get("choco", "sugar", "lemon");
	if(value !== ""){
		$("#sidebar").show();
		}else{
		$("#sidebar").hide();
	}
}
function setCookie() {
	Cookies.set("choco", chocoVal);
	Cookies.set("sugar", sugarVal);
	Cookies.set("lemon", lemonVal);
	console.log("document.cookie")
}

function orderHistory() {
	$("#choco_val").html(chocoVal);
	$("#sugar_val").html(sugarVal);
	$("#lemon_val").html(lemonVal);
}

function expireCookies() {
	Cookies.expire("chocoVal");
	Cookies.expire("sugarVal");
	Cookies.expire("lemonVal");
	console.log("They gone!");
}




// function checkCookie() {
// 	var value = Cookies.get("name");
// 	if (value !== "") {
// 		// $('#header').innerHTML = "Welcome " + value;
// 	} else {
// 		console.log("")
// 	}

// }


// function setAnimation() {
// 	if(Cookies.get("visited")){
// 		$("#sidebar").show();
// 	} else {
// 		Cookies.set("visited", true);
// 	}
// }



