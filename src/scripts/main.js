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

    var flickity_slider = document.querySelector('.flickity-slider').childNodes.length;
    document.querySelector('.number--slide span').append(flickity_slider);

    let input = document.querySelector('.input__number');
    let step = 1;
    let max = flickity_slider + 1;
    let min = 0;

    document.querySelector('.button--next').addEventListener('click', function () {
      flkty.next();

      let input_change = parseInt(input.value) + step;
      if (input_change === max) {
        return false;
      } else {
        input.value = input_change
      }

    });

    document.querySelector('.button--previous').addEventListener('click', function () {
      flkty.previous();

      let input_change = parseInt(input.value) - step;
      if (input_change === min) {
        return false;
      } else {
        input.value = input_change
      }
    });

  });
})();


function openMenu(evt, menuName) {
  var i, menus_body, tablinks;
  menus_body = document.getElementsByClassName("menus-body");
  for (i = 0; i < menus_body.length; i++) {
    menus_body[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
