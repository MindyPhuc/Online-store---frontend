/******************************************
 * WEB222NAA
 * Assignment 5
 * Name: Thi My Phuc Huynh (Mindy).
 * Student ID: 149792186.
 * Date: July, 29, 2020
 ********************************************/

(function () {
  function setupMenuHandlers() {
    // querry elements
    let sub = document.querySelector('#subtitle');
    let cups = document.querySelectorAll('.cupcakes');
    let dons = document.querySelectorAll('.donuts');
    let macs = document.querySelectorAll('.macaroons');

    let all = document.querySelector('#nav_alls');
    let c = document.querySelector('#nav_cupcakes');
    let d = document.querySelector('#nav_donuts');
    let m = document.querySelector('#nav_macaroons');

    // add event listener for Cupcakes
    c && c.addEventListener('click', function () {
      sub.innerHTML = 'Cupcakes';
      cups.forEach(cup => (cup.style.display = 'block'));
      dons.forEach(don => (don.style.display = 'none'));
      macs.forEach(mac => (mac.style.display = 'none'));
    });

    // add event listener for Donuts
    d && d.addEventListener('click', function () {
      sub.innerHTML = 'Donuts';
      dons.forEach(don => (don.style.display = 'block'));
      cups.forEach(cup => (cup.style.display = 'none'));
      macs.forEach(mac => (mac.style.display = 'none'));
    });

    // add event listener for Macaroons
    m && m.addEventListener('click', function () {
      sub.innerHTML = 'Macaroons';
      macs.forEach(mac => (mac.style.display = 'block'));
      dons.forEach(don => (don.style.display = 'none'));
      cups.forEach(cup => (cup.style.display = 'none'));
    });

    // add event listener for All
    all && all.addEventListener('click', function () {
      sub.innerHTML = 'All products';
      macs.forEach(mac => (mac.style.display = 'block'));
      dons.forEach(don => (don.style.display = 'block'));
      cups.forEach(cup => (cup.style.display = 'block'));
    });

    // slide images in the slogan area
    const slide_images = [
      'images/desserts_1.jpg',
      'images/desserts_2.jpg',
      'images/desserts_3.jpg',
      'images/desserts_4.jpg'
    ];
    let img = document.querySelector('#slide_img');
    let currentImageIdx = 0;

    function nextImageUrl() {
      currentImageIdx++;
      if (currentImageIdx === slide_images.length - 1) {
        currentImageIdx = 0;
      }
      return slide_images[currentImageIdx];
    }

    setInterval(function () {
      img && (img.src = nextImageUrl());
    }, 3 * 1000);

  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;



  /* Fixed header on scroll, reference from https://www.w3schools.com/ */

  window.onscroll = function () {
    scrolling();
  }; // When the user scrolls the page, execute myFunction

  var header = document.querySelector('#header'); // Get the header
  var sticky = header.offsetTop; // Get the offset position of the navbar

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function scrolling() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }


})();
