function fancy(){
    var textArea = document.getElementById("user-text");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
}
function boring(){
    var textArea = document.getElementById("user-text");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
}
function showAlert() {
    alert("Radio button changed!");
  }

function changeFontSize(){
    var big_24pt = document.getElementById("user-text");

    big_24pt.style.fontSize = "24pt";
}
function toUpperCase(){
    var text = document.getElementById("user-text");
    text.value = text.value.toUpperCase();

    var sentences = text.value.split(". ");
    for(var i = 0; i < sentences.legnth; i++){
        var words = sentences[i].split(" ");
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
      text.value = sentences.join(". ");
}