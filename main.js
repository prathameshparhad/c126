song="";
 
function preload()
{
    song=loadSound("music.mp3");
    console.log("first");
}
scoreRightWrist=0;
scoreLeftWrist=0;

rightWristX=0;
rightWristY=0;

leftwristX=0; 
leftwristY=0;

function setup() {
    canvas= createCanvas( 600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('poseNet Is Initialized');
    console.log("third");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreRightWrist=results[0].pose.keypoints[10];
        scoreLeftWrist=results[0].pose.keypoints[9];
        rightWristX=results [0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
    }
}

function draw()
{
image (video,0,0,600,500);
fill ("red");
if (scoreRightWrist>0.2 ) {
circle (rightWristX,rightWristY,20);
if (rightWristY>0 && rightWristY<100){
   song.rate(0.5); 
   document.getElementById("speed").innerHTML="speed=0.5";
}
if (rightWristY>100 && rightWristY<200){
    song.rate(1); 
    document.getElementById("speed").innerHTML="speed=1";
 }
 if (rightWristY>200 && rightWristY<300){
    song.rate(1.5);
    document.getElementById("speed").innerHTML="speed=1.5";

 }
 if (rightWristY>300 && rightWristY<400){
    song.rate(2);
    document.getElementById("speed").innerHTML="speed=2";
 }
 if (rightWristY>400 && rightWristY<500){
    song.rate(2.5);
    document.getElementById("speed").innerHTML="speed=2.5";
 }
 
}
if(scoreLeftWrist>0.2)
{
    circle(leftWristX,leftWristY,20);
    InNumberleftWrist= number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    song.setVolume(volume);
}
}







function play ()
{
   song.play();
   song.setVolume(1);
   song.rate(1);

}






