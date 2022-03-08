/*
SOME BASICS
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });
  
  
Above function is equivalent to
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});

where the function() can be replaced with () =>
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image-deneme.jpg') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/image-deneme.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
    
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
  