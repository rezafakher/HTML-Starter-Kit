/* eslint-env browser */
(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    // Your custom JavaScript goes here

    // Show and hide menu in mobile view
    document.querySelector('.icon-humburger').addEventListener('click',function(){
      document.querySelector('.menu__nav').classList.add('u-block');
    });

    document.querySelector('.icon-close').addEventListener('click',function(){
      document.querySelector('.menu__nav').classList.remove('u-block');
    });

  });
})();
