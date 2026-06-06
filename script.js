// ==============================
// 📚 SCHRITT 2: Die Fragen-Daten
// ==============================
// Ein Array [] enthält mehrere Objekte {}
// Jedes Objekt hat: eine Frage, 4 Antworten, und die richtige Antwort

const alleFragen = [
  // --- Geografie ---
  {
    frage: "Was ist die Hauptstadt von Frankreich?",
    antworten: ["Berlin", "Madrid", "Paris", "Rom"],
    richtig: "Paris"
  },
  {
    frage: "Was ist die Hauptstadt von Australien?",
    antworten: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    richtig: "Canberra"
  },
  {
    frage: "Was ist die Hauptstadt von Kanada?",
    antworten: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    richtig: "Ottawa"
  },
  {
    frage: "Was ist die Hauptstadt von Brasilien?",
    antworten: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],
    richtig: "Brasília"
  },
  {
    frage: "Was ist die Hauptstadt von Japan?",
    antworten: ["Osaka", "Kyoto", "Tokio", "Hiroshima"],
    richtig: "Tokio"
  },
  {
    frage: "Welches ist das kleinste Land der Welt?",
    antworten: ["Monaco", "San Marino", "Liechtenstein", "Vatikanstadt"],
    richtig: "Vatikanstadt"
  },
  {
    frage: "Welcher ist der längste Fluss der Welt?",
    antworten: ["Amazonas", "Nil", "Jangtse", "Mississippi"],
    richtig: "Nil"
  },
  {
    frage: "In welchem Land steht die Chinesische Mauer?",
    antworten: ["Japan", "Korea", "China", "Mongolei"],
    richtig: "China"
  },
  // --- Wissenschaft & Natur ---
  {
    frage: "Wie viele Planeten hat unser Sonnensystem?",
    antworten: ["6", "7", "8", "9"],
    richtig: "8"
  },
  {
    frage: "Wie heißt das chemische Symbol für Wasser?",
    antworten: ["CO2", "H2O", "NaCl", "O2"],
    richtig: "H2O"
  },
  {
    frage: "Welches Element hat das chemische Symbol 'Fe'?",
    antworten: ["Gold", "Silber", "Eisen", "Kupfer"],
    richtig: "Eisen"
  },
  {
    frage: "Welches ist das größte Organ des menschlichen Körpers?",
    antworten: ["Leber", "Lunge", "Herz", "Haut"],
    richtig: "Haut"
  },
  {
    frage: "Wie viele Knochen hat ein erwachsener Mensch?",
    antworten: ["186", "206", "226", "246"],
    richtig: "206"
  },
  {
    frage: "Welches ist das häufigste Gas in der Erdatmosphäre?",
    antworten: ["Sauerstoff", "Kohlendioxid", "Stickstoff", "Wasserstoff"],
    richtig: "Stickstoff"
  },
  {
    frage: "Welcher Ozean ist der größte der Welt?",
    antworten: ["Atlantik", "Indischer Ozean", "Arktischer Ozean", "Pazifik"],
    richtig: "Pazifik"
  },
  // --- Geschichte ---
  {
    frage: "In welchem Jahr begann der Zweite Weltkrieg?",
    antworten: ["1935", "1937", "1939", "1941"],
    richtig: "1939"
  },
  {
    frage: "In welchem Land wurde die Demokratie erfunden?",
    antworten: ["Rom", "Ägypten", "Griechenland", "Persien"],
    richtig: "Griechenland"
  },
  {
    frage: "In welchem Jahr landete der erste Mensch auf dem Mond?",
    antworten: ["1965", "1967", "1969", "1971"],
    richtig: "1969"
  },
  // --- Tiere ---
  {
    frage: "Welches Tier ist das größte Landsäugetier der Welt?",
    antworten: ["Nilpferd", "Elefant", "Nashorn", "Giraffe"],
    richtig: "Elefant"
  },
  {
    frage: "Welches Tier ist das schnellste Landtier der Welt?",
    antworten: ["Löwe", "Pferd", "Gepard", "Greyhound"],
    richtig: "Gepard"
  },
  // --- Kunst & Kultur ---
  {
    frage: "Wer malte die Mona Lisa?",
    antworten: ["Michelangelo", "Raffael", "Leonardo da Vinci", "Botticelli"],
    richtig: "Leonardo da Vinci"
  },
  {
    frage: "Wer schrieb 'Romeo und Julia'?",
    antworten: ["Charles Dickens", "William Shakespeare", "Victor Hugo", "Goethe"],
    richtig: "William Shakespeare"
  },
  {
    frage: "Wer erfand das Telefon?",
    antworten: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"],
    richtig: "Alexander Graham Bell"
  },
  // --- Mathematik & Logik ---
  {
    frage: "Wie viele Seiten hat ein Hexagon?",
    antworten: ["4", "5", "6", "7"],
    richtig: "6"
  },
  {
    frage: "Was ist die Quadratwurzel von 144?",
    antworten: ["10", "11", "12", "13"],
    richtig: "12"
  },
  // --- Sport ---
  {
    frage: "Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?",
    antworten: ["9", "10", "11", "12"],
    richtig: "11"
  },
  {
    frage: "In welcher Stadt fanden die ersten modernen Olympischen Spiele statt?",
    antworten: ["Paris", "London", "Athen", "Rom"],
    richtig: "Athen"
  },
  {
    frage: "Wie viele Ringe hat das olympische Symbol?",
    antworten: ["4", "5", "6", "7"],
    richtig: "5"
  }
];

