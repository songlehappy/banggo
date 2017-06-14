<?php
header('Content-Type:text/json;charset=utf-8');

//接受数据
$oName=$_GET['oName'];
$oPassword=$_GET['oPassword'];
$phone=$_GET['phone'];

//创建对象保存数据
class User{
    public $oName;
    public $oPassword;
    public $phone;
}

$user=new User();
//传值
$user->oName=$oName;
$user->oPassword=$oPassword;
$user->phone=$phone;

//判定是否存在这个文件
if(!file_exists('message.json')){
    //第一次保存
    //创建一个新数组
    $arr = array();
}else{
    //从文件中读取数组内容
    $arr =  json_decode( file_get_contents('message.json') );
}

//将保存的对象加入json文件中
array_push($arr,$user);

//再将其转化为json字符串保存到json文件中
$messageStr=json_encode($arr);

$result=file_put_contents('message.json',$messageStr);

if($result){
    echo json_encode('注册成功');
}else{
    echo json_encode('注册失败');
}


?>