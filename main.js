var NoseX;
var NoseY;
function preload() {
    mooch=loadImage('https://i.postimg.cc/k5ffvt9r/m.png')    
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    image(video,0,0,300,300);
    image(mooch,NoseX-10,NoseY-10,30,30)
    
}
function modelLoaded(){
    console.log("Posenet has arrived!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        NoseX=results[0].pose.nose.x-10;
        NoseY=results[0].pose.nose.y-10;
        console.log("nose x ="+NoseX);
        console.log("nose y="+NoseY);


    }
}