var arti2SNS = {

	surl : '',
	
	getShortUrl : function (longurl) {

		var axShortUrl = new Ajax.Request(
			"/hani_manager/ax_getShortUrl.hani", 
			{
				method: 'get', 
				parameters: 'longurl=' + longurl, 
				evalScripts: true,
				requestHeaders: {Accept: 'application/json'}, 
				asynchronous: false,

				onComplete : function(originalRequest){ 
						var arrUrlinfo = originalRequest.responseText.evalJSON(true);
						this.surl = arrUrlinfo['data']['url'];
				} 
			});
	},
	
	showPage : function(type,title,longurl,thumbnail) {

		this.getShortUrl(longurl);

		if( (typeof surl != "undefined") && surl != "") {

			switch(type) {

				case 'me2day': 
						var tag = '한겨레 뉴스스크랩';
						var link = 'http://me2day.net/posts/new?new_post[body]="' + title + '":' + surl + '&new_post[tags]=' + encodeURIComponent(tag) ;
						popwin = window.open(link,'popwin', 'menubar=yes,toolbar=yes,status=yes,resizable=yes,location=yes,scrollbars=yes');
						if(popwin)
							popwin.focus();
				break;

				case 'twitter': 
						var link = 'http://twitter.com/home?status=' + title + ':' + surl ;
						//popwin = window.open(link,'popwin');
						popwin = window.open(link,'popwin', 'menubar=yes,toolbar=yes,status=yes,resizable=yes,location=yes,scrollbars=yes');
						if(popwin)
							popwin.focus();
				break;

				case 'gonggam': 
						var writer = '한겨레신문사';
						var link = 'http://csp.cyworld.com/bi/bi_recommend_pop.php?url='+longurl+'&thumbnail='+thumbnail+'&writer='+encodeURIComponent(writer);
						popwin = window.open(link,'popwin', 'width=400,height=364,scrollbars=no,resizable=no');
						if(popwin)
							popwin.focus();
				break;

				case 'facebook': 
						var link = 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(longurl)+'&t='+encodeURIComponent(title);
						popwin = window.open(link,'recom_icon_pop', 'width=600,height=500,scrollbars=no,resizable=no');
						if(popwin)
							popwin.focus();
				break;

				default:
				break;
			}
			return;
		}
		else 	{

		}
	}
}
