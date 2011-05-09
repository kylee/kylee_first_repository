//	Daum Web Inside
//	Copyright by Daum Communications Corp. All rights reserved.

//set variables
var _dwiDN = "auto";
var _dwiPID = "";
var _dwiTO = 1800000;
var _dwiPATH = "/";
var _dwiMoney = "-";
var _dwiProduct = "-";
var _dwiCust = "-";

//variables
var _dwiCC;
var _dwiDO = document;
var _dwiDL = _dwiDO.location;
var _dwiCD = " ";
var _dwidi = "-";
var _dwidv = "-";
var _dwildi = "-";
var _dwiCP = " path=/;";
var _dwiRF = "-";
var _dwiPRF = "-";
var _dwiRH = "http://";
var _dwiRS = "log.inside.daum.net";
var _dwiRR = "/dwi_log/catch?";
var _dwiTT = _dwiT();
var _dwiFRM = 0;
var _dwiDNL = "";
var _dwiLC = 0;

var _dwiSS = new Array();
var _dwiSK = new Array();
var _dwiIEN = new Array();
_dwiSS[0]="search.daum.net"; _dwiSK[0]="q"; _dwiIEN[0] = 0;
_dwiSS[1]="naver.com"; _dwiSK[1]="query"; _dwiIEN[1] = 0;
_dwiSS[2]="search.yahoo.com"; _dwiSK[2]="p"; _dwiIEN[2] = 0;
_dwiSS[3]="search.empas.com"; _dwiSK[3]="q"; _dwiIEN[3] = 0;
_dwiSS[4]="lycos.co.kr"; _dwiSK[4]="q"; _dwiIEN[4] = 0;
_dwiSS[5]="search.lycos.com"; _dwiSK[5]="query"; _dwiIEN[5] = 0;
_dwiSS[6]="search.paran.com"; _dwiSK[6]="Query"; _dwiIEN[6] = 0;
_dwiSS[7]="search.nate.com"; _dwiSK[7]="q"; _dwiIEN[7] = 0;
_dwiSS[8]="search.msn"; _dwiSK[8]="q"; _dwiIEN[8] = 1;
_dwiSS[9]="google"; _dwiSK[9]="q"; _dwiIEN[9] = 1;
_dwiSS[10]="search.allblog.net"; _dwiSK[10]="k"; _dwiIEN[10] = 1;
_dwiSS[11]="search.yahoo.co.jp"; _dwiSK[11]="p"; _dwiIEN[11] = 1;

