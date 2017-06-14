<?php
header('Content-Type:text/json;charset=utf-8');
	
//接受数据
$oName=$_GET['oName'];
$oPassword=$_GET['oPassword'];



    //创建对象保存数据
    class User{
    	public $oName;
        public $oPassword;
       
    }

    $user=new User();
//传值
	$user->oName=$oName;
    $user->oPassword=$oPassword;
 



//从文件中读取数组内容
$Arr =  json_decode( file_get_contents('message.json') );
//遍历数组中的内容
for($i=0;$i<count($Arr);$i++){
    foreach ($Arr as $obj){
        if($obj->oName==$oName && $obj->oPassword==$oPassword){
            echo json_encode('登陆成功');
        }else{
            echo json_encode('账号密码错误');
        }
    }
}



?>