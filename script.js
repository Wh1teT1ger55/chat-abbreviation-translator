let inputText = "";
let translations = {};

function loadText() {
  fetch("text1.txt")
    .then(response => response.text())
    .then(data => {
      inputText = data;
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
    })
    .catch(error => console.log(error));
}

function translateText() {
  let words = inputText.split(" ");
  let translatedWords = words.map(word => {
    if (word in translations) {
      return translations[word];
    } else {
      return word;
    }
  });
  let translatedText = translatedWords.join(" ");
  document.getElementById("output").innerHTML = translatedText;
}

function translate() {
  inputText = document.getElementById("input").value;
  translateText();
}

loadTranslations();
