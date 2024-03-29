/*global $  , window */

$(document).ready(function(){
    $("html").niceScroll({
        cursorcolor:"#f7600e" ,
        cusorwidth: "10px" ,
        cusorborderradius: 0 ,
        cursorborder: "1px solid white"
    });
    //window height
    var wh = $(window).height();
    //Header Height
    $("header").height(wh);
    //Down Arrow 
    $(".downArrow").on("click",function(){
        $("html,body").animate({
            scrollTop: $(".features").offset().top
        },1000);
    });
    $(".works button").on("click",function(){
        if($(this).text()==="show more")
            $(this).text("hide").prev().slideDown(400);
        else 
            $(this).text("show more").prev().slideUp(400);
    });
    var M = 0;
    $(".menu i").on("click",function(){
        if(M === 0){
        $("aside").animate({
            width:"50px",
            right: '30px'
        },400);
        M = 1;
        }
        else {
            $("aside").animate({
            width:"0",
            right: '0'
            },400);
            M = 0;
        }
        
    });
    $("aside p:first-child").on("click",function(){
        $("html,body").animate({
            scrollTop: 0
        },1000);
    });
    $("aside p:nth-child(2)").on("click",function(){
        $("html,body").animate({
            scrollTop: $(".features").offset().top
        },1000);
    });
    $("aside p:nth-child(3)").on("click",function(){
        $("html,body").animate({
            scrollTop: $(".works").offset().top
        },1000);
    });
    $("aside p:nth-child(4)").on("click",function(){
        $("html,body").animate({
            scrollTop: $(".ourteam").offset().top
        },1000);
    });
    $("aside p:nth-child(5)").on("click",function(){
        $("html,body").animate({
            scrollTop: $(".sayhello").offset().top
        },1000);
    });
    $('#content').show();
    $('#loading').hide();
});