//proc
function _dwiCatch(_dwiPAGE){
	if(_dwiPAGE != undefined && _dwiNULL(_dwiPAGE) == 0 ){
		_dwiCC = 0;
	}

	//check
	if (_dwiCC) return;
	if (_dwiNULL(_dwiPID) == 1) return;
	if (_dwiDL.protocol !="http:" && _dwiDL.protocol != "https:") return;
	_dwiPID = _dwiValid(_dwiPID);
	if (_dwiPID ==0 ){return};

	if (_dwiDL.protocol=="https:") _dwiRH="https://ssl.";
	_dwiRR = _dwiRH+_dwiRS+"/dwi_log/catch?";

	if (_dwiDomain() == 1) {
		_dwiCD = " domain="+_dwiDN+";";
	}
	_dwiCP = " path="+_dwiPATH+";";
	_dwiRF = _dwiDO.referrer;
	if( top.frames !=null && typeof top.frames.length=='number' && top.frames.length > 0 ){
		eval("try{_dwiPRF=top.document.URL;}catch(_e){_dwiPRF='-';};");
		if(_dwiPRF=="-") eval("try{_dwiPRF=parent.document.URL;}catch(_e){_dwiPRF='-';};");
		if(_dwiRF == _dwiPRF ){
			_dwiFRM = 1;
			eval("try{_dwiRF = top.document.referrer;}catch(_e){_dwiRF='-'};");
		}
	}

	if (_dwiNULL(_dwiRF) == 1) { _dwiRF="-"; }
	if (_dwiRF.indexOf("[")==0 && _dwiRF.lastIndexOf("]")==(_dwiRF.length-1)) { _dwiRF="-"; }
	var ck = _dwiDO.cookie;
	_dwidi = new _dwiDI();
	_dwidv = new _dwiDV();
	_dwildi = new _dwiLDI();
	var fr = _dwiR();
	var fcm = _dwiCM();
	var f = fr+"|"+fcm;

	var vto = "";
	var t = new Date();
	var vto = new Date(t.getTime()+_dwiTO);
	vto = " expires="+vto.toGMTString()+";";
	var eto = " expires=Thu, 1 Feb 2029 00:00:00 GMT;";

	if(_dwiLC == 1) _dwidi.s();
	if( (_dwiLC == 0 &&_dwidi.s() == 0) ||(_dwiLC == 1 && _dwildi.s() == 0)){
		_dwidi.n();
		_dwidv.n();
		if(_dwiLC == 1) _dwildi.n();
	}else{
		if(_dwidv.s() == 0 || !_dwiIN(ck,"_dwiN="+_dwiPID)){
			_dwidi.v();
			_dwidv.n();
			if(_dwiLC ==1 ) _dwildi.v();
		}else{
			_dwidv.c();
			var i = 0;
			var j = 0;
			if((i=ck.indexOf("_dwiF="+_dwiPID))>-1){
				if((j=ck.indexOf("|;",i))>-1){
					f = ck.substring(i+7+_dwiPID.length,ck.indexOf("|;",i));
				}
			}
		}
	}
	if(_dwiLC == 1)
	_dwiDO.cookie = _dwildi.c()+";"+_dwiCP+eto+_dwiCD;
	_dwiDO.cookie = "_dwiC="+_dwiPID+_dwiDNL+"|"+_dwidi.toString()+"|;"+_dwiCP+eto+_dwiCD;
	_dwiDO.cookie = "_dwiV="+_dwiPID+_dwiDNL+"|"+_dwidv.toString()+"|;"+_dwiCP+vto+_dwiCD;
	_dwiDO.cookie = "_dwiF="+_dwiPID+"|"+f+"|;"+_dwiCP+vto+_dwiCD;
	_dwiDO.cookie = "_dwiN="+_dwiPID+";"+_dwiCP+_dwiCD;
	var c = _dwidi.toString();
	if(_dwiLC == 1) c = _dwildi.toString();
	if(!_dwiIN(_dwiDO.cookie,"_dwiN="+_dwiPID)) c = "-";
	var im=new Image();
	im.src= _dwiRR+"C="+_dwiPID+"|"+c+"&V="+_dwidv.toString()+"&E="+_dwiE()+"&P="+_dwiP(_dwiPAGE)+"&R="+fr+"&CM="+fcm+"&F="+f+"&M="+_dwiMoney+"|"+_dwiProduct+"|"+_dwiCust;
	im.onload=function() { return; }
	_dwiCC = 1;
}

// Read Info
function _dwiP(page){
	var h="-",p="-",q="-",t="-",d="-",f="-",i=0;
	if(_dwiNULL(_dwiDL.hostname) == 0) h = _dwiDL.hostname;
	p = _dwiDL.pathname;
	if(page != undefined && _dwiNULL(page) == 0 ){
		p = page;
	}
	d = p;
	i=d.lastIndexOf("/");
	d = d.substring(0,i+1);
	f = p.substring(i+1,p.length);
	if(_dwiNULL(_dwiDL.search) == 0) q =_dwiDL.search ;
	if(_dwiNULL(_dwiDO.title)== 0) t = _dwiDO.title;
	q = _dwiCut(q);
	return _dwiEN(h)+"|"+_dwiEN(d)+"|"+_dwiEN(f)+"|"+_dwiEN(q)+"|-";
}

function _dwiE() {
	var s="-",c="-",l="-",f="-",j=1,o="-",b="-",cu="-",v="-",b="-",o="-";
 	var n=navigator;
	if (self.screen) {
		s=screen.width+"x"+screen.height;
		c=screen.colorDepth+"-bit";
	} else if (self.java) {
		var tj=java.awt.Toolkit.getDefaultToolkit();
		var ts=tj.getScreenSize();
		s=ts.width+"x"+ts.height;
	}
	if (n.language) { l=n.language.toLowerCase(); }
	else if (n.browserLanguage) { l=n.browserLanguage.toLowerCase(); }
	if(n.javaEnabled())
		j = 1;
	else j = 0;
	f=_dwiF();
	o=_dwiO();
	b=_dwiB();
	return o+"|"+b+"|"+s+"|"+c+"|"+j+"|"+f+"|"+l;
}

