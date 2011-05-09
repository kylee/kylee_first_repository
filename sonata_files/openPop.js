//
//	각각의 기사본문 페이지에서 호출되는 js
//	2007.04 
//

function goList() {
	if (typeof list_url!='undefined') {
		document.location.href = list_url;
	} else {
		alert ('목록 URL이 정의되지 않았습니다');
	}
}

function openPop(uid, m) {
	var the_url = '';
	var scrollbars = '';
	if (m == 'MAIL') {
		the_url = '/popups/sendmail.hani?ksn=' + uid;
		scrollbars = 'width=630,height=350';
	}else if (m == 'ERR') {
		the_url = '/popups/err_report.hani?ksn=' + uid;
		scrollbars = 'width=630,height=550,scrollbars=no';
	} else if (m == 'PRI') {
		the_url = '/popups/print.hani?ksn=' + uid;
		scrollbars = 'width=630,height=700,scrollbars=yes';
	} else if (m == 'GOOD') {
		the_url = 'http://rank.hani.co.kr/rank/pop_hanivote.html?uid='+uid+'&mode=GOOD';
		scrollbars = 'width=10,height=10';
	} else if (m == 'BAD') {
		the_url = 'http://rank.hani.co.kr/rank/pop_hanivote.html?uid='+uid+'&mode=BAD';
		scrollbars = 'width=10,height=10';
	} else if (m == 'SCRAP') {
		the_url = 'http://rank.hani.co.kr/common/pop_scrap.html?link_type=hani&board_id=&uid='+uid;
		scrollbars = 'width=10,height=10,scrollbars=yes';
	} else if (m == 'MOBILE') {
		the_url = '/popups/send2mobile.hani?ksn='+uid;
		scrollbars = 'width=710,height=690,scrollbars=no';
	}
	popup = window.open(the_url,'popwin',scrollbars);
	popup.focus();
}