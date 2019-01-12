const xCount = 15;
const yCount = 19;


function createBoard(xCount, yCount){
    let mainDiv = document.getElementById('mainContainer');
    for(let i = 0; i < yCount; i++){
        for(let j = 0; j < xCount; j++){
            let square = document.createElement('div');
            square.className = "squareItem";
            square.setAttribute("x", `${j}`);
            square.setAttribute("y", `${i}`);
            mainDiv.appendChild(square);
            allItems.push(square);
            if(j === 10){
                square.style.borderRight = '2px solid black';
            }
        }
    }
}

function color() {
    let colors = ['green', 'red', 'blue', 'pink'];
    let colorIndex = Math.floor(Math.random() * 4);
    return colors[colorIndex];
}

function  getItem(x, y){
    for (item of allItems){
        if(parseInt(item.getAttribute('x')) === x && parseInt(item.getAttribute('y')) === y){
            return item;
        }
    }
}


function colorItem(item){
    for(val of item){
        if(itemColor){
            val.className = itemColor;
        }   else {
            val.className = 'squareItem';
        }
    }
    return item;
}
function gameOverItem(x, y) {
    return [
        getItem(x, y), getItem(x + 2, y), getItem(x + 4, y), getItem(x + 5, y), getItem(x + 6, y), getItem(x + 8, y), getItem(x + 10, y),
        getItem(x, y + 1), getItem(x + 2, y + 1), getItem(x + 4, y + 1), getItem(x + 6, y + 1), getItem(x + 8, y + 1), getItem(x + 10, y + 1),
        getItem(x + 1, y + 2), getItem(x + 4, y + 2), getItem(x + 6, y + 2), getItem(x + 8, y + 2), getItem(x + 10, y + 2),
        getItem(x + 1, y + 3), getItem(x + 4, y + 3), getItem(x + 5, y + 3), getItem(x + 6, y + 3), getItem(x + 8, y + 3), getItem(x + 9, y + 3), getItem(x + 10, y + 3),
        getItem(x - 2, y + 5), getItem(x + 2, y + 5), getItem(x + 3, y + 5), getItem(x + 4, y + 5), getItem(x + 6, y + 5), getItem(x + 7, y + 5), getItem(x + 8, y + 5), getItem(x + 10, y + 5), getItem(x + 11, y + 5), getItem(x + 12, y + 5),
        getItem(x - 2, y + 6), getItem(x + 2, y + 6), getItem(x + 4, y + 6), getItem(x + 6, y + 6), getItem(x + 10, y + 6),
        getItem(x - 2, y + 7), getItem(x + 2, y + 7), getItem(x + 4, y + 7), getItem(x + 6, y + 7), getItem(x + 7, y + 7), getItem(x + 8, y + 7), getItem(x + 10, y + 7), getItem(x + 11, y + 7), getItem(x + 12, y + 7),
        getItem(x - 2, y + 8), getItem(x + 2, y + 8), getItem(x + 4, y + 8), getItem(x + 8, y + 8), getItem(x + 10, y + 8),
        getItem(x - 2, y + 9), getItem(x + -1, y + 9), getItem(x + 0, y + 9), getItem(x + 2, y + 9), getItem(x + 3, y + 9), getItem(x + 4, y + 9), getItem(x + 6, y + 9), getItem(x + 7, y + 9), getItem(x + 8, y + 9), getItem(x + 10, y + 9), getItem(x + 11, y + 9), getItem(x + 12, y + 9)
    ]
}
function items(x,y){
    return [
        [getItem(x, y), getItem(x, y + 1), getItem(x, y - 1), getItem(x, y - 2)], // line1 0
        [getItem(x, y), getItem(x + 1, y), getItem(x, y - 1), getItem(x + 1, y - 1)], // cube 1
        [getItem(x, y), getItem(x - 1, y), getItem(x + 1, y), getItem(x, y - 1)], // T1 2
        [getItem(x, y), getItem(x - 1, y), getItem(x + 1, y), getItem(x + 1, y - 1)], // L1 3
        [getItem(x, y), getItem(x - 1, y), getItem(x + 1, y), getItem(x - 1, y - 1)], // J1 4
        [getItem(x, y), getItem(x + 1, y), getItem(x, y + 1), getItem(x - 1, y + 1)], // S1 5
        [getItem(x, y), getItem(x - 1, y), getItem(x, y + 1), getItem(x + 1, y + 1)], // Z1 6
        [getItem(x, y), getItem(x - 1, y), getItem(x + 1, y), getItem(x + 2, y)], // line2 7
        [getItem(x, y), getItem(x, y + 1), getItem(x, y - 1), getItem(x + 1, y)], // T2 8
        [getItem(x, y), getItem(x + 1, y), getItem(x - 1, y), getItem(x, y + 1)], // T3 9
        [getItem(x, y), getItem(x, y + 1), getItem(x, y - 1), getItem(x - 1, y)], // T4 10
        [getItem(x, y), getItem(x, y - 1), getItem(x, y + 1), getItem(x + 1, y + 1)], //L2 11
        [getItem(x, y), getItem(x - 1, y), getItem(x + 1, y), getItem(x - 1, y + 1)], //L3 12
        [getItem(x, y), getItem(x, y - 1), getItem(x, y + 1), getItem(x - 1, y - 1)], //L4 13
        [getItem(x, y), getItem(x, y - 1), getItem(x, y + 1), getItem(x + 1, y - 1)], //J2 14
        [getItem(x, y), getItem(x - 1, y), getItem(x + 1, y), getItem(x + 1, y + 1)], //J3 15
        [getItem(x, y), getItem(x, y - 1), getItem(x, y + 1), getItem(x - 1, y + 1)], //J4 16
        [getItem(x, y), getItem(x - 1, y), getItem(x, y + 1), getItem(x - 1, y - 1)], //S2 17
        [getItem(x, y), getItem(x - 1, y + 1), getItem(x - 1, y), getItem(x, y - 1)], //Z2 18
    ]
}

