<?php
header('Content-Type:text/json;charset=utf-8');
//接受用户名并判定是否存在
$username=$_GET['username'];

if(!file_exists('message.json')){
    //返回
    echo json_encode('用户名可用');
}else{
    //读取内容
    $messageArr=json_decode(file_get_contents('message.json'));
//遍历数组中的内容
    for($i=0;$i<count($messageArr);$i++){
        foreach ($messageArr as $obj){
            if($obj->oName==$username){
                echo json_encode('用户名存在，请重新输入');
// 				echo json_encode(array('message'=>'用户名存在,请重新输入'));
            }else{
                echo json_encode('用户名可用');
//              echo json_encode(array('message'=>'用户名可用'));
            }
        }
    }

}


?>