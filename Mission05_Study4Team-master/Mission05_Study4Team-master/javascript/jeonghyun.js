// $(document).ready(function () {
//   $(".navi>li")
//     .mouseover(function () {
//       $(this).find(".submenu").stop().slideDown();
//     })
//     .mouseout(function () {
//       $(this).find(".submenu").stop().slideUp();
//     });
// });



/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});




$('document').ready(function() {
   var options = { videoId: 'tvPnrfQCiCo', mute:true, width:$("#tubular_video").width()};
   $('#tubular_video').tubular(options);
     // f-UGhWj1xww cool sepia hd
    // 49SKbS7Xwf4 beautiful barn sepia
   });
