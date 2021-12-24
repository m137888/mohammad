   $(document).ready(function(){

    var pDate,date;
     setInterval(()=>{
         date=new persianDate(Date())
         pDate= date.format('HH:mm:ss - dddd DD MMMM YYYY')
         $("#date").text(pDate )},1000)

     $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);});


    /*

    $(document).ready(function () {
        $(".edit_header").hide();
        $(".edit_header_1").hide();
        $(".edit_header_2").hide();
        $("td.edit").hide();
        $("td.accept").hide();
        $("td.reject").hide();

        $("#edit").click(function () {
            $(".edit_header").toggle("step");
            $(".edit_header_1").toggle("step");
            $(".edit_header_2").toggle("step");
            $("td.edit").toggle("step");
            $("td.accept").toggle("step");
            $("td.reject").toggle("step");

        });
    });*/


//page login
/*
$(function () {
    $("button.btnlogin").on("click",function (e) {
        e.preventDefault();
        var user=null;
        var pass=null;
        var user=$("input.inpuser").val();
        var pass=$("input.inppass").val();
     // alert( user+ pass);
        if(user=="" || pass=="" )
        {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}
        else{
        $.ajax({
            url:"logincode.php",
            method:"get",
            data:{
                "user1":user,
                "pass1":pass,
               
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "خوش امديد",
                    text: "اطلاعات صحيح است",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
      }   }) } 
    })})
*/





    //seen
    $(function () {
        $(".seen").on("click",function (e) {
            e.preventDefault();
            $.ajax({
                url:"controller/process.php",
                method:"get",
                data:{
                    "data_id_seen":$(this).parent().parent().attr("data-id")
                },
                success:function (response) {
                    $(`td[data-seen=${response}]`).html("<img src='image/n7.jpg' class='accept' title=' تاييد كردن' alt='تاييد كردن ' width='40' height='40'>");
                }
            })
        })
    });

    $(function () {
        $(".seen1").on("click",function (e) {
            e.preventDefault();
            $.ajax({
                url:"controller/process.php",
                method:"get",
                data:{
                    "data_id_seen1":$(this).parent().parent().attr("data-id")
                },
                success:function (response) {
                    $(`td[data-seen=${response}]`).text("مشاهده");
                }
            })
        })
    });

    //accept
    $(function () {
        $(".accept").on("click",function (e) {
            e.preventDefault();
            $.ajax({
                url:"controller/process.php",
                method:"get",
                data:{
                    "data_id_accept":$(this).parent().parent().attr("data-id")
                },
                success:function (response) {
                    $(`td[data-reception=${response}]`).html("<img src='image/n8.png' class='accept' title=' تاييد كردن' alt='تاييد كردن ' width='40' height='40'>");
                }
            })
        })
    });
     //reject
    $(function () {
        $(".reject").on("click",function (e) {
            e.preventDefault();
            $.ajax({
                url:"controller/process.php",
                method:"get",
                data:{
                    "data_id_reject":$(this).parent().parent().attr("data-id")
                },
                success:function (response) {
                    $(`td[data-reception=${response}]`).html("<img src='image/n9.png' class='reject' title=' عدم تاييد' alt=' عدم تاييد' width='40' height='40'>");
                }
            })
        })
    });
    //message answer
    $(function () {
        $(".send").on("click",function (e) {
            e.preventDefault();
            var id = $(this).parent().attr("data-id");
            console.log(id);
            var message=$(`textarea[data-id=${id}]`).val();
            $.ajax({
                url:"controller/process.php",
                method:"get",
                data:{
                    "data_id_message":$(this).parent().attr("data-id"),
                    "message":message,
                },
                success:function (response) {
                    swal({
                        title:  "ثبت گردید!",
                        text: "پاسخ با موفقیت ثبت گردید",
                        icon: "success",
                        button: "بسیار خوب",
                    });
                }
            })
        })
    })



    //message answer
    $(function () {
        $(".send1").on("click",function (e) {
            e.preventDefault();
            var id = $(this).parent().attr("data-id");
            console.log(id);
            var message=$(`textarea[data-id=${id}]`).val();
            $.ajax({
                url:"controller/process.php",
                method:"get",
                data:{
                    "data_id_message1":$(this).parent().attr("data-id"),
                    "message1":message,
                },
                success:function (response) {
                    swal({
                        title:  "ثبت گردید!",
                        text: "پاسخ با موفقیت ثبت گردید",
                        icon: "success",
                        button: "بسیار خوب",
                    });
                }
            })
        })
    })


    //ersal etelaat
    $(function () {
        $("input.send2").on("click",function (e) {
            e.preventDefault();
           // var id = $(this).parent().attr("data-id");
           // console.log(id);
            //var name=$("input.name").val();
            var email=$("input.email").val();
            var Mobilenumber=$("input.Mobilenumber").val();
          //  var gender=$("input.gender").val();
          //  var family=$("input.family").val();
          //  var Nationalnumber=$("input.Nationalnumber").val();
          //  var YearBirth=$("input.YearBirth").val();
          //  var maritalstatus=$("input.maritalstatus").val();
          //  var namefather=$("input.namefather").val();
            var Fixednumber=$("input.Fixednumber").val();
          //  var Degree=$("select.Degree").val();
            var Address=$("input.Address").val();
          //alert( name+ email+ Mobilenumber+ gender+ family+ maritalstatus+ Nationalnumber+ YearBirth+ namefather+ Fixednumber+ Degree+ Address);
            if( email==null || Mobilenumber==null ||  Fixednumber==null ||  Address==null)
            {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}
            else{
            $.ajax({
                url:"resaletlaat.php",
                method:"get",
                data:{
                    "email1":email,
                    "Mobilenumber1":Mobilenumber,
                    "Fixednumber1":Fixednumber,
                    "Address1":Address,
                },
                success:function (response) {
                    if(response==1){swal({
                        title:  "ثبت گردید!",
                        text: "پاسخ با موفقیت ثبت گردید",
                        icon: "success",
                        button: "بسیار خوب"
                    });location.reload();}
                    else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
          }   }) } })})



