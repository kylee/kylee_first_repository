var topimg_url = 'http://img.hani.co.kr/section-image/09/news/';

try {
	if (topmenu == null) var topmenu = 'news';
	if (submenu == null) var submenu = '';

	if (topmenu == 'news' && submenu == 'specialsection') {
		topmenu = 'esc';
	}
	else if (topmenu == 'SECTION') {
		topmenu = 'news';
		submenu='';
	}

} catch (ex) { 
	var topmenu = 'news' 
	var submenu = '';
}


/*
var topBtnList = {
	//"title" :	['string','활성img','비활성img','url', '서브메뉴(2단)bgcolor','서브메뉴중반전메뉴bgcolor','(사용안함)','px','서브메뉴 mouseover시 fontcolor','link target','nav_sub css type'],
}
*/

var topBtnList = {};
topBtnList["news"] = ['뉴스','tm_news_1.gif','tm_news.gif','http://redirect.hani.co.kr/m_news.html', '#399A42','#13642C','#87B03B','2px','#EAFF02','','nav_sub'] ;
topBtnList["esc"] = ['ESC','tm_esc_1.gif','tm_esc.gif','http://redirect.hani.co.kr/m_esc.html', '#FE8400','#000000','#abcdef','55px','#ffffff','','nav_sub'];
topBtnList["special"] = ['하니스페셜','tm_haniSpecial_1.gif','tm_haniSpecial.gif','http://redirect.hani.co.kr/m_special.html', '#F0D74C','#996600','#abcdef','2px','#996600','','nav_sub_special'];
if (topmenu=="photo") {
	topBtnList["photo"] = ['포토ZONE','tm_photo_1.gif','tm_photo_1.gif','http://redirect.hani.co.kr/m_photo.html', '#308DB2','#003365','#67BBD1','211px','#68FBFD','','nav_sub'];
}
topBtnList["feeltong"] = ['필통','tm_feeltong.gif','tm_feeltong.gif','http://feeltong.hani.co.kr', '#308DB2','#003365','#67BBD1','2px','#68FBFD','','nav_sub'];
topBtnList["hantoma"] = ['한토마','tm_hantoma.gif','tm_hantoma.gif','http://redirect.hani.co.kr/m_hantoma.html', '#399940','#13642C','#87B03B','2px','#EAFF02','','nav_sub'];
topBtnList["hanitv"] = ['하니TV','tm_haniTV.gif','tm_haniTV.gif','http://redirect.hani.co.kr/m_hanitv.html', '#ffffff','#ffffff','#ffffff','2px','#ffffff','','nav_sub'];
topBtnList["hook"] = ['hook','tm_hook.gif','tm_hook.gif','http://redirect.hani.co.kr/m_hook.html', '#ffffff','#ffffff','#ffffff','2px','#ffffff','','nav_sub'];
topBtnList["bookhani"] = ['bookhani','tm_hook.gif','tm_bookhani.gif','http://redirect.hani.co.kr/m_bookhani.html', '#ffffff','#ffffff','#ffffff','2px','#ffffff','','nav_sub'];




