﻿/* inview */
(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);
/* tags */
jQuery.fn.tag=function(e){var t={seperator:",",unique:!0,addOnEnter:!0,style:{list:"taglist",item:"tag",input:"input",remove:"delete"}};e=jQuery.extend(t,e),jQuery(this).each(function(){""!=(seperator=jQuery(this).attr("data-seperator"))&&(e.seperator=seperator);var t=function(t){var r=t.replace(/^\s+|\s+$/g,"");if(""!=r){var i=jQuery("<li/>").addClass(e.style.item),a=jQuery("<span/>"),l=jQuery("<span/>").html("[X]"),u=jQuery("<a/>",{tabindex:"-1"}).addClass(e.style.remove).append(l).click(function(){jQuery(this).closest("li").remove(),s()});if(!(e.unique&&jQuery.inArray(r,y)>-1))return y.push(r),a.html(r),i.append(a).append(" ").append(u),i}},r=function(r){if(""!=jQuery(r).val()){var i=t(jQuery(r).val());i?(jQuery(r).closest("li").before(i),jQuery(r).val(jQuery(r).val().replace(e.seperator,"")),jQuery(r).width(8).val("").focus()):(jQuery(r).val(""),jQuery(r).width(8)),s(),o.html("")}},s=function(){var t=[];jQuery("li."+e.style.item+" > span",a).each(function(){t.push(jQuery(this).html())}),y=t,jQuery(i).val(t.join(e.seperator))},i=jQuery(this);if(i.is(":input")){i.hide();var a=jQuery("<ul/>").addClass(e.style.list).click(function(){jQuery(this).find("input").focus()}),l=jQuery("<input/>",{type:"text"}),u=i.val().split(e.seperator),y=[];for(index in u){var d=t(u[index]);a.append(d)}s(),i.after(a);var n=jQuery("<li/>").addClass(e.style.input),o=jQuery("<span/>");o.hide(),n.append(l),l.after(o),a.append(n);var h=function(e){o.html(jQuery(e).val().replace(/\s/g,"&nbsp;"));var t=""==jQuery(e).val()?8:10;jQuery(e).width(o.width()+t)};l.bind("keyup",function(){h(this)}).bind("keydown",function(e){h(this);var t=e.keyCode||e.which;if(""==jQuery(this).val()&&(8==t||46==t)){switch(jQuery(this).width(""!=jQuery(this).val()?o.width()+5:8),t){case 8:jQuery(this).closest("li").prev().is(".ready-to-delete")?(jQuery(".ready-to-delete").removeClass("ready-to-delete"),jQuery(this).closest("li").prev().remove()):(jQuery(".ready-to-delete").removeClass("ready-to-delete"),jQuery(this).closest("li").prev().addClass("ready-to-delete"));break;case 46:jQuery(this).closest("li").next().is(".ready-to-delete")?(jQuery(".ready-to-delete").removeClass("ready-to-delete"),jQuery(this).closest("li").next().remove()):(jQuery(".ready-to-delete").removeClass("ready-to-delete"),jQuery(this).closest("li").next().addClass("ready-to-delete"))}return s(),e.preventDefault(),!1}jQuery(".ready-to-delete").removeClass("ready-to-delete"),""==jQuery(this).val()&&((37==t||38==t)&&(jQuery(this).width(""!=jQuery(this).val()?o.width()+5:8),jQuery(this).closest("li").prev().before(jQuery(this).closest("li")),jQuery(this).focus()),(39==t||40==t)&&(jQuery(this).width(""!=jQuery(this).val()?o.width()+5:8),jQuery(this).closest("li").next().after(jQuery(this).closest("li")),jQuery(this).focus()))}).bind("keypress",function(t){h(this);var s=t.keyCode||t.which;return e.seperator==String.fromCharCode(s)||e.seperator==s||e.addOnEnter&&13==s?(r(this),t.preventDefault(),!1):void 0}).bind("blur",function(){r(this),jQuery(this).closest("ul").append(jQuery(this).closest("li"))})}})};