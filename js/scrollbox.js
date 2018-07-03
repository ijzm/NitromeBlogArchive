(function( $ ){
    $.fn.scrollbox = function( method ) {
        
        // Method calling logic
        if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on .scrollbox object' );
        }
    };
    $.fn.scrollbox.settings = {
      elastic_band : '.elastic_band',
      scroll_container :'.scroll_container',
      outer_container : '.outer_container',
      scroll_bar : '.scroll-bar',
      scroll_track : '.scroll-track',
      raw_scroll_bar : 'scroll-bar',
      raw_outer_container : 'outer_container',
      offset : 0,
      position : 0,
      old_position : 0,
      $intervId : 0,
      old_height : 0,
      old_movement : 0,
      scroller_is_down : 0,
      scroll_button_offset : 13
    };
    var methods = {
    init : function( options ) {
        return $(this).each(function(){
            $.fn.extend($.fn.scrollbox.settings,options);
            $.fn.scrollbox.settings.markup = '<div class="outer_container">\
                                                    <div class="scroll-track">\
                                                        <div class="scroll-bar">\
                                                        </div>\
                                                    </div>\
                                                    <div class="scroll_container">\
                                                        <div class="elastic_band">\
                                                        </div>\
                                                    </div>\
                                                </div>';
            var set = $.fn.scrollbox.settings;
            var content = $(this).html();
            $(this).html($.fn.scrollbox.settings.markup);
            $(this).children(set.outer_container).children(set.scroll_container).children(set.elastic_band).html(content);
            var cssObj = {'display':'none'};
            $(this).children(set.outer_container).children(set.scroll_track).children(set.scroll_bar).css(cssObj);
            var target_height = $(this).height();
            
            cssObj = {'margin-top': '0',
            'height': (target_height-30)+'px',
            'background': 'transparent',
            'width': '6px',
            'z-index': '9997',
            'top':'0',
            'left':'0',
            'position': 'relative',
            'background':'#000',
            'margin-right': '4px'};
            $(this).children(set.outer_container).children(set.scroll_track).children(set.scroll_bar).css(cssObj);
            
            cssObj = {'margin-top': '0',
            'height': (target_height+35)+'px',
            'background': 'transparent',
            'width': '6px',
            'top':'0',
            'right':'0',
            'z-index': '9997',
            'position': 'absolute',
            'margin-right': '4px'};
            $(this).children(set.outer_container).children(set.scroll_track).css(cssObj);
            
            cssObj = {
                'position':'relative',
                'height':target_height+'px',
                'width':$(this).width()+'px',
                'overflow':'hidden'
            };
            $(this).children(set.outer_container).css(cssObj);
            cssObj = {
                'overflow':'scroll',
                'height':(target_height+20)+'px',
                'width':($(this).width()+20)+'px'
            };
            
            $(this).children(set.outer_container).children(set.scroll_container).css(cssObj);
            
            cssObj = {  'position':'relative'};
            $(this).children(set.outer_container).children(set.scroll_container).children(set.elastic_band).css(cssObj);
            $(this).children(set.outer_container).children(set.scroll_container).css(cssObj);
            
            cssObj = {  'position':'absolute',
            'height':'50px',
            'width':'5px',
            'margin':'0 auto',
            'background':'url(\'http://cdn.nitrome.com/styles/images/scroll-bar.png\') repeat',
            'border-radius':'6px',
            'cursor':'pointer'};
            $(this).children(set.outer_container).children(set.scroll_track).children(set.scroll_bar).css(cssObj);
            $(this).children(set.outer_container).children(set.scroll_container).bind('scroll',methods.update);
            $(this).bind('mouseenter',methods.show);
            $(this).bind('mouseleave',methods.hide);
            $(this).bind('change',methods.update);
            $(this).bind('change',methods.move, false);
            $(this).children(set.outer_container).children(set.scroll_track).children(set.scroll_bar).bind('mousedown',methods.setDown, false);
            $('body').bind('mouseup',methods.setUp,false);
            $('body').bind('mousemove',methods.move,false);
        });
    },
    hide:function (){
        return $(this).each(function(){
            var set = $.fn.scrollbox.settings;
            $(this).children(set.outer_container).children(set.scroll_track).children(set.scroll_bar).fadeOut(50);
        });
    },
    show:function(){
        return $(this).each(function(){
            var set = $.fn.scrollbox.settings;
            if($(this).children(set.outer_container).children(set.scroll_container).children(set.elastic_band).height() < $(this).children(set.outer_container).height()){
                
            }else{
                $(this).children(set.outer_container).children(set.scroll_track).children(set.scroll_bar).fadeIn(50);
            $(this).scrollbox('update');
            }
            
        });
    },
    update:function(){
        //you are now working in the scroll_container scope
        return $(this).each(function(){
            var set = $.fn.scrollbox.settings;
            $(this).children(set.outer_container).scrollLeft(0);
            var percentage = ($(this).height()/$(this).children(set.elastic_band).height()*100);
            var new_height = Math.floor($(this).height()/100*percentage);
            var movement = Math.floor($(this).scrollTop()/100*percentage);
            if(set.old_height==set.new_height&&set.old_movement==movement){
            }else{
                $(this).parent(set.outer_container).children(set.scroll_track).children(set.scroll_bar).stop(0,1);
                $(this).parent(set.outer_container).children(set.scroll_track).children(set.scroll_bar).animate({top:movement+'px'},80);
                set.old_height = new_height;
                set.old_movement = movement;
            }
            $(this).parent(set.outer_container).children(set.scroll_track).children(set.scroll_bar).height(new_height-35);
            return true;
        });
    },
    setDown:function(e){
        $('.outer_container').bind('selectstart',function(e){e.preventDefault(true);});
        var evt = e;
        return $(this).each(function(e){
            var set = $.fn.scrollbox.settings;
            var e = evt;
            e.preventDefault();
            set.offset = e.clientY;
            var ctx = $(this).parent(set.scroll_track);
            percentage = (ctx.siblings(set.scroll_container).height()/ctx.siblings(set.scroll_container).children(set.elastic_band).height()*100);
            set.old_position = (ctx.siblings(set.scroll_container).scrollTop()/100)*percentage;
            set.scroller_is_down = $(this);
        });
    },
    setUp:function(e){
        $('.outer_container').unbind('selectstart');
        var evt = e;
        return $(this).each(function(){
            var e = evt;
            var set = $.fn.scrollbox.settings;
            set.scroller_is_down = 0;
        });
    },
    move:function(e){
        var evt = e;
        return $(this).each(function(){
            var e = evt;
            var set = $.fn.scrollbox.settings;
            if(set.scroller_is_down){
                var ctx = set.scroller_is_down.parent(set.scroll_track);
                var $moveDelta = e.clientY - set.offset;
                set.position = $moveDelta + set.old_position;
                percentage = (ctx.siblings(set.scroll_container).height()/ctx.siblings(set.scroll_container).children(set.elastic_band).height()*100);
                ctx.siblings(set.scroll_container).scrollTop((set.position*100)/percentage);
            }
        });
    }
  };
})( jQuery );