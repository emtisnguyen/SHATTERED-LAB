(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Chức năng hiển thị thông tin sản phẩm
    let selectedProduct = {};

    window.showDetails = function (name, price) {
        selectedProduct = { name, price };
        document.getElementById('product-name').innerText = name;
        document.getElementById('product-price').innerText = "Price: $" + price.toFixed(2);
        document.getElementById('details').style.display = "block";
    };

    // Chức năng đặt hàng, chuyển hướng đến trang order.html
    window.orderProduct = function () {
        if (Object.keys(selectedProduct).length === 0) {
            alert("Vui lòng chọn sản phẩm trước khi đặt hàng!");
        } else {
            window.location.href = `order.html?name=${encodeURIComponent(selectedProduct.name)}&price=${selectedProduct.price.toFixed(2)}`;
        }
    };

})(jQuery);



