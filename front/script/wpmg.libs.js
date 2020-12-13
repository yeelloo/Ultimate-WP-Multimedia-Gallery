/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
!function(b){function k(){var t=location.href;return hashtag=-1!==t.indexOf("#prettyPhoto")&&decodeURI(t.substring(t.indexOf("#prettyPhoto")+1,t.length)),hashtag=hashtag&&hashtag.replace(/<|>/g,""),hashtag}function P(t,e){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null==i?"":i[1]}b.prettyPhoto={version:"3.1.6"},b.fn.prettyPhoto=function(s){function n(){b(".pp_loaderIcon").hide(),projectedTop=scroll_pos.scrollTop+(w/2-h.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(".pp_content").animate({height:h.contentHeight,width:h.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:y/2-h.containerWidth/2<0?0:y/2-h.containerWidth/2,width:h.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(h.height).width(h.width),$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),isSet&&"image"==l(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide(),settings.allow_expand&&(h.resized?b("a.pp_expand,a.pp_contract").show():b("a.pp_expand").hide()),!settings.autoplay_slideshow||f||a||b.prettyPhoto.startSlideshow(),settings.changepicturecallback(),a=!0}),isSet&&settings.overlay_gallery&&"image"==l(pp_images[set_position])?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((h.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,b.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave"),s.ajaxcallback()}function e(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden"),$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){b(".pp_loaderIcon").show(),t()})}function i(){return 475<window.outerWidth?100:40}function r(t,e){if(resized=!1,p(t,e),imageWidth=t,imageHeight=e,(y<m||w<g)&&doresize&&settings.allow_resize&&!v){for(resized=!0,fitting=!1;!fitting;)y<m?(imageWidth=y-i(),imageHeight=e/t*imageWidth):w<g?(imageHeight=w-i(),imageWidth=t/e*imageHeight):fitting=!0,g=imageHeight,m=imageWidth;(y<m||w<g)&&r(m,g),p(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(g),containerWidth:Math.floor(m)+2*settings.horizontal_padding,contentHeight:Math.floor(c),contentWidth:Math.floor(_),resized:resized}}function p(t,e){t=parseFloat(t),e=parseFloat(e),$pp_details=$pp_pic_holder.find(".pp_details"),$pp_details.width(t),detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom")),$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(b("body")).css({position:"absolute",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(".ppt"),$pp_title.width(t),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo(b("body")).css({position:"absolute",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),c=e+detailsHeight,_=t,g=c+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height(),m=t}function l(t){return t.match(/youtube\.com\/watch/i)||t.match(/youtu\.be/i)?"youtube":t.match(/vimeo\.com/i)?"vimeo":t.match(/\b.mov\b/i)?"quicktime":t.match(/\b.swf\b/i)?"flash":t.match(/\biframe=true\b/i)?"iframe":t.match(/\bajax=true\b/i)?"ajax":t.match(/\bcustom=true\b/i)?"custom":"#"==t.substr(0,1)?"inline":"image"}function o(){if(doresize&&"undefined"!=typeof $pp_pic_holder){if(scroll_pos=t(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=w/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>w)return;$pp_pic_holder.css({top:projectedTop,left:y/2+scroll_pos.scrollLeft-contentwidth/2})}}function t(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function d(){if(settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href))),settings.markup=settings.markup.replace("{pp_social}",""),b("body").append(settings.markup),$pp_pic_holder=b(".pp_pic_holder"),$ppt=b(".ppt"),$pp_overlay=b("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject="";for(var t=0;t<pp_images.length;t++)img_src=pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",pp_images[t]):(classname="default",""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find("#pp_full_res").after(toInject),$pp_gallery=b(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li"),$pp_gallery.find(".pp_arrow_next").click(function(){return b.prettyPhoto.changeGalleryPage("next"),b.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(".pp_arrow_previous").click(function(){return b.prettyPhoto.changeGalleryPage("previous"),b.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(t){b(this).find("a").click(function(){return b.prettyPhoto.changePage(t),b.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){return b.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme),$pp_overlay.css({opacity:0,height:b(document).height(),width:b(window).width()}).bind("click",function(){settings.modal||b.prettyPhoto.close()}),b("a.pp_close").bind("click",function(){return b.prettyPhoto.close(),!1}),settings.allow_expand&&b("a.pp_expand").bind("click",function(t){return doresize=b(this).hasClass("pp_expand")?(b(this).removeClass("pp_expand").addClass("pp_contract"),!1):(b(this).removeClass("pp_contract").addClass("pp_expand"),!0),e(function(){b.prettyPhoto.open()}),!1}),$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return b.prettyPhoto.changePage("previous"),b.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return b.prettyPhoto.changePage("next"),b.prettyPhoto.stopSlideshow(),!1}),o()}s=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="https://platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},s);var h,a,c,_,g,m,f,u=this,v=!1,w=b(window).height(),y=b(window).width();return doresize=!0,scroll_pos=t(),b(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){o(),w=b(window).height(),y=b(window).width(),"undefined"!=typeof $pp_overlay&&$pp_overlay.height(b(document).height()).width(y)}),s.keyboard_shortcuts&&b(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(t.keyCode){case 37:b.prettyPhoto.changePage("previous"),t.preventDefault();break;case 39:b.prettyPhoto.changePage("next"),t.preventDefault();break;case 27:settings.modal||b.prettyPhoto.close(),t.preventDefault()}}),b.prettyPhoto.initialize=function(){return settings=s,"pp_default"==settings.theme&&(settings.horizontal_padding=16),theRel=b(this).attr(settings.hook),galleryRegExp=/\[(?:.*)\]/,isSet=!!galleryRegExp.exec(theRel),pp_images=isSet?jQuery.map(u,function(t,e){return-1!=b(t).attr(settings.hook).indexOf(theRel)?b(t).attr("href"):void 0}):b.makeArray(b(this).attr("href")),pp_titles=isSet?jQuery.map(u,function(t,e){return-1!=b(t).attr(settings.hook).indexOf(theRel)?b(t).find("img").attr("alt")?b(t).find("img").attr("alt"):"":void 0}):b.makeArray(b(this).find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(u,function(t,e){return-1!=b(t).attr(settings.hook).indexOf(theRel)?b(t).attr("title")?b(t).attr("title"):"":void 0}):b.makeArray(b(this).attr("title")),pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1),set_position=jQuery.inArray(b(this).attr("href"),pp_images),rel_index=isSet?set_position:b("a["+settings.hook+"^='"+theRel+"']").index(b(this)),d(),settings.allow_resize&&b(window).bind("scroll.prettyphoto",function(){o()}),b.prettyPhoto.open(),!1},b.prettyPhoto.open=function(t){var e,i,p,o,a;return"undefined"==typeof settings&&(settings=s,pp_images=b.makeArray(t),pp_titles=arguments[1]?b.makeArray(arguments[1]):b.makeArray(""),pp_descriptions=arguments[2]?b.makeArray(arguments[2]):b.makeArray(""),isSet=1<pp_images.length,set_position=arguments[3]?arguments[3]:0,d(t.target)),settings.hideflash&&b("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),1<b(pp_images).size()?b(".pp_nav").show():b(".pp_nav").hide(),b(".pp_loaderIcon").show(),!settings.deeplinking||"undefined"!=typeof theRel&&(location.hash=theRel+"/"+rel_index+"/"),settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)),facebook_like_link=settings.social_tools.replace("{object_url}",pp_images[set_position]),$pp_pic_holder.find(".pp_social").html(facebook_like_link),e=encodeURIComponent(location.href),i=pp_images[set_position],p=pp_descriptions[set_position],o=pp_descriptions[set_position],a="https://www.facebook.com/dialog/feed?app_id=1696619673991009&link="+e+"&picture="+i+"&name="+encodeURIComponent(p)+"&caption="+encodeURIComponent("")+"&description="+encodeURIComponent(o)+"&display=popup",$pp_pic_holder.find(".pp_social a.facebook").attr("href",a),a="https://twitter.com/intent/tweet?text="+encodeURIComponent(p)+"&url="+i,$pp_pic_holder.find(".pp_social a.twitter").attr("href",a)),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+b(pp_images).size()),void 0!==pp_descriptions[set_position]&&""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(P("width",pp_images[set_position]))?P("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(P("height",pp_images[set_position]))?P("height",pp_images[set_position]):settings.default_height.toString(),v=!1,-1!=movie_height.indexOf("%")&&(movie_height=parseFloat(b(window).height()*parseFloat(movie_height)/100-150),v=!0),-1!=movie_width.indexOf("%")&&(movie_width=parseFloat(b(window).width()*parseFloat(movie_width)/100-150),v=!0),$pp_pic_holder.fadeIn(function(){switch(settings.show_title&&""!=pp_titles[set_position]&&void 0!==pp_titles[set_position]?$ppt.html(unescape(pp_titles[set_position])):$ppt.html("&nbsp;"),imgPreloader="",skipInjection=!1,l(pp_images[set_position])){case"image":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<b(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){h=r(imgPreloader.width,imgPreloader.height),n()},imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist."),b.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case"youtube":h=r(movie_width,movie_height),movie_id=P("v",pp_images[set_position]),""==movie_id&&(movie_id=pp_images[set_position].split("youtu.be/"),movie_id=movie_id[1],0<movie_id.indexOf("?")&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),0<movie_id.indexOf("&")&&(movie_id=movie_id.substr(0,movie_id.indexOf("&")))),movie="https://www.youtube.com/embed/"+movie_id,P("rel",pp_images[set_position])?movie+="?rel="+P("rel",pp_images[set_position]):movie+="?width=853&height=478&rel=0",settings.autoplay&&(movie+="&autoplay=1&amp;controls=1&amp;showinfo=0&inj=1"),toInject=settings.iframe_markup.replace(/{width}/g,h.width).replace(/{height}/g,h.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":h=r(movie_width,movie_height),movie_id=pp_images[set_position];var t=movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/);movie="https://player.vimeo.com/video/"+t[3]+"?title=0&amp;byline=0&amp;portrait=0",settings.autoplay&&(movie+="&autoplay=1;"),vimeo_width=h.width+"/embed/?moog_width="+h.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,h.height).replace(/{path}/g,movie);break;case"quicktime":(h=r(movie_width,movie_height)).height+=15,h.contentHeight+=15,h.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,h.width).replace(/{height}/g,h.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":h=r(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf("?")),toInject=settings.flash_markup.replace(/{width}/g,h.width).replace(/{height}/g,h.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":h=r(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1),toInject=settings.iframe_markup.replace(/{width}/g,h.width).replace(/{height}/g,h.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1,h=r(movie_width,movie_height),doresize=!0,skipInjection=!0,b.get(pp_images[set_position],
function(t){toInject=settings.inline_markup.replace(/{content}/g,t),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,n()});break;case"custom":h=r(movie_width,movie_height),toInject=settings.custom_markup;break;case"inline":myClone=b(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(b("body")).show(),doresize=!1,h=r(b(myClone).width(),b(myClone).height()),doresize=!0,b(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,b(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,n())}),!1},b.prettyPhoto.changePage=function(t){currentGalleryPage=0,"previous"==t?(set_position--,set_position<0&&(set_position=b(pp_images).size()-1)):"next"==t?(set_position++,set_position>b(pp_images).size()-1&&(set_position=0)):set_position=t,rel_index=set_position,doresize=doresize||!0,settings.allow_expand&&b(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),e(function(){b.prettyPhoto.open()})},b.prettyPhoto.changeGalleryPage=function(t){"next"==t?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==t?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=t,slide_speed="next"==t||"previous"==t?settings.animation_speed:0,slide_to=currentGalleryPage*(itemsPerPage*itemWidth),$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},b.prettyPhoto.startSlideshow=function(){void 0===f?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){return b.prettyPhoto.stopSlideshow(),!1}),f=setInterval(b.prettyPhoto.startSlideshow,settings.slideshow)):b.prettyPhoto.changePage("next")},b.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){return b.prettyPhoto.startSlideshow(),!1}),clearInterval(f),f=void 0},b.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(b.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),b("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){b(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&b("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible"),b(this).remove(),b(window).unbind("scroll.prettyphoto"),-1!==location.href.indexOf("#prettyPhoto")&&(location.hash="prettyPhoto"),settings.callback(),doresize=!0,a=!1,delete settings}))},!pp_alreadyInitialized&&k()&&(pp_alreadyInitialized=!0,hashIndex=k(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("/")),setTimeout(function(){b("a["+s.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)),this.unbind("click.prettyphoto").bind("click.prettyphoto",b.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;

/**!
 * MixItUp v3.3.0
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 0be05511-2264-4384-8e31-c75554304cd0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(t){"use strict";var e=null,n=null;!function(){var e=["webkit","moz","o","ms"],n=t.document.createElement("div"),a=-1;for(a=0;a<e.length&&!t.requestAnimationFrame;a++)t.requestAnimationFrame=t[e[a]+"RequestAnimationFrame"];"undefined"==typeof n.nextElementSibling&&Object.defineProperty(t.Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t;){if(1===t.nodeType)return t;t=t.nextSibling}return null}}),function(t){t.matches=t.matches||t.machesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector||function(t){return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t),this)>-1}}(t.Element.prototype),Object.keys||(Object.keys=function(){var t=Object.prototype.hasOwnProperty,e=!1,n=[],a=-1;return e=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=n.length,function(i){var o=[],r="",s=-1;if("object"!=typeof i&&("function"!=typeof i||null===i))throw new TypeError("Object.keys called on non-object");for(r in i)t.call(i,r)&&o.push(r);if(e)for(s=0;s<a;s++)t.call(i,n[s])&&o.push(n[s]);return o}}()),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),"function"!=typeof Object.create&&(Object.create=function(t){var e=function(){};return function(n,a){if(n!==Object(n)&&null!==n)throw TypeError("Argument must be an object, or null");e.prototype=n||{};var i=new e;return e.prototype=null,a!==t&&Object.defineProperties(i,a),null===n&&(i.__proto__=null),i}}()),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e,n,a,i;if(null===this)throw new TypeError;if(a=Object(this),i=a.length>>>0,0===i)return-1;if(e=0,arguments.length>1&&(e=Number(arguments[1]),e!==e?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e)))),e>=i)return-1;for(n=e>=0?e:Math.max(i-Math.abs(e),0);n<i;n++)if(n in a&&a[n]===t)return n;return-1}),Function.prototype.bind||(Function.prototype.bind=function(t){var e,n,a,i;if("function"!=typeof this)throw new TypeError;return e=Array.prototype.slice.call(arguments,1),n=this,a=function(){},i=function(){return n.apply(this instanceof a?this:t,e.concat(Array.prototype.slice.call(arguments)))},this.prototype&&(a.prototype=this.prototype),i.prototype=new a,i}),t.Element.prototype.dispatchEvent||(t.Element.prototype.dispatchEvent=function(t){try{return this.fireEvent("on"+t.type,t)}catch(e){}})}(),e=function(a,i,o){var r=null,s=!1,l=null,c=null,u=null,f=null,h=[],d="",m=[],g=-1;if(u=o||t.document,(s=arguments[3])&&(s="boolean"==typeof s),"string"==typeof a)m=u.querySelectorAll(a);else if(a&&"object"==typeof a&&n.isElement(a,u))m=[a];else{if(!a||"object"!=typeof a||!a.length)throw new Error(e.messages.errorFactoryInvalidContainer());m=a}if(m.length<1)throw new Error(e.messages.errorFactoryContainerNotFound());for(g=0;(r=m[g])&&(!(g>0)||s);g++)r.id?d=r.id:(d="MixItUp"+n.randomHex(),r.id=d),e.instances[d]instanceof e.Mixer?(l=e.instances[d],(!i||i&&i.debug&&i.debug.showWarnings!==!1)&&console.warn(e.messages.warningFactoryPreexistingInstance())):(l=new e.Mixer,l.attach(r,u,d,i),e.instances[d]=l),c=new e.Facade(l),i&&i.debug&&i.debug.enable?h.push(l):h.push(c);return f=s?new e.Collection(h):h[0]},e.use=function(t){e.Base.prototype.callActions.call(e,"beforeUse",arguments),"function"==typeof t&&"mixitup-extension"===t.TYPE?"undefined"==typeof e.extensions[t.NAME]&&(t(e),e.extensions[t.NAME]=t):t.fn&&t.fn.jquery&&(e.libraries.$=t),e.Base.prototype.callActions.call(e,"afterUse",arguments)},e.instances={},e.extensions={},e.libraries={},n={hasClass:function(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))},addClass:function(t,e){this.hasClass(t,e)||(t.className+=t.className?" "+e:e)},removeClass:function(t,e){if(this.hasClass(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ").trim()}},extend:function(t,e,n,a){var i=[],o="",r=-1;n=n||!1,a=a||!1;try{if(Array.isArray(e))for(r=0;r<e.length;r++)i.push(r);else e&&(i=Object.keys(e));for(r=0;r<i.length;r++)o=i[r],!n||"object"!=typeof e[o]||this.isElement(e[o])?t[o]=e[o]:Array.isArray(e[o])?(t[o]||(t[o]=[]),this.extend(t[o],e[o],n,a)):(t[o]||(t[o]={}),this.extend(t[o],e[o],n,a))}catch(s){if(!a)throw s;this.handleExtendError(s,t)}return t},handleExtendError:function(t,n){var a=/property "?(\w*)"?[,:] object/i,i=null,o="",r="",s="",l="",c="",u=-1,f=-1;if(t instanceof TypeError&&(i=a.exec(t.message))){o=i[1];for(c in n){for(f=0;f<o.length&&o.charAt(f)===c.charAt(f);)f++;f>u&&(u=f,l=c)}throw u>1&&(s=e.messages.errorConfigInvalidPropertySuggestion({probableMatch:l})),r=e.messages.errorConfigInvalidProperty({erroneous:o,suggestion:s}),new TypeError(r)}throw t},template:function(t){for(var e=/\${([\w]*)}/g,n={},a=null;a=e.exec(t);)n[a[1]]=new RegExp("\\${"+a[1]+"}","g");return function(e){var a="",i=t;e=e||{};for(a in n)i=i.replace(n[a],"undefined"!=typeof e[a]?e[a]:"");return i}},on:function(e,n,a,i){e&&(e.addEventListener?e.addEventListener(n,a,i):e.attachEvent&&(e["e"+n+a]=a,e[n+a]=function(){e["e"+n+a](t.event)},e.attachEvent("on"+n,e[n+a])))},off:function(t,e,n){t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent&&(t.detachEvent("on"+e,t[e+n]),t[e+n]=null))},getCustomEvent:function(e,n,a){var i=null;return a=a||t.document,"function"==typeof t.CustomEvent?i=new t.CustomEvent(e,{detail:n,bubbles:!0,cancelable:!0}):"function"==typeof a.createEvent?(i=a.createEvent("CustomEvent"),i.initCustomEvent(e,!0,!0,n)):(i=a.createEventObject(),i.type=e,i.returnValue=!1,i.cancelBubble=!1,i.detail=n),i},getOriginalEvent:function(t){return t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t},index:function(t,e){for(var n=0;null!==(t=t.previousElementSibling);)e&&!t.matches(e)||++n;return n},camelCase:function(t){return t.toLowerCase().replace(/([_-][a-z])/g,function(t){return t.toUpperCase().replace(/[_-]/,"")})},pascalCase:function(t){return(t=this.camelCase(t)).charAt(0).toUpperCase()+t.slice(1)},dashCase:function(t){return t.replace(/([A-Z])/g,"-$1").replace(/^-/,"").toLowerCase()},isElement:function(e,n){return n=n||t.document,!!(t.HTMLElement&&e instanceof t.HTMLElement)||(!!(n.defaultView&&n.defaultView.HTMLElement&&e instanceof n.defaultView.HTMLElement)||null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)},createElement:function(e,n){var a=null,i=null;for(n=n||t.document,a=n.createDocumentFragment(),i=n.createElement("div"),i.innerHTML=e.trim();i.firstChild;)a.appendChild(i.firstChild);return a},removeWhitespace:function(t){for(var e;t&&"#text"===t.nodeName;)e=t,t=t.previousSibling,e.parentElement&&e.parentElement.removeChild(e)},isEqualArray:function(t,e){var n=t.length;if(n!==e.length)return!1;for(;n--;)if(t[n]!==e[n])return!1;return!0},deepEquals:function(t,e){var n;if("object"==typeof t&&t&&"object"==typeof e&&e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(n in t)if(!e.hasOwnProperty(n)||!this.deepEquals(t[n],e[n]))return!1}else if(t!==e)return!1;return!0},arrayShuffle:function(t){for(var e=t.slice(),n=e.length,a=n,i=-1,o=[];a--;)i=~~(Math.random()*n),o=e[a],e[a]=e[i],e[i]=o;return e},arrayFromList:function(t){var e,n;try{return Array.prototype.slice.call(t)}catch(a){for(e=[],n=0;n<t.length;n++)e.push(t[n]);return e}},debounce:function(t,e,n){var a;return function(){var i=this,o=arguments,r=n&&!a,s=null;s=function(){a=null,n||t.apply(i,o)},clearTimeout(a),a=setTimeout(s,e),r&&t.apply(i,o)}},position:function(t){for(var e=0,n=0,a=t;t;)e-=t.scrollLeft,n-=t.scrollTop,t===a&&(e+=t.offsetLeft,n+=t.offsetTop,a=t.offsetParent),t=t.parentElement;return{x:e,y:n}},getHypotenuse:function(t,e){var n=t.x-e.x,a=t.y-e.y;return n=n<0?n*-1:n,a=a<0?a*-1:a,Math.sqrt(Math.pow(n,2)+Math.pow(a,2))},getIntersectionRatio:function(t,e){var n=t.width*t.height,a=-1,i=-1,o=-1,r=-1;return a=Math.max(0,Math.min(t.left+t.width,e.left+e.width)-Math.max(t.left,e.left)),i=Math.max(0,Math.min(t.top+t.height,e.top+e.height)-Math.max(t.top,e.top)),o=i*a,r=o/n},closestParent:function(e,n,a,i){var o=e.parentNode;if(i=i||t.document,a&&e.matches(n))return e;for(;o&&o!=i.body;){if(o.matches&&o.matches(n))return o;if(!o.parentNode)return null;o=o.parentNode}return null},children:function(e,n,a){var i=[],o="";return a=a||t.doc,e&&(e.id||(o="Temp"+this.randomHexKey(),e.id=o),i=a.querySelectorAll("#"+e.id+" > "+n),o&&e.removeAttribute("id")),i},clean:function(t){var e=[],n=-1;for(n=0;n<t.length;n++)""!==t[n]&&e.push(t[n]);return e},defer:function(n){var a=null,i=null,o=null;return i=new this.Deferred,e.features.has.promises?i.promise=new Promise(function(t,e){i.resolve=t,i.reject=e}):(o=t.jQuery||n.$)&&"function"==typeof o.Deferred?(a=o.Deferred(),i.promise=a.promise(),i.resolve=a.resolve,i.reject=a.reject):t.console&&console.warn(e.messages.warningNoPromiseImplementation()),i},all:function(n,a){var i=null;return e.features.has.promises?Promise.all(n):(i=t.jQuery||a.$)&&"function"==typeof i.when?i.when.apply(i,n).done(function(){return arguments}):(t.console&&console.warn(e.messages.warningNoPromiseImplementation()),[])},getPrefix:function(t,e,a){var i=-1,o="";if(n.dashCase(e)in t.style)return"";for(i=0;o=a[i];i++)if(o+e in t.style)return o.toLowerCase();return"unsupported"},randomHex:function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()},getDocumentState:function(e){return e="object"==typeof e.body?e:t.document,{scrollTop:t.pageYOffset,scrollLeft:t.pageXOffset,docHeight:e.documentElement.scrollHeight,docWidth:e.documentElement.scrollWidth,viewportHeight:e.documentElement.clientHeight,viewportWidth:e.documentElement.clientWidth}},bind:function(t,e){return function(){return e.apply(t,arguments)}},isVisible:function(e){var n=null;return!!e.offsetParent||(n=t.getComputedStyle(e),"fixed"===n.position&&"hidden"!==n.visibility&&"0"!==n.opacity)},seal:function(t){"function"==typeof Object.seal&&Object.seal(t)},freeze:function(t){"function"==typeof Object.freeze&&Object.freeze(t)},compareVersions:function(t,e){var n=t.split("."),a=e.split("."),i=-1,o=-1,r=-1;for(r=0;r<n.length;r++){if(i=parseInt(n[r].replace(/[^\d.]/g,"")),o=parseInt(a[r].replace(/[^\d.]/g,"")||0),o<i)return!1;if(o>i)return!0}return!0},Deferred:function(){this.promise=null,this.resolve=null,this.reject=null,this.id=n.randomHex()},isEmptyObject:function(t){var e="";if("function"==typeof Object.keys)return 0===Object.keys(t).length;for(e in t)if(t.hasOwnProperty(e))return!1;return!0},getClassname:function(t,e,n){var a="";return a+=t.block,a.length&&(a+=t.delineatorElement),a+=t["element"+this.pascalCase(e)],n?(a.length&&(a+=t.delineatorModifier),a+=n):a},getProperty:function(t,e){var n=e.split("."),a=null,i="",o=0;if(!e)return t;for(a=function(t){return t?t[i]:null};o<n.length;)i=n[o],t=a(t),o++;return"undefined"!=typeof t?t:null}},e.h=n,e.Base=function(){},e.Base.prototype={constructor:e.Base,callActions:function(t,e){var a=this,i=a.constructor.actions[t],o="";if(i&&!n.isEmptyObject(i))for(o in i)i[o].apply(a,e)},callFilters:function(t,e,a){var i=this,o=i.constructor.filters[t],r=e,s="";if(!o||n.isEmptyObject(o))return r;a=a||[];for(s in o)a=n.arrayFromList(a),a.unshift(r),r=o[s].apply(i,a);return r}},e.BaseStatic=function(){this.actions={},this.filters={},this.extend=function(t){n.extend(this.prototype,t)},this.registerAction=function(t,e,n){(this.actions[t]=this.actions[t]||{})[e]=n},this.registerFilter=function(t,e,n){(this.filters[t]=this.filters[t]||{})[e]=n}},e.Features=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.boxSizingPrefix="",this.transformPrefix="",this.transitionPrefix="",this.boxSizingPrefix="",this.transformProp="",this.transformRule="",this.transitionProp="",this.perspectiveProp="",this.perspectiveOriginProp="",this.has=new e.Has,this.canary=null,this.BOX_SIZING_PROP="boxSizing",this.TRANSITION_PROP="transition",this.TRANSFORM_PROP="transform",this.PERSPECTIVE_PROP="perspective",this.PERSPECTIVE_ORIGIN_PROP="perspectiveOrigin",this.VENDORS=["Webkit","moz","O","ms"],this.TWEENABLE=["opacity","width","height","marginRight","marginBottom","x","y","scale","translateX","translateY","translateZ","rotateX","rotateY","rotateZ"],this.callActions("afterConstruct")},e.BaseStatic.call(e.Features),e.Features.prototype=Object.create(e.Base.prototype),n.extend(e.Features.prototype,{constructor:e.Features,init:function(){var t=this;t.callActions("beforeInit",arguments),t.canary=document.createElement("div"),t.setPrefixes(),t.runTests(),t.callActions("beforeInit",arguments)},runTests:function(){var e=this;e.callActions("beforeRunTests",arguments),e.has.promises="function"==typeof t.Promise,e.has.transitions="unsupported"!==e.transitionPrefix,e.callActions("afterRunTests",arguments),n.freeze(e.has)},setPrefixes:function(){var t=this;t.callActions("beforeSetPrefixes",arguments),t.transitionPrefix=n.getPrefix(t.canary,"Transition",t.VENDORS),t.transformPrefix=n.getPrefix(t.canary,"Transform",t.VENDORS),t.boxSizingPrefix=n.getPrefix(t.canary,"BoxSizing",t.VENDORS),t.boxSizingProp=t.boxSizingPrefix?t.boxSizingPrefix+n.pascalCase(t.BOX_SIZING_PROP):t.BOX_SIZING_PROP,t.transitionProp=t.transitionPrefix?t.transitionPrefix+n.pascalCase(t.TRANSITION_PROP):t.TRANSITION_PROP,t.transformProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.TRANSFORM_PROP):t.TRANSFORM_PROP,t.transformRule=t.transformPrefix?"-"+t.transformPrefix+"-"+t.TRANSFORM_PROP:t.TRANSFORM_PROP,t.perspectiveProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.PERSPECTIVE_PROP):t.PERSPECTIVE_PROP,t.perspectiveOriginProp=t.transformPrefix?t.transformPrefix+n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP):t.PERSPECTIVE_ORIGIN_PROP,t.callActions("afterSetPrefixes",arguments)}}),e.Has=function(){this.transitions=!1,this.promises=!1,n.seal(this)},e.features=new e.Features,e.features.init(),e.ConfigAnimation=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!0,this.effects="fade scale",this.effectsIn="",this.effectsOut="",this.duration=600,this.easing="ease",this.applyPerspective=!0,this.perspectiveDistance="3000px",this.perspectiveOrigin="50% 50%",this.queue=!0,this.queueLimit=3,this.animateResizeContainer=!0,this.animateResizeTargets=!1,this.staggerSequence=null,this.reverseOut=!1,this.nudge=!0,this.clampHeight=!0,this.clampWidth=!0,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigAnimation),e.ConfigAnimation.prototype=Object.create(e.Base.prototype),e.ConfigAnimation.prototype.constructor=e.ConfigAnimation,e.ConfigBehavior=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.liveSort=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigBehavior),e.ConfigBehavior.prototype=Object.create(e.Base.prototype),e.ConfigBehavior.prototype.constructor=e.ConfigBehavior,e.ConfigCallbacks=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.onMixStart=null,this.onMixBusy=null,this.onMixEnd=null,this.onMixFail=null,this.onMixClick=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigCallbacks),e.ConfigCallbacks.prototype=Object.create(e.Base.prototype),e.ConfigCallbacks.prototype.constructor=e.ConfigCallbacks,e.ConfigControls=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!0,this.live=!1,this.scope="global",this.toggleLogic="or",this.toggleDefault="all",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigControls),e.ConfigControls.prototype=Object.create(e.Base.prototype),e.ConfigControls.prototype.constructor=e.ConfigControls,e.ConfigClassNames=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.block="mixitup",this.elementContainer="container",this.elementFilter="control",this.elementSort="control",this.elementMultimix="control",this.elementToggle="control",this.modifierActive="active",this.modifierDisabled="disabled",this.modifierFailed="failed",this.delineatorElement="-",this.delineatorModifier="-",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigClassNames),e.ConfigClassNames.prototype=Object.create(e.Base.prototype),e.ConfigClassNames.prototype.constructor=e.ConfigClassNames,e.ConfigData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.uidKey="",this.dirtyCheck=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigData),e.ConfigData.prototype=Object.create(e.Base.prototype),e.ConfigData.prototype.constructor=e.ConfigData,e.ConfigDebug=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.enable=!1,this.showWarnings=!0,this.fauxAsync=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigDebug),e.ConfigDebug.prototype=Object.create(e.Base.prototype),e.ConfigDebug.prototype.constructor=e.ConfigDebug,e.ConfigLayout=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.allowNestedTargets=!0,this.containerClassName="",this.siblingBefore=null,this.siblingAfter=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigLayout),e.ConfigLayout.prototype=Object.create(e.Base.prototype),e.ConfigLayout.prototype.constructor=e.ConfigLayout,e.ConfigLoad=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.filter="all",this.sort="default:asc",this.dataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigLoad),e.ConfigLoad.prototype=Object.create(e.Base.prototype),e.ConfigLoad.prototype.constructor=e.ConfigLoad,e.ConfigSelectors=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.target=".mix",this.control="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigSelectors),e.ConfigSelectors.prototype=Object.create(e.Base.prototype),e.ConfigSelectors.prototype.constructor=e.ConfigSelectors,e.ConfigRender=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.target=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigRender),e.ConfigRender.prototype=Object.create(e.Base.prototype),e.ConfigRender.prototype.constructor=e.ConfigRender,e.ConfigTemplates=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.ConfigTemplates),e.ConfigTemplates.prototype=Object.create(e.Base.prototype),e.ConfigTemplates.prototype.constructor=e.ConfigTemplates,e.Config=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.animation=new e.ConfigAnimation,this.behavior=new e.ConfigBehavior,this.callbacks=new e.ConfigCallbacks,this.controls=new e.ConfigControls,this.classNames=new e.ConfigClassNames,this.data=new e.ConfigData,this.debug=new e.ConfigDebug,this.layout=new e.ConfigLayout,this.load=new e.ConfigLoad,this.selectors=new e.ConfigSelectors,this.render=new e.ConfigRender,this.templates=new e.ConfigTemplates,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Config),e.Config.prototype=Object.create(e.Base.prototype),e.Config.prototype.constructor=e.Config,e.MixerDom=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.document=null,this.body=null,this.container=null,this.parent=null,this.targets=[],this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.MixerDom),e.MixerDom.prototype=Object.create(e.Base.prototype),e.MixerDom.prototype.constructor=e.MixerDom,e.UiClassNames=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.base="",this.active="",this.disabled="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.UiClassNames),e.UiClassNames.prototype=Object.create(e.Base.prototype),e.UiClassNames.prototype.constructor=e.UiClassNames,e.CommandDataset=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.dataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandDataset),e.CommandDataset.prototype=Object.create(e.Base.prototype),e.CommandDataset.prototype.constructor=e.CommandDataset,e.CommandMultimix=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.filter=null,this.sort=null,this.insert=null,this.remove=null,this.changeLayout=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandMultimix),e.CommandMultimix.prototype=Object.create(e.Base.prototype),e.CommandMultimix.prototype.constructor=e.CommandMultimix,e.CommandFilter=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.selector="",this.collection=null,this.action="show",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandFilter),e.CommandFilter.prototype=Object.create(e.Base.prototype),e.CommandFilter.prototype.constructor=e.CommandFilter,e.CommandSort=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.sortString="",this.attribute="",this.order="asc",this.collection=null,this.next=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandSort),e.CommandSort.prototype=Object.create(e.Base.prototype),e.CommandSort.prototype.constructor=e.CommandSort,e.CommandInsert=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.index=0,this.collection=[],this.position="before",this.sibling=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandInsert),e.CommandInsert.prototype=Object.create(e.Base.prototype),e.CommandInsert.prototype.constructor=e.CommandInsert,e.CommandRemove=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.targets=[],this.collection=[],this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandRemove),e.CommandRemove.prototype=Object.create(e.Base.prototype),e.CommandRemove.prototype.constructor=e.CommandRemove,e.CommandChangeLayout=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.containerClassName="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.CommandChangeLayout),e.CommandChangeLayout.prototype=Object.create(e.Base.prototype),e.CommandChangeLayout.prototype.constructor=e.CommandChangeLayout,e.ControlDefinition=function(t,a,i,o){e.Base.call(this),this.callActions("beforeConstruct"),this.type=t,this.selector=a,this.live=i||!1,this.parent=o||"",this.callActions("afterConstruct"),n.freeze(this),n.seal(this)},e.BaseStatic.call(e.ControlDefinition),e.ControlDefinition.prototype=Object.create(e.Base.prototype),e.ControlDefinition.prototype.constructor=e.ControlDefinition,e.controlDefinitions=[],e.controlDefinitions.push(new e.ControlDefinition("multimix","[data-filter][data-sort]")),e.controlDefinitions.push(new e.ControlDefinition("filter","[data-filter]")),e.controlDefinitions.push(new e.ControlDefinition("sort","[data-sort]")),e.controlDefinitions.push(new e.ControlDefinition("toggle","[data-toggle]")),e.Control=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.el=null,this.selector="",this.bound=[],this.pending=-1,this.type="",this.status="inactive",this.filter="",this.sort="",this.canDisable=!1,this.handler=null,this.classNames=new e.UiClassNames,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Control),e.Control.prototype=Object.create(e.Base.prototype),n.extend(e.Control.prototype,{constructor:e.Control,init:function(t,n,a){var i=this;if(this.callActions("beforeInit",arguments),i.el=t,i.type=n,i.selector=a,i.selector)i.status="live";else switch(i.canDisable="boolean"==typeof i.el.disable,i.type){case"filter":i.filter=i.el.getAttribute("data-filter");break;case"toggle":i.filter=i.el.getAttribute("data-toggle");break;case"sort":i.sort=i.el.getAttribute("data-sort");break;case"multimix":i.filter=i.el.getAttribute("data-filter"),i.sort=i.el.getAttribute("data-sort")}i.bindClick(),e.controls.push(i),this.callActions("afterInit",arguments)},isBound:function(t){var e=this,n=!1;return this.callActions("beforeIsBound",arguments),n=e.bound.indexOf(t)>-1,e.callFilters("afterIsBound",n,arguments)},addBinding:function(t){var e=this;this.callActions("beforeAddBinding",arguments),e.isBound()||e.bound.push(t),this.callActions("afterAddBinding",arguments)},removeBinding:function(t){var n=this,a=-1;this.callActions("beforeRemoveBinding",arguments),(a=n.bound.indexOf(t))>-1&&n.bound.splice(a,1),n.bound.length<1&&(n.unbindClick(),a=e.controls.indexOf(n),e.controls.splice(a,1),"active"===n.status&&n.renderStatus(n.el,"inactive")),this.callActions("afterRemoveBinding",arguments)},bindClick:function(){var t=this;this.callActions("beforeBindClick",arguments),t.handler=function(e){t.handleClick(e)},n.on(t.el,"click",t.handler),this.callActions("afterBindClick",arguments)},unbindClick:function(){var t=this;this.callActions("beforeUnbindClick",arguments),n.off(t.el,"click",t.handler),t.handler=null,this.callActions("afterUnbindClick",arguments)},handleClick:function(t){var a=this,i=null,o=null,r=!1,s=void 0,l={},c=null,u=[],f=-1;if(this.callActions("beforeHandleClick",arguments),this.pending=0,o=a.bound[0],i=a.selector?n.closestParent(t.target,o.config.selectors.control+a.selector,!0,o.dom.document):a.el,!i)return void a.callActions("afterHandleClick",arguments);switch(a.type){case"filter":l.filter=a.filter||i.getAttribute("data-filter");break;case"sort":l.sort=a.sort||i.getAttribute("data-sort");break;case"multimix":l.filter=a.filter||i.getAttribute("data-filter"),l.sort=a.sort||i.getAttribute("data-sort");break;case"toggle":l.filter=a.filter||i.getAttribute("data-toggle"),r="live"===a.status?n.hasClass(i,a.classNames.active):"active"===a.status}for(f=0;f<a.bound.length;f++)c=new e.CommandMultimix,n.extend(c,l),u.push(c);for(u=a.callFilters("commandsHandleClick",u,arguments),a.pending=a.bound.length,f=0;o=a.bound[f];f++)l=u[f],l&&(o.lastClicked||(o.lastClicked=i),e.events.fire("mixClick",o.dom.container,{state:o.state,instance:o,originalEvent:t,control:o.lastClicked},o.dom.document),"function"==typeof o.config.callbacks.onMixClick&&(s=o.config.callbacks.onMixClick.call(o.lastClicked,o.state,t,o),s===!1)||("toggle"===a.type?r?o.toggleOff(l.filter):o.toggleOn(l.filter):o.multimix(l)));this.callActions("afterHandleClick",arguments)},update:function(t,n){var a=this,i=new e.CommandMultimix;a.callActions("beforeUpdate",arguments),a.pending--,a.pending=Math.max(0,a.pending),a.pending>0||("live"===a.status?a.updateLive(t,n):(i.sort=a.sort,i.filter=a.filter,a.callFilters("actionsUpdate",i,arguments),a.parseStatusChange(a.el,t,i,n)),a.callActions("afterUpdate",arguments))},updateLive:function(t,n){var a=this,i=null,o=null,r=null,s=-1;if(a.callActions("beforeUpdateLive",arguments),a.el){for(i=a.el.querySelectorAll(a.selector),s=0;r=i[s];s++){switch(o=new e.CommandMultimix,a.type){case"filter":o.filter=r.getAttribute("data-filter");break;case"sort":o.sort=r.getAttribute("data-sort");break;case"multimix":o.filter=r.getAttribute("data-filter"),o.sort=r.getAttribute("data-sort");break;case"toggle":o.filter=r.getAttribute("data-toggle")}o=a.callFilters("actionsUpdateLive",o,arguments),a.parseStatusChange(r,t,o,n)}a.callActions("afterUpdateLive",arguments)}},parseStatusChange:function(t,e,n,a){var i=this,o="",r="",s=-1;switch(i.callActions("beforeParseStatusChange",arguments),i.type){case"filter":e.filter===n.filter?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"multimix":e.sort===n.sort&&e.filter===n.filter?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"sort":e.sort.match(/:asc/g)&&(o=e.sort.replace(/:asc/g,"")),e.sort===n.sort||o===n.sort?i.renderStatus(t,"active"):i.renderStatus(t,"inactive");break;case"toggle":for(a.length<1&&i.renderStatus(t,"inactive"),e.filter===n.filter&&i.renderStatus(t,"active"),s=0;s<a.length;s++){if(r=a[s],r===n.filter){i.renderStatus(t,"active");break}i.renderStatus(t,"inactive")}}i.callActions("afterParseStatusChange",arguments)},renderStatus:function(t,e){var a=this;switch(a.callActions("beforeRenderStatus",arguments),e){case"active":n.addClass(t,a.classNames.active),n.removeClass(t,a.classNames.disabled),a.canDisable&&(a.el.disabled=!1);break;case"inactive":n.removeClass(t,a.classNames.active),n.removeClass(t,a.classNames.disabled),a.canDisable&&(a.el.disabled=!1);break;case"disabled":a.canDisable&&(a.el.disabled=!0),n.addClass(t,a.classNames.disabled),n.removeClass(t,a.classNames.active)}"live"!==a.status&&(a.status=e),a.callActions("afterRenderStatus",arguments)}}),e.controls=[],e.StyleData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.x=0,this.y=0,this.top=0,this.right=0,this.bottom=0,this.left=0,this.width=0,this.height=0,this.marginRight=0,this.marginBottom=0,this.opacity=0,this.scale=new e.TransformData,this.translateX=new e.TransformData,this.translateY=new e.TransformData,this.translateZ=new e.TransformData,this.rotateX=new e.TransformData,this.rotateY=new e.TransformData,this.rotateZ=new e.TransformData,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.StyleData),e.StyleData.prototype=Object.create(e.Base.prototype),e.StyleData.prototype.constructor=e.StyleData,e.TransformData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.value=0,this.unit="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TransformData),e.TransformData.prototype=Object.create(e.Base.prototype),e.TransformData.prototype.constructor=e.TransformData,e.TransformDefaults=function(){e.StyleData.apply(this),this.callActions("beforeConstruct"),this.scale.value=.01,this.scale.unit="",this.translateX.value=20,this.translateX.unit="px",this.translateY.value=20,this.translateY.unit="px",this.translateZ.value=20,this.translateZ.unit="px",this.rotateX.value=90,this.rotateX.unit="deg",this.rotateY.value=90,this.rotateY.unit="deg",this.rotateX.value=90,this.rotateX.unit="deg",this.rotateZ.value=180,this.rotateZ.unit="deg",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TransformDefaults),e.TransformDefaults.prototype=Object.create(e.StyleData.prototype),e.TransformDefaults.prototype.constructor=e.TransformDefaults,e.transformDefaults=new e.TransformDefaults,e.EventDetail=function(){this.state=null,this.futureState=null,this.instance=null,this.originalEvent=null},e.Events=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.mixStart=null,this.mixBusy=null,this.mixEnd=null,this.mixFail=null,this.mixClick=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Events),e.Events.prototype=Object.create(e.Base.prototype),e.Events.prototype.constructor=e.Events,e.Events.prototype.fire=function(t,a,i,o){var r=this,s=null,l=new e.EventDetail;if(r.callActions("beforeFire",arguments),"undefined"==typeof r[t])throw new Error('Event type "'+t+'" not found.');l.state=new e.State,n.extend(l.state,i.state),i.futureState&&(l.futureState=new e.State,n.extend(l.futureState,i.futureState)),l.instance=i.instance,i.originalEvent&&(l.originalEvent=i.originalEvent),s=n.getCustomEvent(t,l,o),r.callFilters("eventFire",s,arguments),a.dispatchEvent(s)},e.events=new e.Events,e.QueueItem=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.args=[],this.instruction=null,this.triggerElement=null,this.deferred=null,this.isToggling=!1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.QueueItem),e.QueueItem.prototype=Object.create(e.Base.prototype),e.QueueItem.prototype.constructor=e.QueueItem,e.Mixer=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.config=new e.Config,this.id="",this.isBusy=!1,this.isToggling=!1,this.incPadding=!0,this.controls=[],this.targets=[],this.origOrder=[],this.cache={},this.toggleArray=[],this.targetsMoved=0,this.targetsImmovable=0,this.targetsBound=0,this.targetsDone=0,this.staggerDuration=0,this.effectsIn=null,this.effectsOut=null,this.transformIn=[],this.transformOut=[],this.queue=[],this.state=null,this.lastOperation=null,
this.lastClicked=null,this.userCallback=null,this.userDeferred=null,this.dom=new e.MixerDom,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Mixer),e.Mixer.prototype=Object.create(e.Base.prototype),n.extend(e.Mixer.prototype,{constructor:e.Mixer,attach:function(a,i,o,r){var s=this,l=null,c=-1;for(s.callActions("beforeAttach",arguments),s.id=o,r&&n.extend(s.config,r,!0,!0),s.sanitizeConfig(),s.cacheDom(a,i),s.config.layout.containerClassName&&n.addClass(s.dom.container,s.config.layout.containerClassName),e.features.has.transitions||(s.config.animation.enable=!1),"undefined"==typeof t.console&&(s.config.debug.showWarnings=!1),s.config.data.uidKey&&(s.config.controls.enable=!1),s.indexTargets(),s.state=s.getInitialState(),c=0;l=s.lastOperation.toHide[c];c++)l.hide();s.config.controls.enable&&(s.initControls(),s.buildToggleArray(null,s.state),s.updateControls({filter:s.state.activeFilter,sort:s.state.activeSort})),s.parseEffects(),s.callActions("afterAttach",arguments)},sanitizeConfig:function(){var t=this;t.callActions("beforeSanitizeConfig",arguments),t.config.controls.scope=t.config.controls.scope.toLowerCase().trim(),t.config.controls.toggleLogic=t.config.controls.toggleLogic.toLowerCase().trim(),t.config.controls.toggleDefault=t.config.controls.toggleDefault.toLowerCase().trim(),t.config.animation.effects=t.config.animation.effects.trim(),t.callActions("afterSanitizeConfig",arguments)},getInitialState:function(){var t=this,n=new e.State,a=new e.Operation;if(t.callActions("beforeGetInitialState",arguments),n.activeContainerClassName=t.config.layout.containerClassName,t.config.load.dataset){if(!t.config.data.uidKey||"string"!=typeof t.config.data.uidKey)throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());a.startDataset=a.newDataset=n.activeDataset=t.config.load.dataset.slice(),a.startContainerClassName=a.newContainerClassName=n.activeContainerClassName,a.show=t.targets.slice(),n=t.callFilters("stateGetInitialState",n,arguments)}else n.activeFilter=t.parseFilterArgs([t.config.load.filter]).command,n.activeSort=t.parseSortArgs([t.config.load.sort]).command,n.totalTargets=t.targets.length,n=t.callFilters("stateGetInitialState",n,arguments),n.activeSort.collection||n.activeSort.attribute||"random"===n.activeSort.order||"desc"===n.activeSort.order?(a.newSort=n.activeSort,t.sortOperation(a),t.printSort(!1,a),t.targets=a.newOrder):a.startOrder=a.newOrder=t.targets,a.startFilter=a.newFilter=n.activeFilter,a.startSort=a.newSort=n.activeSort,a.startContainerClassName=a.newContainerClassName=n.activeContainerClassName,"all"===a.newFilter.selector?a.newFilter.selector=t.config.selectors.target:"none"===a.newFilter.selector&&(a.newFilter.selector="");return a=t.callFilters("operationGetInitialState",a,[n]),t.lastOperation=a,a.newFilter&&t.filterOperation(a),n=t.buildState(a)},cacheDom:function(t,e){var n=this;n.callActions("beforeCacheDom",arguments),n.dom.document=e,n.dom.body=n.dom.document.querySelector("body"),n.dom.container=t,n.dom.parent=t,n.callActions("afterCacheDom",arguments)},indexTargets:function(){var t=this,a=null,i=null,o=null,r=-1;if(t.callActions("beforeIndexTargets",arguments),t.dom.targets=t.config.layout.allowNestedTargets?t.dom.container.querySelectorAll(t.config.selectors.target):n.children(t.dom.container,t.config.selectors.target,t.dom.document),t.dom.targets=n.arrayFromList(t.dom.targets),t.targets=[],(o=t.config.load.dataset)&&o.length!==t.dom.targets.length)throw new Error(e.messages.errorDatasetPrerenderedMismatch());if(t.dom.targets.length){for(r=0;i=t.dom.targets[r];r++)a=new e.Target,a.init(i,t,o?o[r]:void 0),a.isInDom=!0,t.targets.push(a);t.dom.parent=t.dom.targets[0].parentElement===t.dom.container?t.dom.container:t.dom.targets[0].parentElement}t.origOrder=t.targets,t.callActions("afterIndexTargets",arguments)},initControls:function(){var t=this,n="",a=null,i=null,o=null,r=null,s=null,l=-1,c=-1;switch(t.callActions("beforeInitControls",arguments),t.config.controls.scope){case"local":o=t.dom.container;break;case"global":o=t.dom.document;break;default:throw new Error(e.messages.errorConfigInvalidControlsScope())}for(l=0;n=e.controlDefinitions[l];l++)if(t.config.controls.live||n.live){if(n.parent){if(r=t.dom[n.parent],!r||r.length<0)continue;"number"!=typeof r.length&&(r=[r])}else r=[o];for(c=0;i=r[c];c++)s=t.getControl(i,n.type,n.selector),t.controls.push(s)}else for(a=o.querySelectorAll(t.config.selectors.control+n.selector),c=0;i=a[c];c++)s=t.getControl(i,n.type,""),s&&t.controls.push(s);t.callActions("afterInitControls",arguments)},getControl:function(t,a,i){var o=this,r=null,s=-1;if(o.callActions("beforeGetControl",arguments),!i)for(s=0;r=e.controls[s];s++){if(r.el===t&&r.isBound(o))return o.callFilters("controlGetControl",null,arguments);if(r.el===t&&r.type===a&&r.selector===i)return r.addBinding(o),o.callFilters("controlGetControl",r,arguments)}return r=new e.Control,r.init(t,a,i),r.classNames.base=n.getClassname(o.config.classNames,a),r.classNames.active=n.getClassname(o.config.classNames,a,o.config.classNames.modifierActive),r.classNames.disabled=n.getClassname(o.config.classNames,a,o.config.classNames.modifierDisabled),r.addBinding(o),o.callFilters("controlGetControl",r,arguments)},getToggleSelector:function(){var t=this,e="or"===t.config.controls.toggleLogic?", ":"",a="";return t.callActions("beforeGetToggleSelector",arguments),t.toggleArray=n.clean(t.toggleArray),a=t.toggleArray.join(e),""===a&&(a=t.config.controls.toggleDefault),t.callFilters("selectorGetToggleSelector",a,arguments)},buildToggleArray:function(t,e){var a=this,i="";if(a.callActions("beforeBuildToggleArray",arguments),t&&t.filter)i=t.filter.selector.replace(/\s/g,"");else{if(!e)return;i=e.activeFilter.selector.replace(/\s/g,"")}i!==a.config.selectors.target&&"all"!==i||(i=""),"or"===a.config.controls.toggleLogic?a.toggleArray=i.split(","):a.toggleArray=a.splitCompoundSelector(i),a.toggleArray=n.clean(a.toggleArray),a.callActions("afterBuildToggleArray",arguments)},splitCompoundSelector:function(t){var e=t.split(/([\.\[])/g),n=[],a="",i=-1;for(""===e[0]&&e.shift(),i=0;i<e.length;i++)i%2===0&&(a=""),a+=e[i],i%2!==0&&n.push(a);return n},updateControls:function(t){var a=this,i=null,o=new e.CommandMultimix,r=-1;for(a.callActions("beforeUpdateControls",arguments),t.filter?o.filter=t.filter.selector:o.filter=a.state.activeFilter.selector,t.sort?o.sort=a.buildSortString(t.sort):o.sort=a.buildSortString(a.state.activeSort),o.filter===a.config.selectors.target&&(o.filter="all"),""===o.filter&&(o.filter="none"),n.freeze(o),r=0;i=a.controls[r];r++)i.update(o,a.toggleArray);a.callActions("afterUpdateControls",arguments)},buildSortString:function(t){var e=this,n="";return n+=t.sortString,t.next&&(n+=" "+e.buildSortString(t.next)),n},insertTargets:function(t,a){var i=this,o=null,r=-1,s=null,l=null,c=null,u=-1;if(i.callActions("beforeInsertTargets",arguments),"undefined"==typeof t.index&&(t.index=0),o=i.getNextSibling(t.index,t.sibling,t.position),s=i.dom.document.createDocumentFragment(),r=o?n.index(o,i.config.selectors.target):i.targets.length,t.collection){for(u=0;c=t.collection[u];u++){if(i.dom.targets.indexOf(c)>-1)throw new Error(e.messages.errorInsertPreexistingElement());c.style.display="none",s.appendChild(c),s.appendChild(i.dom.document.createTextNode(" ")),n.isElement(c,i.dom.document)&&c.matches(i.config.selectors.target)&&(l=new e.Target,l.init(c,i),l.isInDom=!0,i.targets.splice(r,0,l),r++)}i.dom.parent.insertBefore(s,o)}a.startOrder=i.origOrder=i.targets,i.callActions("afterInsertTargets",arguments)},getNextSibling:function(t,e,n){var a=this,i=null;return t=Math.max(t,0),e&&"before"===n?i=e:e&&"after"===n?i=e.nextElementSibling||null:a.targets.length>0&&"undefined"!=typeof t?i=t<a.targets.length||!a.targets.length?a.targets[t].dom.el:a.targets[a.targets.length-1].dom.el.nextElementSibling:0===a.targets.length&&a.dom.parent.children.length>0&&(a.config.layout.siblingAfter?i=a.config.layout.siblingAfter:a.config.layout.siblingBefore?i=a.config.layout.siblingBefore.nextElementSibling:a.dom.parent.children[0]),a.callFilters("elementGetNextSibling",i,arguments)},filterOperation:function(t){var e=this,n=!1,a=-1,i="",o=null,r=-1;for(e.callActions("beforeFilterOperation",arguments),i=t.newFilter.action,r=0;o=t.newOrder[r];r++)n=t.newFilter.collection?t.newFilter.collection.indexOf(o.dom.el)>-1:""!==t.newFilter.selector&&o.dom.el.matches(t.newFilter.selector),e.evaluateHideShow(n,o,i,t);if(t.toRemove.length)for(r=0;o=t.show[r];r++)t.toRemove.indexOf(o)>-1&&(t.show.splice(r,1),(a=t.toShow.indexOf(o))>-1&&t.toShow.splice(a,1),t.toHide.push(o),t.hide.push(o),r--);t.matching=t.show.slice(),0===t.show.length&&""!==t.newFilter.selector&&0!==e.targets.length&&(t.hasFailed=!0),e.callActions("afterFilterOperation",arguments)},evaluateHideShow:function(t,e,n,a){var i=this,o=!1,r=Array.prototype.slice.call(arguments,1);o=i.callFilters("testResultEvaluateHideShow",t,r),i.callActions("beforeEvaluateHideShow",arguments),o===!0&&"show"===n||o===!1&&"hide"===n?(a.show.push(e),!e.isShown&&a.toShow.push(e)):(a.hide.push(e),e.isShown&&a.toHide.push(e)),i.callActions("afterEvaluateHideShow",arguments)},sortOperation:function(t){var e=this;e.callActions("beforeSortOperation",arguments),t.startOrder=e.targets,t.newSort.collection?t.newOrder=t.newSort.collection:"random"===t.newSort.order?t.newOrder=n.arrayShuffle(t.startOrder):""===t.newSort.attribute?(t.newOrder=e.origOrder.slice(),"desc"===t.newSort.order&&t.newOrder.reverse()):(t.newOrder=t.startOrder.slice(),t.newOrder.sort(function(n,a){return e.compare(n,a,t.newSort)})),n.isEqualArray(t.newOrder,t.startOrder)&&(t.willSort=!1),e.callActions("afterSortOperation",arguments)},compare:function(t,e,n){var a=this,i=n.order,o=a.getAttributeValue(t,n.attribute),r=a.getAttributeValue(e,n.attribute);return isNaN(1*o)||isNaN(1*r)?(o=o.toLowerCase(),r=r.toLowerCase()):(o=1*o,r=1*r),o<r?"asc"===i?-1:1:o>r?"asc"===i?1:-1:o===r&&n.next?a.compare(t,e,n.next):0},getAttributeValue:function(t,n){var a=this,i="";return i=t.dom.el.getAttribute("data-"+n),null===i&&a.config.debug.showWarnings&&console.warn(e.messages.warningInconsistentSortingAttributes({attribute:"data-"+n})),a.callFilters("valueGetAttributeValue",i||0,arguments)},printSort:function(e,a){var i=this,o=e?a.newOrder:a.startOrder,r=e?a.startOrder:a.newOrder,s=o.length?o[o.length-1].dom.el.nextElementSibling:null,l=t.document.createDocumentFragment(),c=null,u=null,f=null,h=-1;for(i.callActions("beforePrintSort",arguments),h=0;u=o[h];h++)f=u.dom.el,"absolute"!==f.style.position&&(n.removeWhitespace(f.previousSibling),f.parentElement.removeChild(f));for(c=s?s.previousSibling:i.dom.parent.lastChild,c&&"#text"===c.nodeName&&n.removeWhitespace(c),h=0;u=r[h];h++)f=u.dom.el,n.isElement(l.lastChild)&&l.appendChild(t.document.createTextNode(" ")),l.appendChild(f);i.dom.parent.firstChild&&i.dom.parent.firstChild!==s&&l.insertBefore(t.document.createTextNode(" "),l.childNodes[0]),s?(l.appendChild(t.document.createTextNode(" ")),i.dom.parent.insertBefore(l,s)):i.dom.parent.appendChild(l),i.callActions("afterPrintSort",arguments)},parseSortString:function(t,a){var i=this,o=t.split(" "),r=a,s=[],l=-1;for(l=0;l<o.length;l++){switch(s=o[l].split(":"),r.sortString=o[l],r.attribute=n.dashCase(s[0]),r.order=s[1]||"asc",r.attribute){case"default":r.attribute="";break;case"random":r.attribute="",r.order="random"}if(!r.attribute||"random"===r.order)break;l<o.length-1&&(r.next=new e.CommandSort,n.freeze(r),r=r.next)}return i.callFilters("commandsParseSort",a,arguments)},parseEffects:function(){var t=this,n="",a=t.config.animation.effectsIn||t.config.animation.effects,i=t.config.animation.effectsOut||t.config.animation.effects;t.callActions("beforeParseEffects",arguments),t.effectsIn=new e.StyleData,t.effectsOut=new e.StyleData,t.transformIn=[],t.transformOut=[],t.effectsIn.opacity=t.effectsOut.opacity=1,t.parseEffect("fade",a,t.effectsIn,t.transformIn),t.parseEffect("fade",i,t.effectsOut,t.transformOut,!0);for(n in e.transformDefaults)e.transformDefaults[n]instanceof e.TransformData&&(t.parseEffect(n,a,t.effectsIn,t.transformIn),t.parseEffect(n,i,t.effectsOut,t.transformOut,!0));t.parseEffect("stagger",a,t.effectsIn,t.transformIn),t.parseEffect("stagger",i,t.effectsOut,t.transformOut,!0),t.callActions("afterParseEffects",arguments)},parseEffect:function(t,n,a,i,o){var r=this,s=/\(([^)]+)\)/,l=-1,c="",u=[],f="",h=["%","px","em","rem","vh","vw","deg"],d="",m=-1;if(r.callActions("beforeParseEffect",arguments),"string"!=typeof n)throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());if(n.indexOf(t)<0)return void("stagger"===t&&(r.staggerDuration=0));switch(l=n.indexOf(t+"("),l>-1&&(c=n.substring(l),u=s.exec(c),f=u[1]),t){case"fade":a.opacity=f?parseFloat(f):0;break;case"stagger":r.staggerDuration=f?parseFloat(f):100;break;default:if(o&&r.config.animation.reverseOut&&"scale"!==t?a[t].value=(f?parseFloat(f):e.transformDefaults[t].value)*-1:a[t].value=f?parseFloat(f):e.transformDefaults[t].value,f){for(m=0;d=h[m];m++)if(f.indexOf(d)>-1){a[t].unit=d;break}}else a[t].unit=e.transformDefaults[t].unit;i.push(t+"("+a[t].value+a[t].unit+")")}r.callActions("afterParseEffect",arguments)},buildState:function(t){var n=this,a=new e.State,i=null,o=-1;for(n.callActions("beforeBuildState",arguments),o=0;i=n.targets[o];o++)(!t.toRemove.length||t.toRemove.indexOf(i)<0)&&a.targets.push(i.dom.el);for(o=0;i=t.matching[o];o++)a.matching.push(i.dom.el);for(o=0;i=t.show[o];o++)a.show.push(i.dom.el);for(o=0;i=t.hide[o];o++)(!t.toRemove.length||t.toRemove.indexOf(i)<0)&&a.hide.push(i.dom.el);return a.id=n.id,a.container=n.dom.container,a.activeFilter=t.newFilter,a.activeSort=t.newSort,a.activeDataset=t.newDataset,a.activeContainerClassName=t.newContainerClassName,a.hasFailed=t.hasFailed,a.totalTargets=n.targets.length,a.totalShow=t.show.length,a.totalHide=t.hide.length,a.totalMatching=t.matching.length,a.triggerElement=t.triggerElement,n.callFilters("stateBuildState",a,arguments)},goMix:function(a,i){var o=this,r=null;return o.callActions("beforeGoMix",arguments),o.config.animation.duration&&o.config.animation.effects&&n.isVisible(o.dom.container)||(a=!1),i.toShow.length||i.toHide.length||i.willSort||i.willChangeLayout||(a=!1),i.startState.show.length||i.show.length||(a=!1),e.events.fire("mixStart",o.dom.container,{state:i.startState,futureState:i.newState,instance:o},o.dom.document),"function"==typeof o.config.callbacks.onMixStart&&o.config.callbacks.onMixStart.call(o.dom.container,i.startState,i.newState,o),n.removeClass(o.dom.container,n.getClassname(o.config.classNames,"container",o.config.classNames.modifierFailed)),r=o.userDeferred?o.userDeferred:o.userDeferred=n.defer(e.libraries),o.isBusy=!0,a&&e.features.has.transitions?(t.pageYOffset!==i.docState.scrollTop&&t.scrollTo(i.docState.scrollLeft,i.docState.scrollTop),o.config.animation.applyPerspective&&(o.dom.parent.style[e.features.perspectiveProp]=o.config.animation.perspectiveDistance,o.dom.parent.style[e.features.perspectiveOriginProp]=o.config.animation.perspectiveOrigin),o.config.animation.animateResizeContainer&&i.startHeight!==i.newHeight&&i.viewportDeltaY!==i.startHeight-i.newHeight&&(o.dom.parent.style.height=i.startHeight+"px"),o.config.animation.animateResizeContainer&&i.startWidth!==i.newWidth&&i.viewportDeltaX!==i.startWidth-i.newWidth&&(o.dom.parent.style.width=i.startWidth+"px"),i.startHeight===i.newHeight&&(o.dom.parent.style.height=i.startHeight+"px"),i.startWidth===i.newWidth&&(o.dom.parent.style.width=i.startWidth+"px"),i.startHeight===i.newHeight&&i.startWidth===i.newWidth&&(o.dom.parent.style.overflow="hidden"),requestAnimationFrame(function(){o.moveTargets(i)}),o.callFilters("promiseGoMix",r.promise,arguments)):(o.config.debug.fauxAsync?setTimeout(function(){o.cleanUp(i)},o.config.animation.duration):o.cleanUp(i),o.callFilters("promiseGoMix",r.promise,arguments))},getStartMixData:function(n){var a=this,i=t.getComputedStyle(a.dom.parent),o=a.dom.parent.getBoundingClientRect(),r=null,s={},l=-1,c=i[e.features.boxSizingProp];for(a.incPadding="border-box"===c,a.callActions("beforeGetStartMixData",arguments),l=0;r=n.show[l];l++)s=r.getPosData(),n.showPosData[l]={startPosData:s};for(l=0;r=n.toHide[l];l++)s=r.getPosData(),n.toHidePosData[l]={startPosData:s};n.startX=o.left,n.startY=o.top,n.startHeight=a.incPadding?o.height:o.height-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderTop)-parseFloat(i.borderBottom),n.startWidth=a.incPadding?o.width:o.width-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderLeft)-parseFloat(i.borderRight),a.callActions("afterGetStartMixData",arguments)},setInter:function(t){var e=this,a=null,i=-1;for(e.callActions("beforeSetInter",arguments),e.config.animation.clampHeight&&(e.dom.parent.style.height=t.startHeight+"px",e.dom.parent.style.overflow="hidden"),e.config.animation.clampWidth&&(e.dom.parent.style.width=t.startWidth+"px",e.dom.parent.style.overflow="hidden"),i=0;a=t.toShow[i];i++)a.show();t.willChangeLayout&&(n.removeClass(e.dom.container,t.startContainerClassName),n.addClass(e.dom.container,t.newContainerClassName)),e.callActions("afterSetInter",arguments)},getInterMixData:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeGetInterMixData",arguments),a=0;n=t.show[a];a++)t.showPosData[a].interPosData=n.getPosData();for(a=0;n=t.toHide[a];a++)t.toHidePosData[a].interPosData=n.getPosData();e.callActions("afterGetInterMixData",arguments)},setFinal:function(t){var e=this,n=null,a=-1;for(e.callActions("beforeSetFinal",arguments),t.willSort&&e.printSort(!1,t),a=0;n=t.toHide[a];a++)n.hide();e.callActions("afterSetFinal",arguments)},getFinalMixData:function(e){var a=this,i=null,o=null,r=null,s=-1;for(a.callActions("beforeGetFinalMixData",arguments),s=0;r=e.show[s];s++)e.showPosData[s].finalPosData=r.getPosData();for(s=0;r=e.toHide[s];s++)e.toHidePosData[s].finalPosData=r.getPosData();for((a.config.animation.clampHeight||a.config.animation.clampWidth)&&(a.dom.parent.style.height=a.dom.parent.style.width=a.dom.parent.style.overflow=""),a.incPadding||(i=t.getComputedStyle(a.dom.parent)),o=a.dom.parent.getBoundingClientRect(),e.newX=o.left,e.newY=o.top,e.newHeight=a.incPadding?o.height:o.height-parseFloat(i.paddingTop)-parseFloat(i.paddingBottom)-parseFloat(i.borderTop)-parseFloat(i.borderBottom),e.newWidth=a.incPadding?o.width:o.width-parseFloat(i.paddingLeft)-parseFloat(i.paddingRight)-parseFloat(i.borderLeft)-parseFloat(i.borderRight),e.viewportDeltaX=e.docState.viewportWidth-this.dom.document.documentElement.clientWidth,e.viewportDeltaY=e.docState.viewportHeight-this.dom.document.documentElement.clientHeight,e.willSort&&a.printSort(!0,e),s=0;r=e.toShow[s];s++)r.hide();for(s=0;r=e.toHide[s];s++)r.show();e.willChangeLayout&&(n.removeClass(a.dom.container,e.newContainerClassName),n.addClass(a.dom.container,a.config.layout.containerClassName)),a.callActions("afterGetFinalMixData",arguments)},getTweenData:function(t){var n=this,a=null,i=null,o=Object.getOwnPropertyNames(n.effectsIn),r="",s=null,l=-1,c=-1,u=-1,f=-1;for(n.callActions("beforeGetTweenData",arguments),u=0;a=t.show[u];u++)for(i=t.showPosData[u],i.posIn=new e.StyleData,i.posOut=new e.StyleData,i.tweenData=new e.StyleData,a.isShown?(i.posIn.x=i.startPosData.x-i.interPosData.x,i.posIn.y=i.startPosData.y-i.interPosData.y):i.posIn.x=i.posIn.y=0,i.posOut.x=i.finalPosData.x-i.interPosData.x,i.posOut.y=i.finalPosData.y-i.interPosData.y,i.posIn.opacity=a.isShown?1:n.effectsIn.opacity,i.posOut.opacity=1,i.tweenData.opacity=i.posOut.opacity-i.posIn.opacity,a.isShown||n.config.animation.nudge||(i.posIn.x=i.posOut.x,i.posIn.y=i.posOut.y),i.tweenData.x=i.posOut.x-i.posIn.x,i.tweenData.y=i.posOut.y-i.posIn.y,n.config.animation.animateResizeTargets&&(i.posIn.width=i.startPosData.width,i.posIn.height=i.startPosData.height,l=(i.startPosData.width||i.finalPosData.width)-i.interPosData.width,i.posIn.marginRight=i.startPosData.marginRight-l,c=(i.startPosData.height||i.finalPosData.height)-i.interPosData.height,i.posIn.marginBottom=i.startPosData.marginBottom-c,i.posOut.width=i.finalPosData.width,i.posOut.height=i.finalPosData.height,l=(i.finalPosData.width||i.startPosData.width)-i.interPosData.width,i.posOut.marginRight=i.finalPosData.marginRight-l,c=(i.finalPosData.height||i.startPosData.height)-i.interPosData.height,i.posOut.marginBottom=i.finalPosData.marginBottom-c,i.tweenData.width=i.posOut.width-i.posIn.width,i.tweenData.height=i.posOut.height-i.posIn.height,i.tweenData.marginRight=i.posOut.marginRight-i.posIn.marginRight,i.tweenData.marginBottom=i.posOut.marginBottom-i.posIn.marginBottom),f=0;r=o[f];f++)s=n.effectsIn[r],s instanceof e.TransformData&&s.value&&(i.posIn[r].value=s.value,i.posOut[r].value=0,i.tweenData[r].value=i.posOut[r].value-i.posIn[r].value,i.posIn[r].unit=i.posOut[r].unit=i.tweenData[r].unit=s.unit);for(u=0;a=t.toHide[u];u++)for(i=t.toHidePosData[u],i.posIn=new e.StyleData,i.posOut=new e.StyleData,i.tweenData=new e.StyleData,i.posIn.x=a.isShown?i.startPosData.x-i.interPosData.x:0,i.posIn.y=a.isShown?i.startPosData.y-i.interPosData.y:0,i.posOut.x=n.config.animation.nudge?0:i.posIn.x,i.posOut.y=n.config.animation.nudge?0:i.posIn.y,i.tweenData.x=i.posOut.x-i.posIn.x,i.tweenData.y=i.posOut.y-i.posIn.y,n.config.animation.animateResizeTargets&&(i.posIn.width=i.startPosData.width,i.posIn.height=i.startPosData.height,l=i.startPosData.width-i.interPosData.width,i.posIn.marginRight=i.startPosData.marginRight-l,c=i.startPosData.height-i.interPosData.height,i.posIn.marginBottom=i.startPosData.marginBottom-c),i.posIn.opacity=1,i.posOut.opacity=n.effectsOut.opacity,i.tweenData.opacity=i.posOut.opacity-i.posIn.opacity,f=0;r=o[f];f++)s=n.effectsOut[r],s instanceof e.TransformData&&s.value&&(i.posIn[r].value=0,i.posOut[r].value=s.value,i.tweenData[r].value=i.posOut[r].value-i.posIn[r].value,i.posIn[r].unit=i.posOut[r].unit=i.tweenData[r].unit=s.unit);n.callActions("afterGetTweenData",arguments)},moveTargets:function(t){var a=this,i=null,o=null,r=null,s="",l=!1,c=-1,u=-1,f=a.checkProgress.bind(a);for(a.callActions("beforeMoveTargets",arguments),u=0;i=t.show[u];u++)o=new e.IMoveData,r=t.showPosData[u],s=i.isShown?"none":"show",l=a.willTransition(s,t.hasEffect,r.posIn,r.posOut),l&&c++,i.show(),o.posIn=r.posIn,o.posOut=r.posOut,o.statusChange=s,o.staggerIndex=c,o.operation=t,o.callback=l?f:null,i.move(o);for(u=0;i=t.toHide[u];u++)r=t.toHidePosData[u],o=new e.IMoveData,s="hide",l=a.willTransition(s,r.posIn,r.posOut),o.posIn=r.posIn,o.posOut=r.posOut,o.statusChange=s,o.staggerIndex=u,o.operation=t,o.callback=l?f:null,i.move(o);a.config.animation.animateResizeContainer&&(a.dom.parent.style[e.features.transitionProp]="height "+a.config.animation.duration+"ms ease, width "+a.config.animation.duration+"ms ease ",requestAnimationFrame(function(){t.startHeight!==t.newHeight&&t.viewportDeltaY!==t.startHeight-t.newHeight&&(a.dom.parent.style.height=t.newHeight+"px"),t.startWidth!==t.newWidth&&t.viewportDeltaX!==t.startWidth-t.newWidth&&(a.dom.parent.style.width=t.newWidth+"px")})),t.willChangeLayout&&(n.removeClass(a.dom.container,a.config.layout.ContainerClassName),n.addClass(a.dom.container,t.newContainerClassName)),a.callActions("afterMoveTargets",arguments)},hasEffect:function(){var t=this,e=["scale","translateX","translateY","translateZ","rotateX","rotateY","rotateZ"],n="",a=null,i=!1,o=-1,r=-1;if(1!==t.effectsIn.opacity)return t.callFilters("resultHasEffect",!0,arguments);for(r=0;n=e[r];r++)if(a=t.effectsIn[n],o="undefined"!==a.value?a.value:a,0!==o){i=!0;break}return t.callFilters("resultHasEffect",i,arguments)},willTransition:function(t,e,a,i){var o=this,r=!1;return r=!!n.isVisible(o.dom.container)&&(!!("none"!==t&&e||a.x!==i.x||a.y!==i.y)||!!o.config.animation.animateResizeTargets&&(a.width!==i.width||a.height!==i.height||a.marginRight!==i.marginRight||a.marginTop!==i.marginTop)),o.callFilters("resultWillTransition",r,arguments)},checkProgress:function(t){var e=this;e.targetsDone++,e.targetsBound===e.targetsDone&&e.cleanUp(t)},cleanUp:function(t){var a=this,i=null,o=null,r=null,s=null,l=-1;for(a.callActions("beforeCleanUp",arguments),a.targetsMoved=a.targetsImmovable=a.targetsBound=a.targetsDone=0,l=0;i=t.show[l];l++)i.cleanUp(),i.show();for(l=0;i=t.toHide[l];l++)i.cleanUp(),i.hide();if(t.willSort&&a.printSort(!1,t),a.dom.parent.style[e.features.transitionProp]=a.dom.parent.style.height=a.dom.parent.style.width=a.dom.parent.style.overflow=a.dom.parent.style[e.features.perspectiveProp]=a.dom.parent.style[e.features.perspectiveOriginProp]="",t.willChangeLayout&&(n.removeClass(a.dom.container,t.startContainerClassName),n.addClass(a.dom.container,t.newContainerClassName)),t.toRemove.length){for(l=0;i=a.targets[l];l++)t.toRemove.indexOf(i)>-1&&((o=i.dom.el.previousSibling)&&"#text"===o.nodeName&&(r=i.dom.el.nextSibling)&&"#text"===r.nodeName&&n.removeWhitespace(o),t.willSort||a.dom.parent.removeChild(i.dom.el),a.targets.splice(l,1),i.isInDom=!1,l--);a.origOrder=a.targets}t.willSort&&(a.targets=t.newOrder),a.state=t.newState,a.lastOperation=t,a.dom.targets=a.state.targets,e.events.fire("mixEnd",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixEnd&&a.config.callbacks.onMixEnd.call(a.dom.container,a.state,a),t.hasFailed&&(e.events.fire("mixFail",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixFail&&a.config.callbacks.onMixFail.call(a.dom.container,a.state,a),n.addClass(a.dom.container,n.getClassname(a.config.classNames,"container",a.config.classNames.modifierFailed))),"function"==typeof a.userCallback&&a.userCallback.call(a.dom.container,a.state,a),"function"==typeof a.userDeferred.resolve&&a.userDeferred.resolve(a.state),a.userCallback=null,a.userDeferred=null,a.lastClicked=null,a.isToggling=!1,a.isBusy=!1,a.queue.length&&(a.callActions("beforeReadQueueCleanUp",arguments),s=a.queue.shift(),a.userDeferred=s.deferred,a.isToggling=s.isToggling,a.lastClicked=s.triggerElement,s.instruction.command instanceof e.CommandMultimix?a.multimix.apply(a,s.args):a.dataset.apply(a,s.args)),a.callActions("afterCleanUp",arguments)},parseMultimixArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandMultimix,r=0;r<t.length;r++)o=t[r],null!==o&&("object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o));return!i.command.insert||i.command.insert instanceof e.CommandInsert||(i.command.insert=a.parseInsertArgs([i.command.insert]).command),!i.command.remove||i.command.remove instanceof e.CommandRemove||(i.command.remove=a.parseRemoveArgs([i.command.remove]).command),!i.command.filter||i.command.filter instanceof e.CommandFilter||(i.command.filter=a.parseFilterArgs([i.command.filter]).command),!i.command.sort||i.command.sort instanceof e.CommandSort||(i.command.sort=a.parseSortArgs([i.command.sort]).command),!i.command.changeLayout||i.command.changeLayout instanceof e.CommandChangeLayout||(i.command.changeLayout=a.parseChangeLayoutArgs([i.command.changeLayout]).command),i=a.callFilters("instructionParseMultimixArgs",i,arguments),n.freeze(i),i},parseFilterArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandFilter,r=0;r<t.length;r++)o=t[r],"string"==typeof o?i.command.selector=o:null===o?i.command.collection=[]:"object"==typeof o&&n.isElement(o,a.dom.document)?i.command.collection=[o]:"object"==typeof o&&"undefined"!=typeof o.length?i.command.collection=n.arrayFromList(o):"object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o);if(i.command.selector&&i.command.collection)throw new Error(e.messages.errorFilterInvalidArguments());return i=a.callFilters("instructionParseFilterArgs",i,arguments),n.freeze(i),i},parseSortArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r="",s=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandSort,s=0;s<t.length;s++)if(o=t[s],null!==o)switch(typeof o){case"string":r=o;break;case"object":o.length&&(i.command.collection=n.arrayFromList(o));break;case"boolean":i.animate=o;break;case"function":i.callback=o}return r&&(i.command=a.parseSortString(r,i.command)),i=a.callFilters("instructionParseSortArgs",i,arguments),n.freeze(i),i},parseInsertArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandInsert,r=0;r<t.length;r++)o=t[r],null!==o&&("number"==typeof o?i.command.index=o:"string"==typeof o&&["before","after"].indexOf(o)>-1?i.command.position=o:"string"==typeof o?i.command.collection=n.arrayFromList(n.createElement(o).childNodes):"object"==typeof o&&n.isElement(o,a.dom.document)?i.command.collection.length?i.command.sibling=o:i.command.collection=[o]:"object"==typeof o&&o.length?i.command.collection.length?i.command.sibling=o[0]:i.command.collection=o:"object"==typeof o&&o.childNodes&&o.childNodes.length?i.command.collection.length?i.command.sibling=o.childNodes[0]:i.command.collection=n.arrayFromList(o.childNodes):"object"==typeof o?n.extend(i.command,o):"boolean"==typeof o?i.animate=o:"function"==typeof o&&(i.callback=o));if(i.command.index&&i.command.sibling)throw new Error(e.messages.errorInsertInvalidArguments());return!i.command.collection.length&&a.config.debug.showWarnings&&console.warn(e.messages.warningInsertNoElements()),i=a.callFilters("instructionParseInsertArgs",i,arguments),n.freeze(i),i},parseRemoveArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=null,s=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandRemove,s=0;s<t.length;s++)if(r=t[s],null!==r)switch(typeof r){case"number":a.targets[r]&&(i.command.targets[0]=a.targets[r]);break;case"string":i.command.collection=n.arrayFromList(a.dom.parent.querySelectorAll(r));break;case"object":r&&r.length?i.command.collection=r:n.isElement(r,a.dom.document)?i.command.collection=[r]:n.extend(i.command,r);break;case"boolean":i.animate=r;break;case"function":i.callback=r}if(i.command.collection.length)for(s=0;o=a.targets[s];s++)i.command.collection.indexOf(o.dom.el)>-1&&i.command.targets.push(o);return!i.command.targets.length&&a.config.debug.showWarnings&&console.warn(e.messages.warningRemoveNoElements()),n.freeze(i),i},parseDatasetArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandDataset,r=0;r<t.length;r++)if(o=t[r],null!==o)switch(typeof o){case"object":Array.isArray(o)||"number"==typeof o.length?i.command.dataset=o:n.extend(i.command,o);break;case"boolean":i.animate=o;break;case"function":i.callback=o}return n.freeze(i),i},parseChangeLayoutArgs:function(t){var a=this,i=new e.UserInstruction,o=null,r=-1;for(i.animate=a.config.animation.enable,i.command=new e.CommandChangeLayout,r=0;r<t.length;r++)if(o=t[r],null!==o)switch(typeof o){case"string":i.command.containerClassName=o;break;case"object":n.extend(i.command,o);break;case"boolean":i.animate=o;break;case"function":i.callback=o}return n.freeze(i),i},queueMix:function(t){var a=this,i=null,o="";return a.callActions("beforeQueueMix",arguments),i=n.defer(e.libraries),a.config.animation.queue&&a.queue.length<a.config.animation.queueLimit?(t.deferred=i,a.queue.push(t),a.config.controls.enable&&(a.isToggling?(a.buildToggleArray(t.instruction.command),o=a.getToggleSelector(),a.updateControls({filter:{selector:o}})):a.updateControls(t.instruction.command))):(a.config.debug.showWarnings&&console.warn(e.messages.warningMultimixInstanceQueueFull()),i.resolve(a.state),e.events.fire("mixBusy",a.dom.container,{state:a.state,instance:a},a.dom.document),"function"==typeof a.config.callbacks.onMixBusy&&a.config.callbacks.onMixBusy.call(a.dom.container,a.state,a)),a.callFilters("promiseQueueMix",i.promise,arguments)},getDataOperation:function(t){var a=this,i=new e.Operation,o=[];if(i=a.callFilters("operationUnmappedGetDataOperation",i,arguments),
a.dom.targets.length&&!(o=a.state.activeDataset||[]).length)throw new Error(e.messages.errorDatasetNotSet());return i.id=n.randomHex(),i.startState=a.state,i.startDataset=o,i.newDataset=t.slice(),a.diffDatasets(i),i.startOrder=a.targets,i.newOrder=i.show,a.config.animation.enable&&(a.getStartMixData(i),a.setInter(i),i.docState=n.getDocumentState(a.dom.document),a.getInterMixData(i),a.setFinal(i),a.getFinalMixData(i),a.parseEffects(),i.hasEffect=a.hasEffect(),a.getTweenData(i)),a.targets=i.show.slice(),i.newState=a.buildState(i),Array.prototype.push.apply(a.targets,i.toRemove),i=a.callFilters("operationMappedGetDataOperation",i,arguments)},diffDatasets:function(t){var a=this,i=[],o=[],r=[],s=null,l=null,c=null,u=null,f=null,h={},d="",m=-1;for(a.callActions("beforeDiffDatasets",arguments),m=0;s=t.newDataset[m];m++){if("undefined"==typeof(d=s[a.config.data.uidKey])||d.toString().length<1)throw new TypeError(e.messages.errorDatasetInvalidUidKey({uidKey:a.config.data.uidKey}));if(h[d])throw new Error(e.messages.errorDatasetDuplicateUid({uid:d}));h[d]=!0,(l=a.cache[d])instanceof e.Target?(a.config.data.dirtyCheck&&!n.deepEquals(s,l.data)&&(c=l.render(s),l.data=s,c!==l.dom.el&&(l.isInDom&&(l.unbindEvents(),a.dom.parent.replaceChild(c,l.dom.el)),l.isShown||(c.style.display="none"),l.dom.el=c,l.isInDom&&l.bindEvents())),c=l.dom.el):(l=new e.Target,l.init(null,a,s),l.hide()),l.isInDom?(f=l.dom.el.nextElementSibling,o.push(d),u&&(u.lastElementChild&&u.appendChild(a.dom.document.createTextNode(" ")),a.insertDatasetFrag(u,l.dom.el,r),u=null)):(u||(u=a.dom.document.createDocumentFragment()),u.lastElementChild&&u.appendChild(a.dom.document.createTextNode(" ")),u.appendChild(l.dom.el),l.isInDom=!0,l.unbindEvents(),l.bindEvents(),l.hide(),t.toShow.push(l),r.push(l)),t.show.push(l)}for(u&&(f=f||a.config.layout.siblingAfter,f&&u.appendChild(a.dom.document.createTextNode(" ")),a.insertDatasetFrag(u,f,r)),m=0;s=t.startDataset[m];m++)d=s[a.config.data.uidKey],l=a.cache[d],t.show.indexOf(l)<0?(t.hide.push(l),t.toHide.push(l),t.toRemove.push(l)):i.push(d);n.isEqualArray(i,o)||(t.willSort=!0),a.callActions("afterDiffDatasets",arguments)},insertDatasetFrag:function(t,e,n){var a=this,i=e?Array.from(a.dom.parent.children).indexOf(e):a.targets.length;for(a.dom.parent.insertBefore(t,e);n.length;)a.targets.splice(i,0,n.shift()),i++},willSort:function(t,e){var n=this,a=!1;return a=!!(n.config.behavior.liveSort||"random"===t.order||t.attribute!==e.attribute||t.order!==e.order||t.collection!==e.collection||null===t.next&&e.next||t.next&&null===e.next)||!(!t.next||!e.next)&&n.willSort(t.next,e.next),n.callFilters("resultWillSort",a,arguments)},show:function(){var t=this;return t.filter("all")},hide:function(){var t=this;return t.filter("none")},isMixing:function(){var t=this;return t.isBusy},filter:function(){var t=this,e=t.parseFilterArgs(arguments);return t.multimix({filter:e.command},e.animate,e.callback)},toggleOn:function(){var t=this,e=t.parseFilterArgs(arguments),n=e.command.selector,a="";return t.isToggling=!0,t.toggleArray.indexOf(n)<0&&t.toggleArray.push(n),a=t.getToggleSelector(),t.multimix({filter:a},e.animate,e.callback)},toggleOff:function(){var t=this,e=t.parseFilterArgs(arguments),n=e.command.selector,a=t.toggleArray.indexOf(n),i="";return t.isToggling=!0,a>-1&&t.toggleArray.splice(a,1),i=t.getToggleSelector(),t.multimix({filter:i},e.animate,e.callback)},sort:function(){var t=this,e=t.parseSortArgs(arguments);return t.multimix({sort:e.command},e.animate,e.callback)},changeLayout:function(){var t=this,e=t.parseChangeLayoutArgs(arguments);return t.multimix({changeLayout:e.command},e.animate,e.callback)},dataset:function(){var t=this,n=t.parseDatasetArgs(arguments),a=null,i=null,o=!1;return t.callActions("beforeDataset",arguments),t.isBusy?(i=new e.QueueItem,i.args=arguments,i.instruction=n,t.queueMix(i)):(n.callback&&(t.userCallback=n.callback),o=n.animate^t.config.animation.enable?n.animate:t.config.animation.enable,a=t.getDataOperation(n.command.dataset),t.goMix(o,a))},multimix:function(){var t=this,n=null,a=!1,i=null,o=t.parseMultimixArgs(arguments);return t.callActions("beforeMultimix",arguments),t.isBusy?(i=new e.QueueItem,i.args=arguments,i.instruction=o,i.triggerElement=t.lastClicked,i.isToggling=t.isToggling,t.queueMix(i)):(n=t.getOperation(o.command),t.config.controls.enable&&(o.command.filter&&!t.isToggling&&(t.toggleArray.length=0,t.buildToggleArray(n.command)),t.queue.length<1&&t.updateControls(n.command)),o.callback&&(t.userCallback=o.callback),a=o.animate^t.config.animation.enable?o.animate:t.config.animation.enable,t.callFilters("operationMultimix",n,arguments),t.goMix(a,n))},getOperation:function(t){var a=this,i=t.sort,o=t.filter,r=t.changeLayout,s=t.remove,l=t.insert,c=new e.Operation;return c=a.callFilters("operationUnmappedGetOperation",c,arguments),c.id=n.randomHex(),c.command=t,c.startState=a.state,c.triggerElement=a.lastClicked,a.isBusy?(a.config.debug.showWarnings&&console.warn(e.messages.warningGetOperationInstanceBusy()),null):(l&&a.insertTargets(l,c),s&&(c.toRemove=s.targets),c.startSort=c.newSort=c.startState.activeSort,c.startOrder=c.newOrder=a.targets,i&&(c.startSort=c.startState.activeSort,c.newSort=i,c.willSort=a.willSort(i,c.startState.activeSort),c.willSort&&a.sortOperation(c)),c.startFilter=c.startState.activeFilter,o?c.newFilter=o:c.newFilter=n.extend(new e.CommandFilter,c.startFilter),"all"===c.newFilter.selector?c.newFilter.selector=a.config.selectors.target:"none"===c.newFilter.selector&&(c.newFilter.selector=""),a.filterOperation(c),c.startContainerClassName=c.startState.activeContainerClassName,r?(c.newContainerClassName=r.containerClassName,c.newContainerClassName!==c.startContainerClassName&&(c.willChangeLayout=!0)):c.newContainerClassName=c.startContainerClassName,a.config.animation.enable&&(a.getStartMixData(c),a.setInter(c),c.docState=n.getDocumentState(a.dom.document),a.getInterMixData(c),a.setFinal(c),a.getFinalMixData(c),a.parseEffects(),c.hasEffect=a.hasEffect(),a.getTweenData(c)),c.willSort&&(a.targets=c.newOrder),c.newState=a.buildState(c),a.callFilters("operationMappedGetOperation",c,arguments))},tween:function(t,e){var n=null,a=null,i=-1,o=-1;for(e=Math.min(e,1),e=Math.max(e,0),o=0;n=t.show[o];o++)a=t.showPosData[o],n.applyTween(a,e);for(o=0;n=t.hide[o];o++)n.isShown&&n.hide(),(i=t.toHide.indexOf(n))>-1&&(a=t.toHidePosData[i],n.isShown||n.show(),n.applyTween(a,e))},insert:function(){var t=this,e=t.parseInsertArgs(arguments);return t.multimix({insert:e.command},e.animate,e.callback)},insertBefore:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(e.command.collection,"before",e.command.sibling,e.animate,e.callback)},insertAfter:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(e.command.collection,"after",e.command.sibling,e.animate,e.callback)},prepend:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(0,e.command.collection,e.animate,e.callback)},append:function(){var t=this,e=t.parseInsertArgs(arguments);return t.insert(t.state.totalTargets,e.command.collection,e.animate,e.callback)},remove:function(){var t=this,e=t.parseRemoveArgs(arguments);return t.multimix({remove:e.command},e.animate,e.callback)},getConfig:function(t){var e=this,a=null;return a=t?n.getProperty(e.config,t):e.config,e.callFilters("valueGetConfig",a,arguments)},configure:function(t){var e=this;e.callActions("beforeConfigure",arguments),n.extend(e.config,t,!0,!0),e.callActions("afterConfigure",arguments)},getState:function(){var t=this,a=null;return a=new e.State,n.extend(a,t.state),n.freeze(a),t.callFilters("stateGetState",a,arguments)},forceRefresh:function(){var t=this;t.indexTargets()},forceRender:function(){var t=this,e=null,n=null,a="";for(a in t.cache)e=t.cache[a],n=e.render(e.data),n!==e.dom.el&&(e.isInDom&&(e.unbindEvents(),t.dom.parent.replaceChild(n,e.dom.el)),e.isShown||(n.style.display="none"),e.dom.el=n,e.isInDom&&e.bindEvents());t.state=t.buildState(t.lastOperation)},destroy:function(t){var n=this,a=null,i=null,o=0;for(n.callActions("beforeDestroy",arguments),o=0;a=n.controls[o];o++)a.removeBinding(n);for(o=0;i=n.targets[o];o++)t&&i.show(),i.unbindEvents();n.dom.container.id.match(/^MixItUp/)&&n.dom.container.removeAttribute("id"),delete e.instances[n.id],n.callActions("afterDestroy",arguments)}}),e.IMoveData=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.posIn=null,this.posOut=null,this.operation=null,this.callback=null,this.statusChange="",this.duration=-1,this.staggerIndex=-1,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.IMoveData),e.IMoveData.prototype=Object.create(e.Base.prototype),e.IMoveData.prototype.constructor=e.IMoveData,e.TargetDom=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.el=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.TargetDom),e.TargetDom.prototype=Object.create(e.Base.prototype),e.TargetDom.prototype.constructor=e.TargetDom,e.Target=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.sortString="",this.mixer=null,this.callback=null,this.isShown=!1,this.isBound=!1,this.isExcluded=!1,this.isInDom=!1,this.handler=null,this.operation=null,this.data=null,this.dom=new e.TargetDom,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Target),e.Target.prototype=Object.create(e.Base.prototype),n.extend(e.Target.prototype,{constructor:e.Target,init:function(t,n,a){var i=this,o="";if(i.callActions("beforeInit",arguments),i.mixer=n,t||(t=i.render(a)),i.cacheDom(t),i.bindEvents(),"none"!==i.dom.el.style.display&&(i.isShown=!0),a&&n.config.data.uidKey){if("undefined"==typeof(o=a[n.config.data.uidKey])||o.toString().length<1)throw new TypeError(e.messages.errorDatasetInvalidUidKey({uidKey:n.config.data.uidKey}));i.id=o,i.data=a,n.cache[o]=i}i.callActions("afterInit",arguments)},render:function(t){var a=this,i=null,o=null,r=null,s="";if(a.callActions("beforeRender",arguments),i=a.callFilters("renderRender",a.mixer.config.render.target,arguments),"function"!=typeof i)throw new TypeError(e.messages.errorDatasetRendererNotSet());return s=i(t),s&&"object"==typeof s&&n.isElement(s)?o=s:"string"==typeof s&&(r=document.createElement("div"),r.innerHTML=s,o=r.firstElementChild),a.callFilters("elRender",o,arguments)},cacheDom:function(t){var e=this;e.callActions("beforeCacheDom",arguments),e.dom.el=t,e.callActions("afterCacheDom",arguments)},getSortString:function(t){var e=this,n=e.dom.el.getAttribute("data-"+t)||"";e.callActions("beforeGetSortString",arguments),n=isNaN(1*n)?n.toLowerCase():1*n,e.sortString=n,e.callActions("afterGetSortString",arguments)},show:function(){var t=this;t.callActions("beforeShow",arguments),t.isShown||(t.dom.el.style.display="",t.isShown=!0),t.callActions("afterShow",arguments)},hide:function(){var t=this;t.callActions("beforeHide",arguments),t.isShown&&(t.dom.el.style.display="none",t.isShown=!1),t.callActions("afterHide",arguments)},move:function(t){var e=this;e.callActions("beforeMove",arguments),e.isExcluded||e.mixer.targetsMoved++,e.applyStylesIn(t),requestAnimationFrame(function(){e.applyStylesOut(t)}),e.callActions("afterMove",arguments)},applyTween:function(t,n){var a=this,i="",o=null,r=t.posIn,s=[],l=new e.StyleData,c=-1;for(a.callActions("beforeApplyTween",arguments),l.x=r.x,l.y=r.y,0===n?a.hide():a.isShown||a.show(),c=0;i=e.features.TWEENABLE[c];c++)if(o=t.tweenData[i],"x"===i){if(!o)continue;l.x=r.x+o*n}else if("y"===i){if(!o)continue;l.y=r.y+o*n}else if(o instanceof e.TransformData){if(!o.value)continue;l[i].value=r[i].value+o.value*n,l[i].unit=o.unit,s.push(i+"("+l[i].value+o.unit+")")}else{if(!o)continue;l[i]=r[i]+o*n,a.dom.el.style[i]=l[i]}(l.x||l.y)&&s.unshift("translate("+l.x+"px, "+l.y+"px)"),s.length&&(a.dom.el.style[e.features.transformProp]=s.join(" ")),a.callActions("afterApplyTween",arguments)},applyStylesIn:function(t){var n=this,a=t.posIn,i=1!==n.mixer.effectsIn.opacity,o=[];n.callActions("beforeApplyStylesIn",arguments),o.push("translate("+a.x+"px, "+a.y+"px)"),n.mixer.config.animation.animateResizeTargets&&("show"!==t.statusChange&&(n.dom.el.style.width=a.width+"px",n.dom.el.style.height=a.height+"px"),n.dom.el.style.marginRight=a.marginRight+"px",n.dom.el.style.marginBottom=a.marginBottom+"px"),i&&(n.dom.el.style.opacity=a.opacity),"show"===t.statusChange&&(o=o.concat(n.mixer.transformIn)),n.dom.el.style[e.features.transformProp]=o.join(" "),n.callActions("afterApplyStylesIn",arguments)},applyStylesOut:function(t){var n=this,a=[],i=[],o=n.mixer.config.animation.animateResizeTargets,r="undefined"!=typeof n.mixer.effectsIn.opacity;if(n.callActions("beforeApplyStylesOut",arguments),a.push(n.writeTransitionRule(e.features.transformRule,t.staggerIndex)),"none"!==t.statusChange&&a.push(n.writeTransitionRule("opacity",t.staggerIndex,t.duration)),o&&(a.push(n.writeTransitionRule("width",t.staggerIndex,t.duration)),a.push(n.writeTransitionRule("height",t.staggerIndex,t.duration)),a.push(n.writeTransitionRule("margin",t.staggerIndex,t.duration))),!t.callback)return n.mixer.targetsImmovable++,void(n.mixer.targetsMoved===n.mixer.targetsImmovable&&n.mixer.cleanUp(t.operation));switch(n.operation=t.operation,n.callback=t.callback,!n.isExcluded&&n.mixer.targetsBound++,n.isBound=!0,n.applyTransition(a),o&&t.posOut.width>0&&t.posOut.height>0&&(n.dom.el.style.width=t.posOut.width+"px",n.dom.el.style.height=t.posOut.height+"px",n.dom.el.style.marginRight=t.posOut.marginRight+"px",n.dom.el.style.marginBottom=t.posOut.marginBottom+"px"),n.mixer.config.animation.nudge||"hide"!==t.statusChange||i.push("translate("+t.posOut.x+"px, "+t.posOut.y+"px)"),t.statusChange){case"hide":r&&(n.dom.el.style.opacity=n.mixer.effectsOut.opacity),i=i.concat(n.mixer.transformOut);break;case"show":r&&(n.dom.el.style.opacity=1)}(n.mixer.config.animation.nudge||!n.mixer.config.animation.nudge&&"hide"!==t.statusChange)&&i.push("translate("+t.posOut.x+"px, "+t.posOut.y+"px)"),n.dom.el.style[e.features.transformProp]=i.join(" "),n.callActions("afterApplyStylesOut",arguments)},writeTransitionRule:function(t,e,n){var a=this,i=a.getDelay(e),o="";return o=t+" "+(n>0?n:a.mixer.config.animation.duration)+"ms "+i+"ms "+("opacity"===t?"linear":a.mixer.config.animation.easing),a.callFilters("ruleWriteTransitionRule",o,arguments)},getDelay:function(t){var e=this,n=-1;return"function"==typeof e.mixer.config.animation.staggerSequence&&(t=e.mixer.config.animation.staggerSequence.call(e,t,e.state)),n=e.mixer.staggerDuration?t*e.mixer.staggerDuration:0,e.callFilters("delayGetDelay",n,arguments)},applyTransition:function(t){var n=this,a=t.join(", ");n.callActions("beforeApplyTransition",arguments),n.dom.el.style[e.features.transitionProp]=a,n.callActions("afterApplyTransition",arguments)},handleTransitionEnd:function(t){var e=this,n=t.propertyName,a=e.mixer.config.animation.animateResizeTargets;e.callActions("beforeHandleTransitionEnd",arguments),e.isBound&&t.target.matches(e.mixer.config.selectors.target)&&(n.indexOf("transform")>-1||n.indexOf("opacity")>-1||a&&n.indexOf("height")>-1||a&&n.indexOf("width")>-1||a&&n.indexOf("margin")>-1)&&(e.callback.call(e,e.operation),e.isBound=!1,e.callback=null,e.operation=null),e.callActions("afterHandleTransitionEnd",arguments)},eventBus:function(t){var e=this;switch(e.callActions("beforeEventBus",arguments),t.type){case"webkitTransitionEnd":case"transitionend":e.handleTransitionEnd(t)}e.callActions("afterEventBus",arguments)},unbindEvents:function(){var t=this;t.callActions("beforeUnbindEvents",arguments),n.off(t.dom.el,"webkitTransitionEnd",t.handler),n.off(t.dom.el,"transitionend",t.handler),t.callActions("afterUnbindEvents",arguments)},bindEvents:function(){var t=this,a="";t.callActions("beforeBindEvents",arguments),a="webkit"===e.features.transitionPrefix?"webkitTransitionEnd":"transitionend",t.handler=function(e){return t.eventBus(e)},n.on(t.dom.el,a,t.handler),t.callActions("afterBindEvents",arguments)},getPosData:function(n){var a=this,i={},o=null,r=new e.StyleData;return a.callActions("beforeGetPosData",arguments),r.x=a.dom.el.offsetLeft,r.y=a.dom.el.offsetTop,(a.mixer.config.animation.animateResizeTargets||n)&&(o=a.dom.el.getBoundingClientRect(),r.top=o.top,r.right=o.right,r.bottom=o.bottom,r.left=o.left,r.width=o.width,r.height=o.height),a.mixer.config.animation.animateResizeTargets&&(i=t.getComputedStyle(a.dom.el),r.marginBottom=parseFloat(i.marginBottom),r.marginRight=parseFloat(i.marginRight)),a.callFilters("posDataGetPosData",r,arguments)},cleanUp:function(){var t=this;t.callActions("beforeCleanUp",arguments),t.dom.el.style[e.features.transformProp]="",t.dom.el.style[e.features.transitionProp]="",t.dom.el.style.opacity="",t.mixer.config.animation.animateResizeTargets&&(t.dom.el.style.width="",t.dom.el.style.height="",t.dom.el.style.marginRight="",t.dom.el.style.marginBottom=""),t.callActions("afterCleanUp",arguments)}}),e.Collection=function(t){var e=null,a=-1;for(this.callActions("beforeConstruct"),a=0;e=t[a];a++)this[a]=e;this.length=t.length,this.callActions("afterConstruct"),n.freeze(this)},e.BaseStatic.call(e.Collection),e.Collection.prototype=Object.create(e.Base.prototype),n.extend(e.Collection.prototype,{constructor:e.Collection,mixitup:function(t){var a=this,i=null,o=Array.prototype.slice.call(arguments),r=[],s=-1;for(this.callActions("beforeMixitup"),o.shift(),s=0;i=a[s];s++)r.push(i[t].apply(i,o));return a.callFilters("promiseMixitup",n.all(r,e.libraries),arguments)}}),e.Operation=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.args=[],this.command=null,this.showPosData=[],this.toHidePosData=[],this.startState=null,this.newState=null,this.docState=null,this.willSort=!1,this.willChangeLayout=!1,this.hasEffect=!1,this.hasFailed=!1,this.triggerElement=null,this.show=[],this.hide=[],this.matching=[],this.toShow=[],this.toHide=[],this.toMove=[],this.toRemove=[],this.startOrder=[],this.newOrder=[],this.startSort=null,this.newSort=null,this.startFilter=null,this.newFilter=null,this.startDataset=null,this.newDataset=null,this.viewportDeltaX=0,this.viewportDeltaY=0,this.startX=0,this.startY=0,this.startHeight=0,this.startWidth=0,this.newX=0,this.newY=0,this.newHeight=0,this.newWidth=0,this.startContainerClassName="",this.startDisplay="",this.newContainerClassName="",this.newDisplay="",this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.Operation),e.Operation.prototype=Object.create(e.Base.prototype),e.Operation.prototype.constructor=e.Operation,e.State=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.id="",this.activeFilter=null,this.activeSort=null,this.activeContainerClassName="",this.container=null,this.targets=[],this.hide=[],this.show=[],this.matching=[],this.totalTargets=-1,this.totalShow=-1,this.totalHide=-1,this.totalMatching=-1,this.hasFailed=!1,this.triggerElement=null,this.activeDataset=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.State),e.State.prototype=Object.create(e.Base.prototype),e.State.prototype.constructor=e.State,e.UserInstruction=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.command={},this.animate=!1,this.callback=null,this.callActions("afterConstruct"),n.seal(this)},e.BaseStatic.call(e.UserInstruction),e.UserInstruction.prototype=Object.create(e.Base.prototype),e.UserInstruction.prototype.constructor=e.UserInstruction,e.Messages=function(){e.Base.call(this),this.callActions("beforeConstruct"),this.ERROR_FACTORY_INVALID_CONTAINER="[MixItUp] An invalid selector or element reference was passed to the mixitup factory function",this.ERROR_FACTORY_CONTAINER_NOT_FOUND="[MixItUp] The provided selector yielded no container element",this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS="[MixItUp] Invalid value for `animation.effects`",this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE="[MixItUp] Invalid value for `controls.scope`",this.ERROR_CONFIG_INVALID_PROPERTY='[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}',this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION='. Did you mean "${probableMatch}"?',this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET="[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`",this.ERROR_DATASET_INVALID_UID_KEY='[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items',this.ERROR_DATASET_DUPLICATE_UID='[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.',this.ERROR_INSERT_INVALID_ARGUMENTS="[MixItUp] Please provider either an index or a sibling and position to insert, not both",this.ERROR_INSERT_PREEXISTING_ELEMENT="[MixItUp] An element to be inserted already exists in the container",this.ERROR_FILTER_INVALID_ARGUMENTS="[MixItUp] Please provide either a selector or collection `.filter()`, not both",this.ERROR_DATASET_NOT_SET="[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`",this.ERROR_DATASET_PRERENDERED_MISMATCH="[MixItUp] `load.dataset` does not match pre-rendered targets",this.ERROR_DATASET_RENDERER_NOT_SET="[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`",this.WARNING_FACTORY_PREEXISTING_INSTANCE="[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.",this.WARNING_INSERT_NO_ELEMENTS="[MixItUp] WARNING: No valid elements were passed to `.insert()`",this.WARNING_REMOVE_NO_ELEMENTS="[MixItUp] WARNING: No valid elements were passed to `.remove()`",this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL="[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.",this.WARNING_GET_OPERATION_INSTANCE_BUSY="[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.",this.WARNING_NO_PROMISE_IMPLEMENTATION="[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.",this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES='[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output',this.callActions("afterConstruct"),this.compileTemplates(),n.seal(this)},e.BaseStatic.call(e.Messages),e.Messages.prototype=Object.create(e.Base.prototype),e.Messages.prototype.constructor=e.Messages,e.Messages.prototype.compileTemplates=function(){var t="",e="";for(t in this)"string"==typeof(e=this[t])&&(this[n.camelCase(t)]=n.template(e))},e.messages=new e.Messages,e.Facade=function(t){e.Base.call(this),this.callActions("beforeConstruct",arguments),this.configure=t.configure.bind(t),this.show=t.show.bind(t),this.hide=t.hide.bind(t),this.filter=t.filter.bind(t),this.toggleOn=t.toggleOn.bind(t),this.toggleOff=t.toggleOff.bind(t),this.sort=t.sort.bind(t),this.changeLayout=t.changeLayout.bind(t),this.multimix=t.multimix.bind(t),this.dataset=t.dataset.bind(t),this.tween=t.tween.bind(t),this.insert=t.insert.bind(t),this.insertBefore=t.insertBefore.bind(t),this.insertAfter=t.insertAfter.bind(t),this.prepend=t.prepend.bind(t),this.append=t.append.bind(t),this.remove=t.remove.bind(t),this.destroy=t.destroy.bind(t),this.forceRefresh=t.forceRefresh.bind(t),this.forceRender=t.forceRender.bind(t),this.isMixing=t.isMixing.bind(t),this.getOperation=t.getOperation.bind(t),this.getConfig=t.getConfig.bind(t),this.getState=t.getState.bind(t),this.callActions("afterConstruct",arguments),n.freeze(this),n.seal(this)},e.BaseStatic.call(e.Facade),e.Facade.prototype=Object.create(e.Base.prototype),e.Facade.prototype.constructor=e.Facade,"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof t.mixitup&&"function"==typeof t.mixitup||(t.mixitup=e),e.BaseStatic.call(e.constructor),e.NAME="mixitup",e.CORE_VERSION="3.3.0"}(window);


/**!
 * MixItUp Pagination v3.3.0
 * Client-side pagination for filtered and sorted content
 * Build 875b7d31-63d1-4040-ac6f-b1c814027891
 *
 * Requires mixitup.js >= v^3.1.8
 *
 * @copyright Copyright 2014-2017 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup-pagination/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup-pagination/licenses/
 *
 *            Non-commercial use permitted under same terms as license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */

(function(window) {
'use strict';

var mixitupPagination = function(mixitup) {
    var h = mixitup.h;

    if (
        !mixitup.CORE_VERSION ||
        !h.compareVersions(mixitupPagination.REQUIRE_CORE_VERSION, mixitup.CORE_VERSION)
    ) {
        throw new Error(
            '[MixItUp Pagination] MixItUp Pagination ' +
            mixitupPagination.EXTENSION_VERSION +
            ' requires at least MixItUp ' +
            mixitupPagination.REQUIRE_CORE_VERSION
        );
    }

    /**
     * A group of optional callback functions to be invoked at various
     * points within the lifecycle of a mixer operation.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        callbacks
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigCallbacks.registerAction('afterConstruct', 'pagination', function() {
        /**
         * A callback function invoked whenever a pagination operation starts.
         *
         * This function is equivalent to `onMixStart`, and is invoked immediately
         * after it with the same arguments. Unlike `onMixStart` however, it will
         * not be invoked for filter or sort operations.
         *
         *
         * @name        onPaginateStart
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onPaginateStart = null;

        /**
         * A callback function invoked whenever a pagination operation ends.
         *
         * This function is equivalent to `onMixEnd`, and is invoked immediately
         * after it with the same arguments. Unlike `onMixEnd` however, it will
         * not be invoked for filter or sort operations.
         *
         * @name        onPaginateStart
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */

        this.onPaginateEnd = null;
    });

    /**
     * A group of properties defining the output and structure of class names programmatically
     * added to controls and containers to reflect the state of the mixer.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        classNames
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigClassNames.registerAction('afterConstruct', 'pagination', function() {

        /**
         * The "element" portion of the class name added to pager controls.
         *
         * @example <caption>Example: changing the `config.classNames.elementPager` value</caption>
         *
         * // Change from the default value of 'control' to 'pager'
         *
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementPager: 'pager'
         *     }
         * });
         *
         * // Base pager output: "mixitup-pager"
         *
         * @name        elementPager
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */

        this.elementPager = 'control';

        /**
         * The "element" portion of the class name added to the page list element, when it is
         * in its disabled state.
         *
         * The page list element is the containing element in which pagers are rendered.
         *
         * @example <caption>Example: changing the `config.classNames.elementPageList` value</caption>
         *
         * // Change from the default value of 'page-list' to 'pagination-links'
         *
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementPageList: 'pagination-links'
         *     }
         * });
         *
         * // Disabled page-list output: "mixitup-pagination-links-disabled"
         *
         * @name        elementPageList
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'page-list'
         */

        this.elementPageList = 'page-list';

        /**
         * The "element" portion of the class name added to the page stats element, when it is
         * in its disabled state.
         *
         * The page stats element is the containing element in which information about the
         * current page and total number of pages is rendered.
         *
         * @example <caption>Example: changing the `config.classNames.elementPageStats` value</caption>
         *
         * // Change from the default value of 'page-stats' to 'pagination-info'
         *
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementPageList: 'pagination-info'
         *     }
         * });
         *
         * // Disabled page-list output: "mixitup-pagination-info-disabled"
         *
         * @name        elementPageStats
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'page-stats'
         */

        this.elementPageStats = 'page-stats';

        /**
         * The "modifier" portion of the class name added to the first pager in the list of pager controls.
         *
         * @name        modifierFirst
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'first'
         */

        this.modifierFirst = 'first';

        /**
         * The "modifier" portion of the class name added to the last pager in the list of pager controls.
         *
         * @name        modifierLast
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'last'
         */

        this.modifierLast = 'last';

        /**
         * The "modifier" portion of the class name added to the previous pager in the list of pager controls.
         *
         * @name        modifierLast
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'prev'
         */

        this.modifierPrev = 'prev';

        /**
         * The "modifier" portion of the class name added to the next pager in the list of pager controls.
         *
         * @name        modifierNext
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'next'
         */

        this.modifierNext = 'next';

        /**
         * The "modifier" portion of the class name added to truncation markers in the list of pager controls.
         *
         * @name        modifierTruncationMarker
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'truncation-marker'
         */

        this.modifierTruncationMarker = 'truncation-marker';
    });

    /**
     * A group of properties defining the initial state of the mixer on load (instantiation).
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        load
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigLoad.registerAction('afterConstruct', 'pagination', function() {
        /**
         * An integer defining the starting page on load, if a page limit is active.
         *
         * @example <caption>Example: Defining a start page other than 1 to be applied on load</caption>
         *
         * // The mixer will show page 3 on load, with 8 items per page.
         *
         * var mixer = mixitup(containerEl, {
         *     pagination: {
         *         limit: 8
         *     },
         *     load: {
         *         page: 3
         *     }
         * });
         *
         * @name        page
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {number}
         * @default     1
         */

        this.page = 1;
    });

    /**
     * A group of properties defining the mixer's pagination behavior.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        pagination
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigPagination = function() {

        /**
         * A boolean dictating whether or not MixItUp should render a list of pager controls.
         *
         * If you wish to control pagination functionality via the API, or your own UI, this can be set to `false`.
         *
         * In order for this functionality to work, you must provide MixItUp with a `pageList`
         * element matching the selector defined in `selectors.pageList`. Pager controls will be
         * rendered inside this element as per the templates defined for the `templates.pager`
         * and related configuration options, or if set, a custom render
         * function supplied to the `render.pager` configuration option.
         *
         * @example <caption>Example: Disabling the rendering of the built-in "page list" UI</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     pagination: {
         *         limit: 8,
         *         generatePageList: false
         *     }
         * });
         *
         * @name        generatePageList
         * @memberof    mixitup.Config.pagination
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.generatePageList = true;

        /**
         * A boolean dictating whether or not MixItUp should render a stats about the
         * current page (e.g. "1 to 4 of 16").
         *
         * In order for this functionality to work, you must provide MixItUp with a `pageStats`
         * element matching the selector defined in `selectors.pageStats`. Page stats content will
         * be rendered inside this element as per the templates defined for the `templates.pageStats`
         * and `templates.pageStatsSingle` configuration options, or if set, a custom render
         * function supplied to the `render.pageStats` configuration option.
         *
         * @example <caption>Example: Disabling the rendering of the built-in "page stats" UI</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     pagination: {
         *         limit: 8,
         *         generatePageStats: false
         *     }
         * });
         *
         * @name        generatePageStats
         * @memberof    mixitup.Config.pagination
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.generatePageStats = true;

        /**
         * A boolean dictating whether or not to maintain the active page when switching
         * from filter to filter.
         *
         * By default, MixItUp will attempt to maintain the active page or its highest
         * equivalent in the new collection of matching targets (e.g. page 3 would become
         * page 2 if there are not enough targets in the new collection), but by setting
         * this option to `false`, changing the active filter will always cause the mixer
         * to revert to page one of the new collection.
         *
         * @example <caption>Example: Ensuring that the mixer reverts to page one when filtered</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     pagination: {
         *         limit: 8,
         *         maintainActivePage: false
         *     }
         * });
         *
         * @name        maintainActivePage
         * @memberof    mixitup.Config.pagination
         * @instance
         * @type        {boolean}
         * @default     true
         */

        this.maintainActivePage = true;

        /**
         * A boolean dictating whether or not to allow "looping" of the built-in previous
         * and next pagination controls.
         *
         * By default, when on the first page, the "previous" button will be disabled,
         * and when on the last page, the "next" button will be disabled. By setting
         * this option to `true`, the user may loop from the first to last page and
         * vice-versa.
         *
         * @example <caption>Example: Allowing prev/next controls to "loop" through pages</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     pagination: {
         *         limit: 8,
         *         loop: true
         *     }
         * });
         *
         * @name        loop
         * @memberof    mixitup.Config.pagination
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.loop = false;

        /**
         * A boolean dictating whether or not to prevent rendering of the built-in
         * "page list" UI if the matching collection of targets has only enough content
         * for one page.
         *
         * @example <caption>Example: Hiding the page list UI if only one page</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     pagination: {
         *         limit: 8,
         *         hidePageListIfSinglePage: true
         *     }
         * });
         *
         * @name        hidePageListIfSinglePage
         * @memberof    mixitup.Config.pagination
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.hidePageListIfSinglePage = false;

        /**
         * A boolean dictating whether or not to prevent rendering of the built-in
         * "page stats" UI if the matching collection of targets has only enough content
         * for one page.
         *
         * @example <caption>Example: Hiding the page stats UI if only one page</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     pagination: {
         *         limit: 8,
         *         hidePageStatsIfSinglePage: true
         *     }
         * });
         *
         * @name        hidePageStatsIfSinglePage
         * @memberof    mixitup.Config.pagination
         * @instance
         * @type        {boolean}
         * @default     false
         */

        this.hidePageStatsIfSinglePage = false;

        /**
         * A number defining the maximum number of items per page.
         *
         * By default, this is set to `-1` and pagination is effectively
         * disabled. By setting this to any number greater than 0, pagination
         * will be applied to the mixers targets, effectively activating the
         * extension.
         *
         * @example <caption>Example: Activating the pagination extension by defining a valid limit</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     pagination: {
         *         limit: 8
         *     }
         * });
         *
         * @name        limit
         * @memberof    mixitup.Config.pagination
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.limit = -1;

        /**
         * A number dictating the maximum number of individual pager controls to render before
         * truncating the list (e.g. adding an ellipses between non-consecutive pagers).
         *
         * The minimum value permitted for this option is 5, which ensures
         * there will always be at least a first, last, and two padding pagers, in addition
         * to the pager representing the currently active page.
         *
         * @name        maxPagers
         * @memberof    mixitup.Config.pagination
         * @instance
         * @type        {number}
         * @default     5
         */

        this.maxPagers = 5;

        h.seal(this);
    };

    /**
     * A group of optional render functions for creating and updating elements.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        render
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigRender.registerAction('afterConstruct', 'pagination', function() {
        /**
         * A function returning an HTML string representing a single pager control element.
         *
         * By default, MixItUp will render pager controls using its own internal renderer
         * and templates (see `templates.pager`), but you may override this functionality by
         * providing your own render function here instead. All pager elements must have a
         * data-page element indicating the action of the control.
         *
         * The function receives an object containing all neccessary information
         * about the pager as its first parameter.
         *
         * @name        pager
         * @memberof    mixitup.Config.render
         * @instance
         * @type        {function}
         * @default     'null'
         */

        this.pager = null;

        /**
         * A function returning an HTML string forming the contents of the "page stats" element.
         *
         * By default, MixItUp will render page stats using its own internal renderer
         * and templates (see `templates.pageStats`), but you may override this functionality by
         * providing your own render function here instead.
         *
         * The function receives an object containing all neccessary information
         * about the current page and total pages as its first parameter.
         *
         * @name        pageStats
         * @memberof    mixitup.Config.render
         * @instance
         * @type        {function}
         * @default     'null'
         */

        this.pageStats = null;
    });

    /**
     * A group of properties defining the selectors used to query elements within a mixitup container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        selectors
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.ConfigSelectors.registerAction('afterConstruct', 'pagination', function() {
        /**
         * A selector string used to query the page list element.
         *
         * Depending on the value of `controls.scope`, MixItUp will either query the
         * entire document for the page list element, or just the container.
         *
         * @name        pageList
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     '.mixitup-page-list'
         */

        this.pageList  = '.mixitup-page-list';

        /**
         * A selector string used to query the page stats element.
         *
         * Depending on the value of `controls.scope`, MixItUp will either query the
         * entire document for the page stats element, or just the container.
         *
         * @name        pageStats
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     '.mixitup-page-stats'
         */

        this.pageStats = '.mixitup-page-stats';
    });

    /**
     * A group of template strings used to render pager controls and page stats elements.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        templates
     * @namespace
     * @public
     * @since       3.0.0
     */

    mixitup.ConfigTemplates.registerAction('afterConstruct', 'pagination', function() {
        /**
         * @name        pager
         * @memberof    mixitup.Config.templates
         * @instance
         * @type        {string}
         * @default     '<button type="button" class="${classNames}" data-page="${pageNumber}">${pageNumber}</button>'
         */

        this.pager = '<button type="button" class="${classNames}" data-page="${pageNumber}">${pageNumber}</button>';

        /**
         * @name        pagerPrev
         * @memberof    mixitup.Config.templates
         * @instance
         * @type        {string}
         * @default     '<button type="button" class="${classNames}" data-page="prev">&laquo;</button>'
         */

        this.pagerPrev = '<button type="button" class="${classNames}" data-page="prev">&laquo;</button>';

        /**
         * @name        pagerNext
         * @memberof    mixitup.Config.templates
         * @instance
         * @type        {string}
         * @default     '<button type="button" class="${classNames}" data-page="next">&raquo;</button>'
         */

        this.pagerNext = '<button type="button" class="${classNames}" data-page="next">&raquo;</button>';

        /**
         * @name        pagerTruncationMarker
         * @memberof    mixitup.Config.templates
         * @instance
         * @type        {string}
         * @default     '<span class="${classNames}">&hellip;</span>'
         */

        this.pagerTruncationMarker = '<span class="${classNames}">&hellip;</span>';

        /**
         * @name        pageStats
         * @memberof    mixitup.Config.templates
         * @instance
         * @type        {string}
         * @default     '${startPageAt} to ${endPageAt} of ${totalTargets}'
         */

        this.pageStats = '${startPageAt} to ${endPageAt} of ${totalTargets}';

        /**
         * @name        pageStatsSingle
         * @memberof    mixitup.Config.templates
         * @instance
         * @type        {string}
         * @default     '${startPageAt} of ${totalTargets}'
         */

        this.pageStatsSingle = '${startPageAt} of ${totalTargets}';

        /**
         * @name        pageStatsFail
         * @memberof    mixitup.Config.templates
         * @instance
         * @type        {string}
         * @default     'None found'
         */

        this.pageStatsFail = 'None found';
    });

    /**
     * The MixItUp configuration object is extended with the following properties
     * relating to the Pagination extension.
     *
     * For the full list of configuration options, please refer to the MixItUp
     * core documentation.
     *
     * @constructor
     * @memberof    mixitup
     * @name        Config
     * @namespace
     * @public
     * @since       2.0.0
     */

    mixitup.Config.registerAction('beforeConstruct', 'pagination', function() {
        this.pagination = new mixitup.ConfigPagination();
    });

    mixitup.ModelPager = function() {
        this.pageNumber         = -1;
        this.classNames         = '';
        this.classList          = [];
        this.isDisabled         = false;
        this.isPrev             = false;
        this.isNext             = false;
        this.isPageLink         = false;
        this.isTruncationMarker = false;

        h.seal(this);
    };

    mixitup.ModelPageStats = function() {
        this.startPageAt    = -1;
        this.endPageAt      = -1;
        this.totalTargets   = -1;

        h.seal(this);
    };

    mixitup.UiClassNames.registerAction('afterConstruct', 'pagination', function() {
        this.first              = '';
        this.last               = '';
        this.prev               = '';
        this.next               = '';
        this.first              = '';
        this.last               = '';
        this.truncated          = '';
        this.truncationMarker   = '';
    });

    mixitup.controlDefinitions.push(new mixitup.ControlDefinition('pager', '[data-page]', true, 'pageListEls'));

    /**
     * @param   {mixitup.MultimixCommand[]} commands
     * @param   {ClickEvent}                e
     * @return  {object|null}
     */

    mixitup.Control.registerFilter('commandsHandleClick', 'pagination', function(commands, e) {
        var self            = this,
            command         = {},
            page            = '',
            pageNumber      = -1,
            mixer           = null,
            button          = null,
            i               = -1;

        if (!self.selector || self.selector !== '[data-page]') {
            // Static control or non-pager live control

            return commands;
        }

        button = h.closestParent(e.target, self.selector, true, self.bound[0].dom.document);

        for (i = 0; mixer = self.bound[i]; i++) {
            command = commands[i];

            if (!mixer.config.pagination || mixer.config.pagination.limit < 0 || mixer.config.pagination.limit === Infinity) {
                // Pagination is disabled for this instance. Do not handle.

                commands[i] = null;

                continue;
            }

            if (!button || h.hasClass(button, mixer.classNamesPager.active) || h.hasClass(button, mixer.classNamesPager.disabled)) {
                // No button was clicked or button is already active. Do not handle.

                commands[i] = null;

                continue;
            }

            page = button.getAttribute('data-page');

            if (page === 'prev') {
                command.paginate = 'prev';
            } else if (page === 'next') {
                command.paginate = 'next';
            } else if (pageNumber) {
                command.paginate = parseInt(page);
            }

            if (mixer.lastClicked) {
                mixer.lastClicked = button;
            }
        }

        return commands;
    });

    mixitup.CommandMultimix.registerAction('afterConstruct', 'pagination', function() {
        this.paginate = null;
    });

    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */

    mixitup.CommandPaginate = function() {
        this.page   = -1;
        this.limit  = -1;
        this.action = ''; // enum: ['prev', 'next']
        this.anchor = null;

        h.seal(this);
    };

    mixitup.Events.registerAction('afterConstruct', 'pagination', function() {
        /**
         * A custom event triggered whenever a pagination operation starts.
         *
         * @name        paginateStart
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.paginateStart = null;

        /**
         * A custom event triggered whenever a pagination operation ends.
         *
         * @name        paginateEnd
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */

        this.paginateEnd = null;
    });

    mixitup.events = new mixitup.Events();

    mixitup.Operation.registerAction('afterConstruct', 'pagination', function() {
        this.startPagination    = null;
        this.newPagination      = null;
        this.startTotalPages    = -1;
        this.newTotalPages      = -1;
    });

    /**
     * `mixitup.State` objects expose various pieces of data detailing the state of
     * a MixItUp instance. They are provided at the start and end of any operation via
     * callbacks and events, with the most recent state stored between operations
     * for retrieval at any time via the API.
     *
     * @constructor
     * @namespace
     * @name        State
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.State.registerAction('afterConstruct', 'pagination', function() {

        /**
         * The currently active pagination command as set by a control click or API call.
         *
         * @name        activePagination
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandPagination}
         * @default     null
         */

        this.activePagination = null;

        /**
         * The total number of pages produced as a combination of the current page
         * limit and active filter.
         *
         * @name        totalPages
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */

        this.totalPages = -1;
    });

    mixitup.MixerDom.registerAction('afterConstruct', 'pagination', function() {
        this.pageListEls  = [];
        this.pageStatsEls = [];
    });

    /**
     * The mixitup.Mixer class is extended with the following methods relating to
     * the Pagination extension.
     *
     * For the full list of methods, please refer to the MixItUp core documentation.
     *
     * @constructor
     * @namespace
     * @name        Mixer
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */

    mixitup.Mixer.registerAction('afterConstruct', 'pagination', function() {
        this.classNamesPager        = new mixitup.UiClassNames();
        this.classNamesPageList     = new mixitup.UiClassNames();
        this.classNamesPageStats    = new mixitup.UiClassNames();
    });

    /**
     * @private
     * @return  {void}
     */

    mixitup.Mixer.registerAction('afterAttach', 'pagination', function() {
        var self = this,
            el   = null,
            i    = -1;

        if (self.config.pagination.limit < 0) return;

        // Map pagination ui classNames

        // jscs:disable
        self.classNamesPager.base               = h.getClassname(self.config.classNames, 'pager');
        self.classNamesPager.active             = h.getClassname(self.config.classNames, 'pager', self.config.classNames.modifierActive);
        self.classNamesPager.disabled           = h.getClassname(self.config.classNames, 'pager', self.config.classNames.modifierDisabled);
        self.classNamesPager.first              = h.getClassname(self.config.classNames, 'pager', self.config.classNames.modifierFirst);
        self.classNamesPager.last               = h.getClassname(self.config.classNames, 'pager', self.config.classNames.modifierLast);
        self.classNamesPager.prev               = h.getClassname(self.config.classNames, 'pager', self.config.classNames.modifierPrev);
        self.classNamesPager.next               = h.getClassname(self.config.classNames, 'pager', self.config.classNames.modifierNext);
        self.classNamesPager.truncationMarker   = h.getClassname(self.config.classNames, 'pager', self.config.classNames.modifierTruncationMarker);

        self.classNamesPageList.base            = h.getClassname(self.config.classNames, 'page-list');
        self.classNamesPageList.disabled        = h.getClassname(self.config.classNames, 'page-list', self.config.classNames.modifierDisabled);

        self.classNamesPageStats.base           = h.getClassname(self.config.classNames, 'page-stats');
        self.classNamesPageStats.disabled       = h.getClassname(self.config.classNames, 'page-stats', self.config.classNames.modifierDisabled);
        // jscs:enable

        if (self.config.pagination.generatePageList && self.dom.pageListEls.length > 0) {
            for (i = 0; (el = self.dom.pageListEls[i]); i++) {
                self.renderPageListEl(el, self.lastOperation);
            }
        }

        if (self.config.pagination.generatePageStats && self.dom.pageStatsEls.length > 0) {
            for (i = 0; (el = self.dom.pageStatsEls[i]); i++) {
                self.renderPageStatsEl(el, self.lastOperation);
            }
        }
    });

    mixitup.Mixer.registerAction('afterSanitizeConfig', 'pagination', function() {
        var self            = this,
            onMixStart      = self.config.callbacks.onMixStart,
            onMixEnd        = self.config.callbacks.onMixEnd,
            onPaginateStart = self.config.callbacks.onPaginateStart,
            onPaginateEnd   = self.config.callbacks.onPaginateEnd,
            didPaginate     = false;

        if (self.config.pagination.limit < 0) return;

        self.classNamesPager        = new mixitup.UiClassNames();
        self.classNamesPageList     = new mixitup.UiClassNames();
        self.classNamesPageStats    = new mixitup.UiClassNames();

        self.config.callbacks.onMixStart = function(prevState, nextState) {
            if (
                prevState.activePagination.limit !== nextState.activePagination.limit ||
                prevState.activePagination.page !== nextState.activePagination.page
            ) {
                didPaginate = true;
            }

            if (typeof onMixStart === 'function') onMixStart.apply(self.dom.container, arguments);

            if (!didPaginate) return;

            mixitup.events.fire('paginateStart', self.dom.container, {
                state: prevState,
                futureState: nextState,
                instance: self
            }, self.dom.document);

            if (typeof onPaginateStart === 'function') onPaginateStart.apply(self.dom.container, arguments);
        };

        self.config.callbacks.onMixEnd = function(state) {
            if (typeof onMixEnd === 'function') onMixEnd.apply(self.dom.container, arguments);

            if (!didPaginate) return;

            didPaginate = false;

            mixitup.events.fire('paginateEnd', self.dom.container, {
                state: state,
                instance: self
            }, self.dom.document);

            if (typeof onPaginateEnd === 'function') onPaginateEnd.apply(self.dom.container, arguments);
        };
    });

    /**
     * @private
     * @param   {mixitup.Operation} operation
     * @param   {mixitup.State}     state
     * @return  {mixitup.Operation}
     */

    mixitup.Mixer.registerFilter('operationGetInitialState', 'pagination', function(operation, state) {
        var self = this;

        if (self.config.pagination.limit < 0) return operation;

        operation.newPagination = state.activePagination;

        return operation;
    });

    /**
     * @private
     * @param   {mixitup.State} state
     * @return  {mixitup.State}
     */

    mixitup.Mixer.registerFilter('stateGetInitialState', 'pagination', function(state) {
        var self = this;

        if (self.config.pagination.limit < 0) return state;

        state.activePagination = new mixitup.CommandPaginate();

        state.activePagination.page     = self.config.load.page;
        state.activePagination.limit    = self.config.pagination.limit;

        return state;
    });

    /**
     * @private
     * @return  {void}
     */

    mixitup.Mixer.registerAction('afterGetFinalMixData', 'pagination', function() {
        var self = this;

        if (self.config.pagination.limit < 0) return;

        if (typeof self.config.pagination.maxPagers === 'number') {
            // Restrict max pagers to a minimum of 5. There must always
            // be a first, last, and one on either side of the active pager.
            // e.g. « 1 ... 4 5 6 ... 10 »

            self.config.pagination.maxPagers = Math.max(5, self.config.pagination.maxPagers);
        }
    });

    /**
     * @private
     * @return  {void}
     */

    mixitup.Mixer.registerAction('afterCacheDom', 'pagination', function() {
        var self    = this,
            parent  = null;

        if (self.config.pagination.limit < 0) return;

        if (!self.config.pagination.generatePageList) return;

        switch (self.config.controls.scope) {
            case 'local':
                parent = self.dom.container;

                break;
            case 'global':
                parent = self.dom.document;

                break;
            default:
                throw new Error(mixitup.messages.ERROR_CONFIG_INVALID_CONTROLS_SCOPE);
        }

        self.dom.pageListEls  = parent.querySelectorAll(self.config.selectors.pageList);
        self.dom.pageStatsEls = parent.querySelectorAll(self.config.selectors.pageStats);
    });

    /**
     * @private
     * @param   {mixitup.State}     state
     * @param   {mixitup.Operation} operation
     * @return  {mixitup.State}
     */

    mixitup.Mixer.registerFilter('stateBuildState', 'pagination', function(state, operation) {
        var self        = this;

        if (self.config.pagination.limit < 0) return state;

        // Map pagination-specific properties into state

        state.activePagination  = operation.newPagination;
        state.totalPages        = operation.newTotalPages;

        return state;
    });

    /**
     * @private
     * @param   {mixitup.UserInstruction}     instruction
     * @return  {mixitup.UserInstruction}
     */

    mixitup.Mixer.registerFilter('instructionParseMultimixArgs', 'pagination', function(instruction) {
        var self = this;

        if (self.config.pagination.limit < 0) return instruction;

        if (instruction.command.paginate && !(instruction.command.paginate instanceof mixitup.CommandPaginate)) {
            instruction.command.paginate = self.parsePaginateArgs([instruction.command.paginate]).command;
        }

        return instruction;
    });

    /**
     * @private
     * @param   {mixitup.Operation} operation
     * @return  {void}
     */

    mixitup.Mixer.registerAction('afterFilterOperation', 'pagination', function(operation) {
        var self        = this,
            startPageAt = -1,
            endPageAt   = -1,
            inPage      = [],
            notInPage   = [],
            target      = null,
            index       = -1,
            i           = -1;

        if (self.config.pagination.limit < 0) return;

        // Calculate the new total pages as a matter of course (i.e. a change in filter)

        // New matching array has already been set at this point

        operation.newTotalPages = operation.newPagination.limit ?
            Math.max(Math.ceil(operation.matching.length / operation.newPagination.limit), 1) :
            1;

        if (self.config.pagination.maintainActivePage) {
            operation.newPagination.page = (operation.newPagination.page > operation.newTotalPages) ?
                operation.newTotalPages :
                operation.newPagination.page;
        }

        // Keep config in sync with latest limit

        self.config.pagination.limit = operation.newPagination.limit;

        if (operation.newPagination.anchor) {
            // Start page at an anchor element

            for (i = 0; target = operation.matching[i]; i++) {
                if (target.dom.el === operation.newPagination.anchor) break;
            }

            startPageAt = i;
            endPageAt   = i + operation.newPagination.limit - 1;
        } else {
            // Start page based on limit and page index

            startPageAt = operation.newPagination.limit * (operation.newPagination.page - 1);
            endPageAt   = (operation.newPagination.limit * operation.newPagination.page) - 1;

            if (isNaN(startPageAt)) {
                startPageAt = 0;
            }
        }

        if (operation.newPagination.limit < 0) return;

        for (i = 0; target = operation.show[i]; i++) {
            // For each target in `show`, include in page, only if within the range

            if (i >= startPageAt && i <= endPageAt) {
                inPage.push(target);
            } else {
                // Else move to `notInPage`

                notInPage.push(target);
            }
        }

        // override the operation's `show` array with the newly constructed `inPage` array

        operation.show = inPage;

        // For anything not in the page, make sure it is correctly assigned:

        for (i = 0; target = operation.toHide[i]; i++) {
            // For example, if a target would normally be included in `toHide`, but is
            // now already hidden as not in the page, make sure it is removed from `toHide`
            // so it is not included in the operation.

            if (!target.isShown) {
                operation.toHide.splice(i, 1);

                target.isShown = false;

                i--;
            }
        }

        for (i = 0; target = notInPage[i]; i++) {
            // For each target not in page, move into `hide`

            operation.hide.push(target);

            if ((index = operation.toShow.indexOf(target)) > -1) {
                // Any targets due to be shown will no longer be shown

                operation.toShow.splice(index, 1);
            }

            if (target.isShown) {
                // If currently shown, move to `toHide`

                operation.toHide.push(target);
            }
        }
    });

    /**
     * @private
     * @param   {mixitup.Operation}         operation
     * @param   {mixitup.CommandMultimix}   command
     * @return  {mixitup.Operation}
     */

    mixitup.Mixer.registerFilter('operationUnmappedGetOperation', 'pagination', function(operation, command) {
        var self = this;

        if (self.config.pagination.limit < 0) return operation;

        operation.startState      = self.state;
        operation.startPagination = self.state.activePagination;
        operation.startTotalPages = self.state.totalPages;

        operation.newPagination = new mixitup.CommandPaginate();

        operation.newPagination.limit = operation.startPagination.limit;
        operation.newPagination.page  = operation.startPagination.page;

        if (command.paginate) {
            self.parsePaginateCommand(command.paginate, operation);
        } else if (command.filter || command.sort) {
            h.extend(operation.newPagination, operation.startPagination);

            // Reset to 1, or maintain active:

            if (!self.config.pagination.maintainActivePage) {
                operation.newPagination.page = 1;
            } else {
                operation.newPagination.page = self.state.activePagination.page;
            }
        }

        return operation;
    });

    /**
     * @private
     * @param   {mixitup.Operation} operation
     * @param   {object}            command
     * @param   {boolean}           [isPreFetch=false]
     * @return  {mixitup.Operation}
     */

    mixitup.Mixer.registerFilter('operationMappedGetOperation', 'pagination', function(operation, command, isPreFetch) {
        var self = this,
            el   = null,
            i    = -1;

        if (self.config.pagination.limit < 0) return operation;

        if (isPreFetch) {
            // The operation is being pre-fetched, so don't update the pagers or stats yet.

            return operation;
        }

        if (self.config.pagination.generatePageList && self.dom.pageListEls.length > 0) {
            for (i = 0; (el = self.dom.pageListEls[i]); i++) {
                self.renderPageListEl(el, operation);
            }
        }

        if (self.config.pagination.generatePageStats && self.dom.pageStatsEls.length > 0) {
            for (i = 0; (el = self.dom.pageStatsEls[i]); i++) {
                self.renderPageStatsEl(el, operation);
            }
        }

        return operation;
    });

    mixitup.Mixer.extend(
    /** @lends mixitup.Mixer */
    {
        /**
         * @private
         * @param   {mixitup.CommandPaginate}   command
         * @param   {mixitup.Operation}         operation
         * @return  {void}
         */

        parsePaginateCommand: function(command, operation) {
            var self = this;

            // e.g. mixer.paginate({page: 3, limit: 2});
            // e.g. mixer.paginate({action: 'next'});
            // e.g. mixer.paginate({anchor: anchorTarget, limit: 5});

            if (command.page > -1) {
                if (command.page === 0) throw new Error(mixitup.messages.ERROR_PAGINATE_INDEX_RANGE);

                // TODO: replace Infinity with the highest possible page index

                operation.newPagination.page = Math.max(1, Math.min(Infinity, command.page));
            } else if (command.action === 'next') {
                operation.newPagination.page = self.getNextPage();
            } else if (command.action === 'prev') {
                operation.newPagination.page = self.getPrevPage();
            } else if (command.anchor) {
                operation.newPagination.anchor = command.anchor;
            }

            if (command.limit > -1) {
                operation.newPagination.limit = command.limit;
            }

            if (operation.newPagination.limit !== operation.startPagination.limit) {
                // A new limit has been sent via the API, calculate total pages

                operation.newTotalPages = operation.newPagination.limit ?
                    Math.max(Math.ceil(operation.startState.matching.length / operation.newPagination.limit), 1) :
                    1;
            }

            if (operation.newPagination.limit <= 0 || operation.newPagination.limit === Infinity) {
                operation.newPagination.page = 1;
            }
        },

        /**
         * @private
         * @return  {number}    page
         */

        getNextPage: function() {
            var self = this,
                page = -1;

            page = self.state.activePagination.page + 1;

            if (page > self.state.totalPages) {
                page = self.config.pagination.loop ? 1 : self.state.activePagination.page;
            }

            return page;
        },

        /**
         * @private
         * @return  {Number}    page
         */

        getPrevPage: function() {
            var self = this,
                page = -1;

            page = self.state.activePagination.page - 1;

            if (page < 1) {
                page = self.config.pagination.loop ? self.state.totalPages : self.state.activePagination.page;
            }

            return page;
        },

        /**
         * @private
         * @param   {HTMLElement}        pageListEl
         * @param   {mixitup.Operation}  operation
         * @return  {void}
         */

        renderPageListEl: function(pageListEl, operation) {
            var self                = this,
                activeIndex         = -1,
                pagerHtml           = '',
                buttonList          = [],
                model               = null,
                renderer            = null,
                allowedIndices      = [],
                truncatedBefore     = false,
                truncatedAfter      = false,
                disabled            = null,
                el                  = null,
                html                = '',
                i                   = -1;

            if (
                operation.newPagination.limit < 0 ||
                operation.newPagination.limit === Infinity ||
                (operation.newTotalPages < 2 && self.config.pagination.hidePageListIfSinglePage)
            ) {
                // Empty the pager list, and add disabled class

                pageListEl.innerHTML = '';

                h.addClass(pageListEl, self.classNamesPageList.disabled);

                return;
            }

            activeIndex = operation.newPagination.page - 1;

            renderer = typeof (renderer = self.config.render.pager) === 'function' ?  renderer : null;

            if (self.config.pagination.maxPagers < Infinity && operation.newTotalPages > self.config.pagination.maxPagers) {
                allowedIndices = self.getAllowedIndices(operation);
            }

            // Render prev button

            model = new mixitup.ModelPager();

            model.isPrev = true;
            model.classList.push(self.classNamesPager.base, self.classNamesPager.prev);

            // If first and not looping, disable the prev button

            if (operation.newPagination.page === 1 && !self.config.pagination.loop) {
                model.classList.push(self.classNamesPager.disabled);

                model.isDisabled = true;
            }

            model.classNames = model.classList.join(' ');

            if (renderer) {
                pagerHtml = renderer(model);
            } else {
                pagerHtml = h.template(self.config.templates.pagerPrev)(model);
            }

            buttonList.push(pagerHtml);

            // Render per-page pagers

            for (i = 0; i < operation.newTotalPages; i++) {
                pagerHtml = self.renderPager(i, operation, allowedIndices);

                if (pagerHtml || (i < activeIndex && truncatedBefore) || i > activeIndex && truncatedAfter) {
                    if (pagerHtml) {
                        buttonList.push(pagerHtml);
                    }

                    continue;
                }

                // Replace gaps between pagers with a truncation maker, but only once

                model = new mixitup.ModelPager();

                model.isTruncationMarker = true;

                model.classList.push(self.classNamesPager.base, self.classNamesPager.truncationMarker);
                model.classNames = model.classList.join(' ');

                if (renderer) {
                    pagerHtml = renderer(model);
                } else {
                    pagerHtml = h.template(self.config.templates.pagerTruncationMarker)(model);
                }

                buttonList.push(pagerHtml);

                // Prevent multiple truncation markers

                if (i < activeIndex) {
                    truncatedBefore = true;
                }

                if (i > activeIndex) {
                    truncatedAfter = true;
                }
            }

            // Render next button

            model = new mixitup.ModelPager();

            model.isNext = true;
            model.classList.push(self.classNamesPager.base, self.classNamesPager.next);

            // If last page and not looping, disable the next button

            if (operation.newPagination.page === operation.newTotalPages && !self.config.pagination.loop) {
                model.classList.push(self.classNamesPager.disabled);
            }

            model.classNames = model.classList.join(' ');

            if (renderer) {
                pagerHtml = renderer(model);
            } else {
                pagerHtml = h.template(self.config.templates.pagerNext)(model);
            }

            buttonList.push(pagerHtml);

            // Replace markup

            html = buttonList.join(' ');

            pageListEl.innerHTML = html;

            // Add disabled attribute to disabled buttons

            disabled = pageListEl.querySelectorAll('.' + self.classNamesPager.disabled);

            for (i = 0; el = disabled[i]; i++) {
                if (typeof el.disabled === 'boolean') {
                    el.disabled = true;
                }
            }

            if (truncatedBefore || truncatedAfter) {
                h.addClass(pageListEl, self.classNamesPageList.truncated);
            } else {
                h.removeClass(pageListEl, self.classNamesPageList.truncated);
            }

            if (operation.newTotalPages > 1) {
                h.removeClass(pageListEl, self.classNamesPageList.disabled);
            } else {
                h.addClass(pageListEl, self.classNamesPageList.disabled);
            }
        },

        /**
         * An algorithm defining which pagers should be rendered based on their index
         * and the current active page, when a `pagination.maxPagers` value is applied.
         *
         * @private
         * @param   {mixitup.Operation} operation
         * @return  {number[]}
         */

        getAllowedIndices: function(operation) {
            var self                = this,
                activeIndex         = operation.newPagination.page - 1,
                lastIndex           = operation.newTotalPages - 1,
                indices             = [],
                paddingRange        = -1,
                paddingBack         = -1,
                paddingFront        = -1,
                paddingRangeStart   = -1,
                paddingRangeEnd     = -1,
                paddingRangeOffset  = -1,
                i                   = -1;

            // Examples:

            // « 1 2 *3* 4 5 »                  maxPagers = 5
            // « 1 ... 4 *5* 6 ... 10 »         maxPagers = 5

            // « 1 ... 6 7 *8* 9 10 »           maxPagers = 6
            // « 1 ... 3 4 *5* 6 ... 10 »       maxPagers = 6

            // « 1 ... 3 4 *5* 6 7 ... 10 »     maxPagers = 7
            // « *1* 2 3 4 5 6 ... 10 »         maxPagers = 7

            // This algorithm ensures that at any time, the active pager
            // should be surrounded by as many "padding" pagers as possible to equal the
            // value of `pagination.maxPagers`, accounting for the fact the first and last
            // pager should also always be rendered.

            // Push in index 0 to represent the first pager

            indices.push(0);

            // Calculate the "padding range" by subtracting 2 from `pagination.maxPagers`

            paddingRange  = self.config.pagination.maxPagers - 2;

            // Distribute the padding equally behind and in front of the active pager.
            // If the padding range is an even number, we allow an extra pager behind the active pager.

            paddingBack   = Math.ceil((paddingRange - 1) / 2);
            paddingFront  = Math.floor((paddingRange - 1) / 2);

            // Calculate where the range should start and finish based on the active index

            paddingRangeStart   = activeIndex - paddingBack;
            paddingRangeEnd     = activeIndex + paddingFront;

            // Set the offset to 0

            paddingRangeOffset  = 0;

            // If the start of the range has collided with the first pager, positively offset as needed

            if (paddingRangeStart < 1) {
                paddingRangeOffset = 1 - paddingRangeStart;
            }

            // If the end of the range has collided with the last pager, negatively offset as needed

            if (paddingRangeEnd > lastIndex - 1) {
                paddingRangeOffset = (lastIndex - 1) - paddingRangeEnd;
            }

            // Calcuate the first index of the range taking into account any offset

            i = paddingRangeStart + paddingRangeOffset;

            // Iteratate through the range, adding the respective indices:

            while (paddingRange) {
                indices.push(i);

                i++;
                paddingRange--;
            }

            indices.push(lastIndex);

            return indices;
        },

        /**
         * Renderes individual, per-page pagers.
         *
         * @private
         * @param   {number}              i
         * @param   {mixitup.Operation}   operation
         * @param   {number[]}            [allowedIndices]
         * @return  {string}
         */

        renderPager: function(i, operation, allowedIndices) {
            var self        = this,
                renderer    = null,
                activePage  = operation.newPagination.page - 1,
                model       = new mixitup.ModelPager(),
                output      = '';

            if (
                self.config.pagination.maxPagers < Infinity &&
                allowedIndices.length &&
                allowedIndices.indexOf(i) < 0
            ) {
                // maxPagers is set, and this pager is not in the allowed range

                return '';
            }

            renderer = typeof (renderer = self.config.render.pager) === 'function' ?  renderer : null;

            model.isPageLink = true;

            model.classList.push(self.classNamesPager.base);

            if (i === 0) {
                model.classList.push(self.classNamesPager.first);
            }

            if (i === operation.newTotalPages - 1) {
                model.classList.push(self.classNamesPager.last);
            }

            if (i === activePage) {
                model.classList.push(self.classNamesPager.active);
            }

            model.classNames = model.classList.join(' ');
            model.pageNumber = i + 1;

            if (renderer) {
                output = renderer(model);
            } else {
                output = h.template(self.config.templates.pager)(model);
            }

            return output;
        },

        /**
         * @private
         * @param   {HTMLElement}       pageStatsEl
         * @param   {mixitup.Operation} operation
         * @return  {void}
         */

        renderPageStatsEl: function(pageStatsEl, operation) {
            var self            = this,
                model           = new mixitup.ModelPageStats(),
                renderer        = null,
                output          = '',
                template        = '';

            if (
                operation.newPagination.limit < 0 ||
                operation.newPagination.limit === Infinity ||
                (operation.newTotalPages < 2 && self.config.pagination.hidePageStatsIfSinglePage)
            ) {
                // Empty the pager list, and add disabled class

                pageStatsEl.innerHTML = '';

                h.addClass(pageStatsEl, self.classNamesPageStats.disabled);

                return;
            }

            renderer = typeof (renderer = self.config.render.pageStats) === 'function' ?  renderer : null;

            model.totalTargets = operation.matching.length;

            if (model.totalTargets) {
                template = operation.newPagination.limit === 1 ?
                    self.config.templates.pageStatsSingle :
                    self.config.templates.pageStats;
            } else {
                template = self.config.templates.pageStatsFail;
            }

            if (model.totalTargets && operation.newPagination.limit > 0) {
                model.startPageAt = ((operation.newPagination.page - 1) * operation.newPagination.limit) + 1;
                model.endPageAt   = Math.min(model.startPageAt + operation.newPagination.limit - 1, model.totalTargets);
            } else {
                model.startPageAt = model.endPageAt = 0;
            }

            if (renderer) {
                output = renderer(model);
            } else {
                output = h.template(template)(model);
            }

            pageStatsEl.innerHTML = output;

            if (model.totalTargets) {
                h.removeClass(pageStatsEl, self.classNamesPageStats.disabled);
            } else {
                h.addClass(pageStatsEl, self.classNamesPageStats.disabled);
            }
        },

        /**
         * @private
         * @param   {Array<*>}                  args
         * @return  {mixitup.UserInstruction}   instruction
         */

        parsePaginateArgs: function(args) {
            var self        = this,
                instruction = new mixitup.UserInstruction(),
                arg         = null,
                i           = -1;

            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandPaginate();

            for (i = 0; i < args.length; i++) {
                arg = args[i];

                if (arg === null) continue;

                if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
                    instruction.command.anchor = arg;
                } else if (arg instanceof mixitup.CommandPaginate || typeof arg === 'object') {
                    h.extend(instruction.command, arg);
                } else if (typeof arg === 'number') {
                    instruction.command.page = arg;
                } else if (typeof arg === 'string' && !isNaN(parseInt(arg))) {
                    // e.g. "4"

                    instruction.command.page = parseInt(arg);
                } else if (typeof arg === 'string') {
                    instruction.command.action = arg;
                } else if (typeof arg === 'boolean') {
                    instruction.animate = arg;
                } else if (typeof arg === 'function') {
                    instruction.callback = arg;
                }
            }

            h.freeze(instruction);

            // NB: Don't freeze command as may need to be sanitized later by other methods

            return instruction;
        },

        /**
         * Changes the current page and/or the current page limit.
         *
         * @example
         *
         * .paginate(page [, animate] [, callback])
         *
         * @example <caption>Example 1: Changing the active page</caption>
         *
         * console.log(mixer.getState().activePagination.page); // 1
         *
         * mixer.paginate(2)
         *     .then(function(state) {
         *         console.log(mixer.getState().activePagination.page === 2); // true
         *     });
         *
         * @example <caption>Example 2: Progressing to the next page</caption>
         *
         * console.log(mixer.getState().activePagination.page); // 1
         *
         * mixer.paginate('next')
         *     .then(function(state) {
         *         console.log(mixer.getState().activePagination.page === 2); // true
         *     });
         *
         * @example <caption>Example 3: Starting a page from an abitrary "anchor" element</caption>
         *
         * var anchorEl = mixer.getState().show[3];
         *
         * mixer.paginate(anchorEl)
         *     .then(function(state) {
         *         console.log(mixer.getState().activePagination.anchor === anchorEl); // true
         *         console.log(mixer.getState().show[0] === anchorEl); // true
         *     });
         *
         * @example <caption>Example 4: Changing the page limit</caption>
         *
         * var anchorEl = mixer.getState().show[3];
         *
         * console.log(mixer.getState().activePagination.limit); // 8
         *
         * mixer.paginate({
         *    limit: 4
         * })
         *     .then(function(state) {
         *         console.log(mixer.getState().activePagination.limit === 4); // true
         *     });
         *
         * @example <caption>Example 5: Changing the active page and page limit</caption>
         *
         * mixer.paginate({
         *    limit: 4,
         *    page: 2
         * })
         *     .then(function(state) {
         *         console.log(mixer.getState().activePagination.page === 2); // true
         *         console.log(mixer.getState().activePagination.limit === 4); // true
         *     });
         *
         * @public
         * @instance
         * @param       {(number|string|object|HTMLElement)}    page
         *     A page number, string (`'next'`, `'prev'`), HTML element reference, or command object.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *     A promise resolving with the current state object.
         */

        paginate: function() {
            var self        = this,
                instruction = self.parsePaginateArgs(arguments);

            return self.multimix({
                paginate: instruction.command
            }, instruction.animate, instruction.callback);
        },

        /**
         * A shorthand for `.paginate('next')`. Moves to the next page.
         *
         * @example
         *
         * .nextPage()
         *
         * @example <caption>Example: Moving to the next page</caption>
         *
         * console.log(mixer.getState().activePagination.page); // 1
         *
         * mixer.nextPage()
         *     .then(function(state) {
         *         console.log(mixer.getState().activePagination.page === 2); // true
         *     });
         *
         * @public
         * @instance
         * @return      {Promise.<mixitup.State>}
         *     A promise resolving with the current state object.
         */

        nextPage: function() {
            var self        = this,
                instruction = self.parsePaginateArgs(arguments);

            return self.multimix({
                paginate: {
                    action: 'next'
                }
            }, instruction.animate, instruction.callback);
        },

        /**
         * A shorthand for `.paginate('prev')`. Moves to the previous page.
         *
         * @example
         *
         * .prevPage()
         *
         * @example <caption>Example: Moving to the previous page</caption>
         *
         * console.log(mixer.getState().activePagination.page); // 5
         *
         * mixer.prevPage()
         *     .then(function(state) {
         *         console.log(mixer.getState().activePagination.page === 4); // true
         *     });
         *
         * @public
         * @instance
         * @return      {Promise.<mixitup.State>}
         *     A promise resolving with the current state object.
         */

        prevPage: function() {
            var self = this,
                instruction = self.parsePaginateArgs(arguments);

            return self.multimix({
                paginate: {
                    action: 'prev'
                }
            }, instruction.animate, instruction.callback);
        }
    });

    mixitup.Facade.registerAction('afterConstruct', 'pagination', function(mixer) {
        this.paginate = mixer.paginate.bind(mixer);
        this.nextPage = mixer.nextPage.bind(mixer);
        this.prevPage = mixer.prevPage.bind(mixer);
    });    };

mixitupPagination.TYPE                    = 'mixitup-extension';
mixitupPagination.NAME                    = 'mixitup-pagination';
mixitupPagination.EXTENSION_VERSION       = '3.3.0';
mixitupPagination.REQUIRE_CORE_VERSION    = '^3.1.8';

if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = mixitupPagination;
} else if (typeof define === 'function' && define.amd) {
    define(function() {
        return mixitupPagination;
    });
} else if (window.mixitup && typeof window.mixitup === 'function') {
    mixitupPagination(window.mixitup);
} else {
    throw new Error('[MixItUp Pagination] MixItUp core not found');
}})(window);


/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";
/**
* Detect IE browser
* @const {boolean}
* @private
*/var g="undefined"!=typeof document&&document.documentMode,f={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(n),u=d[0].substr(0,d[0].indexOf(" "))||d[0];// Substring before ... 1x
u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function A(t){t.setAttribute("data-loaded",!0)}var m=function(t){return"true"===t.getAttribute("data-loaded")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute("data-placeholder-background")&&(c.style.background=c.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});