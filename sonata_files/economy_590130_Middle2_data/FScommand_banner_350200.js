document.write('<SCRIPT LANGUAGE=VBScript>\n');
document.write('  on error resume next\n');
document.write('  Sub '+banner_objid+'_FSCommand(ByVal command, ByVal args)\n');
document.write('    call '+banner_objid+'_DoFSCommand(command, args)\n');
document.write('  end sub\n');
document.write('</SCRIPT>\n');
document.write('<OBJECT CLASSID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"\n');
document.write('  CODEBASE="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,23,0" ID='+banner_objid+' WIDTH='+banner_width+' HEIGHT='+banner_height+'>\n'); 
document.write('  <PARAM NAME=allowScriptAccess VALUE=always>\n');
document.write('  <PARAM NAME="movie" VALUE="'+banner_url+'">\n');
document.write('  <PARAM NAME=play VALUE=true>\n');
document.write('  <PARAM NAME=loop VALUE=true>\n');
document.write('  <PARAM NAME=menu VALUE=true>\n');
document.write('  <PARAM NAME=quality VALUE=high>\n');
document.write ('<PARAM NAME=wmode VALUE=transparent>\n');
document.write('  <EMBED SRC="'+banner_url+'" name='+banner_objid+' type=application/x-shockwave-flash allowScriptAccess="always" SWLiveConnect=TRUE play=true loop=false menu=false WIDTH='+banner_width+' HEIGHT='+banner_height+' scale=showall quality=best salign=BR loop=true pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED>\n');
document.write('  <NOEMBED>\n');
document.write('    <A HREF="http://ad.hani.co.kr/RealMedia/ads/click_lx.ads/%%PAGE%%/%%RAND%%/%%POS%%/%%CAMP%%/%%IMAGE%%/%%USER%%">\n');
document.write('  </NOEMBED>\n');
document.write('</OBJECT>\n');