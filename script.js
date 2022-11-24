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
