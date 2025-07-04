const animals = [
  { number: 0, name: "abeja", image: "images/00_abeja.png" },
  { number: 1, name: "aguila", image: "images/01_aguila.png" },
  { number: 2, name: "araña", image: "images/02_araña.png" },
  { number: 3, name: "ardilla", image: "images/03_ardilla.png" },
  { number: 4, name: "atun", image: "images/04_atun.png" },
  { number: 5, name: "avestruz", image: "images/05_avestruz.png" },
  { number: 6, name: "avispa", image: "images/06_avispa.png" },
  { number: 7, name: "ballena", image: "images/07_ballena.png" },
  { number: 8, name: "buey", image: "images/08_buey.png" },
  { number: 9, name: "buho", image: "images/09_buho.png" },
  { number: 10, name: "burro", image: "images/10_burro.png" },
  { number: 11, name: "caballo", image: "images/11_caballo.png" },
  { number: 12, name: "cabra", image: "images/12_cabra.png" },
  { number: 13, name: "caiman", image: "images/13_caiman.png" },
  { number: 14, name: "calamar", image: "images/14_calamar.png" },
  { number: 15, name: "camaleon", image: "images/15_camaleon.png" },
  { number: 16, name: "camello", image: "images/16_camello.png" },
  { number: 17, name: "cangrejo", image: "images/17_cangrejo.png" },
  { number: 18, name: "canguro", image: "images/18_canguro.png" },
  { number: 19, name: "caracol", image: "images/19_caracol.png" },
  { number: 20, name: "caricari", image: "images/20_caricari.png" },
  { number: 21, name: "cebra", image: "images/21_cebra.png" },
  { number: 22, name: "cerdo", image: "images/22_cerdo.png" },
  { number: 23, name: "chiguire", image: "images/23_chiguire.png" },
  { number: 24, name: "cisne", image: "images/24_cisne.png" },
  { number: 25, name: "cobra", image: "images/25_cobra.png" },
  { number: 26, name: "colibri", image: "images/26_colibri.png" },
  { number: 27, name: "condor", image: "images/27_condor.png" },
  { number: 28, name: "conejo", image: "images/28_conejo.png" },
  { number: 29, name: "coyote", image: "images/29_coyote.png" },
  { number: 30, name: "cuy", image: "images/30_cuy.png" },
  { number: 31, name: "cucaracha", image: "images/31_cucaracha.png" },
  { number: 32, name: "cuervo", image: "images/32_cuervo.png" },
  { number: 33, name: "culebra", image: "images/33_culebra.png" },
  { number: 34, name: "delfin", image: "images/34_delfin.png" },
  { number: 35, name: "elefante", image: "images/35_elefante.png" },
  { number: 36, name: "erizo", image: "images/36_erizo.png" },
  { number: 37, name: "escarabajo", image: "images/37_escarabajo.png" },
  { number: 38, name: "escorpion", image: "images/38_escorpion.png" },
  { number: 39, name: "foca", image: "images/39_foca.png" },
  { number: 40, name: "flamingo", image: "images/40_flamingo.png" },
  { number: 41, name: "galapago", image: "images/41_galapago.png" },
  { number: 42, name: "gallina", image: "images/42_gallina.png" },
  { number: 43, name: "gallo", image: "images/43_gallo.png" },
  { number: 44, name: "garza", image: "images/44_garza.png" },
  { number: 45, name: "gato", image: "images/45_gato.png" },
  { number: 46, name: "gavilan", image: "images/46_gavilan.png" },
  { number: 47, name: "golondrina", image: "images/47_golondrina.png" },
  { number: 48, name: "gorila", image: "images/48_gorila.png" },
  { number: 49, name: "guacamaya", image: "images/49_guacamaya.png" },
  { number: 50, name: "garrapata", image: "images/50_garrapata.png" },
  { number: 51, name: "guacharo", image: "images/51_guacharo.png" },
  { number: 52, name: "gusano", image: "images/52_gusano.png" },
  { number: 53, name: "halcon", image: "images/53_halcon.png" },
  { number: 54, name: "hiena", image: "images/54_hiena.png" },
  { number: 55, name: "hipopotamo", image: "images/55_hipopotamo.png" },
  { number: 56, name: "hormiga", image: "images/56_hormiga.png" },
  { number: 57, name: "iguana", image: "images/57_iguana.png" },
  { number: 58, name: "jabali", image: "images/58_jabali.png" },
  { number: 59, name: "jaguar", image: "images/59_jaguar.png" },
  { number: 60, name: "jirafa", image: "images/60_jirafa.png" },
  { number: 61, name: "koala", image: "images/61_koala.png" },
  { number: 62, name: "lagartija", image: "images/62_lagartija.png" },
  { number: 63, name: "langosta", image: "images/63_langosta.png" },
  { number: 64, name: "lechuza", image: "images/64_lechuza.png" },
  { number: 65, name: "leon", image: "images/65_leon.png" },
  { number: 66, name: "leopardo", image: "images/66_leopardo.png" },
  { number: 67, name: "llama", image: "images/67_llama.png" },
  { number: 68, name: "lobo", image: "images/68_lobo.png" },
  { number: 69, name: "lombriz", image: "images/69_lombriz.png" },
  { number: 70, name: "loro", image: "images/70_loro.png" },
  { number: 71, name: "luciernaga", image: "images/71_luciernaga.png" },
  { number: 72, name: "mamut", image: "images/72_mamut.png" },
  { number: 73, name: "mantarraya", image: "images/73_mantarraya.png" },
  { number: 74, name: "mapache", image: "images/74_mapache.png" },
  { number: 75, name: "mariposa", image: "images/75_mariposa.png" },
  { number: 76, name: "mono", image: "images/76_mono.png" },
  { number: 77, name: "mosca", image: "images/77_mosca.png" },
  { number: 78, name: "mosquito", image: "images/78_mosquito.png" },
  { number: 79, name: "murcielago", image: "images/79_murcielago.png" },
  { number: 80, name: "oso", image: "images/80_oso.png" },
  { number: 81, name: "paloma", image: "images/81_paloma.png" },
  { number: 82, name: "pantera", image: "images/82_pantera.png" },
  { number: 83, name: "pato", image: "images/83_pato.png" },
  { number: 84, name: "perro", image: "images/84_perro.png" },
  { number: 85, name: "pinguino", image: "images/85_pinguino.png" },
  { number: 86, name: "pulga", image: "images/86_pulga.jpeg" },
  { number: 87, name: "puma", image: "images/87_puma.png" },
  { number: 88, name: "rana", image: "images/88_rana.png" },
  { number: 89, name: "sardina", image: "images/89_sardina.png" },
  { number: 90, name: "saltamontes", image: "images/90_saltamotes.png" },
  { number: 91, name: "sapo", image: "images/91_sapo.png" },
  { number: 92, name: "sietecueros", image: "images/92_sietecueros.png" },
  { number: 93, name: "tiburon", image: "images/93_tiburon.png" },
  { number: 94, name: "tigre", image: "images/94_tigre.png" },
  { number: 95, name: "tortuga", image: "images/95_tortuga.png" },
  { number: 96, name: "vaca", image: "images/96_vaca.png" },
  { number: 97, name: "venado", image: "images/97_venado.png" },
  { number: 98, name: "zamuro", image: "images/98_zamuro.png" },
  { number: 99, name: "zorro", image: "images/99_zorro.png" },

  // Agrega aquí los 98 restantes...
];
// === Lista de animales ===
// Recuerda completar tus 100 elementos aquí:
/* const animals = [
  { number: 0, name: "bee", image: "images/00_abeja.png" },
  { number: 1, name: "eagle", image: "images/01_aguila.png" },
  { number: 2, name: "spider", image: "images/02_araña.png" },
  { number: 3, name: "squirrel", image: "images/03_ardilla.png" },
  // ...continúa hasta 99
]; */

