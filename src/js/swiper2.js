(function () {
  "use strict";

  // Define breakpoint
  const breakpoint = window.matchMedia("(min-width:48em)");

  let swiper;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (swiper !== undefined) swiper.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    swiper = new Swiper(".swiper2", {
      slidesPerView: 1,
      loop: false,
      freeMode: false,
      keyboardControl: true,
      grabCursor: true,

      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();
