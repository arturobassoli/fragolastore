(function () {
  "use strict";

  // Define breakpoint
  const breakpoint = window.matchMedia("(min-width:75em)");

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
    swiper = new Swiper(".swiper1", {
      slidesPerView: 'auto',
      loop: true,
      freeMode: true,
      keyboardControl: true,
      grabCursor: true,
    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();
