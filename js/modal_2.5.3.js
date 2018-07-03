(function( $ ){
    $j.fn.modal = function( method ) {
        
        // Method calling logic
        if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $j.error( 'Method ' +  method + ' does not exist on .modal object' );
        }
    };
  $j.fn.modal.settings = {
    modal_offset:{
        left:-82,
        top:0
    },
    contentStack : []
  };
  var methods = {
    init : function( options ) {
        if($j('.modal-message').length != 0){
            return;
        }
        $j.fn.modal.settings.modalID = 'modal';
        $j.fn.extend($j.fn.modal.settings,options);
        $j.fn.modal.settings.modalMarkup = '<div class="blocker"></div><div id="modal" class="corners keyline" class=".modal-box"><div class="modal-panel panel_color corners"><div class="modal-message" class="info_color corners"></div></div><div class="hide-modal"></div></div>';
        $j('body').append(''+$j.fn.modal.settings.modalMarkup);
        $j('.blocker, .hide-modal').bind('click.modal',function(){
            $j(this).modal('hide');
        });
        $j(document).bind('scroll.modal',function(){
            $j(this).modal('reposition');
        })
        $j(window).bind('resize.modal',function(){
            $j(this).modal('reposition');
        });
        
        $j(this).modal('resetCSS');
        if(!$j(this).modal('isFixedSupported')){
            $j('.blocker').css({'position':'absolute'});
            $j('#modal').css({'position':'absolute'});
        }
        return $j(this).each(function(){
        });
    },
    resetCSS  : function(){
        //console.log('resetCSS');
        return $j(this).each(function(){
            //.blocker
            $j('.blocker').css({
                "display": "none",
                "height": $j(window).height(),
                "width": $j(window).width(),
                "position": "fixed",
                "background": "url('http://cdn.nitrome.com/styles/images/black-trans-70.png')",
                "z-index": "9998",
                "top": "0",
                "left": "0",
                "cursor": "pointer"
            });
            
            //#modal
            $j('#modal').css({
                "display": "none",
                "padding": "7px",
                "background": "#fff",
                "position": "fixed",
                "left": "90px",
                "top": "95px",
                "border-radius": "5px",
                "z-index": "9998",
                "box-shadow": "-4px 4px 0px rgba(0,0,0,.3)",
                "line-height": "0"
            });
            
            //#modal-panel
            $j('#modal-panel').css({
                "position": "relative",
                "top": "0",
                "left":"0",
                "display": "inline-block",
                "z-index": "9999",
                "font-size": "12px",
                "text-align": "center",
                "padding": "7px"
            });
            
            //.keyline
            $j('.keyline').css({
                "border":"1px solid #"+mid_colour
            });
            //.hide-modal
        $j('.hide-modal').css({
                "height": "12px",
                "width": "12px",
                "position": "absolute",
                "top": "20px",
                "right": "20px",
                "background": "url('http://cdn.nitrome.com/styles/images/close_button.png')",
                "z-index": "9999",
                "cursor": "pointer"
            });
        });
    },
    show : function( options ) {
        if(options){
            if(window.console) console.log(options);
        }
        if(!options||!options.force){
            if($j('.blocker').css('display') != 'none'){
                return;
            }
        }
        return $j(this).each(function(){
            $j(this).modal('resetCSS');
            $j('#'+$j.fn.modal.settings.modalID).css({'display':'inline-block'});
            $j('.blocker').show();
            var height = window.innerHeight ? window.innerHeight : $j(window).height();
            var width = window.innerWidth ? window.innerWidth : $j(window).width();
            $j('.blocker').height(height);
            $j('.blocker').width(width);
            
            $j('.hide-modal').show();
            $j('.blocker').offset({left:$j(window).scrollLeft(),top:$j(window).scrollTop()});
            $j('.hide-modal').css({top: 20,right: 20});
            $j('.modal-panel').css({'line-height':'16px'});
            $j('.modal-message').css({
                'padding' : '30px',
                'padding-left': '56px',
                'padding-right': '25px',
                'min-width':'263px',
                'background': 'url("http://cdn.nitrome.com/images/jobs/site_info.png") no-repeat 8px 25px #fff'});
            $j('.modal-panel').css({padding:'7px'});
            $j(this).modal('reposition');
        });
    },
    hide : function( ) {
        return $j(this).each(function(){
            $j('#'+$j.fn.modal.settings.modalID).stop(1,1);
            $j('#'+$j.fn.modal.settings.modalID).hide();
            $j('.blocker').hide();
            $j('.modal-message').html('');
            if($j.fn.modal.settings.contentStack.length > 0){
                var content = $j(this).modal('deQueue');
                if(content.isFrame){
                    $j(this).modal('showFrame',content);    
                }else{
                    $j(this).modal('update',content);
                    $j(this).modal('show');
                }
                
            }
        });
    },
    queue: function(options){
        $j.fn.modal.settings.contentStack.push(options);
    },
    deQueue:function(){
        return $j.fn.modal.settings.contentStack.shift();
    },
    getQueue:function(){
            return $j.fn.modal.settings.contentStack;
    },
    hideModal : function( ) {
        return $j(this).each(function(){
            $j('#'+$j.fn.modal.settings.modalID).stop(1,1);
            $j('#'+$j.fn.modal.settings.modalID).hide();
            $j('.modal-message').html('');
        });
    },
    update : function( content ){
        return $j(this).each(function(){ 
            if(typeof content != "undefined"){
                if($j('.blocker').css('display') == 'none'){
                    $j('.modal-message').html(content);
                }else{
                    $j(this).modal('queue',content);
                }
            }
        });
    },
    reposition: function(){
        return $j(this).each(function(){
            if($j('.blocker').css('display') == 'block'){
            var height = window.innerHeight ? window.innerHeight : $j(window).height();
            var width = window.innerWidth ? window.innerWidth: $j(window).width();
            var offset = {top:(height/2),left:(width/2)};
            offset.left -= ($j('#'+$j.fn.modal.settings.modalID).width()/2);
            offset.top -= ($j('#'+$j.fn.modal.settings.modalID).height()/2)
            if(width>$j('#container').width()){
                offset.left += $j.fn.modal.settings.modal_offset.left;
                offset.top += $j.fn.modal.settings.modal_offset.top;
            }
            offset.left += $j(window).scrollLeft();
            offset.top += $j(window).scrollTop();
            $j('#'+$j.fn.modal.settings.modalID).offset(offset);
            $j('.blocker').offset({left:$j(window).scrollLeft(),top:$j(window).scrollTop()});
            $j('.blocker').width(width);
            $j('.blocker').height(height);
            
            }
        });
    },
    showReg : function(){
        return $j(this).each(function(){
            $j(this).modal('show');
            $j('.modal-message').html('<iframe src="/modal/reg.html" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" width="520" height="290" scrolling="no" border="0" />');
            $j('.modal-message,.modal-panel').css({padding:0});
            $j('.modal-panel').css({'line-height':0});
            $j('.hide-modal').css({top: 23,right: 24});
            $j(this).modal('reposition');
            
        });
    },
    showSharer : function(){
        return $j(this).each(function(){
            $j(this).modal('show');
            $j('.modal-message').html('<iframe src="/modal/email.html" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" width="216" height="225" scrolling="no" border="0" />');
            $j('.modal-message,.modal-panel').css({padding:0});
            $j('.modal-message').css({'min-width':10});
            $j('.modal-panel').css({'line-height':0});
            $j('.hide-modal').css({top: 8,right: 9});
            $j(this).modal('reposition');
            
        });
    }
    ,
    showFrame : function(options){
        return $j(this).each(function(){
            if($j('.blocker').css('display') != 'none'){
                options.isFrame = true;
               $j(this).modal('queue',options);
               return;
            }
            $j(this).modal('show');
            $j('.modal-message').html('<iframe src="'+options.src+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" width="'+options.width+'" height="'+options.height+'" scrolling="no" border="0" />');
            $j('.modal-message,.modal-panel').css({padding:0});
            $j('.modal-message').css({'min-width':10});
            $j('.modal-panel').css({'line-height':0});
            $j('.hide-modal').css({top: 8,right: 9});
            if(options.hideClose){
                $j('.hide-modal').hide();
            }
            if(options.clearBG){
                $j('.modal-message').css({'background':'none'});
            }
            $j(this).modal('reposition');
            
        });
    },
    isFixedSupported : function() {
        return $j(this).each(function(){
            return $j( '#modal' ).css( 'position' ) === 'fixed';
        });
    }
  };
})( jQuery );