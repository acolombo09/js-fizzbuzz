const chessContainer = document.querySelector(".chess-container");
const totalCells = 8 * 8;

for (let i = 0; i < totalCells; i++) {
  // let singleCell = `<div class="chess-square"></div>`;
  let singleCell = document.createElement("div");
  singleCell.classList.add("chess-square");
  singleCell.innerHTML = i.toString();
  
  if(i % 2 === 1){
    singleCell.classList.add("bg-dark", "text-light");
    singleCell.addEventListener("click", function(){
      alert("Hai cliccato una cella scura!");
    });
  }

  chessContainer.append(singleCell);
}