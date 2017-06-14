
//从小到大
function toBig(value1,value2){
	if(value1<value2){
		return -1;
	}else if(value1>value2){
		return 1;
	}else {
		return 0;
	}
}


//从da到xiao
function toSmall(value1,value2){
	if(value1<value2){
		return 1;
	}else if(value1>value2){
		return -1;
	}else {
		return 0;
	}
}



function Sort(selector){
	this.ele=$(selector).get(0);
	this.sortAction();
}




Sort.prototype.sortAction=function(){
	var oSelf=this;
	$(oSelf.ele).parents('.main_rb').find('.sort_t a').toggle(
		function(){
			oSelf.sort(toBig);
		},
		function(){
			oSelf.sort(toSmall);
		}
	)
}





Sort.prototype.sort=function(bigSmall){
	var oSelf=this;
	var obj={};
	var arr=[];
	var len=$(oSelf.ele).find('.sortList span b').size();
	//循环为对象赋值
	for(var i=0;i<len;i++){
		obj[i]=$(oSelf.ele).find('.sortList span b').eq(i).html();
		arr.push(obj[i]);		
	}
	//对数组进行排序
	arr.sort(bigSmall);
//	console.log(obj);
//	console.log(arr);
	
	for(var i=0;i<arr.length;i++){
//		console.log(arr.length);
		for(var key in obj){
			if(arr[i]==obj[key]){
//				console.log(arr[i]);
//				console.log(obj[key]);
				($(oSelf.ele).find('.sortList span b').eq(key).parents('.sortList')).clone(true).appendTo(oSelf.ele);
				delete obj[key];
//				console.log(key)
//				arr=arr.slice(-1);
				continue;
			}
		}
	}
	for(var i=0;i<len;i++){
		$(oSelf.ele).find('.sortList').eq(i).empty();
		console.log(1);
	}
	$(oSelf.ele).find('.sortList:empty').remove();
//	console.log(arr)
	
	
//	for(var i=arr.length;i>0;i--){
////		console.log(arr[i]);
//		for(var j=0;j<len;j++){
////			console.log(arr[i]);
//			if(arr[i]==obj[j]){
//				($(oSelf.ele).find('.sortList span b').eq(j).parents('.sortList')).appendTo(oSelf.ele);
//				delete obj[j];
//				arr.splice(i,1);
//				continue;
//			}
//		}
//	}
	
	
//	arr.push($(oSelf.ele).find('.sortList span b').eq(0).html());
//	arr.push($(oSelf.ele).find('.sortList span b').eq(1).html());
//	arr.push($(oSelf.ele).find('.sortList span b').eq(6).html());
//	console.log(arr);
//	arr.sort(toBig)
//	console.log(arr);
//	console.log($(oSelf.ele).find('.sortList span b').size())
}
