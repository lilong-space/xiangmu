$(".app-down").mouseover(function(){
    $(".app-down img").show();
}).mouseout(function(){
    $(".app-down img").hide();
});
$(".header-img").mouseover(function(){
    $(".phone-hov").show();
}).mouseout(function(){
    $(".phone-hov").hide();
});
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        $("#header").css({
            position:"fixed"
        });
        $(".header-nav").css({
            display:"none"
        });
        $("#header-box").css({
            height:50
        });
        $(".search").css({
            display:"none"
        });
        $(".search-btn").css({
            display:"block"
        });
        $(".ul .lis").css({
            lineHeight:"50px"
        });
        $(".search-nav-right").css({
            display:"block"
        });
        $(".sort").css({
            display:"block"
        });
    }else{
        if(document.documentElement.scrollTop < 50){
            $("#header").css({
                position:"static"
            });
            $(".header-nav").css({
                display:"block"
            });
            $("#header-box").css({
                height:70
            });
            $(".search").css({
                display:"block"
            });
            $(".search-btn").css({
                display:"none"
            });

            $(".ul .lis").css({
                lineHeight:"70px"
            }) ;
            $(".search-nav-right").css({
                display:"none"
            });
            $(".sort").css({
                display:"none"
            });
        }
    }
}
$(".goTop").click(function(){
    document.documentElement.scrollTop = 0;
});
$(".sort-list-item1").mouseover(function(){
    // $(".sort-list-item1").css({
    //     display:"none"
    // })
    $(this).next().css({
        display:"block"
    });
    $(this).next().next().css({
        display:"block",
        paddingRight:10,
        top:0,
        right:40
    })
    $(this).css({
        display:"none"
    })
}).mouseout(function(){
    $(this).next().css({
        display:"none"
    });
    $(this).css({
        display:"block"
    })
    $(this).next().next().css({
        display:"none",
        paddingRight:10,
        top:0,
        right:40
    });
});
function getUrlParam(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    var strValue = "";
    if(r != null){
        strValue = unescape(r[2]);
    }
    return strValue;
}
let id = getUrlParam("id")
$(".list-box-img").click(function(){
    $(".list-box-img").css({"border":"1px solid #dcdcdc"});
    $(this).css({"border":"1px solid #e2231a"});
    var imgsrc=$(this).find("img").attr("src");
    $(".pic").attr("src",imgsrc);
    $(".bigBox-pic").attr("src",imgsrc);
});
// $.ajax({
//     url:"detailPage.php",
//     type:"get",
//     data:"id",
//     success:function(resText){
//         let word = JSON.parse(resText);
//         // console.log(word)
//         let tmp = word.map(function(v,i,){
//             return
//             `

                
//             `
//         }).join("");
        
//                 $(".detail").html(tmp);
//             }
// })
// $(".detail .content .list li").mouseover(function(){
//     $(".detail .nav ")
// })
let $pic = $(".detail .content .bigBox .bigBox-pic");
let $mask = $(".detail .content .content-left .mask");
let $bigBox = $(".detail .content .bigBox");
$smallBox = $(".detail .content .content-left .small-box")
// console.log($pic,$mask,$bigBox)
$smallBox.mouseover(function(){
    $mask.css({
        display:"block"
    })
    $bigBox.css({
        display:"block"
    })
})
$smallBox.mouseout(function(){
    $mask.css({
        display:"none"
    })
    $bigBox.css({
        display:"none"
    })
})
$smallBox.mousemove(function(ev){
    let l = ev.clientX - $smallBox.offset().left - $mask.outerWidth() / 2;
    let t = ev.clientY - $smallBox.offset().top - $mask.outerHeight() / 2 + 50;
    if(l<0){
        l = 0
    }
    if(t<0){
        t = 0
    }
    if(l>$smallBox.outerWidth()-$mask.outerWidth()){
        l=$smallBox.outerWidth()-$mask.outerWidth()
    }
    if(t>$smallBox.outerHeight()-$mask.outerHeight()){
        t=$smallBox.outerHeight()-$mask.outerHeight()
    }
    $mask.css({
        left:l,
        top:t 
    });
    let scaleX = l / ($smallBox.outerWidth() - $mask.outerWidth());
    let scaleY=t / ($smallBox.outerHeight() - $mask.outerHeight());
    let kL = $pic.outerWidth() - $bigBox.outerWidth();
    let kT = $pic.outerHeight() - $bigBox.outerHeight();
    $pic.css({
        left:- kL * scaleX,
        top:- kT * scaleY
    })
});
let num = 1
$(".add").click(function(){
    num++;
    $(".txt").val(num);
});
$(".reduce").click(function(){
    if(num > 1){
        num--;
        $(".txt").val(num);
    } 
})