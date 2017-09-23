// When the user clicks any picture (.gallery2 img)
  // Fade in the picture inside the lightbox (.lightbox)
var currentImageNumber = 0;

$('.gallery2 img').on('click', function () {
  console.log("is it working?");
  var clickedImageSrc = $(this).attr('src');
  console.log(clickedImageSrc);
  $('.lightbox img').attr('src', clickedImageSrc);
  $('.lightbox').fadeIn('fast');
  // Set the currentImageNumber to the number of the image they clicked on
  currentImageNumber = $(this).index();
  console.log(currentImageNumber);
});

// When the user clicks the lightbox (.lightbox)
  // Fade out the lightbox (.lightbox)
  $('.lightbox').on('click', function () {
    console.log("is it working?");
    $('.lightbox').fadeOut('fast');
    console.log('its working!');
  });


// When the user clicks the next arrow (#next)
 //  if (currentImageNumber === 5) {
 //   currentImageNumber = 0;
 // } else {
 //   currentImageNumber += 1;
 // }
 //  console.log(currentImageNumber);
 //
 //  $('.page1').hide();
 //  $('.page1').eq(currentImageNumber).fadeIn(300);
