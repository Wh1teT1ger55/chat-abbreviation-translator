let text = "";
let translations = {};

function loadText() {
  fetch("text1.txt")
    .then(response => response.text())
    .then(data => {
      text = data;
      translateText();
    })
    .catch(error => console.log(error));
}

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
  document.getElementById("output").textContent = translatedText;
}

function init() {
  loadText();
  loadTranslations();
}

init();
