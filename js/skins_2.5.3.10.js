var styles_folder = "styles/"; function IJZM(name) {
	var d=new Date();
	var year=d.getFullYear();
	var month=d.getMonth();
	var day=d.getDate();
	year+=2;
	setNitromeCookie('skin',name,year,month,day,'/');
	console.log(name);
	}//IJZM 
var skin_date = new Date();
var skin_date_arr = [];
skin_date_arr.push(skin_date.getFullYear());
skin_date_arr.push(('0'+(skin_date.getMonth()+1)).slice(-2));
skin_date_arr.push(('0'+skin_date.getDate()).slice(-2));
skin_date_string = skin_date_arr.join('');
skin_date_num = parseInt(skin_date_string,10);
var xmas_date_num = 20141201;
var skins=new Array("thebricks","xmas2014skin","oddletrouble","nitromejam2014","icebreakerupdate","dittoskin","avalanche","icebreaker","touchy","100game","nitromev2","steampunk","nes","icetemple","factory","snowman","party","horror","retro","winter","classic");

function setNitromeCookie(cookie_name, cookie_value, exp_y, exp_m, exp_d, cookie_path, cookie_domain, cookie_secure){
	var cookie_string=cookie_name+"="+escape(cookie_value);
	if(exp_y){
		var cookie_expires=new Date(exp_y,exp_m,exp_d);
		cookie_string+="; expires="+cookie_expires.toGMTString();
	}
	if(cookie_path){
		cookie_string+="; path="+escape(cookie_path);	
	}
	if(cookie_domain){
		cookie_string+="; domain="+escape(cookie_domain);	
	}
	if(cookie_secure){
		cookie_string+="; secure";	
	}
	document.cookie=cookie_string;
}
function getNitromeCookie(cookie_name){ //"skin" returns the current skin
	var results = document.cookie.match ( cookie_name + '=(.*?)(;|$)' );
  	if ( results ){
    	return ( unescape ( results[1] ) );
	}else{
    	return null;
	}
}

if(window.location.search.length != 0){

}

var searchString = window.location.search.substring(1);
searchElements = searchString.split('&');
var searchKeyArray = {};
var key;
for(i=0;i<searchElements.length;i++){
	keyValue = searchElements[i].split("=");
	searchKeyArray[keyValue[0]] = keyValue[1];
}
if(searchKeyArray.skinpref != undefined){
skin_pref = searchKeyArray.skinpref;
	if(searchKeyArray.skinpref == 'newest'){
		setNitromeCookie('skinpref',skin_pref,year,month,day,'/');
	}
	if(searchKeyArray.skinpref == 'keep'){
		setNitromeCookie('skinpref',skin_pref,year,month,day,'/');
	}
	if(searchKeyArray.skinpref == 'random'){
		setNitromeCookie('skinpref',skin_pref,year,month,day,'/');
	}

	setNitromeCookie("skinpref",skin_pref,year,month,day,"/");
}
if(searchKeyArray.skin_name != undefined){
	skin_name = searchKeyArray.skin_name;
	setNitromeCookie("skin",skin_name,year,month,day,'/');
}
//load in correct colour scheme
var latest_style=skins[0];

var site_style=getNitromeCookie("skin");

var last_newest=getNitromeCookie("lastnewest");

if(site_style==null){
	site_style=latest_style;
	skin_pref="newest";
	last_newest=latest_style;
	setNitromeCookie("skin",site_style,year,month,day,"/");
	setNitromeCookie("skinpref",skin_pref,year,month,day,"/");
	setNitromeCookie('lastnewest',last_newest,year,month,day,'/');
}else{
	
	//does the user want to see the newest version?
	var skin_pref=getNitromeCookie("skinpref");
	if(skin_pref=="newest"){
		if(last_newest!=latest_style){
			site_style=latest_style;
			last_newest=latest_style;
		}
	}
	if(skin_pref=="random"){
		timeRandom = getNitromeCookie('time_random');
		rt = new Date();
		rt = rt.getTime();
		aDay = 1000*60*60*24;
		if(timeRandom == null){
			setNitromeCookie('time_random',rt+aDay,year,month,day,'/');
		}
		if(timeRandom < rt){
			var skinsMax = skins.length;   
			skinsNum = Math.floor((skinsMax)*Math.random());
			site_style = skins[skinsNum];
			setNitromeCookie('time_random',rt+aDay,year,month,day,'/');
		}
	}
	else if(skin_pref==null){
		skin_pref="newest";	
	}
	//now save the current last newest
	last_newest=latest_style;
	//user has changed styles before - save it
	var d=new Date();
	var year=d.getFullYear();
	var month=d.getMonth();
	var day=d.getDate();
	year+=2;
	setNitromeCookie("skin",site_style,year,month,day,"/");
	setNitromeCookie("skinpref",skin_pref,year,month,day,"/");
	setNitromeCookie("lastnewest",last_newest,year,month,day,"/");
}
//images folder IJZM
var images_folder="images/"+site_style+"/";

