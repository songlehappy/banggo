
//列表页面js开始
$(function(){
	
	//引入header部分鼠标移入功能
	var headLogin=new HeaderMove('.header_login','aSelect','.login');
	var mineLogin=new HeaderMove('.header_mine','aSelect','.mine');
	var downLoadLogin=new HeaderMove('.header_download','aSelect','.downLoad');
	
	//载入回到顶部功能
	var toTop=new ToTop('.fix');
	
	//点击logo功能
	var logo=new GetSelector('#logo');
	logo.clickLogo();
	
	//图片变化
	var pic=new GetSelector('img');
	pic.changeOpacity();
	pic.toDetail();
	
	//
	var slide=new Slide('.main_rt>dl');
	slide.clickSlide();
	
	//
	var listSlide=new Slide('.main_l ul');
	listSlide.clickList();

	//高级筛选
	var filter=new Filter('.main_rt .filter');

	//移动小图到大图
	var picmove=new ChangePic('.sort_b ul');
	
	//
	var sort=new Sort('.sort_b ul')
})
