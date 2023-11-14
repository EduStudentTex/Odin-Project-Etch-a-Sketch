document.addEventListener('DOMContentLoaded', function () {
    CreatGrid(16);
})

var gridSizes = document.querySelectorAll('.options');
gridSizes.forEach(function(option) {
    option.addEventListener('click', function () {
        console.log(option.id);
        CreatGrid(option.id);
    });
});

function CreatGrid(size) {
    console.log(size);
    var box = document.querySelector(".box");
    box.style.backgroundColor = 'lightgrey';
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size},1fr)`; 

    let blocks = size*size;

    for (let i = 0; i < blocks; i++) {
        let block = document.createElement("div");
        box.insertAdjacentElement("beforeend", block);
    }
}

//as we get the grid size by buttons, it does not need a validate input 
//anymore.


