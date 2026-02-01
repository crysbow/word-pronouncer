function pronounceWord() {
  let word = document.getElementById("wordInput").value;
  
  if (word.trim() === "") {
    alert("Please enter a word!");
    return;
  }

  let utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US"; // You can change language (e.g., "en-GB", "fr-FR")
  speechSynthesis.speak(utterance);
}