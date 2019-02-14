// get header heightoffset
let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;

let canvas = document.getElementById("drawing");
canvas.width = window.innerWidth*0.96;
canvas.height = (window.innerHeight - headerHeight) * 0.95;

let ctx = canvas.getContext("2d");
let lineWidth = 10;
let eraseMode = false;
let drawing = false;
let mousePos = { x:0, y:0 };
let lastPos = mousePos;

/*--- RESIZE CANVAS WHEN RESIZE WINDOW ---*/
function resetCanvasSize() {
    canvas.width = window.innerWidth*0.96;
    canvas.height = (window.innerHeight - headerHeight) * 0.95;
}


function exportCanvas() {
    if(canvas && canvas.getContext) {
        let link = document.createElement('a');
        link.download = 'canvas.png';
        link.target= "_blank";
        link.href = canvas.toDataURL()
        link.click();
    }
    else {
        alert("Can not export");
    }
}

/*--- COLOR PICKER ---*/
let brushColor = "Black";
let strokeColor = "Black";
let pickColor = "Black";
ctx.fillStyle = brushColor;
ctx.strokeStyle = strokeColor;
function selectColor(e, colorPick) {
    if(!eraseMode) {
        let colorGroup = document.getElementsByClassName("color");
        for (i = 0; i < colorGroup.length; i++) {
            colorGroup[i].className = colorGroup[i].className.replace(" active", "");
        }
        e.currentTarget.className += " active";
        brushColor = colorPick;
        strokeColor = colorPick;
        pickColor = colorPick;
        ctx.strokeStyle = strokeColor;
        ctx.fillStyle = brushColor;
    }
}


/*--- BRUSH PICKER ---*/
let brush = 'pen';
function selectBrush(e, brushType) {
    eraseMode = false;
    let eraserGroup = document.getElementsByClassName("eraser");
    for (i = 0; i < eraserGroup.length; i++) {
        eraserGroup[i].className = eraserGroup[i].className.replace(" active", "");
    }
    let brushGroup = document.getElementsByClassName("brush");
    for (i = 0; i < brushGroup.length; i++) {
        brushGroup[i].className = brushGroup[i].className.replace(" active", "");
    }
    brush = brushType;
    e.currentTarget.className += " active";
    ctx.strokeStyle = pickColor;
    ctx.fillStyle = pickColor;
}


/*--- CLEAR CANVAS ---*/
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


/*--- ERASE ---*/
function erase(e, earserSize) {
    eraseMode = true;
    let brushGroup = document.getElementsByClassName("brush");
    for (i = 0; i < brushGroup.length; i++) {
        brushGroup[i].className = brushGroup[i].className.replace(" active", "");
    }
    brushColor = "White";
    strokeColor = "white";
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = brushColor;
    let eraserGroup = document.getElementsByClassName("eraser");
    for (i = 0; i < eraserGroup.length; i++) {
        eraserGroup[i].className = eraserGroup[i].className.replace(" active", "");
    }
    lineWidth = earserSize;
    e.currentTarget.className += " active";
}


/*--- DRAW SQUARE ---*/
function drawSquare(x, y) {
    ctx.strokeRect(x, y, 25, 25);
}


/*--- DRAW ARC ---*/
function drawArc(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.stroke();
}


/*--- DRAW LINE ---*/
function draw(curX, curY, nextX, nextY) {
    ctx.save();
    if(eraseMode === false){
        lineWidth = 10;
    } 
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round"; 
    ctx.beginPath();
    if(curX == nextX && curY == nextY){
        ctx.arc(curX, curY, lineWidth/1.7, 0, Math.PI * 2, true);
        ctx.fill();
    }
    else{
        ctx.moveTo(curX, curY);
        ctx.lineTo(nextX, nextY);
        ctx.stroke();
    }
    ctx.restore();
}

function drawLine(pos, lastPos) {
    if (drawing) {
        draw(pos.x, pos.y, lastPos.x, lastPos.y);
    }
}


/*--- DRAW DIFFERENT SHAPES ---*/
function drawText(x,y) {
    ctx.font = '20px serif';
    ctx.fillText(brush, x, y);
}


/*--- MOUSE EVENT ---*/
canvas.addEventListener("mousedown", function (e) {
    drawing = true;
    lastPos = getMousePos(canvas, e);
}, false);
canvas.addEventListener("mouseup", function (e) {
    drawing = false;
}, false);
canvas.addEventListener("mousemove", function (e) {
    mousePos = getMousePos(canvas, e);
    drawEventHandler(mousePos, lastPos);
    lastPos = mousePos;
}, false);

// Get the position of the mouse relative to the canvas
function getMousePos(canvasDom, mouseEvent) {
  let rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top
  };
}


/*--- TOUGH EVENT ---*/
canvas.addEventListener("touchstart", function (e) {
    drawing = true;
    lastPos = getTouchPos(canvas, e);
}, false);
canvas.addEventListener("touchend", function (e) {
    drawing = false;
}, false);
canvas.addEventListener("touchmove", function (e) {
    if (drawing) {
        e.preventDefault();
    }
    touchPos = getTouchPos(canvas, e);
    drawEventHandler(touchPos, lastPos);
    lastPos = touchPos;
}, false);

// Get the position of the finger relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  let rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}


/*--- DRAW EVENT HANDLER ---*/
function drawEventHandler(pos, lastPos) {
    if(brush === 'pen' || eraseMode === true){
        drawLine(pos, lastPos);
    } else if (brush === 'circle') {
        drawArc(pos.x, pos.y);
    } else if (brush === 'square') {
        drawSquare(pos.x, pos.y);
    }
    else {
        drawText(pos.x, pos.y);
    }
}

