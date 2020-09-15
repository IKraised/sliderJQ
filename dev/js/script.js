$(function () {

   $(document).find('.slider__button_right').on('click', function(e) {
        var activeImg = $('.slider__item.active');
        var activeImgIndex = $('.slider__item.active').index();
        var nextImgIndex = activeImgIndex + 1;
        var nextImg = $('.slider__item').eq(nextImgIndex );
        activeImg.fadeOut(1000);
        activeImg.removeClass('active');

        if(nextImgIndex == ($('.slider__item:last').index()+1)){
            $('.slider__item').eq(0).fadeIn(1000);
            $('.slider__item').eq(0).addClass('active');
        } else {
            nextImg.fadeIn(1000);
            nextImg.addClass('active');
        }
   });
   
   $(document).find('.slider__button_left').on('click', function(e) {
    var activeImg = $('.slider__item.active');
    var activeImgIndex = $('.slider__item.active').index();
    var prevImgIndex = activeImgIndex - 1;
    var prevImg = $('.slider__item').eq(prevImgIndex );
    activeImg.fadeOut(1000);
    activeImg.removeClass('active');
    prevImg.fadeIn(1000);
    prevImg.addClass('active');

});
})