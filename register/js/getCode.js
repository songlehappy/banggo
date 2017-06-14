
//判断用户名手机号是否合法
function IsLegal(selector){
	this.ele=$(selector).get(0);
	this.username();
	this.oPassword();
	this.phone();
	this.code();
	this.login();
}

//用户名是否合法
IsLegal.prototype.username=function(){
	var oSelf=this;
	var pattern=/^([a-z]|[\u4e00-\u9fa5])(\w|[\u4e00-\u9fa5])*$/i
//	var pattern=/[^\x00-\xff]/g
	$(oSelf.ele).find('.username input').blur(function(){
		oSelf.oName=$(this).val();
		if(oSelf.oName.length==0){
			$(oSelf.ele).find('.username .hint').css({'display':'block','color':'red'}).html('用户名不能为空');
//			console.log(3);
		}else if(pattern.test(oSelf.oName)){
			var len=oSelf.oName.replace(/[^\x00-\xff]/g,'aa');
			if(len.length>=4 && len.length<=20 ){//用户名合法-->后台
//				console.log(oSelf.oName);
				$.ajax({
					type:"get",
					url:"../../php/username.php",
					async:true,
					data:{
						username:oSelf.oName
					},
					dataType:'json',
					success:function(responseText){
						console.log(responseText);
						if(responseText=='用户名可用'){
							$(oSelf.ele).find('.username .hint').css({'display':'block','color':'green'}).html(responseText);
							//确认填写
							oSelf.userWrite=true;
						}else{
							$(oSelf.ele).find('.username .hint').css({'display':'block','color':'red'}).html(responseText);
						}
						
					},
					error:function(xhr,textStutas){
						console.log(xhr.status,xhr.statusText,xhr.responseText);
					}
				});
				
				
//				$.get('../../php/username.php',{'username':oSelf.oName},function(responseText){
//					console.log(2);
//					console.log(responseText);
//					
//					if(responseText=='用户名可用'){
//						$(oSelf.ele).find('.username .hint').css({'display':'block','color':'green'}).html(responseText);
//						//确认填写
//						oSelf.userWrite=true;
//					}else{
//						$(oSelf.ele).find('.username .hint').css({'display':'block','color':'red'}).html(responseText);
//					}
//					console.log(3);
//				});
				
				
			}else{
				$(oSelf.ele).find('.username .hint').css({'display':'block','color':'red'}).html('用户名只能为4~20个字符,一个汉字为两个字符')
			}
		}else{//必须以中文或字母开头
			
			$(oSelf.ele).find('.username .hint').css({'display':'block','color':'red'}).html('以中、英文开头，与数字、下划线组成');
		}
	})
	
}

//密码是否合法
IsLegal.prototype.oPassword=function(){
	var oSelf=this;
	var pattern=/^[\S\s]{6,20}$/
	var falut=/^\s+|\s+$/
	//密码
	$(oSelf.ele).find('.password input').blur(function(){
		oSelf.oPassword=$(this).val();
		if(oSelf.oPassword.length==0){
			$(oSelf.ele).find('.password .hint').css({'display':'block','color':'red'}).html('密码不能为空');
		}else if(oSelf.oPassword.length<6 || oSelf.oPassword.length>20){
			$(oSelf.ele).find('.password .hint').css({'display':'block','color':'red'}).html('密码长度为6-20');
		}else if(falut.test(oSelf.oPassword)){
			$(oSelf.ele).find('.password .hint').css({'display':'block','color':'red'}).html('密码前后不能为空');
		}else if(pattern.test(oSelf.oPassword)){
			$(oSelf.ele).find('.password .hint').css('display','none');
			oSelf.passwordWrite=true;
		}
	})
	//确认密码
	$(oSelf.ele).find('.repassword input').blur(function(){
		var str=$(this).val();
		if(str.length==0){
			$(oSelf.ele).find('.repassword .hint').css({'display':'block','color':'red'}).html('确认密码不能为空');
		}else if(str==oSelf.oPassword){
			$(oSelf.ele).find('.repassword .hint').css('display','none');
			oSelf.repasswordWrite=true;
		}else{
			$(oSelf.ele).find('.repassword .hint').css({'display':'block','color':'red'}).html('两次密码不一致');
		}
	})
}

//手机号是否合法
IsLegal.prototype.phone=function(){
	var oSelf=this;
	var pattern=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
	$(oSelf.ele).find('.phone input').blur(function(){
		oSelf.phone=$(this).val();
		if(oSelf.phone.length==0){
			$(oSelf.ele).find('.phone .hint').css({'display':'block','color':'red'}).html('手机号码不能为空');
		}else if(pattern.test(oSelf.phone)){//手机号码合法
			$(oSelf.ele).find('.phone .hint').css('display','none');
			oSelf.phoneWrite=true;
		}else{
			$(oSelf.ele).find('.phone .hint').css({'display':'block','color':'red'}).html('手机号码不合法！')
		}
	})
}

//验证码是否合法
IsLegal.prototype.code=function(){
	var oSelf=this;
	//加载验证码
	$(oSelf.ele).find('.code span').html(random());
	//点击改变验证码
	$(oSelf.ele).find('.code b').click(function(){
		$(oSelf.ele).find('.code span').html(random());
	})
	//验证码
	$(oSelf.ele).find('.code input').blur(function(){
		var str=$(this).val();
		if(str.length==0){
			$(oSelf.ele).find('.code .hint').css({'display':'block','color':'red'}).html('验证码不能为空');
			$(oSelf.ele).find('.code span').html(random());
		}else if(str==$(oSelf.ele).find('.code span').html()){
			$(oSelf.ele).find('.code .hint').css('display','none');
			oSelf.codeWrite=true;
		}else{
			$(oSelf.ele).find('.code .hint').css({'display':'block','color':'red'}).html('验证码不正确，请重新输入');
			$(oSelf.ele).find('.code span').html(random());
		}
	})
}

//登录
IsLegal.prototype.login=function(){
	var oSelf=this;
	$(oSelf.ele).find('.login').click(function(){
		if(oSelf.userWrite && oSelf.passwordWrite && oSelf.repasswordWrite && oSelf.phoneWrite && oSelf.codeWrite){
			//发送请求
			oSelf.send();
		
		}else{
			alert('请正确填写信息')
			return false;
		}	
		
	})
	
}

//发送Ajax请求
IsLegal.prototype.send=function(){
	var oSelf=this;
	$.ajax({
		type:"get",
		url:"../../php/messages.php",
		async:true,
		data:{
			oName:oSelf.oName,
			oPassword:oSelf.oPassword,
			phone:oSelf.phone
		},
		dataType:'json',
		success:function(responseText){
			alert(responseText);
			window.reload();
		},
		error:function(xhr){
			alert('注册失败：'+xhr.status+' '+xhr.statusText)
		}
	});
}

//获取4位随机数字
function random(){
	var str='';
	var num1=parseInt(Math.random()*9+1);
	for(var i=0;i<4;i++){
		var num2=parseInt(Math.random()*10);
		if(i==0){
			str+=num1;
		}else{
			str+=num2;
		}
	}
	return str;
}
