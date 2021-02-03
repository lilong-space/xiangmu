$(function(){
    $(".tab-content-list").width($(".content-chren-list").width()/7);
    if(getCookie("18681845478") !== ""){
        $(".hd-login").css({
            display:"none"
        });
        $(".hd-login-show").html("18681845478").css({
            display:"inline-block"
        })
    }
})
$(".header-title").on("mouseover", function(){
    $(".header-title em").css({
        color:"#121212"
    })
    $(this).find("em").css({
        color:"#395782"
    })
    $(".header-nav").removeClass("active")
    $(this).find(".header-nav").addClass("active")
    $(this).find(".header-nav").children().children().first().children().last().children().width($(".header-nav").width() / ($(this).find(".header-nav").children().children().first().children().last().children().length + 1));
}).on("mouseout", function () {
    $(".header-nav").removeClass("active");
    $(".header-title em").css({
        color:"#121212"
    })
});
$(".header-navigation").on("mouseover",function(){
    $(".header-navigation").css({
        height:"57px",
        borderBottom:0
    });
    $(".header-navigation-title").css({
        color:"#616161"
    });
    $(".header-navigation-box").css({
        display:"none"
    });
    $(this).css({
        height:"56px",
        borderBottom:"1px solid #395782"
    });
    $(this).find(".header-navigation-title").css({
        color:"#395782"
    })
    $(this).find(".header-navigation-box").css({
        display:"block"
    });
    $(this).find(".header-navigation-list").width($(".header-nav").width()/($(this).find(".header-navigation-list").length+1))
});

