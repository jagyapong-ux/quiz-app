// ==============================
// 📚 SCHRITT 2: Die Fragen-Daten
// ==============================
// Ein Array [] enthält mehrere Objekte {}
// Jedes Objekt hat: eine Frage, 4 Antworten, und die richtige Antwort

const fragen = [
  {
    frage: "Was ist die Hauptstadt von Frankreich?",
    antworten: ["Berlin", "Madrid", "Paris", "Rom"],
    richtig: "Paris"
  },
  {
    frage: "Wie viele Planeten hat unser Sonnensystem?",
    antworten: ["6", "7", "8", "9"],
    richtig: "8"
  },
  {
    frage: "Welches Tier ist das größte Landsäugetier der Welt?",
    antworten: ["Nilpferd", "Elefant", "Nashorn", "Giraffe"],
    richtig: "Elefant"
  },
  {
    frage: "In welchem Jahr begann der Zweite Weltkrieg?",
    antworten: ["1935", "1937", "1939", "1941"],
    richtig: "1939"
  },
  {
    frage: "Wie heißt das chemische Symbol für Wasser?",
    antworten: ["CO2", "H2O", "NaCl", "O2"],
    richtig: "H2O"
  }
];

// ==============================
// 📚 SCHRITT 3: Die Quiz-Logik
// ==============================

// -- 1) HTML-Elemente holen --
// document.getElementById() findet ein Element anhand seiner id=""
const startScreen    = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen   = document.getElementById("result-screen");

const startBtn       = document.getElementById("start-btn");
const restartBtn     = document.getElementById("restart-btn");

const questionText   = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const questionNumber = document.getElementById("question-number");
const scoreDisplay   = document.getElementById("score-display");
const resultText     = document.getElementById("result-text");
const resultEmoji    = document.getElementById("result-emoji");

// -- 2) Variablen für den Spielstand --
let aktuelleFrageIndex = 0;  // welche Frage sind wir gerade?
let punkte = 0;              // wie viele Punkte hat der Spieler?

// -- 3) Hilfsfunktion: Screens wechseln --
function zeigeScreen(screen) {
  // Alle Screens verstecken
  startScreen.classList.add("hidden");
  questionScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  // Nur den gewünschten Screen anzeigen
  screen.classList.remove("hidden");
}

// -- 4) Quiz starten --
function quizStarten() {
  aktuelleFrageIndex = 0;
  punkte = 0;
  zeigeScreen(questionScreen);
  frageAnzeigen();
}

// -- 5) Eine Frage anzeigen --
function frageAnzeigen() {
  const aktuelleFrage = fragen[aktuelleFrageIndex];

  // Fortschritt und Punkte aktualisieren
  questionNumber.textContent = `Frage ${aktuelleFrageIndex + 1} von ${fragen.length}`;
  scoreDisplay.textContent   = `Punkte: ${punkte}`;

  // Fragetext setzen
  questionText.textContent = aktuelleFrage.frage;

  // Alte Antwort-Buttons löschen
  answersContainer.innerHTML = "";

  // Neue Antwort-Buttons erstellen
  aktuelleFrage.antworten.forEach(function(antwort) {
    const btn = document.createElement("button");
    btn.textContent = antwort;
    btn.classList.add("answer-btn");

    // Klick-Event: Was passiert wenn man auf eine Antwort klickt?
    btn.addEventListener("click", function() {
      antwortPruefen(antwort, aktuelleFrage.richtig);
    });

    answersContainer.appendChild(btn);
  });
}

// -- 6) Antwort prüfen --
function antwortPruefen(gewaehlt, richtig) {
  // Alle Buttons sperren (kein zweiter Klick möglich)
  const alleBtns = answersContainer.querySelectorAll(".answer-btn");
  alleBtns.forEach(function(btn) {
    btn.disabled = true;
    // Richtige Antwort grün, falsche rot markieren
    if (btn.textContent === richtig) {
      btn.classList.add("richtig");
    } else if (btn.textContent === gewaehlt) {
      btn.classList.add("falsch");
    }
  });

  // Punkt geben wenn richtig
  if (gewaehlt === richtig) {
    punkte++;
    scoreDisplay.textContent = `Punkte: ${punkte}`;
  }

  // Nach kurzer Pause zur nächsten Frage
  setTimeout(naechsteFrage, 1200);
}

// -- 7) Nächste Frage oder Ergebnis --
function naechsteFrage() {
  aktuelleFrageIndex++;

  if (aktuelleFrageIndex < fragen.length) {
    // Noch mehr Fragen → nächste anzeigen
    frageAnzeigen();
  } else {
    // Keine Fragen mehr → Ergebnis anzeigen
    ergebnisAnzeigen();
  }
}

// -- 8) Ergebnis anzeigen --
function ergebnisAnzeigen() {
  zeigeScreen(resultScreen);
  resultText.textContent = `Du hast ${punkte} von ${fragen.length} Fragen richtig!`;

  // Emoji je nach Ergebnis
  if (punkte === fragen.length) {
    resultEmoji.textContent = "🏆 Perfekt!";
  } else if (punkte >= 3) {
    resultEmoji.textContent = "👍 Gut gemacht!";
  } else {
    resultEmoji.textContent = "📚 Üb noch ein bisschen!";
  }
}

// -- 9) Buttons verknüpfen --
startBtn.addEventListener("click", quizStarten);
restartBtn.addEventListener("click", quizStarten);
