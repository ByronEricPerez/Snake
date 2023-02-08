let xSnake = 0;
let ySnake = 0;
let directionX = 0;
let directionY = 0;
let speedDirection = 3;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(220);
    drawBorder();
    drawAxis();
    updatePlayer();
    drawPlayer(xSnake, ySnake);
}

function updatePlayer(){
    /* if (direction == 1){
        xSnake = xSnake + 1;
    }
    else if(direction == -1){
        xSnake = xSnake - 1;
    }
    else if(direction == 1){
        ySnake = ySnake + 1;
    }
    else if(direction == -1){
        ySnake = xSnake - 1;
    } */
        xSnake = xSnake + directionX * speedDirection;
        ySnake = ySnake + directionY * speedDirection;
}

function keyPressed(){
    switch(keyCode){
        case LEFT_ARROW:
            xSnake -= 25;
            directionX = -1;
            directionY = 0;
            break;
        case RIGHT_ARROW:
            xSnake += 25;
            directionX = 1;
            directionY = 0;
            break;
        case DOWN_ARROW:
            ySnake += 25;
            directionY = 1;
            directionX = 0;
            break;
        case UP_ARROW:
            ySnake -= 25;
            directionY = -1;
            directionX = 0;
            break;
    }
}

function drawPlayer(xSnake, ySnake){
    rect(xSnake, ySnake, 50, 50);
}
function drawBorder(){
    for (let indexX = 0; indexX < width; indexX +=50){
        drawBlock(indexX , 0)
    }
    for (let indexX = 0; indexX < width; indexX +=50){
        drawBlock(indexX , width - 50)
    }
    for (let indexY = 0; indexY < height; indexY +=50){
        drawBlock( 0, indexY)
    }
    for (let indexY = 0; indexY < height; indexY +=50){
        drawBlock( height - 50, indexY)
    }
}

function drawBlock(x, y){
    rect(x, y, 50, 50)
}