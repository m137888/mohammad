<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/createacc.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.css">
    <title>Create Account</title>
</head>

<body>
    <?php
    //ersal etlaat parking .
    if(isset($_POST['btn8']))
    {
        require_once 'config.php';
               $matn="";
              $data1=$_POST['frm1'];
              $name=$data1['uname'];
              $family=$data1['lname'];
              $age=$data1['uage'];
              $phone=$data1['uphone'];
              $email=$data1['uemail'];
              $password=$data1['upas'];
             if($name !=null && $family !=null && $age !=null && $phone !=null && $email !=null && $pasword !=null){
  echo $name ." ". $family ." ". $age ." ". $phone ." ". $email ." ".$password;
  $connect=mysqli_connect("127.0.0.1","root","","takhalof");
             $query="insert into account (name1,lastname1,age,phone,email,password) values ('$name','$family','$age','$phone','$email','$pasword');";
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

            <form  method="POST" class="container was-validated rounded p-3 bg-light">
                <h2>ایجاد حساب کاربری</h2>
                <input type="text" placeholder="نام"class=" form-control w-75 mx-auto " id="uname"  name="frm1[uname]" required>
                <input type="text" placeholder="نام خانوادگی"class=" form-control w-75 mx-auto " id="lname"  name="frm1[lname]" required>
                <input type="text" maxlength="2" placeholder="سن" class=" form-control w-75 mx-auto " id="uage"  name="frm1[uage]"required>
                <input type="text" maxlength="11" placeholder="شماره تلفن"class=" form-control w-75 mx-auto " id="uphone"  name="frm1[uphone]" required>
                <input type="email" placeholder="ایمیل" class=" form-control w-75 mx-auto " id="uemail"  name="frm1[nemail]"required>
                <input type="password" placeholder="رمز" class=" form-control w-75 mx-auto " id="upas"  name="frm1[upas]"required>
                <input type="password" placeholder="تکراررمز" class=" form-control w-75 mx-auto " id="upass"  name="frm1[upass]"required>
                <button type="submit" name="btn8" id="btn8" class="  w-50 btn-outline-primary">ثبت نام</button>

            </form>
        </div>
    </section>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

</body>

</html>