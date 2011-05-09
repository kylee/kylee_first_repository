String.prototype.cutStr = function(length, addText) { 
	var result	= "";
	var strLen	= 0;
	var strSum	= 0;
	var addText = addText || '...';

	// 실제 길이를 추출합니다.
	for(var i=0; i<this.length; i++){
		if( this.charCodeAt(i) < 255)		strLen	+= 1;
		else								strLen	+= 2;
	}

	if(strLen > length){
		// 문자열 길이를 변경합니다.
		for(var i=0; i<this.length; i++){
			if( this.charCodeAt(i) < 255)	strSum	+= 1;
			else							strSum	+= 2;

			if(strSum < length){
				result	+= this.charAt(i);
			}else{
				result	+= addText;
				break;
			}
		}
	}else{
		result = this;
	}

	return result;
}

var EditorBlog	= function(objId, editors){
	this.init(objId, editors);
}
EditorBlog.prototype	= {
	obj : null,
	editors : [],

	init : function(objId, editors){
		this.obj		= document.getElementById(objId);
		this.editors	= editors;

		this.setStage();
	},

	setStage : function(){
		for(var i=0;i<this.editors.length;i++){
			var oDiv	= document.createElement("DIV");
			oDiv.className	= "item";
			oDiv.innerHTML	= this.getItemContents( this.editors[i] );
			this.obj.appendChild(oDiv);

	
			//라인 추가
			if(i%2 == 1){
				var oDiv2	= document.createElement("DIV");
				oDiv2.className	= "break";
				this.obj.appendChild(oDiv2);
			}
		}

		//마지막 라인에 float 제거
		var oDiv2	= document.createElement("DIV");
		oDiv2.className	= "break";
		this.obj.appendChild(oDiv2);

	},

	getItemContents : function(editor){
		editor.img	= (editor.img) ? 'http://img.hani.co.kr/section-image'+editor.img : 'http://img.hani.co.kr/section-image/08/h21/blog_none.gif';

		var contents	=  	'<table width="100%" border="0" cellpadding="0" cellspacing="0">'+
				'<tr>'+
				'	<td width="100">'+
				'		<table border="0" cellpadding="0" cellspacing="1" bgcolor="#000000">'+
				'		<tr><td bgcolor="#FFFFFF"><a href="http://blog.hani.co.kr/'+editor.blog+'" target="_blank"><img src="'+editor.img+'"></a></td></tr>'+
				'		</table>'+
				'	</td>'+
				'	<td width="12"></td>'+
				'	<td valign="top">'+
				'		<span class="t14nyd">'+editor.name+'의 '+editor.title.cutStr(20)+'</span><br>'+
				'		<a href="http://blog.hani.co.kr/'+editor.blog+'" target="blank" class="loca">(http://blog.hani.co.kr/'+editor.blog+')</a>'+
				'			<table width="100%" border="0" cellpadding="0" cellspacing="0">'+
				'			<tbody id="_'+editor.blog+'"></tbody>'+
				'			</table>'+
				'	</td>'+
				'</tr>'+
				'</table>';


		//ajax로 데이터 추출
		var aObj			= new AjaxObject;
		aObj.getHttpRequest("http://h21.hani.co.kr/h21_manager/xml_proxy.hani?url=http://blog.hani.co.kr/"+editor.blog+"/rss",		"displayItems", editor.blog);

		return contents;
	}

}
