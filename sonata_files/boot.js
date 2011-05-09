/**
 * FillThat Boot Script
 * 
 * - Startup FillThat Comment Plugin 
 * 
 * @author flankerz
 * @package com.pickple.app.script
 */

/**
 * FillThat Commenting Syste Host
 * @var string
 */
var FTC_HOST = "http://plugin.tcomment.com";
var dt = (new Date());

// dummy log function 
/*var log = {
  toggle: function() {},
  move: function() {},
  resize: function() {},
  clear: function() {},
  debug: function() {},
  info: function() {},
  warn: function() {},
  error: function() {},
  profile: function() {}
};*/

/**
 * Add String trim function;
 */
String.prototype.trim = function() {  
    return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');  
} 

/**
 * Add Array min/max function;
 */
Array.max = function( array ){
    return Math.max.apply( Math, array );
};
Array.min = function( array ){
    return Math.min.apply( Math, array );
};

/**
 * Get Post Title
 */
if (typeof(ft_post_title) == 'undefined' || ft_post_title == null || ft_post_title.trim() == '') {
	ft_post_title = document.title;
	ft_post_title = ft_post_title.replace(/^\s\s*/g, '').replace(/\s\s*$/, ''); 
	if (ft_post_title.length = 0) {
		ft_post_title = "Post";
	}
}	
ft_post_title = encodeURIComponent(ft_post_title);

/**
 * Post URL
 */
if (typeof(ft_post_url) == 'undefined' || ft_post_url == null || ft_post_url.trim() == '') {
	ft_post_url = window.location.href;
}
ft_post_url = encodeURIComponent(ft_post_url);

/**
 * Get Post Key
 */
