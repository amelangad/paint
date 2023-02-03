const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");


//Resizing()
canvas.height = 500;
canvas.width = window.innerWidth - 400;
let painting =false;

ctx.fillStyle ="white";
ctx.fillRect (0,0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = "50";


function changeColor(item){
    draw_color = item.style.backgroundColor;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);


function start (e){
    painting = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function draw(e){
    if (painting){
ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
ctx.strokeStyle = draw_color;
ctx.lineWidth= draw_width;
ctx.lineCap ="round";
ctx.lineJoin = "round";
ctx.stroke();
    }
}


function stop (e){
    if (painting) {
        ctx.stroke();
        ctx.beginPath ();
        painting = false;
    }
};

function clearCanvas() {
    ctx.fillStyle ="white";
    ctx.fillRect (0,0, canvas.width, canvas.height);}