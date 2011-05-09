//
//	common_svcfunc.js
//	~2009.02 iamone@news
//

//
//	haniTV CM 여부 검사
//
var haniTV_flag = true;

//
//	CALL prototype.js & scriptaculous.js
//
document.write ('<Script type="text/javascript"  src="http://www.hani.co.kr/section-homepage/include/08/js/prototype.js"><'+'/Script>');
document.write ('<Script type="text/javascript"  src="http://www.hani.co.kr/section-homepage/include/08/js/scriptaculous/scriptaculous.js?load=effects"><'+'/Script>');

function resetIfrHeight(ifr_id){
	var myIframe = document.getElementById(ifr_id);
	try {
		if (myIframe) {
			if (myIframe.contentDocument && myIframe.contentDocument.body.offsetHeight) {
				myIframe.height = myIframe.contentDocument.body.offsetHeight+5;    
			} else if (myIframe.Document && myIframe.Document.body.scrollHeight) {
				myIframe.height = myIframe.Document.body.scrollHeight;
			} else {
				window.setTimeout("resetIfrHeight('"+ifr_id+"')",1000);
			}
		}
	}catch(ex) {}
}


//
// 배너 세로스크롤 관련(1단 정기구독, 1단배너) -->
//

// var Name 을 scroll_object_id + "_default_loc" 로 고정정의

var div_1din_ban_default_loc;	// 1단 배너페이지 로딩시의 default 좌표 [x,y]
var div_1din_ban_limit_loc;	// 1단 배너페이지 스크롤 제한 좌표 [x,y]
var div_1din_ban_height = 725;	// 1단배너의 height
function scroll_init()
{
	div_1din_ban_default_loc = findPos($('div_1din_ban_top_limit'));
	div_1din_ban_limit_loc = findPos($('div_1din_ban_limit'));
	div_1din_ban_limit_loc[1] = div_1din_ban_limit_loc[1] - 15 ;	// copyright 에 div가 들어있어 10px 보정
	
	manage_scroll('div_1din_ban');
}

function manage_scroll(obj_id)
{
	var scrollcmd = calc_objscroll($(obj_id));
	scroll_object(obj_id ,scrollcmd[0],scrollcmd[1],scrollcmd[2]);
	setTimeout ("manage_scroll('"+obj_id+"')", 400);
}

function scroll_object(ele_id,gotoX,gotoY,scroll_mode)
{
	if (scroll_mode != "absolute") {
		scroll_mode = "relative";
	}
	new Effect.Move (ele_id, { x: gotoX , y: gotoY , mode: scroll_mode , duration:0.3 });
	return ; 
}

function calc_objscroll(obj)
{
	// 배너가 움직일 좌표 및 움직이는방법 (relative absolute) 결정
	
	var default_loc = eval(obj.id+"_default_loc");

	var limit_loc = eval(obj.id+"_limit_loc");
	var browse_XY,obj_XY;
	browse_XY = getScrollXY();
	obj_XY = findPos(obj);
	
	//IE에서 처음에 생기는 좌표오류보정
	if (obj_XY[1] < default_loc[1]) {
		default_loc[1] = obj_XY[1];
	}
	
	if (obj_XY[1]<0) {
		return [0,0,"relative"];
	} else if (default_loc[1] < browse_XY[1] ) {
		
		if ((browse_XY[1]+div_1din_ban_height) < limit_loc[1]) {
			// 제한범위 이내
			return [0,(browse_XY[1] - obj_XY[1]),"relative"];	
		} else {
			// 제한범위 초과
		return [0,(limit_loc[1] - (div_1din_ban_height + default_loc[1])), "absolute"];
		}
		
	} else {
		return [0,0,"absolute"];
	}
	
}

function getScrollXY() {
		// http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
		// 브라우저 내부에서 스크롤바로 인해 스크롤된 거리 XY좌표를 알아온다.
  var scrOfX = 0, scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  
  return [scrOfX, scrOfY];
}

function findPos(obj) {
		// http://www.quirksmode.org/js/findpos.html
		//	수신한 객체가 위치한 XY좌표를 리턴한다.
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
	return [curleft,curtop];
}

function get_windowsize()
{
		// http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
		var brX = 0, brY = 0;

		if( typeof( window.innerWidth ) == 'number' ) {	//Provided by most browsers, but importantly, not Internet Explorer
		    brX = window.innerWidth;
		    brY = window.innerHeight;
		} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		    // Provided by many browsers, including Internet Explorer. (IE 6+ in 'standards compliant mode')
		    brX = document.documentElement.clientWidth;
		    brY = document.documentElement.clientHeight;
		} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		    // Provided by most DOM browsers, including Internet Explorer (IE4, IE5~7 quirks)
		    brX = document.body.clientWidth;
		    brY = document.body.clientHeight;
		}
		return new Array(brX,brY);
}

//
// <-- 배너 세로스크롤 관련(1단 정기구독, 1단배너)
//

//
//	화보
//
	function go2visualpage(pgurl,forceNewWindow)
	{
		
		if (typeof forceNewWindow == 'undefined') {
			forceNewWindow = false;
		}

		if (pgurl.indexOf("picView.hani")>0) {
				window.open (pgurl,"","width=686,height=668,status=no,scrollbars=yes,top=25,left=25");
				self.location = "http://multihani.hani.co.kr";
		} else {
			if (!forceNewWindow) {
				document.location = pgurl;
			} else {
				window.open (pgurl);		
			}
		}
	}