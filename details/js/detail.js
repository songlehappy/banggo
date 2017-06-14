
//详情页面js开始
$(function(){
	
	//引入header部分鼠标移入功能
	var headLogin=new HeaderMove('.header_login','aSelect','.login')
	var mineLogin=new HeaderMove('.header_mine','aSelect','.mine')
	var downLoadLogin=new HeaderMove('.header_download','aSelect','.downLoad')
	
	//载入回到顶部功能
	var toTop=new ToTop('.fix');
	
	//点击logo功能
	var logo=new GetSelector('#logo');
	logo.clickLogo();
	
	//载入放大镜功能
	var magnifier=new Magnifier('.banner_l');
	
	//讲模特放入放大镜
	var middleClick1=new MiddleClick('.banner_in','.banner_l dl dd');
	
	//将衣服放入放大镜
	var middleClick2=new MiddleClick('.banner_in','.color img');
	
	//颜色选择
	var clickColor1=new ClothStyle('.banner_r .color','img');
	
	//尺寸选择
	var clickColor2=new ClothStyle('.banner_r .yard','ul li');
	
	//尺寸选择后对应库存的数量变化
	var count=new CountChange('.yard ul','.count strong span')
	
	//购物数量加减按钮
	var btn=new PlusMinus('.banner_r .count');
	
	//会员规则出现与隐藏
	var vip=new Appear('.banner_r .vip span','.banner_r .vip div');
	
	//尺码选择助手出现与隐藏
	var yard=new Appear('.banner_r .yard a','.banner_r .yard p');
	
	//结算或继续购物
	var goshopping=new GoShopping('.banner_r');
	
	//商品详情、评价等的吸顶效果
	var ceil=new Ceiling('.main_rTop');
	
	
})
