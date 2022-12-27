
new Swiper('.calculator__items__food', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.right-arrow',
        prevEl: '.left-arrow',
    },
    breakpoints: {
        768: {
            slidesPerView: 3.2
        },
        580: {
            slidesPerView: 2
        }
    }
});
new Swiper('.reviews__slider__content', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
});
/*Изменение слайдера*/
$('.calculator__chose__date__item').click(function () {
    $('.calculator__chose__date__item').removeClass('active__date__chose');
    $(this).addClass('active__date__chose');
    let day = $(this).data('day');
    $('.calculator__items__day').each(function (i) {
        if ($(this).data('day') == day) {
            $('.calculator__items__day').css({ 'display': 'none' });
            $(this).css({ 'display': 'flex' });
        }
    });
});
let callorynumber = 0;
let category = 'Классическое';
/*Рацион на сколько дней*/
$('.calculator__time__container .calculator__button').click(function () {
    $('.calculator__time__container .calculator__button').removeClass('active__button__calculator');
    $(this).addClass('active__button__calculator');
    let dayZakaz = $(this).data('dayzakaz');
    let numberSumm = $(this).data('summ');
    let summ = dayZakaz * numberSumm;
    $('.summ__tovar').html(summ);
});
$('.quetions_item').click(function () {
    $('.quetions_item').removeClass('active__quetion');
    $(this).addClass('active__quetion');
});

/*Клик на кнопку с калориями*/
$('.calculatur__callory__buttons .calculator__button').click(function () {
    $('.calculatur__callory__buttons .calculator__button').removeClass('active__button__calculator');
    $(this).addClass('active__button__calculator');
    callorynumber = $(this).data('callorynumber');
    let fatsnumber = $(this).data('fats');
    let belkinumber = $(this).data('belki');
    let carbohydratesnumber = $(this).data('carbohydrates');
    statsSet(callorynumber, belkinumber, carbohydratesnumber, fatsnumber);
    $('.calculator__time__picker').each(function (i) {
        if ($(this).data('category') == category) {
            $(this).find('.calculator__time__container').each(function (i) {
                if ($(this).data('callorynumber') == callorynumber) {
                    $('.calculator__time__container').css({ 'display': 'none' });
                    $(this).css({ 'display': 'flex' });
                }
            });
        }
    });
});
/*calculator__items__day*/
$('.calculator__nav__link__item').click(function () {
    $('.calculator__nav__link__item').removeClass('active__link');
    $(this).addClass('active__link');
    category = $(this).data('category');
    $('.calculator__time__picker').each(function (i) {
        if ($(this).data('category') == category) {
            $('.calculator__time__picker').css({ 'display': 'none' });
            $(this).css({ 'display': 'flex' });
            $(this).find('.calculator__time__container').each(function (i) {
                if ($(this).data('callorynumber') == 1200) {
                    $('.calculator__time__container').css({ 'display': 'none' });
                    $(this).css({ 'display': 'flex' })
                }
            })
        }
    });
    $('.calculatur__callory__buttons').each(function (i) {
        if ($(this).data('category') == category) {
            $('.calculatur__callory__buttons').css({ 'display': 'none' });
            $(this).css({ 'display': 'flex' });
            $(this).find('.calculator__button').each(function (i) {
                if ($(this).data('callorynumber') == 1200) {
                    $('.calculator__button').removeClass('active__button__calculator');
                    $(this).addClass('active__button__calculator');
                    callorynumber = $(this).data('callorynumber');
                    let fatsnumber = $(this).data('fats');
                    let belkinumber = $(this).data('belki');
                    let carbohydratesnumber = $(this).data('carbohydrates');
                    statsSet(callorynumber, belkinumber, carbohydratesnumber, fatsnumber);
                }
            });
        }
    });
    
    $('.calculator__button').removeClass('active__button__calculator');
    $('.calculatur__callory__buttons').each(function (i) {
        $(this).find('.calculator__button').each(function (i) {
            if ($(this).data('callorynumber') == 1200) {
                $(this).addClass('active__button__calculator');
                callorynumber = $(this).data('callorynumber');
                let fatsnumber = $(this).data('fats');
                let belkinumber = $(this).data('belki');
                let carbohydratesnumber = $(this).data('carbohydrates');
                statsSet(callorynumber, belkinumber, carbohydratesnumber, fatsnumber);
            }
        });
    });
});

$('.quetions__list__text__header').click(function () {
    if ($(this).parent().find('.quetions__text__hidden').css('display') == 'block') {
        $(this).parent().find('.quetions__text__hidden').fadeOut(300);
    }
    else {
        $(this).parent().find('.quetions__text__hidden').fadeIn(300);
    }
});

function statsSet(callorynumber, belkinumber, carbohydratesnumber, fatsnumber) {
    $('.callory__number').html(callorynumber);
    $('.belki__number').html(belkinumber);
    $('.carbohydrates__number').html(carbohydratesnumber);
    $('.fats__number').html(fatsnumber);
}