/**
 * @class   TickerUpdates
 *
 * @param   (Object)initObject  An init helper object
 * @param   [(jQuery)] Optional, instance of the jQuery object to use (for no-clobber).
 *
 * @author  Tom McQuillan <tom.j.mcquillan@gmail.com>
 * 
 * @description
 *          This module is used to notify the user of any notification updates prior page load.
 *          It does this by checking the total notifications against the last total. If there is an
 *          increase it plays a sound updates the corresponding ticker and shakes the login box
 *          
 */

function TickerUpdates(initObj,jQuery){
    this.debounceRate = 1000*20;
    this.isShaking = false;
    this.shakeArr = [
    -1,
    4,  //    ######  #####  ######  ####### ####### ##   ##
    2,  //   ##      ##   ## ##   ## ##      ##      ###  ##
    -4, //    #####  ##      ######  ######  ######  ## # ##
    -2, //        ## ##   ## ##   ## ##      ##      ##  ###
    1,  //   ######   #####  ##   ## ####### ####### ##   ##
    0,  //  ======================ShAkE=====================
    -1, //  Shakes the login module by no more than 4 pixels
    0
    ];
    this.shakeTick = 0;
    this.hasRun = 0;
    this.isMuted = 0;
    this.notes = {
        "avatar-note" : {
            "count":0
        },
        "comment-note" : {
            "count":0
        },
        "message-note" : {
            "count":0
        },
        "user-note" : {
            "count":0
        },
        "achievement-note" : {
            "count":0
        },
        "total-note":0
    }
    this.jQuery = (typeof(jQuery) != 'undefined') ? jQuery : $j;
    
    if(typeof(initObj)!='undefined'){
        this.debounceRate = (typeof(initObj.debounceRate) == 'undefined') ? 1000*60*2 : initObj.debounceRate;
        this.isMuted = (typeof(initObj.isMuted) == 'undefined') ? 0 : initObj.isMuted;
    }
    this.init = function(){
        if(typeof(window.tickerInterval) != 'undefined'){
            return true;
        }
        instance.startUpdaterProcess();
    }
    
    this.startUpdaterProcess = function(){
        //console.log('starting updater process');
        // instance.jQuery references page jquery-version
        var url = "/ajax/v1/is_logged_in.php";
        var data = {
            "json" : 1
        }
        instance.jQuery.post(url,data,instance.checkLoginHandler,'json');
    }
    
    // ajax handlers
    this.checkLoginHandler = function(retData){
        //console.log(retData);
        if(retData.status == 1){
            instance.setUpLoop();
            instance.runLoopTick();
        }
    }
    this.checkNotificationsHandler = function(retData){
        //console.log(retData);
        var tmpNotifications = instance.notes['total-note'];
        instance.notes['total-note'] = 0;
        for(var i = 0;i < retData.length;i++){
            console.log(retData[i].type_reference_id);
            instance.notes[retData[i].type_reference_id].count = retData[i].notifications;
            if(typeof(document.getElementsByClassName('count-profile')[0]) == 'undefined'){
                $j('.count-login.'+retData[i].type_reference_id+'-count .count-center').html(instance.notes[retData[i].type_reference_id].count);
                $j('.count-login.'+retData[i].type_reference_id+'-count').css({"display":"block"});
            }else{
                $j('.count-profile.'+retData[i].type_reference_id+'-count .count-center').html(instance.notes[retData[i].type_reference_id].count);
                $j('.count-profile.'+retData[i].type_reference_id+'-count').css({"display":"block"});
            }
            instance.notes['total-note'] += parseInt(retData[i].notifications,10);
        }
        //console.log(instance.notes);
        if(instance.hasRun&&(tmpNotifications < instance.notes['total-note'])){
            instance.playAudioNotification();
            instance.shakeLoginBox();
        }
        instance.hasRun++;
    }
    
    // loop related functions
    this.setUpLoop = function(){
        window.tickerInterval = window.setInterval(instance.runLoopTick,instance.debounceRate);
    }
    this.runLoopTick = function(){
        //console.log('performing check');
        var url = "/ajax/v1/get_notifications.php";
        var data = {
            "json" : 1
        }
        instance.jQuery.post(url,data,instance.checkNotificationsHandler,'json');
    }
    this.playAudioNotification = function(){
        if(!instance.isMuted&&document.hasFocus()){
            // needs a nice audio pop noise / not the notification noise...
            //var audio = document.getElementById('ticker_alert_sfx');
            //audio.volume = .3;
            //audio.play();
        }
        //console.log('bing bong');
    }
    this.tearDownLoop = function(){
        //console.log('stopping loop');
        if(typeof(window.tickerInterval) != 'undefined'){
            return false;
        }
        window.clearInterval(window.tickerInterval);
    }
    this.shakeLoginBox = function(){
        if(instance.isShaking){
            return;
        }
        instance.isShaking = true;
        window.shakeInterval = window.setInterval(instance.runShakeTick,1000/30);
    }
    this.runShakeTick = function(){
        if(instance.shakeTick > instance.shakeArr.length){
            instance.shakeTick = 0;
            instance.isShaking = false;
            window.clearInterval(window.shakeInterval);
        }else{
            instance.jQuery('#login_bg').css({"top":instance.shakeArr[instance.shakeTick]});
            instance.jQuery('#login_shadow').css({"top":5+instance.shakeArr[instance.shakeTick]});
            instance.shakeTick++;
        }
    }
    var instance = this;
    this.init();
}