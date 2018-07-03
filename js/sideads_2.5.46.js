var icebreaker_link = 'http://www.icebreaker-game.com/get-app/';
var eightbitdoves_link = 'http://www.8bitdoves.com/get-app/';
var endlessdoves_link = 'http://www.8bitdoves.com/get-endless-doves/';
var rollerpolar_link = 'http://www.nitrome.com/mobile/?app=rollerpolar';
var platformpanic_link = 'http://www.nitrome.com/mobile/?app=platformpanic';
var gunbrick_link = 'http://www.nitrome.com/mobile/?app=gunbricksd';
var magictouchmobile_link = 'http://www.nitrome.com/mobile/?app=magictouchmobile';
var sillysausagemobile_link = 'http://www.nitrome.com/mobile/?app=sillysausagemobile';
var coopedup_link = 'http://www.nitrome.com/mobile/?app=coopedup';
var greenninja_link = 'http://www.nitrome.com/mobile/?app=greenninja';

var nitrome_ads=[
	"", // null
	//"pixellove-flyagain.png", // pixel love
	"greenninja-out-now.png" // platform panic mobile
];
nitromeAssets.sideAd={};
var nitrome_alts=[
	"", // null
	//"Pixel Love", // pixel love 
	"Green Ninja OUT NOW!" // endless doves
];
var nitrome_links=[
	"", // null
	//"http://www.pixellovegames.com/games/flyagain/", // pixel love
	greenninja_link
];
var ad_chance=[
	0,  // null
	//10, // pixel love
	100 // endless doves
];
var sidead_types = [
	//0 = image/png, 1 = application/shockwave-x
	0, // null
	//0, // pixel love
	0  // endless doves
];
nitromeAssets.sideAd.alts=nitrome_alts;
nitromeAssets.sideAd.links=nitrome_links;
nitromeAssets.sideAd.chance=ad_chance;
nitromeAssets.sideAd.type=sidead_types;
nitromeAssets.sideAd.writeSideAd=function(){
    var a=Math.floor(Math.random()*100)+1;
    for(i=0;i<ad_chance.length;i++){
        if(a<=ad_chance[i]){
            break;
        }
    }
    if(i===ad_chance.length){
        i--;
    }
	if(sidead_types[i] == 0){
		//write image content
		fillWithImage(
		  "left_bottom_bg", //div
		  cdn_path+"images/sidead/"+nitrome_ads[i]+"?"+nitromeAssets.rString, //image
		  "160", //width
		  "320", //height
		  "0", //?
		  nitrome_alts[i], //alt name
		  "",
		  nitrome_links[i]) //link
	}
	if(sidead_types[i] == 1){
		//write flash content
		if(!swfobject||!jQuery){
			if(window.console) console.log('swfobject or jquery not found');
			return false;
		}
		$j('#left_bottom_bg').append('<div id="side_swf" name="side_swf"></div>');
		var flashvars = {
		
		};
		var params = {
			wmode:"transparent"
		};
		var attributes = {
			id: "sidead_flash",
			name: "sidead_flash"
		};
		swfobject.embedSWF(cdn_path+"images/sidead/"+nitrome_ads[i], "side_swf", "160", "320", "9.0.0",cdn_path+"expressInstall.swf", flashvars, params, attributes);
	}
};
nitromeAssets.sideAd.writeSideAd();