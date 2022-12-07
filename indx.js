const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(30, 30, 25, 0, Math.PI *2);
ctx.moveTo(30, 10);
ctx.lineTo(30,50);
ctx.moveTo(50, 30);
ctx.lineTo(10, 30);
ctx.closePath();
ctx.stroke();