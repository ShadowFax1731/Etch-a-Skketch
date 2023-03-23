let rows = 16, cols = 16;
const container = document.querySelector(".grid-container");

function reset(container) {
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
  classicMode();
};

const slider = document.querySelector('.slider')
const screenVal = document.querySelector('.grid-size-text');
screenVal.textContent = '16'
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    reset(container);
    container.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'gold';
        })
        container.appendChild(div); 
    }
});

const items = document.querySelectorAll('.grid-item');

const classic = document.querySelector('.classic');
classic.addEventListener('click', classicMode);

function classicMode(){
    let val = slider.value;
    let cells = container.children;
    for(let i = 0; i < val*val; i++){   
        cells[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black'
        })
    }
}

const rgb = document.querySelector('.rgb');
rgb.addEventListener('click', rgbMode);

function rgbMode(){
    let val = slider.value;
    let cells = container.children;
    for(let i = 0; i < val*val; i++){  
        cells[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = getRandomColor();
        })
    }
}



function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    console.log(color);
    return color;
}

const erase = document.querySelector('.erase');
erase.addEventListener('click', eraseContent);

function eraseContent() {
    let val = slider.value;
    let cells = container.children;
    for(let i = 0; i < val*val; i++){   
        cells[i].style.backgroundColor = 'gold';
    }
    classicMode();
}
makeGrid(16,16);

