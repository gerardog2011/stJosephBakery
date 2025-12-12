(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).on("scroll", function () {
        const $navbar = $(".navbar");
        if ($navbar.length === 0) return; // si aún no existe, salir

        if ($(this).scrollTop() > 40) {
            $navbar.addClass("sticky-top");
        } else {
            $navbar.removeClass("sticky-top");
        }
    });


    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


// Smooth Scroll para enlaces con clase .scroll-link (navbar incluido en header.html)
$(document).on("click", ".scroll-link", function (event) {
    const targetId = $(this).attr("href");

    // Solo hacemos scroll si es un anchor interno (#about, #menu, etc.)
    if (!targetId || !targetId.startsWith("#")) return;

    event.preventDefault();

    const $target = $(targetId);
    if ($target.length) {
        $("html, body").animate(
            {
                scrollTop: $target.offset().top - 70 // ajusta este 70 según la altura de tu navbar
            },
            250 // velocidad en ms (cámbialo para más rápido o más lento)
        );
    }

    // Cerrar el menú en móvil
    const $navbarCollapse = $(".navbar-collapse");
    if ($navbarCollapse.hasClass("show")) {
        $navbarCollapse.removeClass("show");
    }
});

