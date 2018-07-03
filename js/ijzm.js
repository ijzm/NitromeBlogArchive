var URL = window.location.href;

URL = URL.substr(URL.lastIndexOf('/'));
URL = URL.substr(6);
URL = URL.substr(0, URL.length - 5);
URL = parseInt(URL, 10);

nextURL = URL + 1;
backURL = URL - 1;

var bc = 0;
var nc = 0;

var max = 10;

if(URL < 1426) {
	loadDoc("post_" + parseInt(nextURL,10) + ".html", "next", test);
}
if(URL > 150) {
	loadDoc("post_" + parseInt(backURL,10) + ".html", "back", test);
}

function loadDoc(url, n, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      cFunction(this, n);
    }
 };
  xhttp.open("GET", url, true);
   // console.log(xhttp.status);
  xhttp.send();
}

function test(xhttp, n) {
	if(xhttp.status == 200) {

	} else {
		if(n == "next" && nc < max){
			nc++;
			nextURL++;
			loadDoc("post_" + nextURL + ".html", "next", test);
		} 
		if(n=="back" && bc < max){
			bc++;
			backURL +=  -1;
			loadDoc("post_" + backURL + ".html", "back", test);
		}		
	}
}

function next() {
	u = window.location.href;
	u = u.substr(0, u.lastIndexOf('/') + 1);
	window.location.href = u + "post_" + nextURL + ".html";
}

function back() {
	u = window.location.href;
	u = u.substr(0, u.lastIndexOf('/') + 1);
	window.location.href = u + "post_" + backURL + ".html";
}

window.onload = function(){
	var div = document.createElement("div");
	div.setAttribute("id", "Buttons");
	div.style.width = "554px";
	div.style.margin = "auto";
	
	var nb = document.createElement("a");
	nb.setAttribute("id", "newer_posts_button");
	nb.style.backgroundImage = "url(./" + images_folder + "newer_posts_button.png)";
	if(URL < 1426){
	nb.href = "post_" + nextURL.toString() + ".html";
	}
	
	
	var bb = document.createElement("a");
	bb.setAttribute("id", "older_posts_button");
	bb.style.backgroundImage = "url(./" + images_folder + "older_posts_button.png)";
	if(URL > 150){
	bb.href = "post_" + backURL.toString() + ".html";
	}
	
	var main = document.createElement("a");
	main.style.display = "inline-block";
	main.style.width = "100px";
	main.style.height = "30px";
	main.style.margin = "auto";
	main.style.backgroundColor = "white";
	main.innerHTML = "Back to Main";
	main.href = "./"
	
	
	div.appendChild(nb);
	div.appendChild(main);
	div.appendChild(bb);
	
	document.body.appendChild(div);
	
	if(document.getElementsByTagName("iframe")[0].src.substr(0, 20) != "https://platform.twi"){
		var youtubeURL = document.getElementsByTagName("iframe")[0].src;
		youtubeURL = youtubeURL.substr(youtubeURL.lastIndexOf("/") + 1);
		youtubeURL = youtubeURL.substr(0, youtubeURL.length - 5);
		document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/" + youtubeURL;
	}
	
	//document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/sQtRP2VIcF0"
	
	document.getElementsByClassName("keep_button")[0].onclick = function() { keepMessage() };	
}




function keepMessage(){
  var messageNum= 0;
   message = new Array();
   message[0]='Did your parents not teach you to share?';
   message[1]='This has nothing at all to do with Castles!';
   message[2]='This isn\'t exactly the Facebook alternative it eludes to!';
   message[3]='Thats\'s not very social of you!';
   message[4]='What?! Oh... you must of missed the share button. It\'s just over to the left!';
   message[5]='Keep it where exactly? In the attic gathering dust?';
   message[6]='Don\'t be so selfish!';
   message[7]='WHY? ...Why would you keep this all for yourself?';
   message[8]='What did you actually expect to happen?';
   message[9]='This is a useless link built entirely to entertain ourselves!';
   message[10]='Keep? it\'s not yours to keep, it\'s Nitrome\'s, not yours!';
   message[11]='Mine all mine! My... precious!';
   message[12]='Finders Keepers... ...Losers Weepers!';
   message[13]='Meaning - To retain the possession of';
   message[14]='You have now just accessed a secret Nitrome game... Nah just kidding!';
   message[15]='How many times have you clicked this link now?';
   message[16]='This is my avatar... err... I mean blog post!';
   var messagesMax = message.length;   
   messageNum = Math.floor((messagesMax)*Math.random());
   alert(message[messageNum]);
}