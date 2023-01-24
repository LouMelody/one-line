const SIZE = 5;

let board = new Array(SIZE);
for(let i = 0; i < SIZE; i++) {
    board[i] = new Array(SIZE).fill(0);
}

let csv = new XMLHttpRequest();
csv.open("GET", "../../level.csv", false);
csv.send(null);
let lines = csv.responseText.split("\n");

for(let y = 0; y < SIZE; y++) {
    let line = lines[y].split(",");
    for(let x = 0; x < SIZE; x++) {
        board[y][x] = Number(line[x].trim());
    }
}

export { board };