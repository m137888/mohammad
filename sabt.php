<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/parking.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.css">
    <title>ثبت تخلف</title>
</head>

<body>
    <?php
  //ersal etlaat mashin 0.
  if(isset($_POST['btn3']))
  {
      require_once 'config.php';
             $matn="";
            $data1=$_POST['frm3'];
            $numper2=$data1['numper2'];
            $numpwl1=$data1['numpwl1'];
            $year2=$data1['year2'];
            $typetas1=$data1['typetas1'];
            $money1=$data1['money1'];
           if($numper2 !=null && $numpwl1 !=null && $year2 !=null && $typetas1 !=null && $money1 !=null){
            $connect=mysqli_connect("127.0.0.1","root","","takhalof");
           $query="insert into takh (melli,pelak,datet,modelt,price) values ('$numper2','$numpwl1','$year2','$typetas1','$money1');";
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
            <li><a href="login.html"><i class="fa fa-gears"></i> ورود به حساب کاربری </a></li>
            <li><a href="parking.html"><i class="fa fa-home"></i> ثبت پارکینگ </a></li>
            <li><a href="car.html"><i class="fa fa-car"></i> ثبت ماشین </a></li>
            <li><a href="person.html"><i class="fa fa-address-card-o"></i> ثبت اطلاعات شخص </a></li>
            <li><a href="sabt.html"><i class="fa fa-bullhorn"></i> ثبت تخلف </a></li>
            <li><a href="takhalofcar.html"><i class="fa fa-envelope-o"></i> نمایش تخلفات ماشین </a></li>
            <li><a href="takhalofper.html"><i class="fa fa-envelope-o"></i> نمایش تخلفات کدملی </a></li>
            <li><a href="takhalofdate.html"><i class="fa fa-envelope-o"></i> نمایش تخلفات کدملی در زمان های مشخص </a>
            </li>
        </ul>
    </header>
    <div>
        <form method="POST" class="container was-validated rounded p-3 bg-light">
            <h2>ثبت تخلف</h2>
            <input type="text" placeholder="کدملی" class=" form-control w-75 mx-auto  " id="uname"  name="frm3[numper2]" required>
            <input type="text" placeholder="شماره پلاک" class="form-control w-75 mx-auto   " id="pwd1"  name="frm3[numpwl1]" required>
            <input type="date" placeholder="تاریخ تخلف"  class=" form-control w-75 mx-auto " id="pwd2"    name="frm3[year2]" required>
            <input type="text" placeholder="نوع تخلف"class=" form-control w-75 mx-auto  " id="pwd2"    name="frm3[typetas1]" required>
            <input type="text" placeholder="مبلغ جریمه" class=" form-control w-75 mx-auto " id="pwd2"    name="frm3[money1]" required>
            <button type="submit" name="btn3"  class="taghueer1  w-50 btn-outline-primary">ثبت </button>

        </form>



    </div>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

</body>

</html>