function startTime() {
	var currentTime = new Date ();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	//color = '#' + h + m + s;
	//colorDiv(h);
	divImage(h);
	var whatTimeIsIt = h + ":" + m + ":" + s;
	document.getElementById("clock").innerHTML = whatTimeIsIt;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i}; 
	return i;
}
//function setColor(color){
	//document.body.style.background = color;
//}
/*function colorDiv(hour){ 
	//console.log(hour);  
	if (hour >= 1 && hour <= 6) {
		setColor("ccccff");
	} else if (hour >= 7 && hour <= 12) {
		setColor("#9999ff"); 
	} else if (hour >= 13 && hour <= 18) {
		setColor("#3333ff");
	} else if(hour >= 19 && hour <= 24) {
		setColor("#000000");
	}
}*/
function setText(text){
	document.getElementById("textTime").innerHTML = text;
}
function changeText(hour){
	if (hour >= 1 && hour <= 6) {
		setText("good morning, beautiful.")
	} else if (hour >= 7 && hour <= 12) {
		setText("today is your day.")
	} else if (hour >= 13 && hour <= 18) {
		setText("almost time for wine.")
	} else if (hour >= 19 && hour <= 24) {
		setText("good night, elizabeth.")
	}
}
function setImage(image){
	document.body.style.backgroundImage = "url('" + image + "')";
}
function divImage(hour){
	if (hour >= 1 && hour <= 6) {
		setImage("sunrise.jpg")
	} else if (hour >= 7 && hour <= 12) {
		setImage("thumbsUp.jpg")
	} else if (hour >= 13 && hour <= 18) {
		setImage("wineThirty.jpg")
	} else if (hour >=19 && hour <= 24) {
		setImage("purpleCow.jpg");
	}
}
