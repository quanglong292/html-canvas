const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // 2d rendering context

// canvas.width = 200
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100)
ctx.fillStyle = "blue";
ctx.fillRect(200, 20, 150, 100)

// strokRect()
ctx.lineWidth = 5;
ctx.strokeStyle= "green";
ctx.strokeRect(100, 200, 150, 100)

// clearRect()
ctx.clearRect(25, 25, 140, 90)

// fillText()
ctx.font = '30px Arial';
ctx.fillStyle = "purple";
ctx.fillText("Hello World", 400, 50)

// strokeText()
ctx.lineWidth = 1;
ctx.strokeStyle= "orange";
ctx.strokeText("Hello World", 400, 100)