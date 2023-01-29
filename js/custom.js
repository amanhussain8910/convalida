$(document).ready(function(){
    $(".career-apply").click(function(){
        setTimeout(() => {
            $(".contact-form").removeClass("active");
        }, 1000);
        $(".contact-form").addClass("active");
    })
})