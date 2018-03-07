let angle = 0;
let w = 15;
let ma;
let maxD;

function setup() {
  
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw(){

  background(200);
  ortho(-400, 400, 400, -400, 0, 1000);
  directionalLight(255, 255, 255, 0, -1, 0, 1);


  rotateX(-QUARTER_PI);
  rotateY(ma);

  let offset = 0;
  
  for(let z = 0; z < width; z += w){
    
    for(let x = 0; x < width; x += 10){
      
      push();

      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI );
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      
      translate(x - width / 2, 0, z - height / 2);
      ambientMaterial(25, 77, 198, 255);
      
      box(w - 2, h, w - 2);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      
      pop();
  }
  offset += 0.1;
  }

  angle -= 0.12;
}