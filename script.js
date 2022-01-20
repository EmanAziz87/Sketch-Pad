"use strict"

// Creates 16 Squares and gives them the same class
for (let i = 1; i <= 256; i++) {
    const container = document.querySelector('.container');
    const div = document.createElement('div');
    div.classList.add('square', `square${i}`);
    container.appendChild(div);
}

const allSquare = document.querySelectorAll('.square');

allSquare.forEach((square) => {
    square.addEventListener('mouseover', function() {
        square.style.cssText = 'background-color: black';
    });
});
   
    




