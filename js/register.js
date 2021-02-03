$(".header-phone").mouseover(function(){
    $(".phone-hov").show();
}).mouseout(function(){
    $(".phone-hov").hide();
})
function isTurePhone(str){
    var reg = /^1[34578]\d{9}$/;
    if(!reg.test(str)){
    return false;
    }
    return true
};
function isTurePwd(str){
    var pwd =  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}$/;
    if(!pwd.test(str)){
        return false;
    }
    return true;
};
$(".input").focus(function(){
    $(".input").css({
        border: "1px solid #d6d6d6"
    })
    $(this).css({
        border: "1px solid #424242"
    });
}).blur(function(){
    $(".input").css({
        border: "1px solid #d6d6d6"
    })
});
$(".phone-person").bind("input",function(){
    $(".regist-msg").html("");
    $(".regist-error").hide();
    if($(this).val() !== ""){
        $(".icon-clear").eq(0).css({
            display:"block"
        }); 
    }else{
        $(".icon-clear").eq(0).css({
            display:"none"
        });   
    }
})
$(".pwd").bind("input",function(){
    $(".regist-msg").html("");
    $(".regist-error").hide();
    if($(this).val() !== ""){
        $(".icon-clear").eq(1).css({
            display:"block"
        }); 
    }else{
        $(".icon-clear").eq(1).css({
            display:"none"
        });   
    }
})
$(".repwd").bind("input",function(){
    $(".regist-msg").html("");
    $(".regist-error").hide();
    if($(this).val() !== ""){
        $(".icon-clear").eq(2).css({
            display:"block"
        }); 
    }else{
        $(".icon-clear").eq(2).css({
            display:"none"
        });   
    }
})
$(".icon-clear").click(function(){
    $(this).prev().val("")
})
$(".note").click(function(){
    let size = 60;
    if(isTurePhone($(".phone-person").val()) == false){
        $(".regist-msg").html("手机号码格式不正确");
        $(".regist-error").show();
        $(".phone-person").css({
            border: "1px solid #ef1c22"
        });
        $(".icon-clear").css({
            display:"block",
            background:"url(../images/err-bg.png)"
        });
    }else{
        let isTureTimer = setInterval(function(){
            $(".note").html(`已发送${size}`);
            size--;
            if(size < 0){
                $(".note").html("获取验证码");
                clearInterval(isTureTimer);
                size = 60;   
            }
        },1000)
    }
});
$(".regist-button").click(function(){
    if(isTurePhone($(".phone-person").val()) == false){
        $(".regist-msg").html("手机号码格式不正确");
        $(".regist-error").show();
        $(".phone-person").css({
            border: "1px solid #ef1c22"
        });
        $(".icon-clear").css({
            display:"block",
            background:"url(../images/err-bg.png)"
        });
    }else if(isTurePwd($(".pwd").val()) == false){
        $(".regist-msg").html("密码格式不正确");
        $(".regist-error").show();
        $(".pwd").css({
            border: "1px solid #ef1c22"
        });
        $(".pwd").css({
            display:"block",
            background:"url(../images/err-bg.png)"
        });
    }else if($(".pwd").val() !== $(".repwd").val()){
        $(".regist-msg").html("两次输入的密码不一致");
        $(".regist-error").show();
        $(".repwd").css({
            border: "1px solid #ef1c22"
        });
        $(".repwd").css({
            display:"block",
            background:"url(../images/err-bg.png)"
        });
    }else if(isTurePhone($(".phone-person").val())== true && isTurePwd($(".pwd").val()) == true && $(".pwd").val() === $(".repwd").val()){
        let $Name = $(".phone-person").val();
        let $Pwd = $(".pwd").val();
        $.ajax({
            url:"regist.php",
            type:"get",
            data:{
                userName:$Name,
                userPwd:$Pwd
            },
            success:function(resText){
                console.log(resText)
                if(resText == "1"){
                    $(".regist-msg").html("用户已经注册");
                    $(".regist-error").show();
                }else{
                    setCookie($Name,$Pwd,10000);
                    location.href = "index.html"
                }
            }
        })
    }
})