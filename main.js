function Sound(){
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oh562ee3d/model.json", modelReady);
}
function modelReady(){
classifier.classify(getResults);
}
function getResults(error, results){
if(error){
  console.log("error");
}else{
  console.log(results);
  random_number_r = Math.floor(Math.random * 255) +1;
  random_number_g = Math.floor(Math.random * 255) +1;
  random_number_b = Math.floor(Math.random * 255) +1;

  Identified_sound = document.getElementById("Identified_Sound")
  document.getElementById("Identified_Sound").innerHTML = results[0].label;
  document.getElementById("sound_accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
  document.getElementById("Identified_Sound").style.color = "rgb("+random_number_r, random_number_g, random_number_b+")";
  document.getElementById("sound_accuracy").style.color = "rgb("+random_number_r, random_number_g, random_number_b+")";



 if(Identified_sound == "Dog"){
      document.getElementById("section_2").innerHTML = "<img style='width:100%;' src='Dog.gif'>";
      document.getElementById("Identified_Sound_name").innerHTML = "Bark"
  }else if(Identified_sound == "Cat"){
    document.getElementById("section_2").innerHTML = "<img style='width:100%;' src='Cat.gif'>"
    document.getElementById("Identified_Sound_name").innerHTML = "Meow"
  }else if(Identified_sound == "Horse"){
    document.getElementById("section_2").innerHTML = "<img style='width:100%;' src='Horse.gif'>"
    document.getElementById("Identified_Sound_name").innerHTML = "Neigh"
  }
  else if(Identified_sound == "Lion"){
    document.getElementById("section_2").innerHTML = "<img style='width:100%;'src='Lion.gif'>"
    document.getElementById("Identified_Sound_name").innerHTML = ""
  }else{
    document.getElementById("section_2").innerHTML = "<img style='width:100%;' src='Pig.gif'>"
  }
}
}