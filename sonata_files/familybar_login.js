var next_url = parent.document.location.toString();
if (s_site == "") s_site= "hani";

document.write ("<style type='text/css'>\n");
document.write ("	.f9black { font-fadmily:굴림; color:black; font-size:12px; }\n");
document.write ("	.f9black a:link { font-family:굴림; color:black; text-decoration:none; }\n");
document.write ("	.f9black a:visited { font-family:굴림; color:black; text-decoration:none; }\n");
document.write ("	.f9black a:hover { font-family:굴림; color:black; text-decoration:underline; }\n");
document.write ("</style>\n");

document.write ("<table border='0' cellpadding='0' cellspacing='0' width='100%' background='http://img.hani.co.kr/section-image/member/fb_bg_1.gif'>\n");
document.write ("<tr><td height='30' align='right' nowrap='nowrap' style='letter-spacing:-1px'>\n");
document.write ("	<a href='http://redirect.hani.co.kr/hani_up.html' target='_top'><img src='http://img.hani.co.kr/section-image/member/fb_01.gif' align='absmiddle' border='0'></a>\n");
document.write ("	<a href='http://redirect.hani.co.kr/hanitv_up.html' target='_blank'><img src='http://img.hani.co.kr/section-image/member/fb_02.gif' align='absmiddle' border='0'></a>\n");
document.write ("	<a href='http://redirect.hani.co.kr/han21_up.html' target='_blank'><img src='http://img.hani.co.kr/section-image/member/fb_03.gif' align='absmiddle' border='0'></a>\n");
document.write ("	<a href='http://redirect.hani.co.kr/cine21_up.html' target='_blank'><img src='http://img.hani.co.kr/section-image/member/fb_04.gif' align='absmiddle' border='0'></a>\n");
document.write ("	<a href='http://redirect.hani.co.kr/ilemonde_up.html' target='_blank'><img src='http://img.hani.co.kr/section-image/member/fb_05.gif' align='absmiddle' border='0'></a>\n");
document.write ("	<a href='http://redirect.hani.co.kr/economyinsight_up.html' target='_blank'><img src='http://img.hani.co.kr/section-image/member/fb_06.gif' align='absmiddle' border='0'></a>\n");
document.write ("	<a href='http://redirect.hani.co.kr/haninuri_up.html' target='_blank'><img src='http://img.hani.co.kr/section-image/member/fb_07.gif' align='absmiddle' border='0'></a>&nbsp;&nbsp;&nbsp;\n");

if (document.cookie.indexOf("CLTCOOKINFO") == -1) {
      var menu = '\n';
      menu = menu + '<a href=\"http://bridge.hani.co.kr/login/input.jsp?site='+s_site+'&next_url='+smash(next_url)+'\" target=_top><img src=http://img.hani.co.kr/section-image/member/fb_login.gif border=0 align=absmiddle alt=로그인></a>\n';
      menu = menu + '<a href=\"http://bridge.hani.co.kr/login/member_join_confirm.html?'+s_site+'\" target=_top><img src=http://img.hani.co.kr/section-image/member/fb_member.gif border=0 align=absmiddle alt=회원가입></a>&nbsp;\n';
      //menu = menu + '<a href=\"http://bbs.hani.co.kr/Board/ui_hani_alim/Contents.asp?STable=ui_hani_alim&RNo=146&Search=&Text=&GoToPage=1&Idx=147&Sorting=2\" target=_top><img src=http://img.hani.co.kr/section-image/member/fb_login.gif border=0 align=absmiddle alt=로그인></a>\n';
	  	//menu = menu + '<a href=\"http://notice.hani.co.kr/view.html?bid=nhani&no=489\" target=_top><img src=http://img.hani.co.kr/section-image/member/fb_member.gif border=0 align=absmiddle alt=회원가입></a>&nbsp;\n';
      document.write (menu);	
      
} else {	
      var menu = '\n';
      menu = menu + '<a href=\"http://bridge.hani.co.kr/login/logout.jsp?next_url='+smash(next_url)+'\" target=_top><img src=http://img.hani.co.kr/section-image/member/fb_logout.gif border=0 align=absmiddle alt=로그아웃></a>\n';
      menu = menu + '<a href=\"https://bridge.hani.co.kr/login/modify.jsp?site='+s_site+'\"  target=_top><img src=http://img.hani.co.kr/section-image/member/fb_modify.gif border=0 align=absmiddle alt=정보수정></a>&nbsp;\n';
      //menu = menu + '<a href=\"http://bbs.hani.co.kr/Board/ui_hani_alim/Contents.asp?STable=ui_hani_alim&RNo=146&Search=&Text=&GoToPage=1&Idx=147&Sorting=2\" target=_top><img src=http://img.hani.co.kr/section-image/member/fb_logout.gif border=0 align=absmiddle alt=로그아웃></a>\n';
	    //menu = menu + '<a href=\"http://notice.hani.co.kr/view.html?bid=nhani&no=489\"  target=_top><img src=http://img.hani.co.kr/section-image/member/fb_modify.gif border=0 align=absmiddle alt=정보수정></a>&nbsp;\n';
      document.write (menu);	
}
document.write ("	</font>\n");
document.write ("</td>\n");
document.write ("</tr>\n");
document.write ("</table>\n");

function smash (str) {
        newstr=str.replace(/=/gi, "%3D");
        newstr=newstr.replace(/\&/gi, "%26");
        newstr=newstr.replace(/\?/gi, "%3F");
        return newstr;
}
