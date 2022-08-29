<?php

    $array = array("name" => "", "subject" => "", "email" => "", "message" => "", 
    "nameError" => "", "subjectError" => "", "emailError" => "", "messageError" => "", "isSuccess" => false);


    $emailTo = "info@mydivinecare.com";

    if ($_SERVER["REQUEST_METHOD"]== "POST")
    {
        $array["name"] = verifyInput($_POST["name"]);
        $array["subject"] = verifyInput($_POST["subject"]);
        $array["email"] = verifyInput($_POST["email"]);
        $array["message"] = verifyInput($_POST["message"]);
        $array["isSucces"] = true;
        $emailText = "";

        if(empty($array["name"]))
        {
            $array["nameError"] = "Your Name Please!";
            $array["isSucces"] = false;
        }
        else
        {
            $emailText .= "Name: {$array["name"]}\n";
        }

        if(empty($array["subject"]))
        {
            $array["subjectError"] = "Your Subject Please!";
            $array["isSucces"] = false;
        }

        else
        {
            $emailText .= "Subject: {$array["subject"]}\n";

        }

        if(empty($array["email"]))
        {
            $array["emailError"] = "Your Email Please!";
            $array["isSucces"] = false;
        }

        else
        {
            $emailText .= "Email: {$array["email"]}\n";
        }

        if(empty($array["message"]))
        {
            $array["messageError"] = "Your Message Please!";
            $array["isSucces"] = false;
        }
        else
        {
            $emailText .= "Message: {$array["message"]}\n";
        }

        if($array["isSucces"])
        {
            $headers = "From: {$array["name"]} <{$array["email"]}>\r\nReplay-To: {$array["email"]}";
            mail($emailTo, "New Message From Your Website", $emailText, $headers);
        }

        echo json_encode($array);
    }

    function verifyInput($var)
    {
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);
        return $var;

    }

?>