// === Variables del juego ===
let mode = "animal";
let attempts = 0;
let startTime = 0;
let totalTime = 0;
let currentPair = null;
let correctCount = 0;
let incorrectCount = 0;

// === Elementos de la interfaz ===
const modeInputs = document.querySelectorAll('input[name="mode"]');
const startBtn = document.getElementById("startBtn");
const gameArea = document.querySelector(".game-area");
const promptArea = document.getElementById("promptArea");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const attemptNumber = document.getElementById("attemptNumber");
const currentTime = document.getElementById("currentTime");
const averageTime = document.getElementById("averageTime");
const feedback = document.getElementById("feedback");
const correctCountEl = document.getElementById("correctCount");
const incorrectCountEl = document.getElementById("incorrectCount");

// === Cambiar modo (animal o número) ===
modeInputs.forEach(input => {
  input.addEventListener("change", () => {
    mode = input.value;
  });
});

// === Iniciar partida ===
startBtn.addEventListener("click", () => {
  attempts = 0;
  totalTime = 0;
  correctCount = 0;
  incorrectCount = 0;

  averageTime.textContent = "0";
  attemptNumber.textContent = "0";
  correctCountEl.textContent = "0";
  incorrectCountEl.textContent = "0";

  gameArea.classList.remove("hidden");
  feedback.textContent = "";
  const labelMode = document.getElementById("label-mode");
  if (mode === "animal") {
    // Imagen ➜ adivinar número
    labelMode.textContent = "Número del animal:";
  } else {
    // Imagen ➜ adivinar nombre
    labelMode.textContent = "Nombre del animal:";
  }
  nextRound();
});