function rotate(item){
    let x = parseInt(tempItem[0].getAttribute('x'));
    let y = parseInt(tempItem[0].getAttribute('y'));
    if(itemIndex === 0 && canMoveLeft(items(x + 1, y)[7]) && canMoveRight(items(x - 1, y)[7]) && canMoveDown(items(x, y)[7])) {
        itemIndex = 7;
        return colorItem(items(x, y)[7]);
    } else if(itemIndex === 0){ return colorItem(items(x, y)[0]);}
    if(itemIndex === 7 && canMoveLeft(items(x + 1, y)[0]) && canMoveRight(items(x - 1, y)[0]) && canMoveDown(items(x, y)[0])) {
        itemIndex = 0;
        return colorItem(items(x, y)[0]);
    } else if(itemIndex === 7){ return colorItem(items(x, y)[7]);}
    if(itemIndex === 1){
        return colorItem(items(x, y)[1]);
    }
    if(itemIndex === 2  && canMoveLeft(items(x + 1, y)[8]) && canMoveRight(items(x - 1, y)[8]) && canMoveDown(items(x, y)[8])){
        itemIndex = 8;
        return colorItem(items(x, y)[8]);
    } else if(itemIndex === 2){ return colorItem(items(x, y)[2]);}
    if(itemIndex === 8  && canMoveLeft(items(x + 1, y)[9]) && canMoveRight(items(x - 1, y)[9]) && canMoveDown(items(x, y)[9])){
        console.log('Hi T2');
        itemIndex = 9;
        return colorItem(items(x, y)[9]);
    } else if(itemIndex === 8){ return colorItem(items(x, y)[8]);}
    if(itemIndex === 9 && canMoveLeft(items(x + 1, y)[10]) && canMoveRight(items(x - 1, y)[10]) && canMoveDown(items(x, y)[10])){
        itemIndex = 10;
        return colorItem(items(x, y)[10]);
    } else if(itemIndex === 9){ return colorItem(items(x, y)[9]);}
    if(itemIndex === 10 && canMoveLeft(items(x + 1, y)[2]) && canMoveRight(items(x - 1, y)[2]) && canMoveDown(items(x, y)[2])){
        itemIndex = 2;
        return colorItem(items(x, y)[2]);
    } else if(itemIndex === 10){ return colorItem(items(x, y)[10]);}
    if(itemIndex === 3 && canMoveLeft(items(x + 1, y)[11]) && canMoveRight(items(x - 1, y)[11]) && canMoveDown(items(x, y)[11])){
        itemIndex = 11;
        return colorItem(items(x, y)[11]);
    } else if(itemIndex === 3){ return colorItem(items(x, y)[3]);}
    if(itemIndex === 11 && canMoveLeft(items(x + 1, y)[12]) && canMoveRight(items(x - 1, y)[12]) && canMoveDown(items(x, y)[12])){
        itemIndex = 12;
        return colorItem(items(x, y)[12]);
    } else if(itemIndex === 11){ return colorItem(items(x, y)[11]);}
    if(itemIndex === 12 && canMoveLeft(items(x + 1, y)[13]) && canMoveRight(items(x - 1, y)[13]) && canMoveDown(items(x, y)[13])){
        itemIndex = 13;
        return colorItem(items(x, y)[13]);
    } else if(itemIndex === 12){ return colorItem(items(x, y)[12]);}
    if(itemIndex === 13 && canMoveLeft(items(x + 1, y)[3]) && canMoveRight(items(x - 1, y)[3]) && canMoveDown(items(x, y)[3])){
        itemIndex = 3;
        return colorItem(items(x, y)[3]);
    } else if(itemIndex === 13){ return colorItem(items(x, y)[13]);}
    if(itemIndex === 4 && canMoveLeft(items(x + 1, y)[14]) && canMoveRight(items(x - 1, y)[14]) && canMoveDown(items(x, y)[14])){
        itemIndex = 14;
        return colorItem(items(x, y)[14]);
    } else if(itemIndex === 4){ return colorItem(items(x, y)[4]);}
    if(itemIndex === 14 && canMoveLeft(items(x + 1, y)[15]) && canMoveRight(items(x - 1, y)[15]) && canMoveDown(items(x, y)[15])){
        itemIndex = 15;
        return colorItem(items(x, y)[15]);
    } else if(itemIndex === 14){ return colorItem(items(x, y)[14]);}
    if(itemIndex === 15 && canMoveLeft(items(x + 1, y)[16]) && canMoveRight(items(x - 1, y)[16]) && canMoveDown(items(x, y)[16])){
        itemIndex = 16;
        return colorItem(items(x, y)[16]);
    } else if(itemIndex === 15){ return colorItem(items(x, y)[15]);}
    if(itemIndex === 16 && canMoveLeft(items(x + 1, y)[4]) && canMoveRight(items(x - 1, y)[4]) && canMoveDown(items(x, y)[4])){
        itemIndex = 4;
        return colorItem(items(x, y)[4]);
    } else if(itemIndex === 16){ return colorItem(items(x, y)[16]);}
    if(itemIndex === 5 && canMoveLeft(items(x + 1, y)[17]) && canMoveRight(items(x - 1, y)[17]) && canMoveDown(items(x, y)[17])){
        itemIndex = 17;
        return colorItem(items(x, y)[17]);
    } else if(itemIndex === 5){ return colorItem(items(x, y)[5]);}
    if(itemIndex === 17 && canMoveLeft(items(x + 1, y)[5]) && canMoveRight(items(x - 1, y)[5]) && canMoveDown(items(x, y)[5])){
        itemIndex = 5;
        return colorItem(items(x, y)[5]);
    } else if(itemIndex === 17){ return colorItem(items(x, y)[17]);}
    if(itemIndex === 6 && canMoveLeft(items(x + 1, y)[18]) && canMoveRight(items(x - 1, y)[18]) && canMoveDown(items(x, y)[18])){
        itemIndex = 18;
        return colorItem(items(x, y)[18]);
    } else if(itemIndex === 6){ return colorItem(items(x, y)[6]);}
    if(itemIndex === 18 && canMoveLeft(items(x + 1, y)[6]) && canMoveRight(items(x - 1, y)[6]) && canMoveDown(items(x, y)[6])){
        itemIndex = 6;
        return colorItem(items(x, y)[6]);
    } else if(itemIndex === 18){ return colorItem(items(x, y)[18]);}

}

