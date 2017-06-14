
//发送请求
function SendCode(selector){
	this.ele=$(selector).get(0);
	this.isTrue();
	this.codeAction();
	this.getSend();
}

//验证码
SendCode.prototype.codeAction=function(){
	var oSelf=this;
	//加载验证码
	$(oSelf.ele).find('.code1').html(random());
	$(oSelf.ele).find('.code2').click(function(){
		//加载验证码
		$(oSelf.ele).find('.code1').html(random());
	});
	
	$(oSelf.ele).find('.code').blur(function(){
//		console.log($(this).val());
//		console.log($(this).next().html());
		
		if($(this).val()==$(this).next().html()){
//			console.log(1);
			$(this).nextAll('.hint').html('');
			oSelf.code=true;
		}else{
			$(this).nextAll('.hint').html('验证码错误');
			//重新加载验证码
			$(oSelf.ele).find('.code1').html(random());
			oSelf.code=false;
		}
	})
	
	
}

//获取内容并发送请求
SendCode.prototype.getSend=function(){
	var oSelf=this;
	$(oSelf.ele).find('.btn .login').on({
		'click':function(){
			//获取密码
			oSelf.oPassword=$(oSelf.ele).find('input').eq(1).val();
			//获取账号
			if($(oSelf.ele).find('input').eq(0).prev().html()=='用户名：'){
				oSelf.oName=$(oSelf.ele).find('input').eq(0).val();
				
			}else if($(oSelf.ele).find('input').eq(0).prev().html()=='手机号：'){
				oSelf.phone=$(oSelf.ele).find('input').eq(0).val();
				
			}
			if(oSelf.code){
					//发送Ajax请求
				$.ajax({
					type:"get",
					url:"../../php/login.php",
					async:true,
					data:{
						oName:oSelf.oName,							
						oPassword:oSelf.oPassword,
						phone:oSelf.phone,
					},
					dataType:'json',
					success:function(responseText){
						alert(responseText);
						//cookie保存
						saveCookie(oSelf.oName,oSelf.oPassword)
						//重新加载验证码
						$(oSelf.ele).find('.code1').html(random());
					},
					error:function(xhr){
						alert('登录失败：'+xhr.status+' '+xhr.statusText);
						console.log(xhr.responseText)
					}
				});
			}else{
				alert('验证码错误');
				//重新加载验证码
				$(oSelf.ele).find('.code1').html(random());
			}
			
		}
	})
	
	
}



SendCode.prototype.isTrue=function(){
	var oSelf=this;
	if($.cookie('user')){
		arr = JSON.parse($.cookie('user'));
		oSelf.oName=$(oSelf.ele).find('input').eq(0).val(arr[0]);
		oSelf.oPassword=$(oSelf.ele).find('input').eq(1).val(arr[1]);
	}
}




function saveCookie(value1,value2){
	var arr=[];
	var obj={};
	obj.a=value1;
	obj.b=value2;
	arr.push(obj.a);
	arr.push(obj.b);
	str=JSON.stringify(arr);
	$.cookie('user',str,{expires:7,path: '/'})
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