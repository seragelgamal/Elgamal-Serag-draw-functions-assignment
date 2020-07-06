let cnv = document.getElementById('cnv');
let ctx = cnv.getContext('2d');

cnv.width = 1000;
cnv.height = 1000;

// draw targets
function drawTarget(x, y, r, ringNumber, colour) {
    ctx.strokeStyle = colour;
    let gap = r / ringNumber;
    let ringRadius = r;
    for (let n = 0; n < ringNumber; n++) {
        strokeCircle(x, y, ringRadius);
        ringRadius -= gap;
    }
}

// draw snowmen
function drawSnowman(bottomSnowBallX, bottomSnowBallY, bottomSnowBallR, snowballNumber, colour) {
    ctx.strokeStyle = colour;
    let y = bottomSnowBallY;
    let r = bottomSnowBallR;
    for (let n = 0; n < snowballNumber; n++) {
        strokeCircle(bottomSnowBallX, y, r);
        y -= r;
        r -= r / (snowballNumber + 1);
        y -= r;
    }
}

// draw grids
function drawGrid(topLeftX, topLeftY, boxW, boxH, columnNumber, rowNumber, colour) {
    ctx.strokeStyle = colour;
    for (let n = 0; n < rowNumber + 1; n++) {
        line(topLeftX, topLeftY + boxH*n, topLeftX + boxW*rowNumber, topLeftY + boxH*n);
    }
    for (let n = 0; n < columnNumber + 1; n++) {
        line(topLeftX + boxW*n, topLeftY, topLeftX + boxH*n, topLeftY + boxH*columnNumber);
    }
}