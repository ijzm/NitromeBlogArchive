        var filter_toggle = false;
	    var ajax_return_object = {};
	    function submitLogout(){
		var url = '/logoutSub.php';
		var data = {logout:1};
		var dataType = 'json';
                $j.post(
                        url,
                        data,
                        function(sdata){
                            return_object = sdata;
                            checkConsole(sdata);
                            if(sdata.error == 0){
				$j('#login_bg').removeClass('logged_in').addClass('logged_out');
                                $j('#profile_widget_container').fadeOut(200,function(){
                                    $j('#login_container').fadeIn(200);
                                });
                            }
			    $j('.login_wait_screen').fadeOut(100);
                        },
                        dataType);
		$j('.login_wait_screen').fadeIn(100);
            }
	    var remember_check = true;
	    
	    function toggleCheck(){
		if(remember_check){
		    $j('#remember_me_container').css({"background-position":"-84px 0"});
		    $j('#remember_user').removeAttr('checked');
		    
		    remember_check = false
		    return false;
		}else{
		    $j('#remember_me_container').css({"background-position":"-84px -16px"});
		    $j('#remember_user').attr('checked','checked');
		    remember_check = true;
		    return false;
		}
		
	    }
	    function submitLogin(){
		var uname = document.forms[0].username.value;
		var pword = document.forms[0].password.value;
		var rmbr = (document.forms[0].remember_user.checked) ? 1 : 0;
		if(
		   uname.length < 3||
		   pword.length < 3||
		   uname == ''||
		   pword == ''||
		   uname == ''){
		    showUserMessage('Username or password too short. Try again');
		    return false;
		}
		if(uname == 'username'){
		    showUserMessage('Invalid username or password. Try again');
		    return false;
		    
		}
		var url = 'http://www.nitrome.com/loginSub.php';
		var data = {
		    username:uname,
		    password:pword,
		    remember:rmbr,
		    sid:sid
		};
		var dataType = "json";
		var success;
		$j.post(
		    url,
		    data,
		    function(sdata){
			$date = new Date();
			return_object = sdata;
			if(sdata.error){
                            showUserMessage(sdata.error);
			    $j('.login_wait_screen').hide();
			    //$j('#login_container').show();
			}else{
			    $j('#top_login_avatar').html('<a href="/profile/avatar/"><img src="http://cdn.nitrome.com/images/avatars/'+sdata.avatarimage+'" alt="Avatar Image"/></a>');
			    $j('#login_bg').removeClass('logged_in').addClass('logged_in');
			    $j('#top_login_avatar').html('<a id="top_avatar_link" href="/profile/" title="Select a Different Avatar"><img src="http://cdn.nitrome.com/images/avatars/'+sdata.avatarimage+'" alt="Avatar Image"/></a>');
			    $j('#top_avatar_link').css({"background-color":"#ffffff","background-image":'url('+images_folder+'skin-sprite_2.5.2.png)'
			    });
			    $j('#top_login_username_display').css({"background":'url("http://cdn.nitrome.com/uploads/users/username-'+sdata.userid+'.png?cb='+$date.getTime()+'") no-repeat'});
			    $j('#nitromian_number').html('Nitromian '+sdata.nitromian);
                            if(sdata.friends == 1){
                                $msg = sdata.friends+' Friend';
                            }else{
                                $msg = sdata.friends+' Friends';
                            }
                            $j('#friends_number').html($msg);
			    $j('#profile_widget_container').show();
			    $j('#login_container').hide();
			    $j('.login_wait_screen').hide();
			    tickMgr.runLoopTick();
			}
		    },
		    dataType);
		    //
		    $j('.login_wait_screen').show();
		return false;
	    }
	    
	    $j(document).ready(function(){
		$j('#top_login_submit_btn').click(function(){
		    submitLogin();
		});
	    });