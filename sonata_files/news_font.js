		document.write("<style type=text/css> \
		.article, .article a, .article a:visited, .article p{ font-size:14px; color:#222222; line-height:24px; } \
		</style>");



		var nowFontSz = 11 ; // 위 CSS의 article과 같은 Font 크기
		var nowlineHei= 2 ; // 위 CSS의 article과 같은 Font 행간
		var fontObj ;

		var expTime = new Date() ;
			expTime.setTime(expTime.getTime()+(24*60*60*1000*365)) ; // 365일간 적용
		var cName1 = "fontSz" ;
		var cName2 = "fontHei" ;
		var cNameStr, cNameVal ;



		function getCookie(){
		 cNameStr = arguments[0] + "=" ;
		 if (document.cookie){
		   cStr_start = document.cookie.indexOf(cNameStr) ;
		   if (cStr_start != -1){
			cStr_start += cNameStr.length ;
			cStr_end = document.cookie.indexOf(";", cStr_start) ;
			if (cStr_end == -1) cStr_end = document.cookie.length ;
			cNameVal = document.cookie.substring(cStr_start, cStr_end) ;
		   }
		 }
		 if (cNameVal) return cNameVal ;
		 else return null ;
		}



		function fontSz(){
		 if (document.getElementById) fontObj = document.getElementById("fontSzArea").style ;
		 else if (document.all) fontObj = document.all("fontSzArea").style ;
		 // Font Resize
		 if (arguments[0] == "-"){
			  if (nowFontSz <= 9) return ;
			  fontObj.fontSize = nowFontSz-1 + "pt" ;
			  nowFontSz = eval(nowFontSz-1) ;
	
//			  if(nowFontSz < 13){
//				  fontObj.lineHeight = nowlineHei+0.2 ;
//				  nowlineHei = nowlineHei+0.2 ;
//			  }

			  fontObj.lineHeight = nowlineHei+0.08 ;
			  nowlineHei = nowlineHei+0.08 ;

		 }else if (arguments[0] == "+"){
			  if (nowFontSz >= 21) return ;
			  fontObj.fontSize = nowFontSz+1 + "pt" ;
			  nowFontSz = eval(nowFontSz+1) ;
	
//			  if(nowFontSz < 13){
//				  fontObj.lineHeight = nowlineHei-0.2 ;
//				  nowlineHei = nowlineHei-0.2 ;
//			 }  

			  fontObj.lineHeight = nowlineHei-0.08 ;
			  nowlineHei = nowlineHei-0.08 ;

		 }
		 // Resize된 Font의 값을 쿠키에 적용
		 document.cookie = cName1 + "=" + nowFontSz + "; path=/" + "; expires=" + expTime.toGMTString() ;
		 document.cookie = cName2 + "=" + nowlineHei + "; path=/" + "; expires=" + expTime.toGMTString() ;
		}



		function fontSet(){
		 if (document.getElementById) fontObj = document.getElementById("fontSzArea").style ;
		 else if (document.all) fontObj = document.all("fontSzArea").style ;
		 // 쿠키에 Font값 있을시 Font에 적용
		 if (getCookie(cName1)!=null || getCookie(cName2)!=null){
		  getCookie(cName1) ;
		  nowFontSz = eval(cNameVal) ;
		  fontObj.fontSize = nowFontSz + "pt" ;
		  getCookie(cName2) ;
		  nowlineHei= eval(cNameVal) ;
		  fontObj.lineHeight = nowlineHei ;
		 }
		}