var topSubList = {
	"news" : {
		/* "title" : [string2show, link url, 메뉴에박스여부[t/f], link target], */
		"TOTAL" : ["전체기사","http://redirect.hani.co.kr/m_total.html", false, ""],
		"politics" : ["정치","http://redirect.hani.co.kr/m_politics.html", false, ""],
		"society" : ["사회","http://redirect.hani.co.kr/m_society.html", false, ""],
		"economy" : ["경제","http://redirect.hani.co.kr/m_economy.html", false, ""],
		"international" : ["국제","http://redirect.hani.co.kr/m_international.html", false, ""],
		"culture" : ["문화","http://redirect.hani.co.kr/m_culture.html", false, ""],
		"sports" : ["스포츠","http://redirect.hani.co.kr/m_sports.html", false, ""],
		"science" : ["과학","http://redirect.hani.co.kr/m_science.html", false, ""],
		"opinion" : ["사설·칼럼","http://redirect.hani.co.kr/m_opinion.html", false, ""],
		"cartoon" : ["만화","http://redirect.hani.co.kr/m_cartoon.html", false, ""],
		"photo" : ["포토","http://redirect.hani.co.kr/m_photo.html", false, ""],
		"SERIES" : ["기획연재","http://redirect.hani.co.kr/m_series.html", false, ""],
		"english_edition" : ["English","http://redirect.hani.co.kr/m_english_edition.html", false, "_blank"]
		/*
		"ISSUE" : ["핫이슈","http://redirect.hani.co.kr/m_issue.html", false],
		"newspickup" : ["뉴스쏙","http://redirect.hani.co.kr/m_newspickup.html", true],
		"people" : ["사람","http://redirect.hani.co.kr/m_people.html", false],
		"moving" : ["동영상뉴스","http://redirect.hani.co.kr/m_moving.html", false],
		"PDF" : ["지면PDF","http://redirect.hani.co.kr/m_pdf.html", true],
		"happyvil" : ["행복한마을","http://redirect.hani.co.kr/m_happyvil.html", true],
		"BOOK" : ["책과생각","http://redirect.hani.co.kr/m_book.html", true]
		*/
	},
	"photo" : {
		
		"01" : [" 포토21","http://www.foto21.kr/", false, "_blank"],
		"02" : [" 사진마을","http://photovil.hani.co.kr/", false, "_blank"],
		"03" : ["특집화보","http://pictorial.hani.co.kr/", false, ""],
		"04" : ["사진속의오늘","http://pictorial.hani.co.kr/pit.hani", false, ""],
		"news" : ["사진뉴스","http://multihani.hani.co.kr/kisa/list/multihani/total/home01.html", false, ""],
		/*"06" : ["유머","http://humor.hani.co.kr/", false, ""],*/
		/*"07" : ["웹툰","http://toon.hani.co.kr/", true],*/
		"05" : [" 이순간","http://www.hani.co.kr/arti/THEME/moment/", false, ""]
	
	},
	
	"special" : {
		/*"01": ["<div style='font-size:12px; color:#996600;'><b>전문기자</b>들의 특별한 콘텐츠, <b><font color='#00802B'>Hani Special</font></b></div>","",false, ""]*/
		"well" : ["휴심정","http://well.hani.co.kr/", false, ""],
		"ecotopia" : ["물바람숲","http://ecotopia.hani.co.kr/", false, ""],
		"photovil" : ["사진마을","http://photovil.hani.co.kr/", false, ""],
		"community" : ["건강한세상","http://community.hani.co.kr/", false, ""],
		"foodntrip" : ["맛있는여행","http://foodntrip.hani.co.kr/", false, ""],
		"kkini" : ["끼니","http://kkini.hani.co.kr/", false, ""],
		"scienceon" : ["사이언스온","http://scienceon.hani.co.kr/", false, ""],
		"100beat" : ["100비트","http://100beat.hani.co.kr/", false, ""],
		"goodeconomy" : ["착한경제","http://goodeconomy.hani.co.kr/", false, ""],
		"carfeteria" : ["카페테리아","http://carfeteria.hani.co.kr/", false, ""],
		"babytree" : ["베이비트리","http://babytree.hani.co.kr/", false, ""],
		"defence21" : ["디펜스21","http://defence21.hani.co.kr/", false, ""]
	},

	"esc" : {
		"01": ["<div style='font-size:12px; color:#FFFFFF;'>여러분의 신선한 삶을 위한 <b>한겨레 매거진</b></div>","",false, ""]
		/*"01": ["전체기사", "http://www.hani.co.kr/kisa/section-015000000/home01.html", false],
		"02": ["매거진esc", "http://redirect.hani.co.kr/m_esc.html", false],
		"03": ["뉴스쏙", "http://redirect.hani.co.kr/m_newspickup.html", false],
		"04": ["생활2.0", "http://redirect.hani.co.kr/m_life20.html", false]
		*/
	}

}
// css for topmenu_code
document.writeln("<style type=\"text/css\">");
document.writeln("#nav_box { font-size:11px; color:#999999;height:36px; border-top: solid 1px #c7c7c7; border-left:solid 1px #c7c7c7; border-right:solid 1px #c7c7c7;}");
document.writeln("#nav_box a{ font-size:11px; color:#666666;}");
document.writeln("#nav_box  a:hover {color:#C21A1A; text-decoration:underline}");
document.writeln("#nav_sub { color:#FFFFFF;height:31px;background-color:#399940; padding-left:10px; vertical-align:middle;}");
document.writeln("#nav_sub a{color:#FFFFFF; text-decoration:none}");
document.writeln("#nav_sub a:hover {color:#eaff02; text-decoration:underline}");
document.writeln("#nav_sub_special { color:#996600;height:31px;background-color:#399940; padding-left:10px; vertical-align:middle;}");
document.writeln("#nav_sub_special a{color:#996600; text-decoration:none}");
document.writeln("#nav_sub_special a:hover {color:#ffffff; text-decoration:underline}");
document.writeln("#nav_sub_bar { color:#FFFFFF;}");
document.writeln("#nav_sub_special_bar { color:#996600;}");
document.writeln("</style>");