function _dwiF() {
	var f="-",n=navigator;
	if (n.plugins && n.plugins.length) {
		for (var ii=0;ii<n.plugins.length;ii++) {
			if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) {
				f=n.plugins[ii].description.split('Shockwave Flash ')[1];
				break;
			}
		}
	} else if (window.ActiveXObject) {
		for (var ii=10;ii>=2;ii--) {
			try {
				var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");
				if (fl) { f=ii + '.0'; break; }
			}
			catch(e) {}
		}
	}
	return f;
}

function _dwiCM(){
	var s="-",k="-",si="-",p="-",t="-",c="-";
	var q =_dwiDL.search;
	if( _dwiFRM == 1 ){
		eval("try{q = top.document.location.search;}catch(_e){q='-'};");
	}
	if(_dwiIN(q,"OVRAW")){
		p="OVT";
		t="CPC";
		k=_dwiSUB(q,"OVKEY=","&");
		k = _dwiUEN(k);
	} else if(_dwiIN(q,"NVKWD")){
		s="NV";
		p=_dwiSUB(q,"NVAR=","&");
		if( p == '' ) p = 'BZ';
		if( p == 'PSLK' ) t = "CPM";
		else t = 'CPC';
		k=_dwiSUB(q,"NVADKWD=","&");
		k = _dwiUEN(k);
	}else if(_dwiIN(q,"src=") && _dwiIN(_dwiSUB(q,"src=","&"),"naver") && _dwiIN(q,"kw=")){
		var ss=_dwiSUB(q,"src=","&");
		var kk=_dwiSUB(q,"kw=","&");
		if(_dwiIN(ss,"naver")){
			s = "NV";
			k = kk;
			if(_dwiIN(ss,"pp")){
				p="PLSP";
				t="CPM";
			}else if(_dwiIN(ss,"bs")){
				p = "PM";
				t="CPC"
			}else if(_dwiIN(ss,"sl")){
				p = "PWL";
				t="CPC";
			}else{
				s = "-";
				k = "-";
			}
		}
	}else if(_dwiIN(q,"DWIS=")){
		s=_dwiSUB(q,"DWIS=","&");
		t=_dwiSUB(q,"DWIT=","&");
		p=_dwiSUB(q,"DWIP=","&");
		k=_dwiSUB(q,"DWIK=","&");
		c=_dwiSUB(q,"DWIC=","&");
	}else if(_dwiIN(q,"DMKW=")){
		s="DM";
		t="CPC";
		p=_dwiSUB(q,"DMCOL=","&");
		if( p == 'PREMIUM' ) p = "PML";
		else if( p == 'MOBILESA' ) p = "MOSA";
		else if( p == 'MOBILEDA' ) p = "MODA";
		k=_dwiSUB(q,"DMKW=","&");
	}	
	if(_dwiIN(q,"DWISI=")){
		si=_dwiSUB(q,"DWISI=","&");
	}
	return s+"|"+t+"|"+p+"|"+_dwiEN(k)+"|"+si+"|"+c;
}

