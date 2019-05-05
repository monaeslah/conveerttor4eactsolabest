$(document).ready(function(){
    $(window).scroll(function () {
        var height = $(window).scrollTop()
        if(height > 100) {
            $(".header").addClass('scrolled')
            $(".sub-header").addClass('header-scroll')
        } else {
            $(".header").removeClass('scrolled')
            $(".sub-header").removeClass('header-scroll')
        }
    })
});
function closeToggle() {
    $(".collapse.in").removeClass("in");
}