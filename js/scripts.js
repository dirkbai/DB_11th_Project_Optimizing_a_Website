

var lazyModals = document.getElementsByClassName('mod');
var lazyPhotos = document.getElementsByClassName('photos4loading');
var photosXL = document.querySelectorAll('.click4XL');



for (var i = 0; i < photosXL.length; i++) {
  photosXL[i].index = i;
  photosXL[i].addEventListener("click", function(e){
     for (var i = 0; i < photosXL.length; i++) {
       var number4XLphoto = i+1;
       lazyModals[i].classList.add('loaded');
       lazyModals[i].setAttribute('src', 'img/XL/photo' + number4XLphoto + '.jpg');
       lazyModals[i].setAttribute('data-was-processed', "true");
     }
  });
}

document.addEventListener('scroll', function() {
  for (var i = 0; i < lazyPhotos.length; i++) {
    var currentPhoto = lazyPhotos[i];
    var currentId = currentPhoto.getAttribute("id");
    currentPhoto.setAttribute('src', 'img/'+ currentId +'.jpg');
  }
});

//   photo5.addEventListener('scroll', function() {
//   this.setAttribute('src', 'img/photo5.jpg');
// });
//
// photo6.addEventListener('scroll', function() {
// this.setAttribute('src', 'img/photo6.jpg');
// });
