// check for saved 'darkMode' in localStorage
let cardscale = localStorage.getItem('cardscale'); 

const cardScaleToggle = document.querySelector('#card-size-toggle');

const expandCard = () => {
  // 1. Add the class to the body
  document.querySelector('#card-size-toggle').classList.add('col-md-12');
  document.querySelector('#card-size-toggle').classList.remove('col-md-4');
  // 2. Update darkMode in localStorage
  localStorage.setItem('cardscale', 'enabled');
  console.log("test");
}

const collapseCard = () => {
  // 1. Remove the class from the body
  document.querySelector('#card-size-toggle').classList.add('col-md-4');
  document.querySelector('#card-size-toggle').classList.remove('col-md-12');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('cardscale', 'disabled');
}

// When someone clicks the button
cardScaleToggle.addEventListener('click', () => {
  // get their darkMode setting
  cardscale = localStorage.getItem('cardscale'); 
  
  // if it not current enabled, enable it
  if (cardscale !== 'enabled') {
    expandCard();
  // if it has been enabled, turn it off  
  } else {  
    collapseCard(); 
  }
});