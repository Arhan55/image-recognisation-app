// https://teachablemachine.withgoogle.com/models/p5Lv-uI_9/ 

Webcam.set ({

    width: 400,
    height: 395,
    image_format: 'png',
    png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture() {

Webcam.snap(function(data_uri){
 document.getElementById("captured_image").innerHTML = '<img id="snapshot" src="'+data_uri+'"/>';
});

}

console.log("ml5.verison  " , ml5.version );

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/p5Lv-uI_9/model.json', modelLoaded);

function modelLoaded() {

    console.log("modelLoaded");
}

function check() {

img = document.getElementById("snapshot");
classifier.classify(img, gotResult);
}

function gotResult(error, results) {

    if(error){
        console.error(error);
    }
    else{
console.log(results);
document.getElementById("result_object").innerHTML = results[0].label;
document.getElementById("result_accuracy").innerHTML = (results[0].confidence*100).toFixed(3)+' %';
    }
}