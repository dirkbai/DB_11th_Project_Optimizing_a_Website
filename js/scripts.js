console.log('scrpts!!!!+++');

const lazyModals = document.getElementsByClassName('mod');
const photo4 = document.getElementById('photo4');
const photo5 = document.getElementById('photo5');
const photo6 = document.getElementById('photo6');
const photo7 = document.getElementById('photo7');
const photo8 = document.getElementById('photo8');
const photo9 = document.getElementById('photo9');


    document.addEventListener('scroll', function() {
      photo4.setAttribute('src', 'img/photo4.jpg');
      photo5.setAttribute('src', 'img/photo5.jpg');
      photo6.setAttribute('src', 'img/photo6.jpg');
      photo7.setAttribute('src', 'img/photo7.jpg');
      photo8.setAttribute('src', 'img/photo8.jpg');
      photo9.setAttribute('src', 'img/photo9.jpg');
    });