//colours for javascript
var c="<script language='JavaScript' type='text/javascript' src='";
c+="scripts/";  //IJZM: c+=scripts_folder -> c+= "scripts/"
c+="colours_";
c+=site_style;
c+=".js'></script>";

document.write(c);


//css - fix colours below

var f="<style type='text/css'>";
	f+="body{";
	f+="margin: 0;";
	f+="padding: 0;";
	f+="text-align: center;";
	f+="color: #000000;";
	f+="background-image: url('";
	f+=images_folder;
	f+="tile.png');";
	
	
	if(site_style=="classic"){
		f+="background-repeat: repeat;";
		f+="background-color: #";
		f+="FD74B3";
	}else if(site_style=="winter"){
		f+="background-repeat: repeat;";
		f+="background-color: #";
		f+="BDEDFF";
	}else if(site_style=="retro"){
		f+="background-attachment: fixed;";
		f+="background-repeat: repeat-x;";
		f+="background-position: bottom;";
		f+="background-color: #";
		f+="809604";
	}else if(site_style=="horror"){
		f+="background-attachment: fixed;";
		f+="background-repeat: repeat-x;";
		f+="background-position: bottom;";
		f+="background-color: #";
		f+="271061";
	}else if(site_style=="snowman"){
		f+="background-attachment: fixed;";
		f+="background-repeat: repeat-x;";
		f+="background-position: bottom;";
		f+="background-color: #";
		f+="FFFFFF";
	}else if(site_style=="factory"){
		f+="background-repeat: repeat;";
		f+="background-color: #";
		f+="322227";
	}
	else if(site_style=="icetemple"){
		f+="background-repeat: repeat;";
		f+="background-color: #";
		f+="739ef6";
	}
	else if(site_style=="nes"){
		f+="background-repeat: repeat;";
		f+="background-color: #";
		f+="FF9600";
	}
	f+="; font-family: arial;";
	f+="font-size: 10px;";
	f+="}";
	f+=".inner_corner_bl{";
	f+="background: url('";
	f+=images_folder;
	f+="inner_corner_bl.gif') 0 100% no-repeat #";
	if(site_style=="classic"){
		f+="FEB2D5";
	}else if(site_style=="winter"){
		f+="A1C8CF";
	}else if(site_style=="retro"){
		f+="B0BCB2";
	}else if(site_style=="horror"){
		f+="DE82FF";
	}
	f+="; height: 100%;";
	f+="}";
	f+=".inner_corner_br{";
	f+="background: url('";
	f+=images_folder;
	f+="inner_corner_br.gif') 100% 100% no-repeat; height: 100%;";
	f+="}";
	f+=".inner_corner_tl{";
	f+="background: url('";
	f+=images_folder;
	f+="inner_corner_tl.gif') 0 0 no-repeat;";
	f+="}";
	f+=".inner_corner_tr{";
	f+="background: url('";
	f+=images_folder;
	f+="inner_corner_tr.gif') 100% 0 no-repeat;";
	f+="padding: 0px 7px;";
	f+="}";
	f+=".outer_corner_bl{";
	f+="background: url('";
	f+=images_folder;
	f+="outer_corner_bl.gif') 0 100% no-repeat #FFFFFF; height: 100%;";
	f+="}";
	f+=".outer_corner_br{";
	f+="background: url('";
	f+=images_folder;
	f+="outer_corner_br.gif') 100% 100% no-repeat; height: 100%;";
	f+="}";
	f+=".outer_corner_tl{";
	f+="background: url('";
	f+=images_folder;
	f+="outer_corner_tl.gif') 0 0 no-repeat;";
	f+="}";
	f+=".outer_corner_tr{";
	f+="background: url('";
	f+=images_folder;
	f+="outer_corner_tr.gif') 100% 0 no-repeat;";
	f+="padding: 0px 7px;";
	
	f+="}";
	f+=".inner_corner_tl_current{";
	f+="background: url('";
	f+=images_folder;
	f+="inner_corner_tl_current.gif') 0 0 no-repeat;";
	
	f+="}";
	f+=".inner_corner_tl_main{";
	f+="background: url('";
	f+=images_folder;
	f+="inner_corner_tl_main.gif') 0 0 no-repeat;";
	
	f+="}</style>";
	
document.write(f);
var styles=styles_folder+"colours_"+site_style+".css";

var s='<link rel="stylesheet" type="text/css" href="';
s+=styles;
s+='"/>';

document.write(s);
iphone_checked = parseInt(getNitromeCookie('i_time'),10);
if(isNaN(iphone_checked)){
    iphone_checked = 0;
}
iphone_latest = 20120907;
if(iphone_checked<iphone_latest){
    $j('#iphone_count').css({"display":"block"});
}