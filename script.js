/*hamburger menu display */ 

const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

/* set content in different columns to same height */
$(document).ready(function(){
    var heightOfImage1 = $('.img10').height(); // Get height of first image
    $('.img2').height(heightOfImage1); // Set height of second image to match the first one
});

/*set text and image in different columns to same height */
$(document).ready(function(){
    var heightOfImage1 = $('.img10').height(); // Get height of the image
    $('.text1').css('line-height', heightOfImage1 + 'px'); // Set line height of text to match image height
});