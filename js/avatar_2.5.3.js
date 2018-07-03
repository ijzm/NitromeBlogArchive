Notification = function(avt){
    this.avatar_instance = (typeof(avt) != 'undefined') ? avt : null;
    this.notificationHtml = '<div id="notify-container"><div id="notify"><p style="text-align:left;font-weight:bold">Avatar Unlocked!</p><div id="icon"></div></div></div>';
    this.notifyCSS = {
        "background": "url(http://cdn.nitrome.com/styles/images/game_icons/ig_ticker_window-sml.png)",
        "border-radius": "0 0 4px 4px",
        "color": "#996989",
        "cursor": "pointer",
        "display": "block",
        "font-size": "12px",
        "height": "60px",
        "left": "0",
        "margin": "0 auto",
        "position": "relative",
        "top" : "-60px",
        "width" : "240px",
        "z-index" : "999"
    };
    this.notificationContainerCSS = {
        "background": "transparent",
        "font-size": "12px",
        "border-radius": "0 0 4px 4px",
        "top": "0px",
        "position": "fixed",
        "left": "-150px",
        "width": "300px",
        "height": "90px",
        "z-index": "999",
        "cursor": "pointer",
        "display": "none",
        "overflow": "hidden",
        "margin-left": "50%"
    };
    this.notifyIconCSS = {
        "background": "transparent",
        "float": "right",
        "height": "30px",
        "position": "absolute",
        "right": "15px",
        "top": "14px",
        "width": "auto"
    }
    this.notifyPCSS = {
        "padding-left": "21px",
        "padding-top": "21px",
        "text-align": "left",
        "font-weight": "bold",
        "padding-left": "21px",
        "padding-top": "21px",
        "font-family":"arial,verdana,sans-serif"
    };
    
    if(!$j('#notify-container').length){
        $j('body:first').append(this.notificationHtml);
        $j('#notify-container').css(this.notificationContainerCSS);
        $j('#notify').css(this.notifyCSS);
        $j('#notify #icon').css(this.notifyIconCSS);
        $j('#notify p').css(this.notifyPCSS);
    }
    
    // Displays the notification widget. Uses default functionality if no override is available at call time.
    this.notify = function(string_message,note_icon){
        $j('#notify-container').stop(0,1);
        $j('#notify').stop(0,1);
        instance.note_showing = true;
        if(typeof(window.showGameNotification) != 'function'){
            $j('#notify-container').show();
            if(typeof(tmpTop) == 'undefined'){
                tmpTop = $j('#notify-container').offset().top;
            }
            if($j(document).scrollTop() > tmpTop){
                $j('#notify-container').offset({top:$j(document).scrollTop()});
            }else{
                $j('#notify-container').offset().top = tmpTop;
            }
            $j('#notify').animate({top:'10px'},300,'easeOutQuart',function(){
                window.hider_timeout_id = window.setTimeout(instance.hideNotice,3000);
                note_showing = true;
            });
            var icon_html = '<img class="take_icon" src="'+decodeURIComponent(note_icon)+'" />';
            
            $j('#notify #icon').html(icon_html);
            $j('#notify p').text(string_message);
        }else{
            window.showGameNotification();
        }
    }
    
    this.hideNotice = function(){
	if(!window.note_showing){
	    return;
	}
	var _x = $j('#icon').offset().left;
	var _y = $j('#icon').offset().top;
	if(instance.avatar_instance.avatar_unlocked&&$j('#top_login_avatar').length){
	    instance.avatar_instance.takeAvatarIcon(0,0);
	    $j('#icon').html('');
	}
	$j('#notify').animate({top:'-60px'},600,'easeOutQuart',function(){
	    window.note_showing = false;
	    if(window.window_interval_id){
		window.clearInterval(window.window_interval_id);
	    }
	    if(window.hider_timeout_id){
		window.clearTimeout(window.hider_timeout_id);
	    }
	    $j('#notify-container').hide();
	});
    }
    
    var instance = this;
}

