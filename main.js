function Sound(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.SoundClassifier("https://teachablemachine.withgoogle.com/models/oh562ee3d/model.json", modelReady);
}
function modelReady(){
  classifier.classify(getResults);
}