function _dwiO(){
	var n = navigator,to="-",tv="-",o=to;
	if (n.platform) {to = n.platform.toLowerCase();}
	if (n.appVersion) {tv = n.userAgent.toLowerCase();}
	if( _dwiIN(to,'win32')){
		if( _dwiIN(tv,'98')){o = 'Windows 98';}
		else if( _dwiIN(tv,'95')){o = 'Windows 95';}
		else if( _dwiIN(tv,'nt 6.1')){o ='Windows 7';}		
		else if( _dwiIN(tv,'nt 6.0')){o ='Windows Vista';}
		else if( _dwiIN(tv,'nt 5.0')){o = 'Windows 2000';}
		else if( _dwiIN(tv,'nt 5.1')){o = 'Windows XP';}
		else if( _dwiIN(tv,'nt 5.2')){o ='Windows Server 2003';}
		else if( _dwiIN(tv,'nt')){o = 'Windows NT';}
		else if( _dwiIN(tv,'me')){o = 'Windows Me';}
		else{ o = 'Windows';}
	}else{
	 	var st = to.substring(0,4);
		if( st == 'win1'){o = 'Windows 3.1';}
		else if( st == 'mac6' ){o = 'Mac';}
		else if( st == 'maco' ){o = 'Mac';}
		else if( st == 'macp' ){o = 'Mac';}
		else if( st == 'linu'){o = 'Linux';}
		else if( st == 'webt' ){o = 'WebTV';}
		else if( st =='osf1' ){o = 'Compaq Open VMS';}
		else if( st == 'hp-u' ){o = 'HP Unix';}
		else if( st == 'os/2' ){o = 'OS/2';}
		else if( st == 'aix4' ){o = 'AIX';}
		else if( st == 'free' ){o = 'FreeBSD';}
		else if( st == 'suno' ){o = 'SunO';}
		else if( st == 'drea' ){o = 'Drea';}
		else if( st == 'plan' ){o = 'Plan';}
	}
	return o;
}

function _dwiB(){
	var n = navigator,tb="-",b=tb;
	if (n.userAgent) {tb = navigator.userAgent.toLowerCase();}
	if (_dwiIN(tb,'msie')) {
		if(_dwiIN(tb,'7.0')) b = "IE7"; else if(_dwiIN(tb,'8.0')) b= "IE8"; else if(_dwiIN(tb,'9.0')) b= "IE9"; else b = "IE";
	}
	else if(_dwiIN(tb,'opera')) {b = "Opera";}
	else if(_dwiIN(tb,'netscape')) {b = "Netscape";}
	else if(_dwiIN(tb,'firefox/3.')) {b = "Firefox3";}
	else if(_dwiIN(tb,'firefox/2')) {b = "Firefox2";}
	else if(_dwiIN(tb,'firefox')) {b = "Firefox";}
	else if(_dwiIN(tb,'chrome')) {b = "Chrome";}
	else if(_dwiIN(tb,'safari')) {b = "Safari";}
	return b;
}

function _dwiR() {
	var i=0,h,q="-",u="-",it="-",p="-";
	if ((i=_dwiRF.indexOf("://")) < 0) return "d|-|-|-|-";
	h=_dwiRF.substring(i+3,_dwiRF.length);
 	if ((i = h.indexOf("/")) > -1) {	
		u=h.substring(i,h.length);
		h=h.substring(0,i);
		it = "s";
 	}
 	if( (i = u.indexOf("?")) > -1){
 		p = u;
 		u=u.substring(0,i);
 		p=p.substring(i,p.length);
 	}

 	for (var ii=0;ii<_dwiSS.length;ii++) {
 		if (h.toLowerCase().indexOf(_dwiSS[ii]) > -1) {
			if ((i=_dwiRF.indexOf("?"+_dwiSK[ii]+"=")) > -1 || (i=_dwiRF.indexOf("&"+_dwiSK[ii]+"=")) > -1) {
				q=_dwiRF.substring(i+_dwiSK[ii].length+2,_dwiRF.length);
				if ((i=q.indexOf("&")) > -1) q=q.substring(0,i);
				if(_dwiIEN[ii] == 1){q = _dwiUEN(q);}
			}
		}
 	}
 	p = _dwiCut(p);
 	if(q!="-") it = "e"; else it="s";
 	if(it == "e" && _dwiIN(h,"naver.com")){
 		if(_dwiIN(q,"%u")){
 			q = unescape(q);
 		}
 	}
 	return it+"|"+_dwiEN(h)+"|"+_dwiEN(u)+"|"+_dwiEN(p)+"|"+_dwiEN(q);
}


//function
function _dwiCut(s){
	if (_dwiNULL(s) == 1) return "-";
	if(s.length > 100)
		return s.substring(0,100);
	else
		return s;
}
function _dwiIX(s,t){return s.indexOf(t);};
function _dwiIN(s,t){
	if( _dwiNULL(s) == 1) return false;
	if(s.indexOf(t) >-1)
		return true;
	else
		return false;
}
function _dwiN(n) {
	if (!n) return false;
	for (var i=0;i<n.length;i++) {
		var c=n.charAt(i);
		if ((c<"0" || c>"9") && (c!=".")) return false;
	}
	return true;
}