// === Enviar respuesta con botón ===
submitBtn.addEventListener("click", checkAnswer);

// === Enviar respuesta con tecla Enter ===
answerInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

// === Mostrar siguiente reto ===
function nextRound() {
  if (attempts >= 10) {
    feedback.textContent = `¡Partida terminada! Promedio: ${(totalTime / 10).toFixed(2)} s | Correctas: ${correctCount} | Incorrectas: ${incorrectCount} | Inicia otra Partida`;
    return;
  }

  // Seleccionar animal aleatorio
  currentPair = animals[Math.floor(Math.random() * animals.length)];

  // Siempre mostrar imagen
  //promptArea.innerHTML = `<img src="${currentPair.image}" alt="${currentPair.name}" style="max-width:200px;">`;
  if (mode === "animal") {
      promptArea.innerHTML = `<img src="${currentPair.image}" alt="${currentPair.name}" style="max-width:200px;">`;
  } else {
    promptArea.textContent = currentPair.number;
  }
  answerInput.value = "";
  answerInput.focus();
  startTime = Date.now();
}

// === Validar respuesta ===
function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();

  let correct = false;
  const labelMode = document.getElementById("label-mode");
  if (mode === "animal") {
    // Imagen ➜ adivinar número
    correct = userAnswer === currentPair.number.toString();
  } else {
    // Imagen ➜ adivinar nombre
    correct = userAnswer === currentPair.name.toLowerCase();
  }

  const elapsed = (Date.now() - startTime) / 1000;
  totalTime += elapsed;
  attempts++;
  attemptNumber.textContent = attempts;
  currentTime.textContent = elapsed.toFixed(2);
  averageTime.textContent = (totalTime / attempts).toFixed(2);

  if (correct) {
    correctCount++;
  } else {
    incorrectCount++;
  }
   promptArea.innerHTML = `<img src="${currentPair.image}" alt="${currentPair.name}" style="max-width:200px;">`;

  correctCountEl.textContent = correctCount;
  incorrectCountEl.textContent = incorrectCount;

  feedback.textContent = correct
    ? "✅ Correcto!"
    : `❌ Incorrecto. Era: ${mode === "animal" ? currentPair.number : currentPair.name}`;

  // Ir al siguiente reto después de un segundo
  setTimeout(nextRound, 1000);

  if (correctCount + incorrectCount === 10) {
    // === Iniciar partida ===
startBtn.addEventListener("click", () => {
  attempts = 0;
  totalTime = 0;
  correctCount = 0;
  incorrectCount = 0;

  averageTime.textContent = "0";
  attemptNumber.textContent = "0";
  correctCountEl.textContent = "0";
  incorrectCountEl.textContent = "0";

  gameArea.classList.remove("hidden");
  feedback.textContent = "";
  if (mode === "animal") {
    // Imagen ➜ adivinar número
    labelMode.textContent = "Número del animal:";
  } else {
    // Imagen ➜ adivinar nombre
    labelMode.textContent = "Nombre del Animal:";
  }
  nextRound();
});


  }
}
