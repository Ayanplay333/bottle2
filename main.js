
function modelloaded()
{
console.log('modelloaded');
}
function gotResult(error,results)
{
if(error){
  console.error(error);
}
else{
  if(results[0].confidence>0.5 && previous_result != results[0].label){
    console.log(results);
    previous_result = results[0].label;
    var synth = window.speechSynthesis;
    speak_data = 'object detected is '+ results[0].label;
    var utterthis = new SpeechSynthesisUtterance;
    synth.speak(utterthis);
    document.getElementById('result_label').innerHTML = results[0].label;
    document.getElementById('result_accuracy').innerHTML = results[0].confidence.toFixed(2);
  }
}
}


