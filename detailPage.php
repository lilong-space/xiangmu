<?php
    header("Content:html/text;charset=utf-8");
    $id = $_GET["id"];
    $con = mysql_connect("localhost","root","root");
    mysql_select_db("2021-1-5",$con);
    $result = mysql_query("select * from detailpage where id = '$id'",$con);
    while($row = mysql_fetch_assoc($result)){
        $arr[] = $row;
    }
    echo json_encode($arr);
    mysql_close($con);
?>