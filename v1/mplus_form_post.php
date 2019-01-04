<?php
  // Forcing the UTF-8 Connection
  header("Content-Type: text/html;charset=utf-8");

  // Connecting to the Database
  $servername = "localhost";
  $username = "vladc049_mplus";
  $password = "dois6454meia!";
  $dbname = "vladc049_mplus";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $conn->set_charset("utf8");

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
    $birthdate = $temp[2] . "-" . $temp[1] . "-" . $temp[0];
    $pers_bdate = mysqli_real_escape_string($conn, $birthdate);

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
    $reqt_cdt = date("Y-m-d");

    $sql = "INSERT INTO tbl_requests (reqt_cdt, reqt_cpf, reqt_nam, reqt_ema, reqt_bdt, reqt_fmb, reqt_fxf, reqt_cep, reqt_add, reqt_sta, reqt_cit, reqt_plt, reqt_man, reqt_mod, reqt_des, reqt_myr, reqt_mmy, reqt_cha, reqt_ren, reqt_typ, reqt_inc, reqt_bon, reqt_acc) VALUES ('" . $reqt_cdt . "', '" . $pers_cpf . "', '" .  $pers_name . "', '" . $pers_email . "', '" . $pers_bdate . "', '" . $pers_mphone . "', '" . $pers_fphone . "', '" . $addr_cep . "', '" . $addr_addr . "', '" . $addr_state . "', '" . $addr_city . "', '" . $vehi_plate . "', '" . $vehi_manufacturer . "', '" . $vehi_model . "', '" . $vehi_desc . "', '" . $vehi_manyear . "', '" . $vehi_modyear . "', '" . $vehi_chassis . "', '" . $vehi_renavam . "', '" . $insu_renew . "', '" . $insu_company . "', '" . $insu_bonus . "', '" . $insu_accident . "')";

    // echo "<br><br>" . $sql . "<br><br>";

    if(mysqli_query($conn, $sql) === TRUE)
    {
        $sql_protocol = "SELECT MAX(reqt_idx) FROM tbl_requests WHERE reqt_cpf = '" . $pers_cpf . "'";
        $result = mysqli_query($conn, $sql_protocol);

        if(mysqli_num_rows($result) > 0)
        {
          echo "<html>";
          echo "<head>";
          echo "<title>MPlus - Protocolo de Solicita&ccedil;&atilde;o de Seguro</title>";
          echo "<style>";
          echo ".confirmation";
          echo "{";
          echo "position: fixed;";
          echo "top: 50%;";
          echo "left: 50%;";
          echo "transform: translate(-50%, -50%);";
          echo "font-size: 30px;";
          echo "font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;";
          echo "text-align: center;";
          echo "}";
          echo "</style>";
          echo "</head>";
          echo "<body>";
          while($row = mysqli_fetch_array($result))
          {
            echo "<div class='confirmation'>";
            echo "Obrigado <b>" . $pers_name . "</b> por sua Solicita&ccedil;&atilde;o!<br><br>";
            echo "N&uacute;mero do seu Protocolo: <b>" . $row[0] . "</b><br><br>";
            echo "N&atilde;o se preocupe, a confirma&ccedil;&atilde;o tamb&eacute;m ir&aacute; para o E-Mail: <b>" . $pers_email . "</b><br>";
            echo "</div>";
          }
          echo "</body>";
          echo "</html>";

          $headers = "MIME-Version: 1.0" . "\r\n";
          $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
          $headers .= "From: noreply@mirtecnologia.com.br" . "\r\n";
          $to_mail = $pers_email;
          $subject = "Procoloco de Solicitação de Seguro - MPlus";
          $message =
          "Obrigado <b>" . $pers_name . "</b> por sua Solicita&ccedil;&atilde;o!<br>
          N&uacute;mero do seu Protocolo: <b>" . $row[0] . "</b><br>
          Em Breve entraremos em contato!";

          mail($to_mail,$subject,$message, $headers);

        }
        else
        {
            echo "<br>";
            echo "Error: " . $sql_protocol . "<br>" . $conn->error;
        }
    }
    else
    {
        echo "<br>";
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
  }

  mysqli_free_result($result);
  $conn->close();
?>
