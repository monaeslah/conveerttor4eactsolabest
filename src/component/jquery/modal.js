

$(document).ready(function(){

$('.colorHolder').click(function(){
    $('.havePlace',this).focus();
})

$('.havePlace').on('input',function(){
    var len = ($(this).val()).length;
    if (len)
        $(this).next('label').hide();
    else
        $(this).next('label').show();
})

})


