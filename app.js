//active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const servicesMenu = document.querySelector('#services-page')
  const productMenu = document.querySelector('#product-page')
  const awardMenu = document.querySelector('#award-page')
  let scrollPos = window.scrollY;
 
  // adds 'highlight' class to my menu items
  if(window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      productMenu.classList.remove('highlight');
      return;
  } else if (window.innerWidth > 960 && scrollPos < 1800) {
      productMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      awardMenu.classList.remove('highlight');
      return;
  } else if (window.innerWidth > 960 && scrollPos < 2500) {
      awardMenu.classList.add('highlight');
      productMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      return;
  } else if (window.innerWidth > 960 && scrollPos < 200000) {
      awardMenu.classList.remove('highlight');
      servicesMenu.classList.add('highlight');
      return;
  }

  if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
  }
};


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


