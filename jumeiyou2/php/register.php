<?php 
header('Content-type:text/html;charset=utf8');

mysql_connect('localhost','root','123456');
mysql_query('use sz1902');

$username = $_GET['username'];
$pwd = $_GET['pwd'];
$sql = "insert into student(usernanme,password) values('$username','$pwd')";
mysql_query($sql);
$num = mysql_affected_rows();
if( $num>0 ){
	//echo '成功';
	//跳转到列表页
	$responseData = ['code'=>200,'message'=>'注册成功'];
}else{
    $responseData = ['code'=>-1,'message'=>'注册失败'];
}
echo json_encode($responseData);