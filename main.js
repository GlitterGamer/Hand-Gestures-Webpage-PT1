prediction1= ""
prediction2= ""

Webcam.set({
    width: 340,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera= document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfieImage").src=data_uri
    })
}

console.log('ml5 version', ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UF61QeETB/model.json", modelLoaded)
function modelLoaded(){
    console.log("model is loaded")
}
