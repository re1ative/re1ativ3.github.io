var delay = 1000;
    var top_show = 400;



$(document).ready(function () {
    $('#top').hide();
    
    
    
    
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
        if (top > top_show) $('#top').fadeIn();
        else {
            $('#top').fadeOut();
            
        }
    });
    $('.stages-slider').slick({
        arrows: false
    });
    $('.adress-slider').slick({
        arrows: false,
        autoscroll: 3000
    });
    $('.adress-prev').click(function () {
        event.preventDefault();
        $(".adress-slider").slick('slickPrev');
    });
    $('.adress-next').click(function () {
        event.preventDefault();
        $(".adress-slider").slick('slickNext');
    });
    $('.reviews-slider').slick({
        arrows: false
    });
    $('.stages-prev').click(function () {
        event.preventDefault();
        $(".stages-slider").slick('slickPrev');
    });
    $('.stages-next').click(function () {
        event.preventDefault();
        $(".stages-slider").slick('slickNext');
    });
    $('.reviews-prev').click(function () {
        event.preventDefault();
        $(".reviews-slider").slick('slickPrev');
    });
    $('.reviews-next').click(function () {
        event.preventDefault();
        $(".reviews-slider").slick('slickNext');
    });
    
    $('.close-icon').click(function () {
        event.preventDefault();
        $('.modal').hide();
    });
    
    
    
    

    function OffScroll() {
        var winScrollTop = $(window).scrollTop();
        $(window).bind('scroll', function () {
            $(window).scrollTop(winScrollTop);

        });
    }


    $('#get-consul').click(function () {
        event.preventDefault();
        $('#m_consul').show(1000);
OffScroll();


    });
    $('.prod__buy-btn').click(function () {
        event.preventDefault();
        $('#oneclickbuy').show(1000);
        var model = $(this).parent(".prod-footer").parent('.prod-card').attr('data-model');
        var modeldata = $(model).attr('data-enctyption');
        console.log(model);
        console.log(modeldata);
        $('#asic_model').val(model);
        OffScroll();


    });
    $('.nav__btn-callback').click(function () {
        event.preventDefault();
        $('#callback').show(1000);
        OffScroll();


    });

    $('#p_privacy').click(function () {
        event.preventDefault();
        $('#privacy').show(1000);
        OffScroll();


    });
    
    $('#m-info-btn').click(function () {
        event.preventDefault();
        $('#m-info').show(1000);
        OffScroll();


    });




    $('.agreement-text').click(function () {
        $('.m_agreement-checkbox').toggleClass('m_agreement-checkbox-checked');
    });

    $('.checkbox-click').click(function () {
        $('.agreement-checkbox').toggleClass('agreement-checkbox_checked');
    });

    $('.prod-filter__item').click(function () {
        $('.prod-filter__item').removeClass('prod-filter__item-selected');
        $(this).addClass('prod-filter__item-selected');
        var option = $(this).attr('data-option');
        var items = $('.prod-card');
        console.log(option);
        /*console.log(items);
        console.log(option);*/
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).attr('data-enctyption') == option) {
                $(items[i]).show();
            } else {
                $(items[i]).hide();
            }
            if ((option == 'Blake256') || (option == 'Blake(2b)')) {

                if ($(items[i]).attr('data-enctyption') == 'Blake(2b)|Blake256') {
                    $(items[i]).show();
                }

            }
        }
        if (option == 'all') {
            $(items).show();
        }


    });
    
    

    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        
        
            
    });
    $(".scroll-link").on("click", "a", function (event) {

        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({
            scrollTop: top
        }, 1500);
        if (top > top_show) $('#top').fadeIn();
        

    });
    $(function () {
        $('form').submit(function (e) {
            var $form = $(this);
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize()
            }).done(function () {
                alert('Ваша заявка была успешно отправлена');
                $('.modal').hide();
            }).fail(function () {
                alert('Произошла ошибка. Попробуйте снова.');
            });
            //отмена действия по умолчанию для кнопки submit
            e.preventDefault();
        });
    });


});

$(document).scroll(function(){
    if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else {
            $('#top').fadeOut();
            
        }
});


$(document).mouseup(function (e) {
    var div = $(".modal-container");
    if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        $('.modal').hide();
    }
    $(window).unbind('scroll');



});

$('#scene').mousemove(function (e) {

    var wx = $(window).width();
    var wy = $(window).height();

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;

    var newx = x - wx / 2;
    var newy = y - wy / 2;



    $('.parallax-layer').each(function () {
        var speed = $(this).attr('data-speed');
        if ($(this).attr('data-revert')) speed *= -1;
        TweenMax.to($(this), 1, {
            x: (1 - newx * speed),
            y: (1 - newy * speed)
        });

    });

});
