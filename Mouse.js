status="";
Mouse_image="";

function preload(){
    Mouse_image =  loadImage("Mouse.jpg");
}

function setup(){
    canvas= createCanvas(640,400);
    canvas.position(315,200);
    object_detector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= " Status: Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status= true;
    object_detector.Detect(Mouse_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Mouse_image,0,0,640,350);
}