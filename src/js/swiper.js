(function () {
  "use strict";

  const breakpoint = window.matchMedia("(min-width:68em)");

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
    swiper = new Swiper(".swiper", {
      slidesPerView: 'auto',
      loop: true,
      spaceBetween: 30,
      freeMode: true,
      keyboardControl: true,
      grabCursor: true,
    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();
