const container = document.querySelector('.container');
//create content div for the grid
const content = document.createElement('div');
container.appendChild(content).classList.add('content');

//create a default grid 16x16
function createGrid() {
    content.style.gridTemplateColumns = 'repeat(16, 1fr)';
    //for loop
    for (let i = 0; i < (16 * 16); i++) {
        const box = document.createElement('div');
        content.appendChild(box).classList.add('pixel');
        box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        });
    }
}
createGrid();

//create button at top of screen to select grid size
const resize = document.createElement('button');
resize.textContent = 'Select Size';
container.insertBefore(resize, content).classList.add('resize');

//generete function to reset the grid
function reset() {
    const pixels = content.querySelectorAll('div');
    pixels.forEach(pixel => {
        pixel.remove();
    });
}

//generate function to resize grid
function selectSize(size) {
    size = prompt('Select size', '');
    console.log(size);
    if (size === null || size === undefined || size === '') {
        return;
    } else if (size > 100) {
        alert('Maximum grid size is 100');
    } else {
        reset();
        content.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        //for loop
        for (let i = 0; i < (size * size); i++) {
            const box = document.createElement('div');
            content.appendChild(box).classList.add('pixel');
            box.addEventListener('mouseover', () => {
                box.style.background = 'black';
            });
        }
    }
}

//when 'resize' button clicked, initiate 'selectSize' function
resize.addEventListener('click', selectSize);

//generate function to return random color
function getColor() {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    let color = `rgb(${R},${G},${B})`;
    return color;
}

//generate function to chagne grid pixels to random colors
function randomColor(size) {
    size = prompt('Select size', '');
    console.log(size);
    if (size === null || size === undefined || size === '') {
        return;
    } else if (size > 100) {
        alert('Maximum grid size is 100');
    } else {
        reset();
        content.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        //for loop
        for (let i = 0; i < (size * size); i++) {
            const box = document.createElement('div');
            content.appendChild(box).classList.add('pixel');
            box.addEventListener('mouseover', () => {
                box.style.background = getColor();
            });
        }
    }
}

//create button to select color mode
const color = document.createElement('button');
color.textContent = 'Color';
container.insertBefore(color, content);
color.addEventListener('click', randomColor);