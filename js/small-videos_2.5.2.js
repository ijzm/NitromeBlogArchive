var videoWidth = 300;
var videoHeight = 255;
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "//www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var smallplayer;
      function onYouTubePlayerAPIReady() {
        smallplayer = new YT.Player('smallplayer', {
			"height": videoHeight,
			"width": videoWidth,
			"videoId": videoId,
			"playerVars": {
				'rel': 0,
				'wmode':'transparent'
			},
			"events": {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        /*if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }*/
      }
      function stopVideo() {
        smallplayer.stopVideo();
      }
function isVideoPlaying(){
	//unstarted (-1), ended (0), playing (1), paused (2), buffering (3), video cued (5).
	if(smallplayer.getPlayerState() == 3 || smallplayer.getPlayerState() == 1 || smallplayer.getPlayerState() == 5){
		return true;
	}else{
		return false;
	}
};
function swapVideo(videoId){
	if(typeof(smallplayer.cueVideoById) != "undefined"){
		smallplayer.cueVideoById(videoId);
		smallplayer.playVideo();
		return false;
	}
	return true;
}

$j(document).ready(function(){
	var ytLength  = ytObj.length;
	$dir = 1;
	$j('#new_elem_box_inner_2').append('<div id="video_vert_spacer"></div>');
	for(i=0;i<4;i++){
		if($dir == 1){
			$j('#new_elem_box_inner_2').append('<a class="vidLinkLeft" href="http://www.nitrome.com/videos/?'+ytObj[i].videoId+'" onclick="javascript: return swapVideo(\''+ytObj[i].videoId+'\');"><img class="video" src="'+ytObj[i].videoThumb+'" height="60px"/><div class="vidTitle">'+ytObj[i].videoTitle+'</div></a>');	
		}else{
			$j('#new_elem_box_inner_2').append('<a class="vidLinkRight" href="http://www.nitrome.com/videos/?'+ytObj[i].videoId+'" onclick="javascript: return swapVideo(\''+ytObj[i].videoId+'\');"><img class="video" src="'+ytObj[i].videoThumb+'" height="60px"/><div class="vidTitle">'+ytObj[i].videoTitle+'</div></a>');	
		}
		$dir *= -1;
		
	}
	$j('#new_elem_box_inner_2').append('<div id="video_bottom_spacer"></div>');
});