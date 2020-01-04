let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/boy.png') {
      myImage.setAttribute ('src','images/r2d2.png');
    } else {
      myImage.setAttribute ('src','images/boy.png');
    }
}

let myButton = document.querySelector('.change-username');
let logInInfo = document.querySelector('.log-in-info');
logInInfo.textContent = 'You are not logged in'

function setUsername() {
  let myName = prompt('Please enter your name: ');
  localStorage.setItem('Name', myName);
  logInInfo.textContent = myName + ' is logged in';
}

if (!localStorage.getItem('Name')) {
  setUsername();
}else{
  let storedName = localStorage.getItem('Name');
  logInInfo.textContent = storedName + ' is logged in';
}

myButton.onclick = function() {
  setUsername();
}