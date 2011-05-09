var xmlHttp;

function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
}

// 서브 아이디 Select Box 추가
function ReportLog(MS_Code, PageCode, nYear, nMonth, nDay, nTime) {
    createXMLHttpRequest();
    //xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.open("GET", "/rotation/ReportLog_Proc.asp?MS_Code="+MS_Code+"&PageCode="+PageCode+"&nYear="+nYear+"&nMonth="+nMonth+"&nDay="+nDay+"&nTime="+nTime, true);
    xmlHttp.send(null);
}

function handleStateChange()
{
}