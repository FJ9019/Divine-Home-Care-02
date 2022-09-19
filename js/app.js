$(document).ready(function(){
  jQuery(".toggle_btn").click(function(){
    jQuery(".toggle_btn").toggleClass("active");
    jQuery(".menu").slideToggle();
  });
  
  $('.menu li:has(ul)').addClass('parent'); 
 
    $('a.menulinks').click(function() {
        $(this).next('ul').slideToggle(250);
        $('body').toggleClass('mobile-open'); 
    $('.menu li.parent ul').slideUp(250);
    $('a.child-triggerm').removeClass('child-open');
        return false;
     });   
   
  $('.menu li.parent > a').after('<a class="child-triggerm"><span></span></a>');
  
    $('.menu a.child-triggerm').click(function() {
        $(this).parent().siblings('li').find('a.child-triggerm').removeClass('child-open');
        $(this).parent().siblings('li').find('ul').slideUp(250);
        $(this).next('ul').slideToggle(250);
        $(this).toggleClass('child-open');
        return false;
    });

});

jQuery(window).on('scroll', function(){

    //** STICKY OR FIXED JS
    if (jQuery(this).scrollTop() > 250){  
        jQuery('.header').addClass("sticky");
    }
    else{
        jQuery('.header').removeClass("sticky");
    }

}); // END SCROLL


                

const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read Less..." : "Read More...";
})



