(function(){tinymce.PluginManager.requireLangPack('inlinedirection');tinymce.create('tinymce.plugins.InlineDirectionPlugin',{init:function(ed,url){if(typeof itd_get_attributes=='undefined')return;ed.addCommand('mceInlineDirection',function(){var e=ed.selection.getNode();var attributes=itd_get_attributes();if(e.nodeName=='SPAN'&&(e.dir=='ltr'||e.dir=='rtl')){var inner=e.innerHTML;ed.dom.setOuterHTML(e,inner);ed.nodeChanged()}else{var sel=ed.selection.getContent();sel='<span '+attributes+'>'+sel+'</span>';ed.selection.setContent(sel);ed.nodeChanged()}});ed.addButton('inlinedirection',{title:'inlinedirection.desc',cmd:'mceInlineDirection',image:url+'/img/inlinedirection_icon.gif'});ed.onNodeChange.add(function(ed,cm,n,co){cm.setDisabled('inlinedirection',co);cm.setActive('inlinedirection',0);if((n.nodeName=='SPAN'&&(n.dir=='ltr'||n.dir=='rtl'))||(n.parentNode.nodeName=='SPAN'&&(n.parentNode.dir=='ltr'||n.parentNode.dir=='rtl'))){cm.setDisabled('inlinedirection',0);cm.setActive('inlinedirection',1)}})},createControl:function(n,cm){return null},getInfo:function(){return{longname:'Inline Text Direction plugin',author:'Almashroo Development Team',authorurl:'http://www.almashroo.com/',infourl:'http://www.almashroo.com/',version:"1.0"}}});tinymce.PluginManager.add('inlinedirection',tinymce.plugins.InlineDirectionPlugin)})();