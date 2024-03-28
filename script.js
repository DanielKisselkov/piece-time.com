function calculateDuration() {
  var timeSignature = document.getElementById("timeSignature").value;
  var bars = parseInt(document.getElementById("bars").value);
  var bpm = parseInt(document.getElementById("bpm").value);

  var durationSeconds = (bars * parseInt(timeSignature.split('/')[0])) / bpm * 60;
  var minutes = Math.floor(durationSeconds / 60);
  var seconds = Math.round(durationSeconds % 60);

  var formattedDuration = minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " min";

  document.getElementById("result").innerText = "The piece lasts " + formattedDuration + ".";
}