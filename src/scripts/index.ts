const SIZE = 5;

let board = new Array(SIZE+2);
for(let i = 0; i <= SIZE+1; i++) {
    board[i] = new Array(SIZE+2).fill(1);
}

let csv = new XMLHttpRequest();
csv.open("GET", "../../level.csv", false);
csv.send(null);
let lines = csv.responseText.split("\n");

for(let y = 1; y <= SIZE; y++) {
    let line = lines[y-1].split(",");
    for(let x = 1; x <= SIZE; x++) {
        board[y][x] = Number(line[x-1].trim());
    }
}

export { SIZE, board };