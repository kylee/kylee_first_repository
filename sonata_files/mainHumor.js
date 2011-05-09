// created by cms - 2011-05-09 14:57:00

var mainHumor = {
	title1: "아따~ 따땃~하다",
	img1: "http://img.hani.co.kr/imgdb/resize/2011/0510/130490866468_20110510.JPG",
	url1: "http://humor.hani.co.kr/board/view.html?uid=54464&cline=3&board_id=h_humor",
	
	title2: "신동엽에게진실…",
	img2: "http://img.hani.co.kr/imgdb/resize/2011/0510/130490866442_20110510.JPG",
	url2: "http://humor.hani.co.kr/board/view.html?uid=54463&cline=4&board_id=h_humor",
	
	title3: "스프링 인간",
	img3: "http://img.hani.co.kr/imgdb/resize/2011/0510/130490866511_20110510.JPG",
	url3: "http://humor.hani.co.kr/board/view.html?uid=54466&cline=2&board_id=h_humor",
	
	title4: "멀티 악기연…",
	img4: "http://img.hani.co.kr/imgdb/resize/2011/0510/130490866490_20110510.JPG",
	url4: "http://humor.hani.co.kr/board/view.html?uid=54465&cline=1&board_id=h_humor"
};

function show_mainHumor(title,img,url)
{
	document.writeln("<div style='padding:2px; border:1px solid #DEDEDE'>");
	document.writeln("<a href='"+url+"' target='_blank'><img src='"+img+"' width=99 height=60 border=0></a></div>");
	document.writeln("<div class='f11' style='padding:7 0 0 2;'>"+title+"</div>");
}

function show_mainHumor_movie(title,img,url)
{
	document.writeln("	<div style='padding:2px; border:1px solid #DEDEDE'>");
	document.writeln("  <table border='0px' cellpadding='0px' cellspacing='0px'>");
	document.writeln("  <tr>");
	document.writeln("  	<td width='99px' height='60px' background='"+img+"' style='background-repeat: no-repeat;'>");
	document.writeln("  		<a href='"+url+"'><img src='http://img.hani.co.kr/section-image/08/news/humor_button.gif' width=99 height=60></a>");
	document.writeln("  	</td>");
	document.writeln("  </tr>");
	document.writeln("  </table>");
	document.writeln("  </div>");
	document.writeln("  <table border='0px' cellpadding='0px' cellspacing='0px'>");
	document.writeln("  <tr>");
	document.writeln("  	<td><div class='f11' style='padding:7 0 0 2;'>"+title+"</div></td>");
	document.writeln("  </tr>");
	document.writeln("  </table>");
}
