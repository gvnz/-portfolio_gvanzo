// Make it rain!!
// Building the carousel for 6 images - landing page
// store the initial number (0) in a var

if ($(window).width() > 850) {
  var currentImageNumber = 0;

  $('.page1').eq(currentImageNumber).addClass('current');

  setInterval(function () {
    if (currentImageNumber === 3) {
     currentImageNumber = 0;
   } else {
     currentImageNumber += 1;
   }
    console.log(currentImageNumber);

    $('.page1').hide();
    $('.page1').eq(currentImageNumber).fadeIn(300);
    $('.page1').removeClass('current')
    $('.page1').eq(currentImageNumber).addClass('current');

  }, 4000);
}
