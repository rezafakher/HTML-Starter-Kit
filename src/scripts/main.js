/* eslint-env browser */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Your custom JavaScript goes here

    // Show and hide menu in mobile view
    document.querySelector('.icon-humburger').addEventListener('click', function () {
      document.querySelector('.menu__nav').classList.add('u-block');
    });

    document.querySelector('.icon-close').addEventListener('click', function () {
      document.querySelector('.menu__nav').classList.remove('u-block');
    });

    // Flickity Slider For Dishes
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
      prevNextButtons: false,
      pageDots: false
    });

    document.querySelector('.button--next').addEventListener('click', function () {
      flkty.next();
    });

    document.querySelector('.button--previous').addEventListener('click', function () {
      flkty.previous();
    });

    var flickity_slider = document.querySelector('.flickity-slider').childNodes.length;
    document.querySelector('.number--Allslide').append(flickity_slider);

  });
})();
