<?php 
header('Content-type:text/html;charset=utf8');

mysql_connect('localhost','root','123456');
mysql_query('use sz1902');

$username = $_GET['username'];
$pwd = $_GET['pwd'];

//sql
$sql = "select * from student where usernanme='$username' and password = '$pwd'";
$result = mysql_query($sql);
$row = mysql_fetch_assoc($result);

if($row){
  $responseData = ['code'=>200,'message'=>'登录成功'];
}else{
  $responseData = ['code'=>-1,'message'=>'用户名或密码错误'];
}
echo json_encode($responseData);