function canMoveDown(item) {
    for(val of item){
        if(val && val.getAttribute('y') >= yCount - 1 || touchBox(items(parseInt(item[0].getAttribute('x')), parseInt(item[0].getAttribute('y')) + 1)[itemIndex])){
            return false;
        }
    }
    return true;
}

function canMoveRight(item) {
    for(val of item){
        if(val && (val.getAttribute('x') >= xCount - 5 || touchBox(items(parseInt(tempItem[0].getAttribute('x')) + 1, parseInt(tempItem[0].getAttribute('y')))[itemIndex]))){
            return false;
        }
    }
    return true;
}

function canMoveLeft(item) {
    for(val of item){
        if(val && (val.getAttribute('x') <=  0 || touchBox(items(parseInt(tempItem[0].getAttribute('x')) - 1, parseInt(tempItem[0].getAttribute('y')))[itemIndex]))){
            return false;
        }
    }
    return true;
}

function deleteItem(item) {
    for(val of item){
        val.className = "squareItem";
    }
}

function createItem(isnext, x = Math.floor((xCount - 4) / 2), y = 2){
    if(!gameover) {
        if(isnext) {
          let  NextItemIndex = Math.floor(Math.random() * 7);
            return [items(x, y)[NextItemIndex], NextItemIndex];
        } else {
            itemIndex = Math.floor(Math.random() * 7);
            return items(x, y)[itemIndex];
        }
    }

}

