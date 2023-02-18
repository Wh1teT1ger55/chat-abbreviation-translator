// Variablen für den Text und die Übersetzungen
let text = "";
let translations = {};

// Funktion, um Text von text1.txt zu laden
function loadText() {
  fetch("text1.txt")
    .then(response => response.text())
    .then(data => {
      text = data;
      translateText();
    })
    .catch(error => console.log(error));
}

// Funktion, um Übersetzungen von text2.txt zu laden
function loadTranslations() {
  fetch("text2.txt")
    .then(response => response.text())
    .then(data => {
      let lines = data.split("\n");
      lines.forEach(line => {
        let parts = line.split(":");
        translations[parts[0]] = parts[1];
      });
      translateText();
    })
    .catch(error => console.log(error));
}

// Funktion, um den Text zu übersetzen
function translateText() {
  let translatedText = "";
  let words = text.split(" ");
  words.forEach(word => {
    if (word in translations) {
      translatedText += translations[word] + " ";
    } else {
      translatedText += word + " ";
    }
  });
  document.getElementById("translated-text").textContent = translatedText;
}

// Funktion, die ausgeführt wird, wenn die HTML-Seite geladen ist
function init() {
  loadText();
  loadTranslations();
}

init();