// 1din Set
document.writeln("<div style=\"width:970px;height:68px;\">");
document.writeln("<div id=\"nav_box\">");
document.writeln("<table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\" width=\"100%\">");
document.writeln("<tr><td align=\"left\">");



var gab_img = topimg_url+'tm_vbar.gif';
var btn_eqn = 0;
for (var btnGroup in topBtnList) {
	var btn_name = topBtnList[btnGroup][0];
	var btn_dimg = topBtnList[btnGroup][1];
	var btn_oimg = topBtnList[btnGroup][2];
	var btn_url = topBtnList[btnGroup][3];
	var btn_target = topBtnList[btnGroup][9];
	if (topmenu == btnGroup) {
		var btn_img = btn_dimg;
		sub_bgcolor = topBtnList[btnGroup][4];
		sub_bgcolorspecial = topBtnList[btnGroup][5];
		sub_padding  = topBtnList[btnGroup][7];
		over_txtcolor = topBtnList[btnGroup][8];
		var sub_css = topBtnList[btnGroup][10];
	} else {
		var btn_img = btn_oimg;
	}
	
	if (btn_eqn > 0) document.write('<img src="'+gab_img+'" border=0>');
	document.write('<a href="'+btn_url+'" onfocus=this.blur() '+((btn_target!='') ? 'target="'+btn_target+'"' : '' )+'><img src="'+topimg_url+btn_img+'" border=0 alt="'+btn_name+'"></a>');
	btn_eqn++;
}
document.writeln("</td>");
document.writeln("<td align=\"right\" style=\"padding-right:15px;\">");
document.writeln("<a href=\"http://nuri.hani.co.kr/customer/customer_main.html\"><font style=\"font-size:11px;font-family:돋움;font-weight:bold\">구독신청</font></a><span style=\"color:#999999; font-size:11px;\"> | </span><a href=\"http://pdf.hani.co.kr\" target=\"_blank\"><font style=\"font-size:11px;font-family:돋움;font-weight:bold\">지면PDF</font></a></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</div>");


//2din SET
document.writeln("<table border=\"0px\" cellpadding=\"0px\" cellspacing=\"0px\" width=\"100%\">");
document.writeln("<tr>");
document.write("<td id=\""+sub_css+"\" align=\"left\" style=\"background-color:"+sub_bgcolor+";\">");
document.write("<div style=\"padding-left:"+sub_padding+"; text-align:left;\">");

			btn_eqn = 0;
			for (var btnGroup in topSubList[topmenu]) {
				var sub_name = topSubList[topmenu][btnGroup][0];
				var sub_url = topSubList[topmenu][btnGroup][1];
				var sub_deco = topSubList[topmenu][btnGroup][2];
				var sub_target = topSubList[topmenu][btnGroup][3];
				
				if (sub_deco) document.write('<span style="padding:3px 3px 0px 3px; background-color:'+sub_bgcolorspecial+';" nowrap>');
				else document.write('<span>');
				
				if (submenu == btnGroup) sub_name = '<u><font color="' +over_txtcolor+'">' + sub_name + '</font></u>';
				var sub_css_bar = sub_css+'_bar';
				if (btn_eqn > 0) document.write('<font id="'+sub_css_bar+'"> | </font>');

				if (sub_url!='') 	document.write('<a href="'+sub_url+'" '+((sub_target!='') ? 'target="'+sub_target+'"' : '' )+'>'+sub_name+'</a>');
				else document.write(sub_name);

				document.write('</span>');
				btn_eqn++;
			}
document.write("</div></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("</div>");