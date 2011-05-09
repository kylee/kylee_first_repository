function SetCookie(name, value) {
	var expires = new Date();
	expires.setDate(expires.getDate() + 1);
	expires.setHours(0, 0, 0, 0);

	document.cookie = name + "=" + value + ";expires=" + expires.toGMTString()
		+ ";path=/" + ((location.host.toLowerCase().indexOf("hani.co.kr") >= 0) ? ";domain=hani.co.kr" : "");
}

function GetCookie(name)
{
	var cookies = document.cookie;
	var value = "";

	if (cookies.indexOf(name) != -1)
	{
		var start = cookies.indexOf(name) + name.length + 1;
		var end = cookies.indexOf(";", start);

		if (end == -1) end = cookies.length;

		value = cookies.substring(start, end);
		value = unescape(value);
	}

	return value;
}

function DelCookie(cookieName)
{
	var expireDate = new Date();
	expireDate.setDate(expireDate.getDate() - 1);
	document.cookie = cookieName + "=;expires=" + expireDate.toGMTString() + ";path=/;domain=hani.co.kr";
}

function SetCookie_noExpire(name, value) {
	document.cookie = name + "=" + value + ";path=/" + ((location.host.toLowerCase().indexOf("hani.co.kr") >= 0) ? ";domain=hani.co.kr" : "");
}