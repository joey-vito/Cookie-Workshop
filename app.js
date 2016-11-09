$(document).ready(function() {
    console.log("ready!");
    firstTime();

});


var chocoVal;
var sugarVal;
var lemonVal;

function firstTime() {
	if(document.cookie === ""){
		$("#sidebar").hide();
		}else{
		$("#sidebar").show();
		orderHistory();
	}
}

function setCookie() {
	chocoVal= $("#choco").val();
	sugarVal= $("#sugar").val();
	lemonVal= $("#lemon").val();
	Cookies.set("choco", chocoVal);
	Cookies.set("sugar", sugarVal);
	Cookies.set("lemon", lemonVal);
	console.log(document.cookie);
}

function orderHistory() {
	$("#choco_val").html(Cookies.get("choco"));
	$("#sugar_val").html(Cookies.get("sugar"));
	$("#lemon_val").html(Cookies.get("lemon"));
}

function expireCookies() {
	Cookies.expire("choco");
	Cookies.expire("sugar");
	Cookies.expire("lemon");
	console.log("They gone!");
}





