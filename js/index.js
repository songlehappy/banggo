
$(function(){
	//引入header部分鼠标移入功能
	var headLogin=new HeaderMove('.header_login','aSelect','.login')
	var mineLogin=new HeaderMove('.header_mine','aSelect','.mine')
	var downLoadLogin=new HeaderMove('.header_download','aSelect','.downLoad')
	
	//页面为红色字体功能
	var red=new GetSelector('.red');
	red.isRed();
	
	//点击头部功能
//	var click=new ClickHeader('.header_r');
	
	//页面图片功能
	var pic=new GetSelector('img');
	pic.changeOpacity();
	
	//banner左半部分鼠标移入
	var bannermouse=new BannerMove('.banner_l');
	
	//banner部分载入轮播功能
	var slider=new Slider('.banner_m');
	
	//aside滑动功能
	var asideSlide=new AsideSlide('.aside_in');
	
	//回到顶部功能
	var toTop=new ToTop('.fix');
	
})
	