document.addEventListener('DOMContentLoaded', function () {
    CreatGrid(32);
})


function CreatGrid(size) {
    var box = document.querySelector(".box");
    box.style.backgroundColor = 'lightgrey';
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size},1fr)`; 

    let blocks = size*size;

    for (let i = 0; i < blocks; i++) {
        let block = document.createElement("div");
        box.insertAdjacentElement("beforeend", div);
        //block.className = 'block';
        //box.appendChild(block);
    }
}



