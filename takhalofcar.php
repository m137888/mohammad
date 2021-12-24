<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/forget.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.css">
    <title>تخلفات ماشین</title>
</head>

<body>
    <?php
    //daryaft etlaat .
    if(isset($_POST['btn5']))
    {
    require_once 'config.php';
           $matn="";
          $data8=$_POST['frm5'];
          $pel=$data8['pelak2'];

         if($pel!=null ){

          $connect=mysqli_connect("127.0.0.1","root","","takhalof");
          $query="SELECT person.name,person.last,SUM(price) FROM takh,person WHERE person.melli=takh.melli AND takh.pelak='$pel' group by takh.melli ";
          $connect->set_charset('utf8');
          $sql = mysqli_query($connect, $query);
          //var_dump($sql);
          while($row = mysqli_fetch_array($sql)){//$pici=$row['pelak'];};
         //$matn=$pici;
          echo "نام: ".$row['name']."        "."نام خانوادگی: " .$row['last']."        ". "مجموع تخلفات :".$row['SUM(price)'].  "<br>";};

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

            <form>
                <h2>تخلفات ماشین</h2>
                <input type="text" placeholder="شماره پلاک"  name="frm5[pelak2]" class=" form-control w-75 mx-auto " required>
                <button  type="submit" name="btn5">نمایش تخلفات</button>

            </form>
        </div>
    </section>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <textarea class="w-100" rows="5" disabled>
<?php // echo $mat; ?>
</textarea>
</body>

</html>