if (typeof(ft_post_key) == 'undefined' || ft_post_key == null || ft_post_key.trim() == '') {
	ft_post_key = window.location.href;
	var hashPos = ft_post_key.indexOf('#') ;
	if(hashPos > 0) {
		ft_post_key = ft_post_key.substring(0, hashPos);
	}
	ft_post_key = ft_post_key.replace(/\//gi, '_');
}
ft_post_key = encodeURIComponent(ft_post_key);

/**
 * Get container_id
 */
if(typeof(ft_container_id) == 'undefined' || ft_container_id == null || ft_container_id.trim() == '') {
	ft_container_id = 'ttalk_comments';
}

// append loading message
//document.getElementById(ft_container_id).innerHTML = '<div style="width: 100%; text-align: center;"><img src="http://image.tcomment.com/plugin/booting.gif" /></div>';

var isIE6 = (navigator.userAgent.toLowerCase().substr(25,6)=="msie 6") ? true : false;
var isIE7 = (navigator.userAgent.toLowerCase().substr(25,6)=="msie 7") ? true : false;

var ft_wait_flag = false;

// wait for library
function ft_wait() {
	if (ft_wait_flag == false) {
		
		if(ft_site_key == '8b2cb10f7cd6ecef7fc2f407ea13c8b84b11a2ff'){
			// api script
			var apiScript = document.createElement("script");
			apiScript.type = "text/javascript";
			apiScript.src = FTC_HOST+"/api.php?post_key="+ft_post_key+"&site_key="+ft_site_key;
			apiScript.charset = "utf-8";
			document.getElementsByTagName("head")[0].appendChild(apiScript);
		}
		
		ft_wait_flag = true;
		// style sheet
		var cssLink = document.createElement("link");
		cssLink.rel = "stylesheet";
		cssLink.type = "text/css";
		cssLink.href = FTC_HOST + "/core/css/" + ft_site_key; // + '?r=' + dt.getTime();;
		document.getElementsByTagName("head")[0].appendChild(cssLink);
		
		// core script
		var coreScript = document.createElement("script");
		coreScript.type = "text/javascript";
		coreScript.src = FTC_HOST+"/core/" + ft_site_key + '?r=' + dt.getTime();
		coreScript.charset = "utf-8";
		coreScript.id = "coreScript";
		// double check for IE6
		if (isIE6) {
			coreScript.onreadystatechange = function() {
				if (this.readyState == 'loaded' || this.readyState == 'complete') {
					if (typeof(ftc) == 'undefined') {
						location.reload();
					}
				}
			}
		}
		document.getElementsByTagName("head")[0].appendChild(coreScript);
		
		// comment script
		var commentScript = document.createElement("script");
		commentScript.type = "text/javascript";
		commentScript.src = FTC_HOST + "/core/boot/"+ft_site_key+"/?post_key="+ft_post_key+"&posturl="+ft_post_url +"&title="+ft_post_title; // + '&r=' + dt.getTime();
		commentScript.charset = "utf-8";
		commentScript.id = "commentScript";
		// double check for IE6
		if (isIE6) {
			commentScript.onreadystatechange = function() {
				if (this.readyState == 'loaded' || this.readyState == 'complete') {
					if (typeof(ft_boot) == 'undefined') {
						location.reload();
					}
					else {
						ft_boot();
					}
				}
			}
		}
		document.getElementsByTagName("head")[0].appendChild(commentScript);

		if(ft_site_key == '47cc478eb1493e57334b51e63aac7f0299a5ec1b'){
			init_iframe();

			var nowUrl = location.href;
			//if(nowUrl.indexOf('sunday') > -1){
			if(isIE7 == true){
				if(nowUrl.indexOf('ksh') > -1){
					//var divObj = document.getElementById('sdWrap');
					//divObj.style.backgroundColor = '#E3E3E3';
					document.getElementById('sdWrap').style.backgroundColor = '#E3E3E3';
					//document.body.style.backgroundColor = '#E3E3E3';
				}
			}
		}

	}
}

function reSize() {
    var obj=parent.document.getElementById('ttalk_frame');
    try {
        var objBody = parent.ttalk_frame.document.body;
        ifrmHeight = objBody.scrollHeight + (objBody.offsetHeight - objBody.clientHeight);
        obj.style.height = ifrmHeight;
    }catch(e){}
}

function init_iframe() {
    reSize();
    setTimeout('init_iframe()',1);
}

function safari_submit() {
	//ft_wait();
	sess_frame = document.getElementById("ft_sess_frame");
	sess_frame.onload = function() { 
		ft_wait(); 
	};

	sess_form = document.getElementById("ft_sess_form");
	if (sess_form != null) {
		sess_form.submit();
	}
}

function ft_check() {
	var isSafari = (/Safari/.test(navigator.userAgent));
	var isChrome = (/Chrome/.test(navigator.userAgent));
	var firstTimeSession = 0;
	
	if (isSafari && !isChrome) {
		document.write('<iframe id="ft_sess_frame" name="ft_sess_frame" onload="safari_submit()" src="http://plugin.tcomment.com/core/session" style="display:none;"></iframe><form id="ft_sess_form" enctype="application/x-www-form-urlencoded" action="http://plugin.tcomment.com/core/session" target="ft_sess_frame" action="post"></form>');
	} else {
		ft_wait();
	}
}

// register dom load event handler for ie series
if (document.all && !window.opera) {
	document.write('<scr'+'ipt type="text/javascript" id="ft_check_dom_load" defer="defer" src="javascript:void(0)"><\/scr'+'ipt>');
	var ft_check_dom_load = document.getElementById('ft_check_dom_load');
	ft_check_dom_load.onreadystatechange = function() {
		if (this.readyState == 'complete') {
			ft_check();
		}
	}
	// failsafe for IE
	window.attachEvent("onload", ft_wait);
}
else {
	// other browsers doesn't need to wait for dom load
	ft_check();
}


var ft_check_timer = null;

// Loading Fail Check
function ft_checker() {
	clearTimeout(ft_check_timer);
	ft_check_timer = null;

	if (typeof(ftj) == 'undefined' || typeof(ftc) == 'undefined' || typeof(ft_boot) == 'undefined' || typeof(ftc.loaded) == 'undefined' || ftc.loaded == false) {
		document.getElementById(ft_container_id).innerHTML = '<div style="width: 100%; text-align: center;"><img src="http://image.tcomment.com/plugin/delay.gif" width="350" height="50" usemap="#ft_delay" border="0"/><map name="ft_delay"><area shape="rect" coords="262,14,347,38" href="#" onclick="location.reload(); return false;" alt="새로고침" /></map></div>';
	}
	
	try { clearTimeout(ft_boot_timer); ft_boot_timer = null; } catch(e) {};
}

ft_check_timer = setTimeout(ft_checker, 8000);