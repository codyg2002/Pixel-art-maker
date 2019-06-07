// Reference
// - Knowledge from udacity.com (https://knowledge.udacity.com/)
// Select color input
const color = document.getElementById("colorPicker");

// Select size input
const height = document.getElementById("inputHeight").value;
const width = document.getElementById("inputWidth").value;
const sizePicker = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function(submit){
     submit.preventDefault();
     canvas.innerHTML = null;
     makeGrid(); 
});

function makeGrid() {
     const height = document.getElementById("inputHeight").value;
     const width = document.getElementById("inputWidth").value;
     for (let r = 1; r <= height; r++){
        let row = document.createElement("tr");
        canvas.appendChild(row);
        for (let c = 1; c <= width; c++){
            let column = document.createElement("td");
            canvas.appendChild(column);
            column.addEventListener("click", function(){
               column.style.backgroundColor = color.value
         })
     }
  }
}
