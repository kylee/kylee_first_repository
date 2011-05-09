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
	//"title" :	['string','Ȱ��img','��Ȱ��img','url', '����޴�(2��)bgcolor','����޴��߹����޴�bgcolor','(������)','px','����޴� mouseover�� fontcolor','link target','nav_sub css type'],
}
*/

var topBtnList = {};
topBtnList["news"] = ['����','tm_news_1.gif','tm_news.gif','http://redirect.hani.co.kr/m_news.html', '#399A42','#13642C','#87B03B','2px','#EAFF02','','nav_sub'] ;
topBtnList["esc"] = ['ESC','tm_esc_1.gif','tm_esc.gif','http://redirect.hani.co.kr/m_esc.html', '#FE8400','#000000','#abcdef','55px','#ffffff','','nav_sub'];
topBtnList["special"] = ['�ϴϽ����','tm_haniSpecial_1.gif','tm_haniSpecial.gif','http://redirect.hani.co.kr/m_special.html', '#F0D74C','#996600','#abcdef','2px','#996600','','nav_sub_special'];
if (topmenu=="photo") {
	topBtnList["photo"] = ['����ZONE','tm_photo_1.gif','tm_photo_1.gif','http://redirect.hani.co.kr/m_photo.html', '#308DB2','#003365','#67BBD1','211px','#68FBFD','','nav_sub'];
}
topBtnList["feeltong"] = ['����','tm_feeltong.gif','tm_feeltong.gif','http://feeltong.hani.co.kr', '#308DB2','#003365','#67BBD1','2px','#68FBFD','','nav_sub'];
topBtnList["hantoma"] = ['���丶','tm_hantoma.gif','tm_hantoma.gif','http://redirect.hani.co.kr/m_hantoma.html', '#399940','#13642C','#87B03B','2px','#EAFF02','','nav_sub'];
topBtnList["hanitv"] = ['�ϴ�TV','tm_haniTV.gif','tm_haniTV.gif','http://redirect.hani.co.kr/m_hanitv.html', '#ffffff','#ffffff','#ffffff','2px','#ffffff','','nav_sub'];
topBtnList["hook"] = ['hook','tm_hook.gif','tm_hook.gif','http://redirect.hani.co.kr/m_hook.html', '#ffffff','#ffffff','#ffffff','2px','#ffffff','','nav_sub'];
topBtnList["bookhani"] = ['bookhani','tm_hook.gif','tm_bookhani.gif','http://redirect.hani.co.kr/m_bookhani.html', '#ffffff','#ffffff','#ffffff','2px','#ffffff','','nav_sub'];




