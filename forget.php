<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/forget.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.css">
    <title>forget Password</title>
</head>

<body>
    <?php
    //daryaft etlaat .
    if(isset($_POST['btn10']))
    {
    require_once 'config.php';
           $matn="";
          $data8=$_POST['frm10'];
          $email=$data8['uemail'];

         if($email!=null ){

          $connect=mysqli_connect("127.0.0.1","root","","takhalof");
          $query="SELECT password1 FROM account WHERE  email='$email' ";
          $connect->set_charset('utf8');
          $sql = mysqli_query($connect, $query);
          //var_dump($sql);
          while($row = mysqli_fetch_array($sql)){//$pici=$row['pelak'];};
         //$matn=$pici;
          echo "رمز عبور: ".$row['password1'].  "<br>";};

      }
    }

         ?>
    <header>
        <div id="head">
            <a href="http://shahreza.ac.ir">
                <img src="image/logo.png" title="دانشگاه شهرضا" id="topleft" alt=""></a>
            <p>به سامانه راهنمایی رانندگی خوش آمدید</p>
            <a href="http://rahvar120.ir">
                <img src="image/naja.png" title="راهنمایی رانندگی" id="topright" alt=""></a>
        </div>
        <ul>
            <li id="home"><a href="main.html"><i class="fa fa-home"></i> خانه</a></li>
            <li><a href="login.php"><i class="fa fa-gears"></i> ورود به حساب کاربری </a></li>
            <li><a href="parking.php"><i class="fa fa-home"></i> ثبت پارکینگ </a></li>
            <li><a href="car.php"><i class="fa fa-car"></i> ثبت ماشین </a></li>
            <li><a href="person.php"><i class="fa fa-address-card-o"></i> ثبت اطلاعات شخص </a></li>
            <li><a href="sabt.php"><i class="fa fa-bullhorn"></i> ثبت تخلف </a></li>
            <li><a href="takhalofcar.php"><i class="fa fa-envelope-o"></i> نمایش تخلفات ماشین </a></li>
            <li><a href="takhalofper.php"><i class="fa fa-envelope-o"></i> نمایش تخلفات کدملی </a></li>
            <li><a href="takhalofdate.php"><i class="fa fa-envelope-o"></i> نمایش تخلفات کدملی در زمان های مشخص </a>
            </li>
        </ul>
    </header>
    <section>
        <div>

            <form  method="POST" class="container was-validated rounded p-3 bg-light">
                <h2>فراموشی رمز عبور</h2>
                <input type="email" placeholder="ایمیل"class=" form-control w-75 mx-auto " id="uemail"  name="frm10[uemail]" required>
                <button type="submit" name="btn10" id="btn10" class="  w-50 btn-outline-primary">ارسال کد</button>

            </form>
        </div>
    </section>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

</body>

</html>