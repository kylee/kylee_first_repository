var obj;
var winModalWindow;
var AppID = "99995659";
var emailID = "";

function TryItNow(str)
{
	CheckMessenger();

	SetCookie("articleid", str);

	LaunchApp(AppID, emailID);
}

function CheckMessenger()
{
	eval('try {obj = new ActiveXObject("MSNMessenger.P4QuickLaunch");} catch (e) {alert(e);obj = null;}');

	var strErrorPage = "http://www.hani.co.kr";

	if (obj == null)
		alert('이 서비스는 IE/msn메신저 사용자에게 제공됩니다.');
}

function LaunchApp(AppID, emailID)
{
	if (obj != null)
		obj.LaunchApp(AppID, emailID);
}

function IgnoreEvents(e)
{
	return false
}

function ShowWindow(strError, width, height)
{
	if (window.showModalDialog)
	{
		window.showModalDialog(strError, null,
			"dialogWidth=" + width + "px;dialogHeight=" + height + "px;help=no;dialogLeft=160")
	}
	else
	{
		var ah = screen.availHeight;
		var y = (ah - height) / 2;

		window.top.captureEvents(Event.CLICK|Event.FOCUS)
		window.top.onfocus = HandleFocus
		winModalWindow = window.open(strError, "ModalChild",
			"dependent=yes,width=" + width + ",height=" + height + ",top=" + y + ",left=160,screenX=160,screenY=" + y);
		winModalWindow.focus()
	}
}

function HandleFocus()
{
	if (winModalWindow)
	{
		if (!winModalWindow.closed)
		{
			winModalWindow.focus()
		}
		else
		{
			window.top.releaseEvents(Event.CLICK|Event.FOCUS)
		}
	}
	return false
}