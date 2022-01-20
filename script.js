"use strict"

const container = document.querySelector('.container');

function createGrid(size) {
    for (let i = 1; i <= size ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('square', `square${i}`);
        container.appendChild(div);
        container.style.removeProperty('grid-template-column');
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    }
    colorSquares();
}

function chooseSize() {
    let size = (Number(prompt("Pick Your Sketchpad Size! (Tip: Must be 64 or less)")));
    if (size > 64 || isNaN(size) || !size) {
        alert("The number must be below 64");
        return createGrid(16);
    }
    return createGrid(size);
}

function colorSquares() {
    const allSquare = document.querySelectorAll('.square');
    allSquare.forEach((square) => {
        square.addEventListener('mouseover', function() {
            square.style.cssText = 'background-color: black';
    });
});
}

    
chooseSize();