function changePositon(keyName, type) {
    if(!gameover) {

        if (keyName === 'ArrowUp') {
            deleteItem(tempItem);
            tempItem = rotate(tempItem);
        }
        if (keyName === 'ArrowDown' && canMoveDown(tempItem)) {
            deleteItem(tempItem);
            tempItem = colorItem(items(parseInt(tempItem[0].getAttribute('x')), parseInt(tempItem[0].getAttribute('y')) + 1)[itemIndex]);
        } else if (keyName === 'ArrowDown' && !canMoveDown(tempItem)) {
            colorBox(tempItem);
            tempItem = nextItem[0];
            itemIndex = nextItem[1];
            nextItem = createItem(true);
            drawNextItem();
            deleteLines();
            if (coloredBox.length && parseInt(coloredBox[0].getAttribute('y')) <= 5) {
                gameOver();
            }
            start();

        }
        if (keyName === 'ArrowRight' && canMoveRight(tempItem)) {
            deleteItem(tempItem);
            tempItem = colorItem(items(parseInt(tempItem[0].getAttribute('x')) + 1, parseInt(tempItem[0].getAttribute('y')))[itemIndex]);
        }
        if (keyName === 'ArrowLeft' && canMoveLeft(tempItem)) {
            deleteItem(tempItem);
            tempItem = colorItem(items(parseInt(tempItem[0].getAttribute('x')) - 1, parseInt(tempItem[0].getAttribute('y')))[itemIndex]);
        }
    }
}


function colorBox(item){
    if(item) {
        for (val of item) {
            coloredBox.unshift(val);
        }
    }
    coloredBox.sort((a,b) => (a.getAttribute('y') > b.getAttribute('y')) ? 1 : ((b.getAttribute('y') > a.getAttribute('y')) ? -1 : 0));
}

