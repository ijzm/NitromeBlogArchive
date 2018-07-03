(function( $ ){
    $.fn.bigTip = function( method ) {
        
        // Method calling logic
        if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.bigTip' );
        }    
      
    };
  $.fn.bigTip.settings = {
    top_offset : 0,
    
    tl_left_offset : 8,
    bl_left_offset : 8,
    br_left_offset : 8,
    tr_left_offset  : 8,
    
    tl_top_offset : 8,
    bl_top_offset : 8,
    br_top_offset : 8,
    tr_top_offset  : 8,
    
    title_align:'center',
    desc_align:'left',
    
    show_frame : true
  };
  var methods = {
    init : function( options ) {
        return $(this).each(function(){
            $.fn.bigTip.settings.frameMarkup = '<div class="frame-tl frame-piece"></div><div class="frame-tr frame-piece"></div><div class="frame-bl frame-piece"></div><div class="frame-br frame-piece"></div>';
            
            $.fn.bigTip.settings.tipID = 'tooltip';
            
            $.fn.bigTip.settings.markup = '<div id="'+$.fn.bigTip.settings.tipID+'" class="tip-top"><div class="tip-mid"></div><div class="tip-btm"></div></div>'+$.fn.bigTip.settings.frameMarkup;
            
            $.fn.extend($.fn.bigTip.settings,options);
            if($.fn.bigTip.settings.desc_align != 'left'){
                $('.tip-btm').css({'text-align':$.fn.bigTip.settings.desc_align});
            }
            if($('.tip-top').length == 0){
                    $('body:first').append(''+$.fn.bigTip.settings.markup);
            }
        });
    },
    show : function( ) {
        return $(this).each(function(){
            $('#'+$.fn.bigTip.settings.tipID).stop(1,1);
            $('#'+$.fn.bigTip.settings.tipID+', .frame-piece').stop(1,1);
            var target_offset = $(this).offset();
            if($.fn.bigTip.settings.show_frame){
                var tl = $(this).offset();
                
                var tl_left_offset = $.fn.bigTip.settings.tl_left_offset;
                var tr_left_offset = $.fn.bigTip.settings.tr_left_offset;
                var bl_left_offset = $.fn.bigTip.settings.bl_left_offset;
                var br_left_offset = $.fn.bigTip.settings.br_left_offset;
                
                var tl_top_offset = $.fn.bigTip.settings.tl_top_offset;
                var tr_top_offset = $.fn.bigTip.settings.tr_top_offset;
                var bl_top_offset = $.fn.bigTip.settings.bl_top_offset;
                var br_top_offset = $.fn.bigTip.settings.br_top_offset;
                
                tl.left -= tl_left_offset;
                tl.top -= tl_top_offset;
                
                var tr = $(this).offset();
                tr.left += $(this).width()-tr_left_offset;
                tr.top -= tr_top_offset;
                
                var bl = $(this).offset();
                bl.top += $(this).height()-bl_top_offset;
                bl.left -= bl_left_offset;
                
                var br = $(this).offset();
                br.top += $(this).height()-br_top_offset;
                br.left += $(this).width()-br_left_offset;
                $('#'+$.fn.bigTip.settings.tipID+', .frame-piece').css({'display':'block'});
                $('.frame-tl').offset(tl);
                $('.frame-tr').offset(tr);
                $('.frame-bl').offset(bl);
                $('.frame-br').offset(br);
            }
            
            var target_width = $(this).width();
            var top_offset = $.fn.bigTip.settings.top_offset;
            target_offset.left -= ($('#'+$.fn.bigTip.settings.tipID).width()/2);
            target_offset.left += target_width/2;
            target_offset.top -= ($('#'+$.fn.bigTip.settings.tipID).height()+top_offset);
            $('#'+$.fn.bigTip.settings.tipID).css({'display':'block'});
            $('#'+$.fn.bigTip.settings.tipID).offset(target_offset);
            
        });
    },
    hide : function( ) {
        return $(this).each(function(){
            $('#'+$.fn.bigTip.settings.tipID).stop(1,1);
            $('#'+$.fn.bigTip.settings.tipID+', .frame-piece').stop(1,1);
            $('#'+$.fn.bigTip.settings.tipID).hide();
             $('#'+$.fn.bigTip.settings.tipID+', .frame-piece').css({'display':'none'});
            
            
        });
    },
    update : function( content ) {
        return $(this).each(function(){
            var icons = '';
            var title = '';
            var link = '';
            var image = '';
            var description = '';
            
            if(typeof content != "undefined"){
                $('.tip-mid').html(content);
            }else{
                if($(this).attr('data-icons')){
                    icon_arr = $(this).attr('data-icons').split(',');
                    icons = '<div id="icon_collection">';
                    arr_length = icon_arr.length;
                        for(i=0;i<arr_length;i++){
                            if(icon_arr[i] == 'touchy'){
                                icons += '<div id="t-touchy_icon" style="display: block;"></div>';
                            }
                            if(icon_arr[i] == 'heart'){
                                icons += '<div id="t-heart_icon" style="display: block;"></div>';
                            }
                        }
                    icons += "</div>"
                }
                if($(this).attr('data-title')){
                    title = '<h4 align="'+$.fn.bigTip.settings.title_align+'" class="info_color" style="font-weight:bold;font-size: 12px;">'+$(this).attr('data-title')+'</h4>';
                }
                if($(this).attr('data-description')){
                    description = '<p class="tip-desc info_color" style="font-size:11px;">'+$(this).attr('data-description')+'</p>';
                }
                if($(this).attr('data-link')){
                    link = $(this).attr('data-link');
                }
                if($(this).attr('data-image')){
                    image = '<img style="float:right;margin:10px;" src="'+$(this).attr('data-image')+'"/>';
                }
                html = ''+icons+title+description+link;
                $('.tip-mid').html(html);
                $('.tip-mid p.tip-desc').prepend(image);
                
            }
        });
    }
  };

})( jQuery );