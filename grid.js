let myHTML = ''
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
let myColor;
function addColor(c){
    document.querySelector('#colors').innerHTML += 
        `<div class="color" id="${c}" style="background-color:${c}"></div>`
}
for (let i=0; i < 16; i++){
    myHTML += `<div class="row" id="row${i}">`;
    for (let j = 0; j<16; j++){
        myHTML += `<div class="box" id="row${i}-box${j}"></div>`;
    }
    myHTML += '</div>'
}
document.querySelector('#grid').innerHTML = myHTML;
const boxes = document.querySelectorAll('.box')
colors.forEach(color => addColor(color))
colors.forEach(color => document.querySelector(`#${color}`).addEventListener('click', e => myColor = (e.target.id)))
boxes.forEach(box => box.addEventListener('mouseover', e => e.target.style.backgroundColor = myColor))