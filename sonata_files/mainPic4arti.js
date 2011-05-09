//
//	기사본문용 메인 이미지 노출 inc. : created at 
//
document.write('<table width="590" border="0" cellpadding="0" cellspacing="0">');
document.write('  <tr> ');
document.write('    <td class="kisapage04" height="122"><table width="590" border="0" cellpadding="0" cellspacing="0">');
document.write('        <tr> ');
document.write('          <td valign="top" style="padding:9 0 0 0;"><img src="http://img.hani.co.kr/section-image/06/news2/bg_photocomic02.gif"></td>');
document.write('          <td style="padding:6 6 0 0;"><table width="114" border="0" cellpadding="0" cellspacing="0">');
//document.write('              <table width=100% border=0>');
document.write('              <tr> ');
document.write('                <td class="kisapage05" ><div style="padding:3 3 3 3px;"><a href="javascript:jump2VP4arti(\'http://www.cine21.com/Article/article_view.php?mm=004001002&article_id=65827\')"><img src="http://img.hani.co.kr/imgdb/main2arti/2011/0503/130431521060_20110503.JPG" width=108 height=75 border=0></a></div></td>');
document.write('              </tr>');
document.write('              <tr> ');
document.write('                <td><div class="f11" style="padding:7 0 0 2;"><a href="javascript:jump2VP4arti(\'http://www.cine21.com/Article/article_view.php?mm=004001002&article_id=65827\')">헌즈다이어리:토르</a></div></td>');
document.write('              </tr>');
document.write('            </table></td>');
document.write('          <td style="padding:6 6 0 0;"><table width="114" border="0" cellpadding="0" cellspacing="0">');
//document.write('              <table width=100% border=0>');
document.write('              <tr> ');
document.write('                <td class="kisapage05" ><div style="padding:3 3 3 3px;"><a href="javascript:jump2VP4arti(\'http://www.hani.co.kr/arti/cartoon/junghe/476518.html\')"><img src="http://img.hani.co.kr/imgdb/main2arti/2011/0506/130457434522_20110506.JPG" width=108 height=75 border=0></a></div></td>');
document.write('              </tr>');
document.write('              <tr> ');
document.write('                <td><div class="f11" style="padding:7 0 0 2;"><a href="javascript:jump2VP4arti(\'http://www.hani.co.kr/arti/cartoon/junghe/476518.html\')">악마는 있다</a></div></td>');
document.write('              </tr>');
document.write('            </table></td>');
document.write('          <td style="padding:6 6 0 0;"><table width="114" border="0" cellpadding="0" cellspacing="0">');
//document.write('              <table width=100% border=0>');
document.write('              <tr> ');
document.write('                <td class="kisapage05" ><div style="padding:3 3 3 3px;"><a href="javascript:jump2VP4arti(\'http://www.hani.co.kr/arti/cartoon/bibimtoon/476118.html\')"><img src="http://img.hani.co.kr/imgdb/main2arti/2011/0504/130440744728_20110504.JPG" width=108 height=75 border=0></a></div></td>');
document.write('              </tr>');
document.write('              <tr> ');
document.write('                <td><div class="f11" style="padding:7 0 0 2;"><a href="javascript:jump2VP4arti(\'http://www.hani.co.kr/arti/cartoon/bibimtoon/476118.html\')">미친 존재감</a></div></td>');
document.write('              </tr>');
document.write('            </table></td>');
document.write('					<td style="padding:6 6 0 0;"><table width="114" border="0" cellpadding="0" cellspacing="0">');
//document.write('              <table width=100% border=0>');
document.write('              <tr> ');
document.write('                <td class="kisapage05" ><div style="padding:3 3 3 3px;"><a href="javascript:jump2VP4arti(\'http://www.hani.co.kr/arti/cartoon/insider/475925.html\')"><img src="http://img.hani.co.kr/imgdb/main2arti/2011/0503/130432463041_20110503.JPG" width=108 height=75 border=0></a></div></td>');
document.write('              </tr>');
document.write('              <tr> ');
document.write('                <td><div class="f11" style="padding:7 0 0 2;"><a href="javascript:jump2VP4arti(\'http://www.hani.co.kr/arti/cartoon/insider/475925.html\')">윤태호 내부자들 25</a></div></td>');
document.write('              </tr>');
document.write('            </table></td>');
document.write('      </tr>');
document.write('      </table></td>');
document.write('  </tr>');
document.write('</table>');

function jump2VP4arti(url)
{
			if (url.indexOf("picView.hani")>0) {
				window.open (url,"","width=686,height=668,status=no,scrollbars=yes,top=25,left=25");
				self.location = "http://multihani.hani.co.kr";
			} else {
				document.location = url;
			}
}             