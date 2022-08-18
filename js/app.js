var $window=$(window),isSticky=!1,nav=$(".navbar-nav"),stickyNavHeight=$("#sticky-nav")
.height(),emailRegex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
String.prototype.includes||(String.prototype.includes=function(e,a){"use strict";
return"number"!=typeof a&&(a=0),!(a+e.length>this.length)&&-1!==this.indexOf(e,a)}),
$(document).ready(function(){var e=window.location.hash;void 0!==e&&void 0!==(e=e
    .includes("about")?".green-feature-box":e.includes("services")?".features-what-we-do":e
    .includes("contact")?".contact":void 0)&&$("html, body").animate({scrollTop:$(e).offset()
    .top},1e3)}),$(document).on("click","[data-scroll-target]",function(e){topVal=isSticky?
        $(this.dataset.scrollTarget).offset().top-stickyNavHeight:$(this.dataset.scrollTarget)
        .offset().top-$(".header-info-section").height()-stickyNavHeight,$("html,body")
        .animate({scrollTop:topVal},2e3),$(".collapse").collapse("toggle")}),$("#btn-contact-submit")
        .click(function(){var e=$(".info-box");e.removeClass("error-message"),e.removeClass("success-message"),
        e.css("visibility","hidden"),e.text("");var a={firstName:$("#fName").val(),lastName:$("#lName")
        .val(),message:$("#message").val(),subject:$("#subject").val(),email:$("#email").val()};
        if(console.log($(this).attr("data-submit")),"true"!=$(this).attr("data-submit")){if(void 0===a
            .firstName||""===a.firstName.trim())return e.text("Invalid First Name. Please check your input"),
            e.addClass("error-message"),void e.css("visibility","visible");if(void 0===a.lastName||""===a
            .lastName.trim())return e.text("Invalid Last Name. Please check your input"),e.addClass("error-message"),
            void e.css("visibility","visible");if(void 0===a.email||""===a.email.trim()||!emailRegex.test(a.email))
            return e.text("Invalid Email. Please check your input"),e.addClass("error-message"),void e.css("visibility",
            "visible");if(void 0===a.message||""===a.message.trim())return 
            e.text("Invalid Message. Please check your input"),e.addClass("error-message"),void 
            e.css("visibility","visible");$(this).attr("data-submit",!0),$.ajax({type:"POST",
            url:"https://www.mydivinecare.com/contact.html",data:JSON.stringify(a),
            contentType:"application/json; charset=utf-8",success:function(){e.text("Successfully Posted your Message"),
            e.removeClass("error-message"),e.addClass("success-message"),e.css("visibility","visible"),$("#fName")
            .val(""),$("#lName").val(""),$("#email").val(""),$("#message").val(""),$(this).val("")}})}}),
            $window.scroll(function(){var e=$("#sticky-nav"),a=$(window).scrollTop();isSticky=50<=a?(
                e.addClass("sticky-header"),!0):(e.removeClass("sticky-header"),!1),marginedNavHeight=0,$window
                .scrollTop()<2?(this.window.location.hash="",nav.children().removeClass("nav-active"),
                nav.children("#homeNav").addClass("nav-active"),$(".btn-scroll-to-top").css("opacity","0"),
                $(".btn-scroll-to-top").css("bottom","0")):5<$window.scrollTop()&&$window.scrollTop()<=$(".feature-box")
                .offset().top-marginedNavHeight?(nav.children().removeClass("nav-active"),nav.children("#homeNav")
                .addClass("nav-active"),$(".btn-scroll-to-top").css("opacity","0"),$(".btn-scroll-to-top")
                .css("bottom","0")):$window.scrollTop()>=$(".feature-box").offset().top-marginedNavHeight&&$window
                .scrollTop()<=$(".features-what-we-do").offset().top-marginedNavHeight?(nav.children()
                .removeClass("nav-active"),nav.children("#aboutus").addClass("nav-active"),this.window.location.hash=nav
                .children("#aboutus").children(0).attr("target"),$(".btn-scroll-to-top").css("opacity","1"),
                $(".btn-scroll-to-top").css("bottom","2em")):$window.scrollTop()>=$(".features-what-we-do")
                .offset().top-marginedNavHeight&&$window.scrollTop()<=$(".contact").offset().top-marginedNavHeight?(nav
                .children().removeClass("nav-active"),nav.children("#services").addClass("nav-active"),this.window
                .location.hash=nav.children("#services").children(0).attr("target")):$window.scrollTop()>=$(".contact")
                .offset().top-marginedNavHeight?(nav.children().removeClass("nav-active"),nav.children("#contact")
                .addClass("nav-active"),this.window.location.hash=$(".contact").data("target")):nav.children()
                .removeClass("nav-active")});