function _dwiSUB(s,n,e) {
	if (!s || s=="" || !n || n=="" || !e || e=="") return "-";
	var i,i2,c="-";
	i=s.indexOf(n);
	if (i > -1) {
		i2=s.indexOf(e,i); if (i2 < 0) { i2=s.length; }
		c=s.substring(i+n.length,i2);
	}
	return c;
}
function _dwiNULL(s){
	if(!s || s == "" || s == "undefined" || s =="unknown") return 1;
	else return 0;
}
function _dwiDomain(){
	if( _dwiNULL(_dwiDN) == 1 ) return 0;
	if (_dwiDN=="auto") {
		var d=_dwiDL.hostname;
		if (d.substring(0,4)=="www.") {
			d=d.substring(4,d.length);
		}
		_dwiDN = d;
	}
	if( _dwiNULL(_dwiDN) == 1 ) return 0;
	_dwiDNL = ""+_dwiDN.length;
	return 1;
}

function _dwiID(){
	var n = Math.round(Math.random()* 1932121114) + 213212492;
	return n.toString(16);
}
function _dwiRT(){
	var t = new Date()
	return t.getTime();
}
function _dwiT(){
	var t = new Date()
	return Math.round(t.getTime()/1000);
}

function _dwiEN(s) {
	s = s.replace(/[|]/g,"").replace(/%7C/g,"");
 	return escape(s).replace(/\+/g, '%2B');
}

function _dwiEN2(s) {
	s = s.replace("|"," ");
 	return s;
}

function _dwiUEN(s) {
	if (typeof(decodeURIComponent) == 'function') {
		return decodeURIComponent(s);
	} else {
		return unescape(s);
	}
}

function _dwiEC(s) {
	var n="";
	if (!s || s=="") return "";
	for (var i=0;i<s.length;i++) {if (s.charAt(i)==" ") n+="+"; else n+=s.charAt(i);}
	return n;
}

function _dwiDI(){
	this.id = "-";
	this.it = 0;
	this.bt = 0;
	this.nt = 0;
	this.vc = 0;
	this.s = _dwiGDI;
	this.n = _dwiNDI;
	this.v = _dwiVDI;
	this.toString = _dwiDItoString;

	function _dwiGDI(){
		var ck = _dwiDO.cookie;
		if(!_dwiIN(ck,"_dwiC="+_dwiPID)) return 0;
		var c = _dwiSUB(ck,"_dwiC="+_dwiPID+_dwiDNL+"|",";");
		if(c == "-")c = _dwiSUB(ck,"_dwiC="+_dwiPID+"|",";");
		var i,ni =-1;
		if((i = c.indexOf("|",ni+1)) > 0) this.id = c.substring(ni+1,i); else return 0;
		if((ni = c.indexOf("|",i+1)) > 0) this.it = c.substring(i+1,ni); else return 0;
		if((i = c.indexOf("|",ni+1)) > 0) this.bt = c.substring(ni+1,i); else return 0;
		if((ni = c.indexOf("|",i+1)) > 0) this.nt = c.substring(i+1,ni); else return 0;
		if((i = c.indexOf("|",ni+1)) > 0) this.vc = c.substring(ni+1,i); else return 0;
		return 1;
	}
	function _dwiNDI(){
		this.id = _dwiID();
		this.it = _dwiTT;
		this.bt = _dwiTT;
		this.nt = _dwiTT;
		this.vc = 1;
	}

	function _dwiVDI(){
		this.bt = this.nt;
		this.nt = _dwiTT;
		this.vc++;
	}

	function _dwiDItoString(){
		return this.id+"|"+this.it+"|"+this.bt+"|"+this.nt+"|"+this.vc;
	}
}

