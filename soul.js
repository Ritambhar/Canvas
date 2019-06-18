let canvas = document.querySelector('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext('2d');

//Array of colors
let color = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

//an algorithm to generate any random number from the range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Circle object
function Circle(x, y, dx, dy, radius) { /* This is an Object which is creating circles */
    this.x = x; // x amount of offset from left side in x-axis
    this.y = y; // y amount of offset from top side in y-axis
    this.dx = dx; //dx is the direction for circles on x-axis           x += dx
    this.dy = dy; //dy is the direction for circles on y-axis           y += dy
    this.radius = radius;

    this.draw = function() { /* This is method for the Object circle to draw the circle */
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); //circle is drawn
        //c.strokeStyle = "red";
        c.lineWidth = 3;

        c.stroke();

    }

    this.update = function() { /* Another method to set conditions for circles to bounce of the edges, and moving the circle */

        this.draw();

        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) { 
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }       
    }

    this.changeColor = function() {
        c.strokeStyle = color[getRandomInt(0, 7)];
    }
}

let circleArray = [];

for(let i = 0; i < 70; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - 2 * radius) + radius;
    let y = Math.random() * (innerHeight - 2 * radius) + radius;
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0 ,0, innerWidth, innerHeight);
    

    for (let i = 0; i < circleArray.length; i++) {

        c.strokeStyle = color[getRandomInt(3, 4)];
        circleArray[i].update();
        //circleArray[1].changeColor();
    }
}

window.addEventListener('load', animate, false);

let chgColor = () =>
{
    let i = 0;
    let j = 0;
    while (j < 10) {
        //return j;
        j++;
        //return j;
        console.log(j);
    }
    //return j;
    
};

console.log(chgColor());