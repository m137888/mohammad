<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/parking.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.css">
    <title>ثبت پارکینگ های راهنمایی و رانندگی</title>
</head>

<body>
    <?php
    //ersal etlaat parking .
    if(isset($_POST['btn7']))
    {
        require_once 'config.php';
               $matn="";
              $data1=$_POST['frm1'];
              $name=$data1['namep'];
              $city=$data1['namec'];
              $code=$data1['nump'];
              $phone=$data1['phonep'];
              $loce=$data1['locp'];
             if($name !=null && $city !=null && $code !=null && $phone !=null && $loce !=null){
  echo $name ." ". $city ." " .$code." ". $phone ." " .$loce;
  $connect=mysqli_connect("127.0.0.1","root","","takhalof");
             $query="insert into parking (namep,cityp,code,phonep,location) values ('$name','$city','$code','$phone','$loce');";
              $connect->set_charset('utf8');
              $sql = mysqli_query($connect,$query);
  
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

            <form method="POST"  class="container was-validated rounded p-3 bg-light">
                <h2>ثبت پارکینگ</h2>
                <input type="text" placeholder="نام" class=" form-control w-75 mx-auto " id="uname"  name="frm1[namep]" required>
                <input type="text" placeholder="نام شهر" class=" form-control w-75 mx-auto " id="pwd1"  name="frm1[namec]" required>
                <input type="text" maxlength="10" placeholder="کد پارکینگ" class=" form-control w-75 mx-auto " id="pwd2"    name="frm1[nump]" required>
                <input type="text" maxlength="11" placeholder="شماره تلفن پارکینگ" class=" form-control w-75 mx-auto " id="pwd3"    name="frm1[phonep]" required>
                <textarea placeholder=" آدرس پارکینگ" class=" form-control w-75 mx-auto " id="pwd4"    name="frm1[locp]"required></textarea>
                <button type="submit" name="btn7" id="btn7" class="  w-50 btn-outline-primary">ثبت </button>

            </form>
        </div>
    </section>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

</body>

</html>