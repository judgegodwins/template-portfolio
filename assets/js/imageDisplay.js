var display = document.querySelector('#img-display');
var images = document.querySelectorAll('.image');
var closer = document.querySelector('.closer');
var displayer = display.children[0];
var bckShifter = document.querySelector('#backward');
var frtShifter = document.querySelector('#forward')



var popupImages = [];

var popup = function(e) {
    display.classList.add('open')
    let oldChild = displayer.children[2];
    let newChild = popupImages.find(img => img.getAttribute('src') == e.target.getAttribute('src'));
    if(!oldChild) {
        displayer.appendChild(newChild);
    } else {
        displayer.replaceChild(newChild, oldChild);
    }
}

images.forEach(function(img, index) {
    let popupImg = document.createElement('img');
    popupImg.setAttribute('src', img.src);
    popupImg.classList.add('popup-img45')
    popupImages.push(popupImg);
    
    img.addEventListener('click', popup);
});

closer.addEventListener('click', function(e) { display.classList.remove('open') });

frtShifter.addEventListener('click', function(e) {
    
    let currentIndex = popupImages.indexOf(displayer.children[2]);
    let newImage;
    if(currentIndex === popupImages.length-1) {
        newImage = popupImages.find(function(img) { popupImages.indexOf(img) === 0});
    } else newImage = popupImages.find(function(img) {popupImages.indexOf(img) === currentIndex + 1});
    displayer.replaceChild(newImage, displayer.children[2]);
})

bckShifter.addEventListener('click', function(e) {
    let currentIndex = popupImages.indexOf(displayer.children[2]);
    let newImage;
    if(currentIndex === 0) {
        newImage = popupImages[popupImages.length-1];
    } else {
        newImage = popupImages.find(img => popupImages.indexOf(img) === currentIndex - 1 );
    }
    displayer.replaceChild(newImage, displayer.children[2]);
})

