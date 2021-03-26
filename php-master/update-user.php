<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->id) 
	&& isset($data->user_name) 
	&& isset($data->user_email) 
	&& is_numeric($data->id) 
	&& !empty(trim($data->user_name)) 
	&& !empty(trim($data->user_email))
	){
        $updateUser = mysqli_query($db_conn,"UPDATE `publications` SET `title`='$username', `year`='$useremail' WHERE `id`='$data->id'");
        if($updateUser){
            echo json_encode(["success"=>1,"msg"=>"User data updated."]);
        }
      
    else{
        echo json_encode(["success"=>0,"msg"=>"Invalid Email Address!"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}