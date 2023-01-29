$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});

$(document).ready(function(){
    $(function(){
        var lastScrollTop = 0, delta = 15;
        $(window).scroll(function(event){
           var st = $(this).scrollTop();
           
           if(Math.abs(lastScrollTop - st) <= delta)
              return;
    if ((st > lastScrollTop) && (lastScrollTop>0)) {
           // downscroll code
          $("header").css("top","-80px");
      
       } else {
          // upscroll code
          $("header").css("top","0px");
       }
           lastScrollTop = st;
        });
    });

    


    $(".career-apply").click(function(){
        setTimeout(() => {
            $(".contact-form").removeClass("active");
        }, 1000);
        $(".contact-form").addClass("active");
    })
})