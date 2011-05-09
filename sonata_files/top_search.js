var google={
	findSearch: function(pg) {
			var keyword_str = this.smash(document.getElementById("keyword").value);
			if(pg>0) document.frmsearch.page.value = pg;
			document.frmsearch.keyword.value = keyword_str;
			document.frmsearch.action="http://search.hani.co.kr/hanisearch.hani";
			document.frmsearch.submit();
		
			//var tgturl = "http://search.hani.co.kr/hanisearch.hani?from=top&keyword="+keyword_str+"";
			//document.location = tgturl;
	},
	
	smash: function(str) {
		newstr=str.replace(/=/gi, "%3D");
		newstr=newstr.replace(/\&/gi, "%26");
		newstr=newstr.replace(/\?/gi, "%3F");
		return newstr;
	},
	
	key_down: function(event) {
		if(event.keyCode==13) {
			this.findSearch(0);
		}
	}
	
};

document.writeln("<table border=0px cellpadding=0px cellspacing=0px>");
document.writeln("	<tr>");
document.writeln("		<td style=\"padding:0 3px;\">");
document.writeln("<form name='frmsearch' method='POST'>");
document.writeln("		<input type=\"text\" id=\"keyword\" name=\"keyword\" style=\" border:1px solid #7F9DB9; padding:3px 0 0 3px;color:#989898; width:130px;\" onkeydown=google.key_down(event)></td>");
document.writeln("		<td><a href='javascript:google.findSearch(0);'><img border=0 src=\"http://img.hani.co.kr/section-image/09/news/btn_search.gif\" alt=\"°Ë»ö\" align=\"absmiddle\"></a>");
document.writeln("		<input type='hidden' name='scoring' value=''>");
document.writeln("		<input type='hidden' name='from' value='top'>");
document.writeln("		<input type='hidden' name='page' value=''>");
document.writeln("		</td>");
document.writeln("</form>");
document.writeln("	</tr>");
document.writeln("</table>");