function colorColorBox() {
    if (coloredBox.length) {
        for (let i = 0; i < coloredBox.length; i++) {
            coloredBox[i].className = 'maroon';
        }
    }
}

function touchBox(myitem){
    for(val of myitem){
        if(val && val.className === 'maroon'){
            return true;
        }
    }
    return false;
}

function deleteLines(){
    for(let i = 3; i < yCount; i++) {
        let itemsForDelete = [];
        for (val of coloredBox) {
            if (parseInt(val.getAttribute('y')) === i) {
                itemsForDelete.unshift(val);
            }
        }
        if(itemsForDelete.length === xCount - 4){
            console.log(itemsForDelete)
            for(let j = 0; j < xCount - 4; j++){
                itemsForDelete[j].className = 'squareItem';
            }
            for(let j = 0; j < coloredBox.length; j++){
                if(parseInt(coloredBox[j].getAttribute('y')) === i || coloredBox[j] === undefined){
                    coloredBox.splice(j, xCount - 4);
                }
            }
            for(let j = 0; j < coloredBox.length; j++){
                if(parseInt(coloredBox[j].getAttribute('y')) < i) {
                    coloredBox[j].className = 'squareItem';
                    coloredBox[j] = getItem(parseInt(coloredBox[j].getAttribute('x')), parseInt(coloredBox[j].getAttribute('y')) + 1);
                }
            }
            colorColorBox();
        }
    }
}

function newBoard() {
    for(val of allItems){
        if(!coloredBox.filter(function (value) {
            return val === value;
        }).length){
            val.className = 'squareItem';
        }
    }
}


function gameLoop() {
    if(!gameover) {
        if (tempItem && !canMoveDown(tempItem)) {
            colorBox(tempItem);
            tempItem = nextItem[0];
            itemIndex = nextItem[1];
            nextItem = createItem(true);
            drawNextItem();
            deleteLines();
            if (coloredBox.length && parseInt(coloredBox[0].getAttribute('y')) <= 5) {
                gameOver();
            }
            start();

        }
        if (gameStart && canMoveDown(tempItem)) {
            deleteItem(tempItem);
            tempItem = colorItem(items(parseInt(tempItem[0].getAttribute('x')), parseInt(tempItem[0].getAttribute('y')) + 1)[itemIndex]);
        }
    }
}

function start(){
    if(!gameover) {
        itemColor = color();
        if (tempItem) {
            colorColorBox();
        }
        gameStart = true;
    }
}

function newGame() {
    gameover = false;
    coloredBox = [];
    for(val of allItems){
        val.className = 'squareItem';
    }
    nextItem = createItem(true);
    drawNextItem();
    tempItem = createItem(false);
    gameStart = false;
    start();
}

function drawNextItem() {
    clearNextItem();
    colorItem(items(Math.floor((xCount - 4) / 2) + 7, 2)[nextItem[1]]);
}

function clearNextItem() {
    for(let i = xCount - 1; i > xCount - 5; i--){
        for(let j = 0; j < 5; j++){
            getItem(i, j).className = 'squareItem';
        }
    }
}

function gameOver(){
    gameover = true;
    coloredBox = [];
    tempItem = [];
    for(val of allItems){
        val.className = 'squareItem';
    }
    colorItem(gameOverItem(2, 3))

}

let gameover = false;
const allItems = [];
let itemColor = 'red';
let coloredBox = [];
let itemIndex;
let nextItem;
let tempItem;
createBoard(xCount, yCount);

let gameStart = false;
document.addEventListener("keydown", (event) => {
    if(!gameover) {
        const keyName = event.key;
        changePositon(keyName, tempItem);
    }
}, false);
let startBtn = document.getElementById('start');
startBtn.addEventListener("click", newGame);
setInterval(gameLoop, 500);