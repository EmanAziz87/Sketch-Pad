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
    allSquare.forEach((square) => {square.remove()});
}


function chooseGridSize() {
    resetButton.addEventListener('click', function() {
        let size = (Number(prompt('Pick Your Sketchpad Size! (Tip: Must be 64 or less)')));
        if (size > 64 || isNaN(size) || !size) {
            alert('The number must be below 64');
            removeGrid();
            createGrid(16);
        } else {
            removeGrid();
            createGrid(size);
        }
    });
}

function colorSquares() {
    const allSquare = document.querySelectorAll('.square');
    allSquare.forEach((square) => {
        square.addEventListener('mouseover', function() {
            square.style.cssText = 'background-color: black';
        });
    });
    blackButton.addEventListener('click', function(){
        allSquare.forEach((square) => {
            square.style.cssText = 'background-color: none';
            square.addEventListener('mouseover', function() {
                square.style.cssText = 'background-color: black';
            });
        });
    });
    rainbowSquares();
}

function rainbowSquares() {
    rainbowButton.addEventListener('click', function() {
        const allSquare = document.querySelectorAll('.square');
        allSquare.forEach((square) => {
            square.style.cssText = 'background-color: none';
            square.addEventListener('mouseover', function() {
                let red = Math.floor((Math.random() * 255) + 1);
                let green = Math.floor((Math.random() * 255) + 1);
                let blue = Math.floor((Math.random() * 255) + 1);
                square.style.cssText = `background-color: rgb(${red}, ${green}, ${blue})`;
            });
        });
    });   
}

const resetButton = document.createElement('button');
resetButton.textContent = 'Grid Reset';
resetButton.classList.add('button', 'reset-button');
outerContainer.appendChild(resetButton);

const rainbowButton = document.createElement('button');
rainbowButton.textContent = 'Rainbow';
rainbowButton.classList.add('button', 'rainbow-button');
outerContainer.appendChild(rainbowButton);

const blackButton = document.createElement('button');
blackButton.textContent = 'Black';
blackButton.classList.add('button', 'black-button')
outerContainer.appendChild(blackButton);


chooseGridSize();
createGrid();