Avatar = function(id,hash,css_class,avatar_img_src,elem_selector,callback,args){
    this.id = (typeof(id) != 'undefined') ? id : null;
    this.hash = (typeof(hash) != 'undefined') ? hash : null;
    this.avatar_img_src = (typeof(avatar_img_src) != 'undefined') ? avatar_img_src : 'http://cdn.nitrome.com/styles/images/avt/ig_avatargift_32x32.png';
    this.css_class = (typeof(css_class) != 'undefined') ? css_class : '';
    this.visible = 0;
    this.elem_selector = (typeof(elem_selector) != 'undefined') ? elem_selector : 'body:first' ;
    this.avatar_img_height = 32;
    this.avatar_img_width = 32;
    this.unlocked = false;
    this.callback = (typeof(callback) != 'undefined') ? callback : null;
    this.args = (typeof(args) != 'undefined') ? args : null;
    this.avatar_type = (typeof(args) != 'undefined' && typeof(args.avatar_type != 'undefined')) ? args.avatar_type : 'avatar';
    this.is_init = false;
    this.expand_width = 50;
    this.expand_height = 50;
    this.avatar_unlocked = false;
    this.notification_instance = new Notification(this);
    this.override_iter = 0;
    window.note_showing = false;
    this.html = '<div id="'+hash+'" style="display:none;position:absolute;"><img style="position:relative;display:none;" src="'+this.avatar_img_src+'"/></div>';
    if(this.hash !== null){
        this.elem_id = '#'+this.hash;
    }
    //initialize object instance
    this.init = function (){
        if(this.is_init){
            $j.error('already initialized, called internally');
            return;
        }
        if(this.id===null||
           this.hash===null){
            $j.error('Avatar class expects at least an id and a hash to work properly...');
        }
        $j(this.elem_selector).append(this.html);
        $j('#'+this.hash+' img').load(function(){
            instance.avatarLoaded();
        });
	instance.isAvatarAvailable();
        $j('#notify').bind('click.'+instance.hash,instance.notification_instance.hideNotice);
        this.is_init = true;
        return;
    }
    this.isAvatarAvailable = function(){
	var url = '/ajax/v1/is_avatar_available.php';
        var data = {
            "json" : 1,
            "avatarid" : instance.id,
            "hash" : instance.hash
        };
        var dataType = 'json';
        $j.post(url,data,this.isAvatarAvailableHandler,dataType);
    }
    this.isAvatarAvailableHandler = function(retData){
	if(typeof(retData) != 'undefined'){
	    if(typeof(retData.status) != 'undefined'){
	    // check status bool
		if(retData.status){
		    instance.isAvatarUnlocked();
		}else{
		    instance.unlocked = true;
		}
		if(instance.callback !== null){
		    instance.callback({"unlocked":instance.unlocked});
		}
	    }
	}
    }
    // handler for attempted unlocks of this avatar instance
    this.attemptUnlockHandler = function(retData){
        if(retData.status){
            instance.avatar_unlocked = true;
            instance.hideAvatar();
        }
        instance.notification_instance.notify(retData.message,retData.icon);
    }
    // is avatar unlocked
    this.isAvatarUnlocked = function(){
        var url = '/ajax/v1/is_avatar_unlocked.php';
        var data = {
            "json" : 1,
            "avatarid" : instance.id,
            "hash" : instance.hash
        };
        var dataType = 'json';
        $j.post(url,data,this.isAvatarUnlockedHandler,dataType);
    }
    
    // handler when checking if the avatar is unlocked
    this.isAvatarUnlockedHandler = function(retData){
        if(typeof(retData) != 'undefined'){
            if(typeof(retData.status) != 'undefined'){
                // check status bool
                if(retData.status){
                    instance.unlocked = true;
                }else{
                    instance.displayAvatar();
                }
                if(instance.callback !== null){
                    instance.callback({"unlocked":instance.unlocked});
                }
            }
        }
    }
    
    // make avatar visible
    this.displayAvatar = function(){
        $j('#'+this.hash).addClass(this.css_class);
        $j('#'+this.hash).css({"display":"block","cursor":"pointer"});
        $j('#'+this.hash+' img').css({"display":"block"});
        $j('#'+this.hash).bind('click.avatar',instance.attemptUnlock);
        this.visible = 1;
    }
    
    // check the user login state
    this.isUserLoggedIn = function(){
        var url = '/ajax/v1/check_login.php';
        var dataType = 'json';
        var data = {"json":1};
        $j.post(
            url,
            data,
            this.isUserLoggedInHandler,
            dataType
        );
    }
    
    //handle the return data of is_logged_in
    this.isUserLoggedInHandler = function(retData){
        if(retData.status){
            instance.notification_instance.notify(retData.username+' '+retData.message,retData.icon);
        }else{
            instance.notification_instance.notify(retData.message,retData.icon);
        }
    }
    
    // attempt an unlock of this avatar
    this.attemptUnlock = function(){
        var url = '/ajax/v1/unlock_avatar.php';
        var data = {
            "hash" : instance.hash,
            "avatarid" : instance.id,
            "json" : 1,
	    "type" : instance.avatar_type
        }
        var dataType = 'json';
        $j.post(url,data,instance.attemptUnlockHandler,dataType);
    }
    // set the avatar id
    this.setID = function(e_id){
        this.id = e_id;
        return this.id;
    }
    // set the avatar hash
    this.setHash = function(e_hash){
        this.hash = e_hash;
        this.elem_id = '#'+this.hash;
        return this.hash;
    }
    // internally call global hideNotice... if you need to
    this.hideNotice = function(){
        window.hideNotice();
    }
    this.hideAvatar = function(){
        $j('#'+instance.hash+' img').animate({"opacity":0},200,"swing",function(){
            $j('#'+instance.hash).animate({"opacity":0},600,"swing",function(){
                $j('#'+instance.hash).remove();
            });
        });
    }
    this.avatarLoaded = function(){
        if(instance.callback!=null&&instance.args!=null){
            instance.callback(instance.args);
        }
    }
    this.takeAvatarIcon = function(x,y){
        avatar_type = (typeof(avatar_type) != 'undefined')? avatar_type : 'avatar';
        additional_offset_left = 0;
        additional_offset_top = 0;
        additional_offset_left = $j('.take_icon').offset().left;
        additional_offset_top = $j('.take_icon').offset().top;
        realX = parseInt(x,10)+additional_offset_left;
        realY = parseInt(y,10)+additional_offset_top;
        $j('body').append('<img class="game_avatar_switch" src="http://cdn.nitrome.com/styles/images/game_icons/ig_ticker_icon-'+instance.avatar_type+'.png"/>');
        $j('.game_avatar_switch').css({
            position:'absolute',
            left:realX,
            top:realY,
            'z-index':9999
        });
        var $avt_offset = {"top":0,"left":0};
        var $half_avt_width = -64;
        var $half_avt_height =-64;
        if($j('#top_login_avatar').length){
            $avt_offset = $j('#top_login_avatar').offset();
            $half_avt_width = ($j('#top_login_avatar').width()/2)-(12.5);
            $half_avt_height = ($j('#top_login_avatar').height()/2)-(12.5);
        }
        $j('.game_avatar_switch').animate({top:$avt_offset.top+$half_avt_height,left:$avt_offset.left+$half_avt_width},600,function(){
            $j('.game_avatar_switch').animate({width:'+=10px',height:'+=10px',top:'-=5px',left:'-=5px'},100);
            $j('.game_avatar_switch').fadeOut(100,function(){
                $j('.game_avatar_switch').remove()});
                $j('#top_login_avatar').append('<div id="wipeout"></div>');
                $j('#wipeout').css({
                    'background':'#fff',
                    'height':'52px',
                    'width':'52px',
                    'position':'absolute',
                    'z-index':'9999',
                    'top':'0',
                    'left':'0'
                });
                $j('#wipeout').fadeOut(400,function(){
                    $j('#wipeout').remove();
                });
        });
    }
    var instance = this;
    this.init();
}