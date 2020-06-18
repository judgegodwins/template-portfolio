var display = document.querySelector('#img-display'); // the dark background popup container
var images = document.querySelectorAll('.image'); //images in popup;
var closer = document.querySelector('.closer'); // x icon to close popup
var bckShifter = document.querySelector('#backward'); // forward button
var frtShifter = document.querySelector('#forward') // backward button



var popupImages = []; //array of images to be displayed in popup 

var popup = function(e) {
    display.classList.add('open')// add class open to bring popup out
    let oldChild = displayer.children[2]; // currentimage element. Undefined at first click
    let newChild = popupImages.find(function(img) { return img.getAttribute('src') == e.target.src }); // find clicked element clone in popupImages
    if(!oldChild) {
        //if this is first click, then append an image
        displayer.appendChild(newChild);

    } else {
        //if not replace image
        displayer.replaceChild(newChild, oldChild);
    }
}

images.forEach(function(img, index) {             //iterate through images
    let popupImg = document.createElement('img'); //create clone to be pushed to popupImages array.
    popupImg.setAttribute('src', img.src); //set source to src of original
    popupImg.classList.add('popup-img45')
    popupImages.push(popupImg); //push to array
    img.addEventListener('click', popup); // add click listener
});

closer.addEventListener('click', function(e) { display.classList.remove('open') }); //close popup

frtShifter.addEventListener('click', function(e) {
    
    let currentIndex = popupImages.indexOf(displayer.children[2]); //index of currentdisplaying image
    let newImage;
    if(currentIndex === popupImages.length-1) { // if last image start from beginning
        newImage = popupImages.find(function(img) { popupImages.indexOf(img) === 0});
    } else newImage = popupImages.find(function(img) {popupImages.indexOf(img) === currentIndex + 1}); // find next image
    displayer.replaceChild(newImage, displayer.children[2]); // replace already existing image with found one.
})

bckShifter.addEventListener('click', function(e) {
    let currentIndex = popupImages.indexOf(displayer.children[2]);
    let newImage;
    if(currentIndex === 0) {
        newImage = popupImages[popupImages.length-1]; // if first image go through the back
    } else {
        newImage = popupImages.find(img => popupImages.indexOf(img) === currentIndex - 1 );
    }
    displayer.replaceChild(newImage, displayer.children[2]); //replace image
})