function _dwiLDI(){
	this.id = "-";
	this.it = 0;
	this.bt = 0;
	this.nt = 0;
	this.vc = 0;
	this.nn = -1;
	this.ac = "";
	this.nc = "";
	this.s = _dwiGLDI;
	this.n = _dwiNLDI;
	this.v = _dwiVLDI;
	this.toString = _dwiLDItoString;
	this.c = _dwiLDIComplete;

	function _dwiGLDI(){
		var ck = _dwiDO.cookie;
		if(!_dwiIN(ck,"_dwiLC="+_dwiDNL)) return 0;
		var s = _dwiSUB(ck,"_dwiLC="+_dwiDNL+"+",";");
		this.ac = s.split("+");

		for(var k =0;k<this.ac.length;k++){
			if(_dwiIN(this.ac[k],_dwiPID)){
				this.nn = k;
				this.nc = this.ac[k];
				break;
			}
		}
		var c = _dwiSUB(this.nc,_dwiPID+"|",";");
		var i = -1,ni =-1;
		if((i = c.indexOf("|",ni+1)) > 0) this.id = c.substring(ni+1,i); else return 0;
		if((ni = c.indexOf("|",i+1)) > 0) this.it = c.substring(i+1,ni); else return 0;
		if((i = c.indexOf("|",ni+1)) > 0) this.bt = c.substring(ni+1,i); else return 0;
		if((ni = c.indexOf("|",i+1)) > 0) this.nt = c.substring(i+1,ni); else return 0;
		if((i = c.indexOf("|",ni+1)) > 0) this.vc = c.substring(ni+1,i); else return 0;

		return 1;
	}
	function _dwiNLDI(){
		this.id = _dwiID();
		this.it = _dwiTT;
		this.bt = _dwiTT;
		this.nt = _dwiTT;
		this.vc = 1;
	}

	function _dwiVLDI(){
		this.bt = this.nt;
		this.nt = _dwiTT;
		this.vc++;
	}

	function _dwiLDItoString(){
		return this.id+"|"+this.it+"|"+this.bt+"|"+this.nt+"|"+this.vc;
	}
	function _dwiLDIComplete(){
		var s = "_dwiLC="+_dwiDNL;
		if(_dwiNULL(this.ac) == 0){
			for(var k=0;k<this.ac.length;k++){
				if(this.ac.length < 10 || k !=0){
					if(k != this.nn){
						s+="+"+this.ac[k];
					}
				}
				if(k>10) break;
			}
		}
		s +="+"+_dwiPID+"|"+this.toString()+"|";
		return s;
	}
}

function _dwiDV(){
	this.lt = 0
	this.rt = 0;
	this.pc = 0;
	this.s = _dwiGDV;
	this.n = _dwiNDV;
	this.c = _dwiCDV;
	this.toString = _dwiDVtoString;

	function _dwiGDV(){
		var ck = _dwiDO.cookie;
		if(!_dwiIN(ck,"_dwiV="+_dwiPID)) return 0;
		var c = _dwiSUB(ck,"_dwiV="+_dwiPID+_dwiDNL+"|",";");
		if(c == "-")c = _dwiSUB(ck,"_dwiV="+_dwiPID+"|",";");
		var i = -1,ni =-1;
		if((i = c.indexOf("|",ni+1)) > 0) this.lt = c.substring(ni+1,i); else return 0;
		if((ni = c.indexOf("|",i+1)) > 0) this.rt = c.substring(i+1,ni); else return 0;
		if((i = c.indexOf("|",ni+1)) > 0) this.pc = c.substring(ni+1,i); else return 0;
		return 1;
	}
	function _dwiNDV(){
		this.lt = _dwiTT+2;
		this.rt = 2;
		this.pc = 1;
	}
	function _dwiCDV(){
		this.lt = _dwiTT + 2;
		this.rt = this.lt - _dwidi.nt;
		this.pc = parseInt(this.pc) + 1 ;
	}
	function _dwiDVtoString(){
		return this.lt+"|"+this.rt+"|"+this.pc
	}
}

function _dwiValid(s){
	var i = s.lastIndexOf("-");
	var n = s.substring(i+1,s.length);
	var p = s.substring(0,i);
	i = s.indexOf("-");
	s = s.substring(i+1,s.length);
	i = s.indexOf("-");
	s = s.substring(0,i);
	var r = 0;
	for(var i=0;i<s.length;i++){
		r+= s.charCodeAt(i);
	}
	if(r == n) return p;
	return 0;
}

function timec(){
	var t = new Date();
	return t.getTime();
}
