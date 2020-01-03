let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/boy.png') {
      myImage.setAttribute ('src','images/r2d2.png');
    } else {
      myImage.setAttribute ('src','images/boy.png');
    }
}