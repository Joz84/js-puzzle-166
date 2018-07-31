const button = document.getElementById("show-hint");
const paragraph = document.querySelector(".hint");
button.addEventListener("click", (event) => {
  paragraph.classList.toggle("hint");
} );

function winning(tds) {
  const result = Array.from(tds).map(td => parseInt(td.innerText));
  const solution = Array.from(Array(16).keys()).splice(1);
  solution.push(NaN);
  // solution = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, NaN].join(",");
  if (result.join(",") === solution.join(",")){
    alert("you won!!!")
  }
}

function canMove(td, emptyTd) {
  const row = td.parentNode.rowIndex;
  const col = td.cellIndex;
  const rowEmpty = emptyTd.parentNode.rowIndex;
  const colEmpty = emptyTd.cellIndex;
  const rowDiff = Math.abs(row - rowEmpty);
  const colDiff = Math.abs(col - colEmpty);
  return rowDiff + colDiff === 1;
}

const tds = document.querySelectorAll("td");

tds.forEach((td) => {
  td.addEventListener("click", (event) => {
    const emptyTd = document.querySelector(".empty");
    if (canMove(td, emptyTd)) {
      emptyTd.classList.remove("empty");
      emptyTd.innerText = td.innerText;
      td.innerText = "";
      td.classList.add("empty");
    }
    winning(tds);
  })
});