$(".serch").on("click",function(){
    $(".header-title").fadeOut(500,function(){
        $(".header-title").css({
            opactiy:0,
            display:"none"
        })
    })
    $(".header-right").hide()
    $(".search-box").slideDown(1000,function(){
        $(".search-box").css({
            dispaly:"block",
            zIndex:3
        })
    })
})
$(".search-close").on("click",function(){
    $(".header-title").fadeOut(500,function(){
        $(".header-title").css({
            opactiy:1,
            display:"block"
        });
    });
    $(".header-right").show()
    $(".search-box").slideDown(1000,function(){
        $(".search-box").css({
            dispaly:"none",
            zIndex:0
        });
    });
});
let num = 0;
$(".banner-num>span").on("mouseover",function(){
    num = $(this).index()
    $(".banner-list").offset({
        left:-(num *  $(".banner-img-box").width())
    });
    $(".banner-num>span").removeClass("circle");
    $(this).addClass("circle");
    $(".banner-num i").css({
        background:"#fff"
    });
    $(this).find("i").css({
        background:"rgba(0,0,0,0)"
    })
});
timer = setInterval(change,3000);
function change(){           
    if(num == $(".banner-num>span").length - 1){
        num = 0;
    }else{
        num++;
    }
    $(".banner-list").offset({
        left:-(num *  $(".banner-img-box").width())
    });
    $(".banner-num>span").removeClass("circle");
    $(".banner-num>span").eq(num).addClass("circle");
    $(".banner-num i").css({
        background:"#fff"
    });
    $(".banner-num i").eq(num).css({
        background:"rgba(0,0,0,0)"
    });
}
$(".banner-left").on("click",function(){
    if(num !== 0){
        num--;
    }else{
        num = $(".banner-num>span").length-1;
    }
    $(".banner-num>span").removeClass("circle");
    $(".banner-num>span").eq(num).addClass("circle");
    $(".banner-num i").css({
        background:"#fff"
    });
    $(".banner-num i").eq(num).css({
        background:"rgba(0,0,0,0)"
    });
    $(".banner-list").offset({
        left:-(num *  $(".banner-img-box").width())
    });
})
$(".banner-right").on("click",function(){
    if(num < $(".banner-num>span").length - 1){
        num++
        $(".banner-num>span").removeClass("circle");
        $(".banner-num>span").eq(num).addClass("circle");
        $(".banner-list").offset({
            left:-(num  *  $(".banner-img-box").width())
        });
        $(".banner-num i").css({
            background:"#fff"
        });
        $(".banner-num i").eq(num).css({
            background:"rgba(0,0,0,0)"
        });
    }else{
        num = 0;
        $(".banner-num>span").removeClass("circle");
        $(".banner-num>span").eq(num).addClass("circle");
        $(".banner-list").offset({
            left:  0
        });
        $(".banner-num i").css({
            background:"#fff"
        });
        $(".banner-num i").eq(num).css({
            background:"rgba(0,0,0,0)"
        });
    }
   
})
$("#banner").on("mouseover",function(){
    clearInterval(timer);
    $(".banner-dir").css({
        display:"block"
    });
}).on("mouseout",function(){
timer = setInterval(change,3000);
$(".banner-dir").css({
        display:"none"
    });
});
$(".tab-top-list").on("mouseover",function(){
    $(this).css({
        color:"#395782"
    });
    $(this).siblings().css({
        color:"#1b1811"
    });
    for(let i = 0;i < $(".tab-top-list").length;i++){
       if($(".tab-top-list").eq(i).hasClass("show") == false){
           $(".tab-top-list").eq(i).find(".tab-top-title").css({
                borderBottom:0 
           });
       }
    };
    $(this).find(".tab-top-title").css({
        borderBottom:"5px solid #b1b9c2" 
    });
    if($(this).hasClass("show") == true){
        $(this).find("img").css({
            display:"block"
        });
    }
}).on("click",function(){
    let index = $(this).index()
    $(this).addClass("show");
    $(this).siblings().removeClass("show");
    $(this).find(".tab-top-title").css({
        borderBottom:"5px solid #b1b9c2" 
    });
    $(this).find("img").css({
        display:"block"
    });
    $(".tab-content").css({
        display:"none"
    })
    $(".tab-content").eq(index).css({
        display:"block"
    });
    $(".tab-content").eq(index).find(".content-chren").eq(0).css({
        display:"block"
    })
    $(".tab-content-list").width($(".content-chren-list").width()/$(".tab-content").eq(index).find(".tab-content-list").length);
}).on("mouseout",function(){
    $(".tab-top-list img").css({
        display:"none"
    });
    $(".tab-top-title").css({
        borderBottom:"0" 
    });
    $(".tab-top-list").css({
        color:"#1b1811"
    })
    for(let i = 0;i < $(".tab-top-list").length;i++){
       if($(".tab-top-list").eq(i).hasClass("show") == true){
           $(".tab-top-list").eq(i).find(".tab-top-title").css({
                borderBottom: "5px solid #b1b9c2" 
           });
       }
    }
});
$(".tab-content-list").on("mouseover",function(){
    let index = $(this).index();
    $(".content-chren").css({
        display:"none"
    });
    $(this).closest(".tab-content").find(".content-chren").eq(index).css({
        display:"block"
    });
    $(".tab-content-list").find("p").css({
        color:"#616161"
    })
    $(this).find("p").css({
        color:"#395782"
    })
    $(".tab-content-list").find(".img1").show();
    $(".tab-content-list").find(".img2").hide();
    $(this).find(".img1").hide();
    $(this).find(".img2").show();
})
$(".content-chren-li").on("mouseover",function(){
    $(".content-chren-img").css({
        marginLeft:"-25%"
    });
    $(this).find(".content-chren-img").css({
        marginLeft:"-12%"
    });
    $(".content-chren-para").css({
        transform:"scale(1)"
    });
    $(this).find(".content-chren-para").css({
        transform:"scale(1.1)"
    });
}).on("mouseout",function(){
    $(".content-chren-img").css({
        marginLeft:"-25%"
    });
    $(".content-chren-para").css({
        transform:"scale(1)"
    });
});
$(".tab-banner-left").on("mouseover",function(){
    $(this).css({
        boxShadow:"5px 5px 5px #ccc",
        transform:"scale(1.01)"
    });
}).on("mouseout",function(){
    $(this).css({
        boxShadow:"0px 0px 0px #ccc",
        transform:"scale(1)"
    });
});
$(".tab-banner-top").on("mouseover",function(){
    $(this).css({
        boxShadow:"5px 5px 5px #ccc",
        transform:"scale(1.01)"
    });
}).on("mouseout",function(){
    $(this).css({
        boxShadow:"0px 0px 0px #ccc",
        transform:"scale(1)"
    });
});
$(".tab-banner-bottom").on("mouseover",function(){
    $(this).css({
        boxShadow:"5px 5px 5px #ccc",
        transform:"scale(1.01)"
    });
}).on("mouseout",function(){
    $(this).css({
        boxShadow:"5px 5px 5px #ccc",
        transform:"scale(1.01)"
    });
}).on("mouseout",function(){
    $(this).css({
        boxShadow:"0px 0px 0px #ccc",
        transform:"scale(1)"
    });
});
$(".case-list").on("mouseover",function(){
    $(this).css({
        boxShadow:"5px 5px 5px #ccc",
        transform:"scale(1.01)"
    });
}).on("mouseout",function(){
    $(this).css({
        boxShadow:"0px 0px 0px #ccc",
        transform:"scale(1)"
    });
});
$(".activity-list").on("mouseover",function(){
    $(this).css({
        boxShadow:"5px 5px 5px #ccc",
        transform:"scale(1.01)"
    });
}).on("mouseout",function(){
    $(this).css({
        boxShadow:"0px 0px 0px #ccc",
        transform:"scale(1)"
    });
});
let add = 0;
$(".news-circle-span").on("mouseover",function(){
    let  index= $(this).index()
    add = $(this).index()
    $(".news-banner-li").css({
        display:"none"
    })
    $(".news-banner-li").eq(index).css({
        display:"block"
    })
    $(".news-circle-span").css({
        width:15,
    })
    $(this).css({
        width:25
    })
    
})
let sonTimer = setInterval(function(){
    add++;
    $(".news-banner-li").css({
        display:"none"
    })
    $(".news-banner-li").eq(add).css({
        display:"block"
    })
    
    if(add >= 3){
        add = 0;
    }
    if(add < 3){
        $(".news-circle-span").css({
            width:15,
        // margin: "0 5"
        })
        $(".news-circle-span").eq(add).css({
            width:25
        })
    }
},6000);
$(".news-item").on("mouseover",function(){
    $(this).css({
        boxShadow:"5px 5px 5px #ccc",
        transform:"scale(1.01)"
    });
}).on("mouseout",function(){
    $(this).css({
        boxShadow:"0px 0px 0px #ccc",
        transform:"scale(1)"
    });
});
$(".hot-li").on("mouseover",function(){
    $(this).css({
        boxShadow:"5px 5px 5px #ccc",
        transform:"scale(1.01)"
    });
}).on("mouseout",function(){
    $(this).css({
        boxShadow:"0px 0px 0px #ccc",
        transform:"scale(1)"
    });
});
$(".hot-prev").on("click",function(){
    
})
$(".hot-next").click(function(){

})
$(".footer-top li>a").on("mouseover",function(){
    $(".footer-top li>a").css({
        color:" #bdbdbd"
    })
    $(this).css({
        color:"#e0e0e0"
    })
}).on("mouseout",function(){
    $(".footer-top li>a").css({
        color:" #bdbdbd"
    })
});
$(".darkweibo").on("mouseover",function(){
    $(".wechat-img").css({
        height:158
    })
}).on("mouseout",function(){
    $(".wechat-img").css({
        height:0
    })
});
let sic = 0;
$(".cn-img").on("click",function(){
    if(sic == 0){
        $(".all-countries").css({
            display:"block"
        });
        sic = 1;
    }else{
        $(".all-countries").css({
            display:"none"
        });
        sic = 0;
    }
})
$(".login").on("click",function(){
    $("#ppMask").css({
        display:"block"
    });
    $("#ppWrapper").css({
        display:"block"
    })
});
$(".ppWrapper-close").on("click",function(){
    $("#ppMask").css({
        display:"none"
    });
    $("#ppWrapper").css({
        display:"none"
    })
});
$(".telephone").focus(function(){
    $(this).addClass("focusIn");
}).blur(function(){
    $(this).removeClass("focusIn");
});
$(".telephone").bind("input",function(){
    if($(this).val().length > 0){
        $(".clear-telephone").css({
            display:"block"
        });
        $(".error-msg").html("");
        $(".error-box").hide();
    }else{
        $(".clear-telephone").css({
            display:"none"
        });   
    }
});
$(".clear-telephone").click(function(){
    $(".telephone").val("").addClass("focusIn");
});
$(".note").focus(function(){
    $(this).css({
        border:"1px solid #424242"
    });
}).blur(function(){
    $(this).css({
        border:"1px solid #d6d6d6"
    });
});
function isTurePhone(str){
    var reg = /^1[34578]\d{9}$/;
    if(!reg.test(str)){
    return false;
    }
    return true
};
$(".note-btn").click(function(){
    let size = 60;
    if(isTurePhone($(".telephone").val()) == false){
        $(".error-msg").html("手机号码格式不正确");
        $(".error-box").show();
    }else{
        let isTureTimer = setInterval(function(){
            $(".note-btn").html(`已发送${size}`);
            size--;
            if(size < 0){
                $(".note-btn").html("获取验证码");
                clearInterval(isTureTimer);
                size = 60;   
            }
        },1000)
    }
});
$(".login-user").click(function(){
    $(".login-fast-box").hide();
    $(this).hide();
    $(".login-normal-box").show();
    $(".login-p").show();
});
$(".login-p").click(function(){
    $(".login-fast-box").show();
    $(this).hide();
    $(".login-normal-box").hide();
    $(".login-user").show();
});
$(".telephonea").focus(function(){
    $(this).css({
        border:"1px solid #424242"
    });
}).blur(function(){
    $(this).css({
        border:"1px solid #d6d6d6"
    });
});
$(".telephonea").bind("input",function(){
    if($(this).val().length > 0){
        $(".clear-telephonea").css({
            display:"block"  
        });
        $(".error-msg").html("");
        $(".error-box").hide();
    }else{
        $(".clear-telephonea").css({
            display:"none"
        });   
    }
})
$(".notea").focus(function(){
    $(this).css({
        border:"1px solid #424242"
    });
    
}).blur(function(){
    $(this).css({
        border:"1px solid #d6d6d6"
    });
});
$(".notea").bind("input",function(){
    $(".error-msg").html("");
    $(".error-box").hide();
})
$(".submit").click(function(){
    if(isTurePhone($(".telephonea").val())== false){
        $(".error-msg").html("手机号码格式不正确");
        $(".error-box").show();
    }else if($(".notea").val() == ""){
        $(".error-msg").html("密码不能为空");
        $(".error-box").show();
    }else if(isTurePhone($(".telephonea").val()) == true && $(".notea").val() != ""){
        let $Name = $(".telephonea").val();
        let $Pwd = $(".notea").val();
        $.ajax({
            url:"login.php",
            type:"get",
            data:{
                userName:$Name,
                userPwd:$Pwd
            },
            success:function(resText){
                if(resText == "0"){
                    $(".error-msg").html("账号或密码错误");
                    $(".error-box").show()
                }
                if(resText == "1"){
                    if($(".login-mains-input").prop("checked")==true){
                        setCookie($Name,$Pwd,10000);
                        $("#ppWrapper,#ppMask").css({
                            display:"none"
                        });
                        // 登陆成功隐藏
                        $(".hd-login").css({
                            display:"none"
                        });
                        $(".hd-login-show").html($Name).css({
                            display:"inline-block"                    
                        }) 
                    }else{
                        $("#ppWrapper,#ppMask").css({
                            display:"none"
                        });
                        $(".hd-login").css({
                            display:"none"
                        });
                        $(".hd-login-show").html($Name).css({
                            display:"inline-block"
                        })
                    }
                }
            }           
        })
    }
})
$(".hd-login-show").mouseover(function(){
    $(".top-phone").slideDown(function(){
        $(".top-phone").css({
            display:"block",
            height:60
        })
    })
}).mouseout(function(){
    $(".top-phone").slideUp(function(){
        $(".top-phone").css({
            display:"none",
            height:0
        })
    })
})
$(".logout").click(function(){
    removeCookie( $(".hd-login-show").html())
    $(".hd-login").css({
        display:"block"
    });
    $(".hd-login-show").html("").css({
        display:"none"                    
    });
    
})
$(".regist-btn-plat").click(function(){
    location.href = "register.html"
})
$(".content-chren-img").click(function(){
    let index = $(this).index()
    location.href = `detailPage.html?id=${index}`
})