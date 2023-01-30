<script lang="ts" setup>
import { SIZE, board } from "./scripts/index";
import imgUrl  from "./assets/police.png";

document.addEventListener("keydown", keyHandler);
function isBlock(y: number, x: number): boolean  {
    if(board[y][x] == 1) {
        return true;
    } else {
        return false;
    }
}

function keyHandler(e: KeyboardEvent) {
    switch(e.key) {
        case "ArrowLeft":
            console.log("left");
        case "ArrowRight":
            console.log("right");
        case "ArrowUp":
            console.log("up");
        case "ArrowDown":
            console.log("down");
    }
}
</script>

<template>
  <table border="1">
    <tr v-for="y in [...Array(SIZE)].map((_, i) => i+1)" :key="`board`">
        <td v-for="x in [...Array(SIZE)].map((_, j) => j+1)" :key="`line`" :class="{block: isBlock(y, x)}">
            <img :src="imgUrl" class="imgSize">
        </td>
    </tr>
  </table>
</template>

<style scoped>
    table {
        border-collapse: collapse;
    }
    td {
        width: 5vw;
        height: 5vh;
    }
    .block {
        background-color: black;
    }
    .start {
        background-color: aqua;
    }
    .imgSize {
        display: block;
        margin: auto;
        width: 50px;
        height: 50px;
    }
</style>