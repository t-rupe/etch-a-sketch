const container = document.getElementById('container');

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        container.appendChild(cell).className = 'grid-item';
        container.appendChild(cell).setAttribute('id', 'grid-item');
    };
};

makeRows(16, 16);

function hoverListener() {
    griddy.setAttribute('style', 'background-color:yellow;');
}

function returnBackground() {
    griddy.removeAttribute('style', 'background-color:yellow;');
}
let griddy = document.getElementById('grid-item');
griddy.addEventListener('mouseover', hoverListener);
griddy.addEventListener('mouseout', returnBackground);