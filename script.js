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
    hoverEffect();
};

makeRows(16, 16);

let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    removeOldGrid();
    let rows = prompt('How many rows? ');
    if (rows > 100) {
        alert('too large');
        return;
    }
    let cols = prompt('How many columns? ');
    if (cols > 100) {
        alert('too large');
        return;
    }
    makeRows(rows,cols);

});



let randomColor = function() {
    let letters  = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function hoverEffect() {
    let items = document.querySelectorAll('#grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColor()}`;
        });
    });
}


function removeOldGrid () {
    document.querySelectorAll('#grid-item')
    .forEach((e) => e.parentNode.removeChild(e));
    }
