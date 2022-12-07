const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
const gridHeight = 70;
const gridWidth = 120;
let myHTML = ''
let myColor = '';
function addColor(color, index){
    document.querySelector('#colors').innerHTML += 
        `<div class="color" data-index="${index}" id="${color}" style="background-color:${color}"></div>`
}
function pickColor(color){
    myColor = color;
    document.querySelectorAll('.color').forEach(c => c.classList.remove('selected'));
    if (myColor){
        document.querySelector(`#${myColor}`).classList.add('selected');
    }
}
function reset(e){
    if (e.code == 'KeyC'){
        boxes.forEach(box => box.style.backgroundColor = 'white')
    }
}
function cycleColor(e){
    if (e.code == 'KeyD' || e.code == 'KeyA'){
        if (myColor == '') currentColorIndex = -1
        else currentColorIndex = document.querySelector(`#${myColor}`).getAttribute('data-index')
        let newIndex 
        if (e.code == 'KeyD') newIndex = +currentColorIndex+1;
        else newIndex = +currentColorIndex-1;
        if (newIndex > colors.length - 1) newIndex = 0;
        if (newIndex < 0) newIndex = (colors.length - 1);
        let newColor = document.querySelector(`.color[data-index="${newIndex}"]`).id;
        pickColor(newColor);
    }
    if (e.code == 'KeyS'){
        console.log(e)
        pickColor('')
        console.log(myColor)
    }
}
for (let i=0; i < gridHeight; i++){
    myHTML += `<div class="row" id="row${i}">`;
    for (let j = 0; j < gridWidth; j++){
        myHTML += `<div class="box" id="row${i}-box${j}"></div>`;
    }
    myHTML += '</div>'
}
document.querySelector('#grid').innerHTML = myHTML;
const boxes = document.querySelectorAll('.box')
colors.forEach((color, index) => addColor(color,index))
colors.forEach(color => document.querySelector(`#${color}`).addEventListener('click', e => pickColor(e.target.id)))
boxes.forEach(box => box.addEventListener('mouseover', e => {if (myColor) e.target.style.backgroundColor = myColor}))
document.addEventListener('keydown', e => (reset(e), cycleColor(e)))
