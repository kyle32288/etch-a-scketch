const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
const gridHeight = 16;
const gridWidth = 40;
let myHTML = ''
let myColor;
function addColor(c){
    document.querySelector('#colors').innerHTML += 
        `<div class="color" id="${c}" style="background-color:${c}"></div>`
}
function pickColor(color){
    myColor = color;
    
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
colors.forEach(color => addColor(color))
colors.forEach(color => document.querySelector(`#${color}`).addEventListener('click', e => myColor = (e.target.id)))
boxes.forEach(box => box.addEventListener('mouseover', e => e.target.style.backgroundColor = myColor))