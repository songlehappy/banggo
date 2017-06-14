
//购物车界面开始
$(function(){
	
	//引入header部分鼠标移入功能
	var headLogin=new HeaderMove('.header_login','aSelect','.login')
	var mineLogin=new HeaderMove('.header_mine','aSelect','.mine')
	var downLoadLogin=new HeaderMove('.header_download','aSelect','.downLoad')
	//读取cookie
	var cookie=new GiveValue('.main_m');
	
})
