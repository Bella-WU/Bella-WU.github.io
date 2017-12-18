// var stage;
var fontChristmas;
var imgFrog, imgTree, imgHouse1, imgSantaBig;
var imgKeyEnter, imgKeyUp, imgKeyDown, imgKeyLeft, imgKeyRight;
// var myGif;

function preload() {
  imgFrog = loadImage("assets/santa.png");
  imgTree = loadImage("assets/tree.png");
  imgHouse1 = loadImage("assets/house1.png");
  imgSantaBig = loadImage("assets/santa_1.png");

  imgKeyEnter = loadImage("assets/key_enter.png");
  imgKeyUp = loadImage("assets/key_up.png");
  imgKeyDown = loadImage("assets/key_down.png");
  imgKeyLeft = loadImage("assets/key_left.png");
  imgKeyRight = loadImage("assets/key_right.png");
  fontChristmas = loadFont("assets/Christmas.ttf");
}



let frog;
const lanes = [];

const grid = 50;

const resetGame = () => {
    frog = new Frog(width / 2 - grid / 2, height - grid, grid, width);
    frog.attach(null);
};

function setup() {
    createCanvas(windowWidth, 800);
    // myGif = loadGif("assets/source.gif");
    resetGame();
    // stage = 0;
    lanes.push(new Safety(0, grid));
    lanes.push(new Safety(1, grid));
    lanes.push(new Lane(2, grid, "#614126", "LOG", 3, 1, 350, 2));
    lanes.push(new Lane(3, grid, "#926239", "LOG", 1, 3, 150, 3));
    lanes.push(new Lane(4, grid, "#49311c", "LOG", 2, 3, 350, -2.5));
    lanes.push(new Lane(5, grid, "#614126", "LOG", 4, 1, 150, 1));
    lanes.push(new Lane(6, grid, "#7a5230", "LOG", 3, 2, 250, -1.7));
    lanes.push(new Safety(7, grid));
    lanes.push(new Lane(8, grid, "#930b31", "CAR", 2, 3, 350, -1.4));
    lanes.push(new Lane(9, grid, "#004225", "CAR", 3, 1, 150, 2.4));
    lanes.push(new Lane(10, grid, "#00539f", "CAR", 2, 2, 150, -3.6));
    lanes.push(new Lane(11, grid, "#ffcc00", "CAR", 2, 3, 250, 2.3));
    lanes.push(new Lane(12, grid, "#930b31", "CAR", 1, 4, 550, -3.5));
    lanes.push(new Safety(13, grid));
    lanes.push(new Safety(14, grid));
    lanes.push(new Safety(15, grid));

    fill(255);
    rect(0, 0, windowWidth, 800);
    textSize(70);
    fill(230, 66, 87);
    textFont(fontChristmas);
    text("Rules", 650, 120);
    fill(0, 0, 0);
    textSize(50);
    text("Use                           to contorl                 to move,", 300, 300);
    image(imgKeyUp, 490, 220, 50, 50);
    image(imgKeyLeft, 430, 280, 50, 50);
    image(imgKeyDown, 490, 280, 50, 50);
    image(imgKeyRight, 550, 280, 50, 50);
    image(imgSantaBig, 890, 220, 110, 110);
    text("Press                  to start!", 530, 550);
    image(imgKeyEnter, 690, 490, 80, 80);

    // image(myGif, 0, 0, 50, 50);
}

function draw() {
    // if (keyCode === ENTER) {
    //     // stage ++;
    //     background(255);
    //     lanes.forEach(function (lane) {
    //         lane.run();
    //     });
    //     const laneIndex = parseInt(frog.y / grid, 10);
    //     if (lanes[laneIndex].type !== "SAFETY") {
    //         lanes[laneIndex].check(frog);
    //     }
    //     fill(255, 100);
    //     frog.update();
    //     frog.show();

    //     image(imgHouse1, 600, 0, 100, 100);

    //     if (frog.y <= 50) {
    //         fill("rgba(0,0,0, 0.8)");
    //         rect(0, 0, windowWidth, 800);
    //         textSize(88);
    //         fill(0, 102, 153);
    //         text("YOU WIN!!", 500, 350);
    //     }
        
    // }
    background(255);
    lanes.forEach(function (lane) {
        lane.run();
    });
    const laneIndex = parseInt(frog.y / grid, 10);
    if (lanes[laneIndex].type !== "SAFETY") {
        lanes[laneIndex].check(frog);
    }
    fill(255, 100);
    frog.update();
    frog.show();

    image(imgHouse1, 600, 0, 100, 100);

    if (frog.y <= 50) {
        fill("rgba(0,0,0, 0.8)");
        rect(0, 0, windowWidth, 800);
        textSize(88);
        fill(0, 102, 153);
        text("YOU WIN!!", 500, 350);
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        frog.move(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        frog.move(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        frog.move(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        frog.move(-1, 0);
    }
}