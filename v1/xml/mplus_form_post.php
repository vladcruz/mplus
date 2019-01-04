<?php
    // Connecting to the Database
    $servername = "localhost";
    $username = "vladc049_mplus";
    $password = "dois6454meia!";
    $dbname = "vladc049_mplus";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error)
    {
        die("Connection failed: " . $conn->connect_error);
    }
    else
    {
        // Getting the POST values that were passed
        $pers_cpf = mysqli_real_escape_string($conn, $_POST["pers_cpf"]);
        $pers_name = mysqli_real_escape_string($conn, $_POST["pers_name"]);
        $pers_email = mysqli_real_escape_string($conn, $_POST["pers_email"]);
        $temp = explode("/", $_POST["pers_bdate"]);
        echo $temp[0] . "<br>";
        echo $temp[1] . "<br>";
        echo $temp[2] . "<br>";
        /* $pers_bdate = mysqli_real_escape_string($conn, $_POST["pers_bdate"]); */
        $pers_bdate = mysqli_real_escape_string($conn, $temp[2] . "-" . $temp[1] . "-" $temp[0]);
        $pers_mphone = mysqli_real_escape_string($conn, $_POST["pers_mphone"]);
        $pers_fphone = mysqli_real_escape_string($conn, $_POST["pers_fphone"]);
        $addr_cep = mysqli_real_escape_string($conn, $_POST["addr_cep"]);
        $addr_addr = mysqli_real_escape_string($conn, $_POST["addr_addr"]);
        $addr_state = mysqli_real_escape_string($conn, $_POST["addr_state"]);
        $addr_city = mysqli_real_escape_string($conn, $_POST["addr_city"]);
        $vehi_plate = mysqli_real_escape_string($conn, $_POST["vehi_plate"]);
        $vehi_manufacturer = mysqli_real_escape_string($conn, $_POST["vehi_manufacturer"]);
        $vehi_model = mysqli_real_escape_string($conn, $_POST["vehi_model"]);
        $vehi_desc = mysqli_real_escape_string($conn, $_POST["vehi_desc"]);
        $vehi_manyear = mysqli_real_escape_string($conn, $_POST["vehi_manyear"]);
        $vehi_modyear = mysqli_real_escape_string($conn, $_POST["vehi_modyear"]);
        $vehi_chassis = mysqli_real_escape_string($conn, $_POST["vehi_chassis"]);
        $vehi_renavam = mysqli_real_escape_string($conn, $_POST["vehi_renavam"]);
        $insu_renew = mysqli_real_escape_string($conn, $_POST["insu_renew"]);
        $insu_company = mysqli_real_escape_string($conn, $_POST["insu_company"]);
        $insu_bonus = mysqli_real_escape_string($conn, $_POST["insu_bonus"]);
        $insu_accident = mysqli_real_escape_string($conn, $_POST["insu_accident"]);

        // Getting today´s date
        $reqt_cdt = date("Y/m/d");

        echo $reqt_cdt . "<br>";
        echo $pers_cpf . "<br>";
        echo $pers_name . "<br>";
        echo $pers_email . "<br>";
        echo $pers_bdate . "<br>";
        echo $pers_mphone . "<br>";
        echo $pers_fphone . "<br>";
        echo $addr_cep . "<br>";
        echo $addr_addr . "<br>";
        echo $addr_state . "<br>";
        echo $addr_city . "<br>";
        echo $vehi_plate . "<br>";
        echo $vehi_manufacturer . "<br>";
        echo $vehi_model . "<br>";
        echo $vehi_desc . "<br>";
        echo $vehi_manyear . "<br>";
        echo $vehi_modyear . "<br>";
        echo $vehi_chassis . "<br>";
        echo $vehi_renavam . "<br>";
        echo $insu_renew . "<br>";
        echo $insu_company . "<br>";
        echo $insu_bonus . "<br>";
        echo $insu_accident . "<br>";

        $sql = "INSERT INTO tbl_requests (reqt_cdt, reqt_cpf, reqt_nam, reqt_ema, reqt_bdt, reqt_fmb, reqt_fxf, reqt_cep, reqt_add, reqt_sta, reqt_cit, reqt_plt, reqt_man, reqt_mod, reqt_des, reqt_myr, reqt_mmy, reqt_cha, reqt_ren, reqt_typ, reqt_inc, reqt_bon, reqt_acc) VALUES ('" . $reqt_cdt . "', '" . $pers_cpf . "', '" .  $pers_name . "', '" . $pers_email . "', '" . $pers_bdate . "', '" . $pers_mphone . "', '" . $pers_fphone . "', '" . $addr_cep . "', '" . $addr_addr . "', '" . $addr_state . "', '" . $addr_city . "', '" . $vehi_plate . "', '" . $vehi_manufacturer . "', '" . $vehi_model . "', '" . $vehi_desc . "', '" . $vehi_manyear . "', '" . $vehi_modyear . "', '" . $vehi_chassis . "', '" . $vehi_renavam . "', '" . $insu_renew . "', '" . $insu_company . "', '" . $insu_bonus . "', '" . $insu_accident . "')";

        if($conn->query($sql) === TRUE)
        {
            echo "Gravado com Sucesso!";
        }
        else
        {
            echo "<br>";
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    $conn->close();
?>
