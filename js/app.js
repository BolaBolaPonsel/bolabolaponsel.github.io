// NAV
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

// VID
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach((video) => {
  video.onclick = () => {
    listVideo.forEach((vid) => vid.classList.remove('active'));
    video.classList.add('active');
    if (video.classList.contains('active')) {
      let src = video.children[0].getAttribute('src');
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
    }
  };
});