// Fragen mischen und 10 zufällig auswählen – jedes Spiel ist anders!
function mischenUndAuswaehlen(arr, anzahl) {
  const gemischt = [...arr].sort(() => Math.random() - 0.5);
  return gemischt.slice(0, anzahl);
}

const fragen = mischenUndAuswaehlen(alleFragen, 10);

// ==============================
// 📚 SCHRITT 3: Die Quiz-Logik
// ==============================

// ==============================
// ✉️ EmailJS Konfiguration
// ==============================
// TODO: Trage hier deine EmailJS-Daten ein (siehe Anleitung unten)
const EMAILJS_PUBLIC_KEY  = "DEIN_PUBLIC_KEY";
const EMAILJS_SERVICE_ID  = "DEIN_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "DEIN_TEMPLATE_ID";

emailjs.init(EMAILJS_PUBLIC_KEY);

// -- 1) HTML-Elemente holen --
// document.getElementById() findet ein Element anhand seiner id=""
const startScreen    = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen   = document.getElementById("result-screen");

const startBtn       = document.getElementById("start-btn");
const restartBtn     = document.getElementById("restart-btn");
const submitBtn      = document.getElementById("submit-btn");
const submitStatus   = document.getElementById("submit-status");
const userNameInput  = document.getElementById("user-name");
const userEmailInput = document.getElementById("user-email");

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

  // Emoji je nach Ergebnis (prozentbasiert)
  const prozent = punkte / fragen.length;
  if (prozent === 1) {
    resultEmoji.textContent = "🏆 Perfekt!";
  } else if (prozent >= 0.6) {
    resultEmoji.textContent = "👍 Gut gemacht!";
  } else {
    resultEmoji.textContent = "📚 Üb noch ein bisschen!";
  }
}

// -- 9) Ergebnis per E-Mail abschicken --
function ergebnisAbschicken() {
  const name  = userNameInput.value.trim();
  const email = userEmailInput.value.trim();

  // Validierung: beide Felder müssen ausgefüllt sein
  if (!name || !email) {
    submitStatus.textContent = "⚠️ Bitte Name und E-Mail eingeben.";
    submitStatus.style.color = "#ef4444";
    return;
  }

  // Button deaktivieren während E-Mail gesendet wird
  submitBtn.disabled = true;
  submitStatus.textContent = "⏳ Wird gesendet...";
  submitStatus.style.color = "#888";

  // E-Mail senden über EmailJS
  const prozent = Math.round((punkte / fragen.length) * 100);
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name:  name,
    from_email: email,
    score:      `${punkte} von ${fragen.length}`,
    prozent:    `${prozent}%`,
    bewertung:  resultEmoji.textContent
  })
  .then(function() {
    submitStatus.textContent = "✅ Ergebnis erfolgreich abgeschickt!";
    submitStatus.style.color = "#22c55e";
    submitBtn.disabled = true;
  })
  .catch(function(err) {
    submitStatus.textContent = "❌ Fehler beim Senden. Bitte EmailJS einrichten.";
    submitStatus.style.color = "#ef4444";
    submitBtn.disabled = false;
    console.error("EmailJS Fehler:", err);
  });
}

// -- 10) Buttons verknüpfen --
startBtn.addEventListener("click", quizStarten);
restartBtn.addEventListener("click", function() {
  // Formular zurücksetzen beim Neustart
  userNameInput.value = "";
  userEmailInput.value = "";
  submitStatus.textContent = "";
  submitBtn.disabled = false;
  // Neue Fragen auswählen
  fragen.length = 0;
  const neueFragen = mischenUndAuswaehlen(alleFragen, 10);
  neueFragen.forEach(function(f) { fragen.push(f); });
  quizStarten();
});
submitBtn.addEventListener("click", ergebnisAbschicken);
