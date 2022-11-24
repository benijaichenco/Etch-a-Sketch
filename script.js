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
