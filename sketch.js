
var angle = 0.0;

function setup(){
    createCanvas(500, 500);
    background(100);

}

rectMode(CENTER);
function draw(){
    for(var x = 5; x < 500; x = 50 + x){
        rotate(angle);
        translate(x/2, x/1.5);
        line(250, 250, 300 + x, 300 + x);
        angle += 0.1;
        }
       
}