//taghueer ramz
$(function () {
    $("input.taghueer1").on("click",function (e) {
        e.preventDefault();
       // var id = $(this).parent().attr("data-id");
       // console.log(id);
       var numper1=null;
        var passold1=null;
        var passnew1=null;
        var passnew2=null;
        var remember1=null;

        var numper1=$("input.numper1").val();
        var passold1=$("input.passold1").val();
        var passnew1=$("input.passnew1").val();
        var passnew2=$("input.passnew2").val();
        var remember1=$("input.remember1").val();
        if( numper1=="" || passold1=="" || passnew1=="" || passnew2=="")
        {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}
        else if(passnew1 !=passnew2)
       {swal("توجه", "رمز جديد و تاييدش همخواني ندارد", "error");}
        else{
        $.ajax({
            url:"ramzshakhsi.php",
            method:"get",
            data:{
                "numper1":numper1,
                "passold1":passold1,
                "passnew1":passnew1,
                "passnew2":passnew2,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}})})

        

//taghueer taghueerpassuser
$(function () {
    $("input.taghueerpassuser").on("click",function (e) {
        e.preventDefault();


        var numperson1=null;
        var numperson2=null;

        var numperson1=$("input.numperson1").val();
        var numperson2=$("input.numperson2").val();
       
        if( numperson1=="" || numperson2=="")
        {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}
        else if(numperson1 !=numperson2)
       {swal("توجه", "شماره پرسنلي و تاييدش همخواني ندارد", "error");}
        else{
        $.ajax({
            url:"taghueerpassuser.php",
            method:"get",
            data:{
                "numperson1":numperson1,
                "numperson2":numperson2,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}})})



//addd user
$(function () {
    $("button.btnadduser").on("click",function (e) {
        e.preventDefault();
       // var id = $(this).parent().attr("data-id");
       // console.log(id);
       var personelnumes1=null;var familyes1=null;var YearBirthes1=null;
        var namefamilyes1=null;var personelnumes1=null;var Degrees1=null;
        var levelworkings1=null;var typeworkings1=null;var maritalstatus1=null;
        var ehrazes1=null;var namefathers1=null;var genders1=null;



        
        var personelnumes1=$("input.personelnumes1").val();
        var namefamilyes1=$("input.namefamilyes1").val();
        var levelworkings1=$("select.levelworkings1").val();
        var ehrazes1=$("input.ehrazes1").val();
        var familyes1=$("input.familyes1").val();
        var numberperses1 =$("input.numberperses1 ").val();
        var typeworkings1=$("select.typeworkings1").val();

        var genderse1 = document.getElementsByName("genders1");
        for (var i in genderse1){if (genderse1[i].checked){var genderse1111=(genderse1[i].value);}}

        var namefathers1=$("input.namefathers1").val();
        var YearBirthes1=$("input.YearBirthes1").val();
        var Degrees1=$("select.Degrees1").val();

        var maritalst1 = document.getElementsByName("maritalstatuse1");
        for (var i in maritalst1){if (maritalst1[i].checked){var maritalst222=(maritalst1[i].value);}}

        if( personelnumes1=="" || namefamilyes1=="" || levelworkings1=="" ||   ehrazes1==""   || familyes1=="" || numberperses1==""  || 
            typeworkings1==""  || genderse1111==""      || namefathers1==""   || YearBirthes1=="" || Degrees1==""  || maritalst222=="" )
        {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}

        else{
        $.ajax({
            url:"adduserpers.php",
            method:"get",
            data:{
                "personelnumes1":personelnumes1,
                "namefamilyes1":namefamilyes1,
                "levelworkings1":levelworkings1,
                "ehrazes1":ehrazes1,
                "familyes1":familyes1,
                "numberperses1":numberperses1,
                "typeworkings1":typeworkings1,
                "genders1":genderse1111,
                "namefathers1":namefathers1,
                "YearBirthes1":YearBirthes1,
                "Degrees1":Degrees1,
                "maritalstatus1":maritalst222,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}})})



//del user
$(function () {
    $("button.btndeluser").on("click",function (e) {
        e.preventDefault();

       var personelnume1=null;
        var levelworking1=null;
        var typeworking1=null;

        var personelnumes1=$("input.personelnumes1").val();
        var levelworkings1=$("select.levelworkings1").val();
        var typeworkings1=$("select.typeworkings1").val();
        if( personelnumes1=="")
        {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}
      
        else{
        $.ajax({
            url:"deluserpers.php",
            method:"get",
            data:{
                "personelnumes1":personelnumes1,
                "levelworkings1":levelworkings1,
                "typeworkings1":typeworkings1,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}
    })})





        
//edit user
$(function () {
    $("button.btnedituser").on("click",function (e) {
        e.preventDefault();
       // var id = $(this).parent().attr("data-id");
       // console.log(id);
       var personelnumes1=null;var familyes1=null;var YearBirthes1=null;
       var namefamilyes1=null;var personelnumes1=null;var Degrees1=null;
       var levelworkings1=null;var typeworkings1=null;var maritalst222=null;
       var ehrazes1=null;var namefathers1=null;var genderse1111=null;

       var personelnumes1=$("input.personelnumes1").val();
       var namefamilyes1=$("input.namefamilyes1").val();
       var levelworkings1=$("select.levelworkings1").val();
       var ehrazes1=$("input.ehrazes1").val();
       var familyes1=$("input.familyes1").val();
       var numberperses1 =$("input.numberperses1 ").val();
       var typeworkings1=$("select.typeworkings1").val();
       var namefathers1=$("input.namefathers1").val();
       var YearBirthes1=$("input.YearBirthes1").val();
       var Degrees1=$("select.Degrees1").val();

       var genderse1 = document.getElementsByName("genders1");
       for (var i in genderse1){if (genderse1[i].checked){var genderse1111=(genderse1[i].value);}}

       var maritalst1 = document.getElementsByName("maritalstatuse1");
       for (var i in maritalst1){if (maritalst1[i].checked){var maritalst222=(maritalst1[i].value);}}



       if( personelnumes1=="" || namefamilyes1=="" || levelworkings1=="" ||   ehrazes1==""   || familyes1=="" || numberperses1==""  || 
           typeworkings1==""  || genderse1111==""      || namefathers1==""   || YearBirthes1=="" || Degrees1==""  || maritalst222=="" )
       {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}


        else{
        $.ajax({
            url:"edituserpers.php",
            method:"get",
            data:{
                "personelnumes1":personelnumes1,
                "namefamilyes1":namefamilyes1,
                "levelworkings1":levelworkings1,
                "ehrazes1":ehrazes1,
                "familyes1":familyes1,
                "numberperses1":numberperses1,
                "typeworkings1":typeworkings1,
                "genders1":genderse1111,
                "namefathers1":namefathers1,
                "YearBirthes1":YearBirthes1,
                "Degrees1":Degrees1,
                "maritalstatus1":maritalst222,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}})})





        //add addtaetilat
$(function () {
    $("input.addtaetilat").on("click",function (e) {
        e.preventDefault();

       var time1=null;var daysabte1=null;var detasabte1=null;

       var time1 = document.getElementsByName("typesabte1");
        for (var i in time1){if (time1[i].checked){var timing=(time1[i].value);}}

       var daysabte1=$("select.daysabte1").val();
       var detasabte1=$("input.detasabte1").val();
       if( timing==null )
       {swal("توجه", "لطفا نوع انتخاب خود را مشخص ننماييد", "error");}
       else if( timing=="روز" && daysabte1==null)
       {swal("توجه", "لطفا نوع روز خود را مشخص ننماييد", "error");}
       else if( timing=="تاريخ" && detasabte1==null)
       {swal("توجه", "لطفا نوع تاريخ خود را مشخص ننماييد", "error");}

        else{
            
        $.ajax({
            url:"taetilat.php",
            method:"get",
            data:{
                "timing":timing,
                "daysabte1":daysabte1,
                "detasabte1":detasabte1,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}})})



        //deltaetilat


        
$(function () {
    $("input.deltaetilat").on("click",function (e) {
        e.preventDefault();

       var coderooz1=null;

       var coderooz1=$("input.coderooz1").val();
       if( coderooz1==null )
       {swal("توجه", "لطفا كدروز مد نظر را مشخص ننماييد", "error");}
        else{
            
        $.ajax({
            url:"deltaetilat.php",
            method:"get",
            data:{
                "coderooz1":coderooz1,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}})})


//ersal ertebat
$(function () {
    $("input.ertebat").on("click",function (e) {
        e.preventDefault();
        var topic1=$("input.topic1").val();
        var txt1=$("textarea.txt1").val();
        if( topic1=="" || txt1=="" )
        {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}
        else{
        $.ajax({
            url:"ersalertebat.php",
            method:"get",
            data:{
                "topic1":topic1,
                "txt1":txt1,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}})})




//ersal ersaldarkhast
$(function () {
    $("button.ersaldarkhast1").on("click",function (e) {
        e.preventDefault();
        var typerequest1=null;var typeworking1=null;var detastart1=null;var detafinish1=null;var detafinish1=null;var name2=null;
        var numberdate1=null;var timestart1=null;var timefinish1=null;var numberpersoneli1=null;var txt2=null;
        

        var requester1 = document.getElementsByName("typerequeste1");
        for (var i in requester1){if (requester1[i].checked){var requester111=(requester1[i].value);}}

        var requester2 = document.getElementsByName("typeworkingss1");
        for (var i in requester2){if (requester2[i].checked){var requester222=(requester2[i].value);}}

        var detastart1=$("input.detastart1").val();
        var detafinish1=$("input.detafinish1").val();
        var name2=$("input.name2").val();
        var numberdate1=$("input.numberdate1").val();
        var timestart1=$("input.timestart1").val();
        var timefinish1=$("input.timefinish1").val();
        var numberpersoneli1=$("input.numberpersoneli1").val();
        var txt2=$("textarea.txt2").val();
        
        
        if( typerequest1=="" || typeworking1=="" || detastart1==""||detafinish1==""||timestart1==""||timefinish1==""||txt2=="")
        {swal("توجه", "لطفا تمامي فيلد ها را پر ننماييد", "error");}
        else{
        $.ajax({
            url:"ersaldarkhast1.php",
            method:"get",
            data:{
                "typerequest1":requester111,
                "typeworking1":requester222,
                "detastart1":detastart1,
                "detafinish1":detafinish1,
                "name2":name2,
                "numberdate1":numberdate1,
                "timestart1":timestart1,
                "timefinish1":timefinish1,
                "numberpersoneli1":numberpersoneli1,
                "txt2":txt2,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                    
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}})})



//message answer
$(function () {
    $("button.ok").on("click",function (e) {
        swal({
            title:  "ثبت گردید!",
            text: "پاسخ با موفقیت ثبت گردید",
            icon: "success",
            button: "بسیار خوب",
        });
    })
})



//picture
$("input.but_upload").click(function(){

    var fd = new FormData();

    var files = $('.pic1')[0].files[0];
    if(files!=null)
    {
    fd.append('file',files);

    $.ajax({
        url:'picture.php',
        type:'post',
        data:fd,
        contentType: false,
        processData: false,
        success:function(response){
            console.log(response);
            
            if(response != 0){
                $("img.tasvir1").attr("src",response);
                $('.preview img').show();
                location.reload();
            }else{
                alert('File not uploaded');
            }
        }
    });}
    else{swal("توجه", "لطفا تصويري را انتخاب نماييد. ", "error");location.reload();}
});






//add etlaeue
$("input.addetlaeue1").click(function(){

    var etelaeue1=null;
    var etelaeue1=$("input.etelaeue1").val();
    if(etelaeue1=="")
    {swal("توجه", " لطفا اطلاعيه مورد نظر خود را وارد نماييد   ", "error");location.reload();}
    else{
        $.ajax({
            url:"etlaeue.php",
            method:"get",
            data:{
                "etelaeue1":etelaeue1,
            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}
    })









//ersal barname
$(function () {
    $("input.barnameha9").on("click",function (e) {
        e.preventDefault();
        var typebarnameha1=null;var typemapha1=null;var persindnun1=null; var sathkar1=null;     var noemasooliaT1=null;var typeshanbe1=null;
        var timestartshanbe1=null; var timefinishshanbe1=null;  var type1shanbe1=null;var timestart1shanbe1=null;var timefinish1shanbe1=null;var type2shanbe1=null;
        var timestart3shanbe1=null;var timefinish3shanbe1=null;var type3shanbe11=null;var timestart4shanbe1=null;var timefinish4shanbe1=null;var type5shanbe11=null;
        var type4shanbe11=null;var timestart5shanbe1=null;var timefinish5shanbe1=null;var timefinish6shanbe1=null;var timestart6shanbe1=null;
        var type6shanbe11=null;var detastarting3=null;var detafinishing3=null;var timestarting3=null;var timefinishing3=null;
        

        var typebarnameha1 = document.getElementsByName("typebarnameha1");
        for (var i in typebarnameha1){if (typebarnameha1[i].checked){var typebarnameha11=(typebarnameha1[i].value);}}

        var typemapha1=$("select.typemapha1").val();
        var persindnun1=$("input.persindnun1").val();
        var sathkar1=$("select.sathkar1").val();
        var noemasooliaT1=$("select.noemasooliaT1").val();
//0
        var typeshanbe1 = document.getElementsByName("typeshanbe1");
        for (var i in typeshanbe1){if (typeshanbe1[i].checked){var typeshanbe11=(typeshanbe1[i].value);}}
        var timestartshanbe1=$("input.timestartshanbe1").val();
        var timefinishshanbe1=$("input.timefinishshanbe1").val();
//1
        var type1shanbe1 = document.getElementsByName("type1shanbe1");
        for (var i in type1shanbe1){if (type1shanbe1[i].checked){var type1shanbe11=(type1shanbe1[i].value);}}
        var timestart1shanbe1=$("input.timestart1shanbe1").val();
        var timefinish1shanbe1=$("input.timefinish1shanbe1").val();
//2
        var type2shanbe1 = document.getElementsByName("type2shanbe1");
        for (var i in type2shanbe1){if (type2shanbe1[i].checked){var type2shanbe11=(type2shanbe1[i].value);}}
        var timestart2shanbe1=$("input.timestart2shanbe1").val();
        var timefinish2shanbe1=$("input.timefinish2shanbe1").val();
//3
        var type3shanbe1 = document.getElementsByName("type3shanbe1");
        for (var i in type3shanbe1){if (type3shanbe1[i].checked){var type3shanbe11=(type3shanbe1[i].value);}}
        var timestart3shanbe1=$("input.timestart3shanbe1").val();
        var timefinish3shanbe1=$("input.timefinish3shanbe1").val();
//4
        var type4shanbe1 = document.getElementsByName("type4shanbe1");
        for (var i in type4shanbe1){if (type4shanbe1[i].checked){var type4shanbe11=(type4shanbe1[i].value);}}
        var timestart4shanbe1=$("input.timestart4shanbe1").val();
        var timefinish4shanbe1=$("input.timefinish4shanbe1").val();
//5
        var type5shanbe1 = document.getElementsByName("type5shanbe1");
        for (var i in type5shanbe1){if (type5shanbe1[i].checked){var type5shanbe11=(type5shanbe1[i].value);}}
        var timestart5shanbe1=$("input.timestart5shanbe1").val();
        var timefinish5shanbe1=$("input.timefinish5shanbe1").val();
//6
        var type6shanbe1 = document.getElementsByName("type6shanbe1");
        for (var i in type6shanbe1){if (type6shanbe1[i].checked){var type6shanbe11=(type6shanbe1[i].value);}}
        var timestart6shanbe1=$("input.timestart6shanbe1").val();
        var timefinish6shanbe1=$("input.timefinish6shanbe1").val();

        var detastarting3=$("input.detastarting3").val();
        var detafinishing3=$("input.detafinishing3").val();
        var timestarting3=$("input.timestarting3").val();
        var timefinishing3=$("input.timefinishing3").val();

        if( typebarnameha11==null){swal("توجه", "لطفا نحوه ثبت تاريخ را انتخاب ننماييد", "error");}
        else if(typemapha1==null){swal("توجه", "لطفا نحوه اعمال تاريخ را انتخاب ننماييد", "error");}
        else if(typemapha1=="خاص" && persindnun1==""){swal("توجه", "لطفا نحوه شماره پرسنلي كارمند را تكميل ننماييد", "error");}
        else if(typemapha1=="نوع مسئوليت" && noemasooliaT1==null){swal("توجه", "لطفا نوع مسئوليت كارمند را انتخاب ننماييد", "error");}
        else if(typemapha1=="سطح كاري" && sathkar1==null){swal("توجه", "لطفا سطح كاري كارمند را انتخاب ننماييد", "error");}
        else if( typebarnameha11=="هفته" && typeshanbe11==null){swal("توجه", "لطفا زمان هاي شنبه را تكميل ننماييد", "error");}
        else if(( typebarnameha11=="هفته" && typeshanbe11=="كاري")&&(timestartshanbe1=="" || timefinishshanbe1=="")) {swal("توجه", "لطفا زمان هاي شنبه را تكميل ننماييد", "error");}
        else if( typebarnameha11=="هفته" && type1shanbe11==null){swal("توجه", "لطفا زمان هاي 1شنبه را تكميل ننماييد", "error");}
        else if(( typebarnameha11=="هفته" && type1shanbe11=="كاري") &&(timestart1shanbe1=="" || timefinish1shanbe1=="")){swal("توجه", "لطفا زمان هاي 1شنبه را تكميل ننماييد", "error");}
        else if( typebarnameha11=="هفته" && type2shanbe11==null){swal("توجه", "لطفا زمان هاي 2شنبه را تكميل ننماييد", "error");}
        else if(( typebarnameha11=="هفته" && type2shanbe11=="كاري")&&(timestart2shanbe1=="" || timefinish2shanbe1=="")){swal("توجه", "لطفا زمان هاي 2شنبه را تكميل ننماييد", "error");}
        else if( typebarnameha11=="هفته" && type3shanbe11==null){swal("توجه", "لطفا زمان هاي 3شنبه را تكميل ننماييد", "error");}
        else if(( typebarnameha11=="هفته" && type3shanbe11=="كاري")&&(timestart3shanbe1=="" || timefinish3shanbe1=="")){swal("توجه", "لطفا زمان هاي 3شنبه را تكميل ننماييد", "error");}
        else if( typebarnameha11=="هفته" && type4shanbe11==null){swal("توجه", "لطفا زمان هاي 4شنبه را تكميل ننماييد", "error");}
        else if(( typebarnameha11=="هفته" && type4shanbe11=="كاري")&&(timestart4shanbe1=="" || timefinish4shanbe1=="")){swal("توجه", "لطفا زمان هاي 4شنبه را تكميل ننماييد", "error");}
        else if( typebarnameha11=="هفته" && type5shanbe11==null){swal("توجه", "لطفا زمان هاي 5شنبه را تكميل ننماييد", "error");}
        else if(( typebarnameha11=="هفته" && type5shanbe11=="كاري")&&(timestart5shanbe1=="" || timefinish5shanbe1=="")){swal("توجه", "لطفا زمان هاي 5شنبه را تكميل ننماييد", "error");}
        else if( typebarnameha11=="هفته" && type6shanbe11==null){swal("توجه", "لطفا زمان هاي جمعه را تكميل ننماييد", "error");}
        else if(( typebarnameha11=="هفته" && type6shanbe11=="كاري")&&(timestart6shanbe1=="" || timefinish6shanbe1=="")){swal("توجه", "لطفا زمان هاي جمعه را تكميل ننماييد", "error");}
        else if(( typebarnameha11=="بازه")&&(detastarting3=="" || detafinishing3=="" || timestarting3=="" || timefinishing3=="")){swal("توجه", "لطفا زمان ها و تاريخ هارا تكميل ننماييد", "error");}

        else{
        $.ajax({
            url:"barnameriziha.php",
            method:"get",
            data:{
                "typebarnameha11":typebarnameha11,"typemapha1":typemapha1,"persindnun1":persindnun1,"noemasooliaT1":noemasooliaT1,"sathkar1":sathkar1,
                "typeshanbe11":typeshanbe11,"timestartshanbe1":timestartshanbe1,"timefinishshanbe1":timefinishshanbe1,
                "type1shanbe11":type1shanbe11,"timestart1shanbe1":timestart1shanbe1,"timefinish1shanbe1":timefinish1shanbe1,
                "type2shanbe11":type2shanbe11,"timestart2shanbe1":timefinish2shanbe,"timefinish2shanbe1":timefinish2shanbe1,
                "type3shanbe11":type3shanbe11,"timestart3shanbe1":timestart3shanbe1,"timefinish3shanbe1":timefinish3shanbe1,
                "type4shanbe11":type4shanbe11,"timestart4shanbe1":timestart4shanbe1,"timefinish4shanbe1":timefinish4shanbe1,
                "type5shanbe11":type5shanbe11,"timestart5shanbe1":timestart5shanbe1,"timefinish5shanbe1":timefinish5shanbe1,
                "type6shanbe11":type6shanbe11,"timestart6shanbe1":timestart6shanbe1,"timefinish6shanbe1":timefinish6shanbe1,
                "detastarting3":detastarting3,"detafinishing3":detafinishing3,"timestarting3":timestarting3,"timefinishing3":timefinishing3,

            },
            success:function (response) {
                if(response==1){swal({
                    title:  "ثبت گردید!",
                    text: "پاسخ با موفقیت ثبت گردید",
                    icon: "success",
                    button: "بسیار خوب"
                });location.reload();}
                else if(response==0){swal("توجه", "خطا در اطلاعات ورودي ", "error");location.reload();}
        }})}
    })
})

})
$(".example1").pDatepicker({format:'DD / M / YYYY'});