var topSubList = {
	"news" : {
		/* "title" : [string2show, link url, �޴����ڽ�����[t/f], link target], */
		"TOTAL" : ["��ü���","http://redirect.hani.co.kr/m_total.html", false, ""],
		"politics" : ["��ġ","http://redirect.hani.co.kr/m_politics.html", false, ""],
		"society" : ["��ȸ","http://redirect.hani.co.kr/m_society.html", false, ""],
		"economy" : ["����","http://redirect.hani.co.kr/m_economy.html", false, ""],
		"international" : ["����","http://redirect.hani.co.kr/m_international.html", false, ""],
		"culture" : ["��ȭ","http://redirect.hani.co.kr/m_culture.html", false, ""],
		"sports" : ["������","http://redirect.hani.co.kr/m_sports.html", false, ""],
		"science" : ["����","http://redirect.hani.co.kr/m_science.html", false, ""],
		"opinion" : ["�缳��Į��","http://redirect.hani.co.kr/m_opinion.html", false, ""],
		"cartoon" : ["��ȭ","http://redirect.hani.co.kr/m_cartoon.html", false, ""],
		"photo" : ["����","http://redirect.hani.co.kr/m_photo.html", false, ""],
		"SERIES" : ["��ȹ����","http://redirect.hani.co.kr/m_series.html", false, ""],
		"english_edition" : ["English","http://redirect.hani.co.kr/m_english_edition.html", false, "_blank"]
		/*
		"ISSUE" : ["���̽�","http://redirect.hani.co.kr/m_issue.html", false],
		"newspickup" : ["������","http://redirect.hani.co.kr/m_newspickup.html", true],
		"people" : ["���","http://redirect.hani.co.kr/m_people.html", false],
		"moving" : ["�����󴺽�","http://redirect.hani.co.kr/m_moving.html", false],
		"PDF" : ["����PDF","http://redirect.hani.co.kr/m_pdf.html", true],
		"happyvil" : ["�ູ�Ѹ���","http://redirect.hani.co.kr/m_happyvil.html", true],
		"BOOK" : ["å������","http://redirect.hani.co.kr/m_book.html", true]
		*/
	},
	"photo" : {
		
		"01" : [" ����21","http://www.foto21.kr/", false, "_blank"],
		"02" : [" ��������","http://photovil.hani.co.kr/", false, "_blank"],
		"03" : ["Ư��ȭ��","http://pictorial.hani.co.kr/", false, ""],
		"04" : ["�������ǿ���","http://pictorial.hani.co.kr/pit.hani", false, ""],
		"news" : ["��������","http://multihani.hani.co.kr/kisa/list/multihani/total/home01.html", false, ""],
		/*"06" : ["����","http://humor.hani.co.kr/", false, ""],*/
		/*"07" : ["����","http://toon.hani.co.kr/", true],*/
		"05" : [" �̼���","http://www.hani.co.kr/arti/THEME/moment/", false, ""]
	
	},
	
	"special" : {
		/*"01": ["<div style='font-size:12px; color:#996600;'><b>��������</b>���� Ư���� ������, <b><font color='#00802B'>Hani Special</font></b></div>","",false, ""]*/
		"well" : ["�޽���","http://well.hani.co.kr/", false, ""],
		"ecotopia" : ["���ٶ���","http://ecotopia.hani.co.kr/", false, ""],
		"photovil" : ["��������","http://photovil.hani.co.kr/", false, ""],
		"community" : ["�ǰ��Ѽ���","http://community.hani.co.kr/", false, ""],
		"foodntrip" : ["���ִ¿���","http://foodntrip.hani.co.kr/", false, ""],
		"kkini" : ["����","http://kkini.hani.co.kr/", false, ""],
		"scienceon" : ["���̾𽺿�","http://scienceon.hani.co.kr/", false, ""],
		"100beat" : ["100��Ʈ","http://100beat.hani.co.kr/", false, ""],
		"goodeconomy" : ["���Ѱ���","http://goodeconomy.hani.co.kr/", false, ""],
		"carfeteria" : ["ī���׸���","http://carfeteria.hani.co.kr/", false, ""],
		"babytree" : ["���̺�Ʈ��","http://babytree.hani.co.kr/", false, ""],
		"defence21" : ["���潺21","http://defence21.hani.co.kr/", false, ""]
	},

	"esc" : {
		"01": ["<div style='font-size:12px; color:#FFFFFF;'>�������� �ż��� ���� ���� <b>�Ѱܷ� �Ű���</b></div>","",false, ""]
		/*"01": ["��ü���", "http://www.hani.co.kr/kisa/section-015000000/home01.html", false],
		"02": ["�Ű���esc", "http://redirect.hani.co.kr/m_esc.html", false],
		"03": ["������", "http://redirect.hani.co.kr/m_newspickup.html", false],
		"04": ["��Ȱ2.0", "http://redirect.hani.co.kr/m_life20.html", false]
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
document.writeln("<a href=\"http://nuri.hani.co.kr/customer/customer_main.html\"><font style=\"font-size:11px;font-family:����;font-weight:bold\">������û</font></a><span style=\"color:#999999; font-size:11px;\"> | </span><a href=\"http://pdf.hani.co.kr\" target=\"_blank\"><font style=\"font-size:11px;font-family:����;font-weight:bold\">����PDF</font></a></td>");
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