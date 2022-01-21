"use strict"

const container = document.querySelector('.container');
const outerContainer = document.querySelector('.outer-container');

function createGrid(size, defaultGrid = 16) {
    if (!isNaN(size)) {
        for (let i = 1; i <= size ** 2; i++) {
            const div = document.createElement('div');
            div.classList.add('square', `square${i}`);
            container.appendChild(div);
            container.style.removeProperty('grid-template-column');
            container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        } 
    } else {
        for (let i = 1; i <= defaultGrid ** 2; i++) {
            const div = document.createElement('div');
            div.classList.add('square', `square${i}`);
            container.appendChild(div);
            container.style.removeProperty('grid-template-column');
            container.style.gridTemplateColumns = `repeat(${defaultGrid}, 1fr)`;
        } 
    }
    colorSquares();
}

function removeGrid() {
    const allSquare = document.querySelectorAll('.square');
    let previousGrid = 0;
    allSquare.forEach((square) => {square.remove()});
}

function chooseSize() {
    resetButton.addEventListener('click', function() {
        let size = (Number(prompt('Pick Your Sketchpad Size! (Tip: Must be 64 or less)')));
        if (size > 64 || isNaN(size) || !size) {
            alert('The number must be below 64');
            removeGrid();
            createGrid(16);
        }
        removeGrid();
        createGrid(size);
    });
    removeGrid();
}

function colorSquares() {
    const allSquare = document.querySelectorAll('.square');
    allSquare.forEach((square) => {
        square.addEventListener('mouseover', function() {
            square.style.cssText = 'background-color: black';
    });
});
}



const resetButton = document.createElement('button');
resetButton.textContent = 'Grid Reset';
outerContainer.appendChild(resetButton);


chooseSize();
createGrid();




