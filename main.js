let cnv = document.getElementById('cnv');
let ctx = cnv.getContext('2d');

cnv.width = 1000;
cnv.height = 1000;

// draw targets
function drawTarget(x, y, r, ringNumber, ringColour, bullseyeFillColour, lineWidth) {
    ctx.strokeStyle = ringColour;
    ctx.fillStyle = bullseyeFillColour;
    ctx.lineWidth = lineWidth
    let gap = r / ringNumber;
    let ringRadius = r;
    for (let n = 0; n < ringNumber; n++) {
        if (n == ringNumber - 1) {
            fillCircle(x, y, ringRadius);
        } else {
            strokeCircle(x, y, ringRadius);
            ringRadius -= gap;
        }
        
    }
}

drawTarget(100, 100, 75, 4, 'blue', 'red', 3);
drawTarget(100, 250, 46, 10, 'purple', 'blue', 1);

// draw snowmen
function drawSnowman(bottomSnowBallX, bottomSnowBallY, bottomSnowBallR, snowballNumber, lineColour, fillColour, lineWidth) {
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = fillColour;
    let y = bottomSnowBallY;
    let r = bottomSnowBallR;
    for (let n = 0; n < snowballNumber; n++) {
        fillCircle(bottomSnowBallX, y, r)
        strokeCircle(bottomSnowBallX, y, r);
        y -= r;
        r -= r / (snowballNumber + 1);
        y -= r;
    }
}

drawSnowman(110, 670, 100, 3, 'red', 'blue', 4);
drawSnowman(270, 500, 75, 5, 'orange', 'green', 12);


// draw grids
function drawGrid(topLeftX, topLeftY, boxW, boxH, columnNumber, rowNumber, lineColour, lineWidth) {
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = lineWidth;
    // columns
    for (let n = 0; n < columnNumber + 1; n++) {
        line(topLeftX + boxW * n, topLeftY, topLeftX + boxW * n, topLeftY + boxH * rowNumber);
    }
    // rows
    for (let n = 0; n < rowNumber + 1; n++) {
        line(topLeftX, topLeftY + boxH * n, topLeftX + boxW * columnNumber, topLeftY + boxH * n);
    }
}

drawGrid(350, 100, 50, 30, 10, 4, 'green', 3);
drawGrid(375, 250, 45, 100, 3, 6, 'yellow', 15);