if(typeof entity_len == 'undefined') entity_len = 18;
var title_array = Array(0);
var url_array = Array(0);
if( typeof link_idx == 'undefined' ) var link_idx = Array(0);
var link_start_idx = document.links.length; 
link_idx[link_start_idx+0]= 6000+0;
title_array[0] = '[�ý±�] �����ʹ� ���� �ٸ� �̱��� �Ÿ�� ������ ';
url_array[0] ='http://www.hani.co.kr/arti/economy/car/476996.html';
link_idx[link_start_idx+1]= 6000+1;
title_array[1] = '���ڵ��� �뷡�濡�� ���� ��� �Ⱦ��ϴ� �뷡? ';
url_array[1] ='http://www.hani.co.kr/arti/culture/entertainment/476992.html';
link_idx[link_start_idx+2]= 6000+2;
title_array[2] = '�Դٹ� ����� ������ ���� ';
url_array[2] ='http://www.hani.co.kr/arti/politics/assembly/476933.html';
link_idx[link_start_idx+3]= 6000+3;
title_array[3] = '���̴���� ����������ν� ���а� ���� ���� �ȵ� ������';
url_array[3] ='http://www.hani.co.kr/arti/politics/assembly/476938.html';
link_idx[link_start_idx+4]= 6000+4;
title_array[4] = '����뷡 �� �������� ������ ���� �� ���� ���������̾���';
url_array[4] ='http://www.hani.co.kr/arti/culture/music/476868.html';
link_idx[link_start_idx+5]= 6000+5;
title_array[5] = '������ ���������� ����? ����? ';
url_array[5] ='http://www.hani.co.kr/arti/society/labor/476960.html';
link_idx[link_start_idx+6]= 6000+6;
title_array[6] = '����� ���ܰ� ���ſ�� ��ġ� �巯���� ';
url_array[6] ='http://www.hani.co.kr/arti/society/schooling/476956.html';
link_idx[link_start_idx+7]= 6000+7;
title_array[7] = '���� �ȵ�� ��ɡ��� ������10���� �귯�� �״�� ';
url_array[7] ='http://www.hani.co.kr/arti/society/society_general/476921.html';
link_idx[link_start_idx+8]= 6000+8;
title_array[8] = '������ �������� ������� ���Ѽ� �ּ� ';
url_array[8] ='http://www.hani.co.kr/arti/economy/it/476914.html';
link_idx[link_start_idx+9]= 6000+9;
title_array[9] = '��Ŭ�� ų���� ų�н��������� 5ȣ ���� ';
url_array[9] ='http://www.hani.co.kr/arti/sports/soccer/476951.html';
document.write('<table border="0px" cellpadding="0px" cellspacing="0px" width="100%"><tr height="7px"><td></td></tr>');
for(var i=0; i < title_array.length; i++){
	var str = title_array[i];
	if(str.length > entity_len) str = str.substring(0,entity_len)+'..';
	if(i==0){
	document.write('<tr height="20px"><td class="link_993200_01" style="padding: 0px 15px 0px 20px;">');
	}
	if(i==1){
	document.write('</td></tr><tr height="2px"><td></td></tr><tr><td style="padding: 0px 15px 0px 20px;">');
	}
	document.write('&#8226;<img src="http://img.hani.co.kr/section-image/05/news2/space.gif" width="6px"><a href="'+url_array[i]+'" target="_top">'+str+'</a>');
	if(i!=0){
	document.write('<br><img src="http://img.hani.co.kr/section-image/05/news2/space.gif" height="4px"><br>');
	}
}
document.write('</td></tr></table>');
