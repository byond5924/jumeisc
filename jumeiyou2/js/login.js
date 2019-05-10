
window.onload = function() { 
//更多功能实现；
 i = 0;
 $('#more').on('click', function () {
     if (i == 0) {
         $('.icon-p').slideDown(300, function () {
             $('#more >i').css("background-position", "left -274px top -1px")
         })
         i = 1;
     } else {
         $('.icon-p').slideUp(300, function () {
             $('#more >i').css("background-position", "left -274px top -26px")
         })
         i = 0;
     }
 })

 //默认选择
 $("#radio_dynamic").prop('checked',true);
 //验证的切换
// (function(){
    
// })()
 $('#switch1').click(function () {
     $('.block1').show();
     $('.none1').hide();
 })
 $('#switch2').click(function () {
     $('.block1').hide();
     $('.none1').show();
 })
 //用户和密码验证
 //已注册手机 号码！
 var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
 var message = "";
 var flag = false;

 $('.nav-pwd').click(function () {
     $('#phone_yan').show();
 })
 $('.nav-pwd').blur(function () {
     $('#phone_yan').hide();
 })
 //普通用户名登录验证提示
 $('#pu1').click(function () {
     $('#pu1+p').show();
 })
 $('#pu1').blur(function () {
     $('#pu1+p').hide();
    // $('#pu1+p').text("435345")
 })
 //普通密码登录验证提示
 $('#pu2').click(function () {
     $('#pu2+p').show();
 })
 $('#pu2').blur(function () {
     $('#pu2+p').hide();
 })
 //验证手机登录用户名
  $('#number1').click(function () {
     $('#yanz').show();
 })
 $('#number1').blur(function () {
     var phone = $(this).val();
     if (phone == '') {
         message = "手机号码不能为空！";
     } else if (phone.length != 11) {
         message = "请输入有效的手机号码！";
     } else if (!myreg.test(phone)) {
         message = "请输入有效的手机号码！";
     } else {
         flag = true;
         $('#yanz').hide();
         $('#number1').css("color", "green");
     }
    $('#yanz').text(message).css('color','red');
     console.log(phone);
    // alert('message');
     console.log(flag);
 })

 // 发送请求
 $('#btn').on('click', function () {
    var username = $('#pu1').val();
    var pwd = $('#pu2').val();
        console.log(username);
        console.log(pwd);
    $.ajax({
        type: 'get',
        url: '../php/login.php',
        data: {
            "username": username,
            "pwd": pwd
        },
        dataType: 'json',
        success: function (res) {
            console.log(res);
            //var result = JSON.parse(res);
            // console.log(res);
            if (res.code == 200) {
                alert('登录成功，即将跳转首页');
                $(location).prop('href','./index.html');
            } else {
                alert("用户名或密码错误");
            }
        }
    })
})
 
}
//  function checkPhoneIsExist(){
//     var phone = $(this).val();
//     var flag = true;
//     jQuery.ajax(
//      { url: "checkPhone?t=" + (new Date()).getTime(),
//        data:{phone:phone},
//        dataType:"json",
//           type:"GET",
//           async:false,
//           success:function(data) {
//           var status = data.status;
//           if(status == "0"){
//             flag = false;
//           }
//         }
//    });
//    return flag;
//   }

