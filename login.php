<?php
    header("Content-type:text/html;charset=utf-8");
    $userName = $_GET["userName"];
    $userPwd = $_GET["userPwd"];
    $con = mysql_connect("localhost","root","root");
    mysql_select_db("2021-1-5",$con);
    $result = mysql_query("select * from information where account = '$userName' and cipher = '$userPwd'",$con);
    if(mysql_num_rows($result) == 1){
        echo "1";
    }else{
        echo "0";
    }
    mysql_close($con);
?>