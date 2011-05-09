//
//	check agents && redirect mobile article-view page 
//	-	can be used by article view mode
//		2011.01 iamone@
//
var mhani = {
	browse : navigator.userAgent,
	mobileAgents : [ "iPhone", "iPod", "Windows CE", "Mobile" ],
	
	isMobile : function () {
		var ret = false;
		for (var i=0;i < this.mobileAgents.length; i++) {
			if (this.browse.indexOf(this.mobileAgents[i])>=0) {
				ret = true;
			}
		}
		return ret;
	},
	
	isMovableUrl : function() {

		var chk_hostname = (new RegExp(/^www\.hani\.co\.kr/i).test(window.location.hostname));
		var chk_pathname = (new RegExp(/^\/arti\//).test(window.location.pathname));
		var chk_search =  (new RegExp(/fromMobile/i).test(window.location.search));
		
		if (chk_hostname && chk_pathname) {
			if (!chk_search) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
		
	},
	
	redirMobile : function() {
		var newurl = window.location.protocol+"//"+window.location.hostname.replace(/www/i,"m")+window.location.pathname+window.location.search+window.location.hash;
		window.location.replace(newurl);
		return;
	},
	
	perform : function() {
		if (this.isMobile() && this.isMovableUrl()) {
			this.redirMobile();
		}
	}
	
}
mhani.perform();