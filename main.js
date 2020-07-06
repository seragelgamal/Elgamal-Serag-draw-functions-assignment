let cnv = document.getElementById('cnv');
let ctx = cnv.getContext('2d');

cnv.width = 1000;
cnv.height = 1000;

// draw targets
function drawTarget(x, y, r, ringNumber, ringColour) {
    ctx.strokeStyle = ringColour;
    let gap = r / ringNumber;
    let ringRadius = r;
    for (let n = 0; n < ringNumber; n++) {
        strokeCircle(x, y, ringRadius);
        ringRadius -= gap;
    }
}

drawTarget(100, 100, 75, 4, 'blue');
drawTarget(100, 250, 46, 10, 'purple');

// draw snowmen
function drawSnowman(bottomSnowBallX, bottomSnowBallY, bottomSnowBallR, snowballNumber, lineColour) {
    ctx.strokeStyle = lineColour;
    let y = bottomSnowBallY;
    let r = bottomSnowBallR;
    for (let n = 0; n < snowballNumber; n++) {
        strokeCircle(bottomSnowBallX, y, r);
        y -= r;
        r -= r / (snowballNumber + 1);
        y -= r;
    }
}

drawSnowman(110, 670, 100, 3, 'red');
drawSnowman(270, 500, 75, 5, 'orange');


// draw grids
function drawGrid(topLeftX, topLeftY, boxW, boxH, columnNumber, rowNumber, lineColour) {
    ctx.strokeStyle = lineColour;
    // rows
    for (let n = 0; n < rowNumber + 1; n++) {
        line(topLeftX, topLeftY + boxH * n, topLeftX + boxW * columnNumber, topLeftY + boxH * n);
    }
    // columns
    for (let n = 0; n < columnNumber + 1; n++) {
        line(topLeftX + boxW * n, topLeftY, topLeftX + boxW * n, topLeftY + boxH * rowNumber);
    }
}

drawGrid(350, 100, 50, 30, 10, 4, 'green');
drawGrid(375, 250, 45, 100, 3, 6, 'yellow');