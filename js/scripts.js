console.log('scrpts!!!!+++');

var lazyModals = document.getElementsByClassName('mod');
var lazyPhotos = document.getElementsByClassName('photos4loading');
var photosXL = document.querySelectorAll('.click4XL');
// var photo4 = document.getElementById('photo4');
// var photo5 = document.getElementById('photo5');
// var photo6 = document.getElementById('photo6');
// var photo7 = document.getElementById('photo7');
// var photo8 = document.getElementById('photo8');
// var photo9 = document.getElementById('photo9');

// photosXL.addEventListener('click', function{
//   // console.log('it worked');
// });


for (var i = 0; i < photosXL.length; i++) {
  photosXL[i].index = i;
  photosXL[i].addEventListener("click", function(e){
     for (var i = 0; i < photosXL.length; i++) {
       lazyModals[i].classList.add('loaded');
       lazyModals[i].setAttribute('src', 'img/XL/photo' + i + '.jpg');
       lazyModals[i].setAttribute('data-was-processed', "true");
     }
  });
}

// function lazyModal_1(e) {
//       // var numberString = $(this).attr("data-message");
//       // var numberXL = parseInt(numberString);
//
//       lazyModals[numberXL].classList.add('loaded');
//       lazyModals[numberXL].setAttribute('src', 'img/XL/photo' + numberXL + '.jpg');
//       lazyModals[numberXL].setAttribute('data-was-processed', "true");
//     }
//
// function lazyModal_2() {
//       lazyModals[1].classList.add('loaded');
//       lazyModals[1].setAttribute('src', 'img/XL/photo2.jpg');
//       lazyModals[1].setAttribute('data-was-processed', "true");
//     }
//
// function lazyModal_3() {
//       lazyModals[2].classList.add('loaded');
//       lazyModals[2].setAttribute('src', 'img/XL/photo3.jpg');
//       lazyModals[2].setAttribute('data-was-processed', "true");
//     }
//
// function lazyModal_4() {
//       lazyModals[3].classList.add('loaded');
//       lazyModals[3].setAttribute('src', 'img/XL/photo4.jpg');
//       lazyModals[3].setAttribute('data-was-processed', "true");
//     }
//
// function lazyModal_5() {
//       lazyModals[4].classList.add('loaded');
//       lazyModals[4].setAttribute('src', 'img/XL/photo5.jpg');
//       lazyModals[4].setAttribute('data-was-processed', "true");
//     }
//
// function lazyModal_6() {
//       lazyModals[5].classList.add('loaded');
//       lazyModals[5].setAttribute('src', 'img/XL/photo6.jpg');
//       lazyModals[5].setAttribute('data-was-processed', "true");
//     }
//
// function lazyModal_7() {
//       lazyModals[6].classList.add('loaded');
//       lazyModals[6].setAttribute('src', 'img/XL/photo7.jpg');
//       lazyModals[6].setAttribute('data-was-processed', "true");
//     }
//
// function lazyModal_8() {
//       lazyModals[7].classList.add('loaded');
//       lazyModals[7].setAttribute('src', 'img/XL/photo8.jpg');
//       lazyModals[7].setAttribute('data-was-processed', "true");
//     }
//
// function lazyModal_9() {
//       lazyModals[8].classList.add('loaded');
//       lazyModals[8].setAttribute('src', 'img/XL/photo9.jpg');
//       lazyModals[8].setAttribute('data-was-processed', "true");
//     }
//

document.addEventListener('scroll', function() {
  for (var i = 0; i < lazyPhotos.length; i++) {
    var currentPhoto = lazyPhotos[i];
    var currentId = currentPhoto.getAttribute("id");
    currentPhoto.setAttribute('src', 'img/'+ currentId +'.jpg');
  }
  // photo4.setAttribute('src', 'img/photo4.jpg');
  // photo5.setAttribute('src', 'img/photo5.jpg');
  // photo6.setAttribute('src', 'img/photo6.jpg');
  // photo7.setAttribute('src', 'img/photo7.jpg');
  // photo8.setAttribute('src', 'img/photo8.jpg');
  // photo9.setAttribute('src', 'img/photo9.jpg');
});

//   photo5.addEventListener('scroll', function() {
//   this.setAttribute('src', 'img/photo5.jpg');
// });
//
// photo6.addEventListener('scroll', function() {
// this.setAttribute('src', 'img/photo6.jpg');
// });
