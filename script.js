
function iniciarCuentaRegresiva() {
  const STORAGE_KEY = "countdown_target_time";
  const COUNTDOWN_MS = 2 * 60 * 60 * 1000; // 2 horas

  // Recuperar o crear tiempo objetivo
  let targetTime = localStorage.getItem(STORAGE_KEY);

  if (!targetTime) {
    targetTime = Date.now() + COUNTDOWN_MS;
    localStorage.setItem(STORAGE_KEY, targetTime);
  } else {
    targetTime = parseInt(targetTime);
  }

  function updateCountdown() {
    const now = Date.now();
    let distance = targetTime - now;

    // Si llegó a cero o pasó, reiniciar por otras 2 horas
    if (distance <= 0) {
      targetTime = Date.now() + COUNTDOWN_MS;
      localStorage.setItem(STORAGE_KEY, targetTime);
      distance = targetTime - now;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 👇 Formatear con cero a la izquierda si es < 10
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
}

document.addEventListener("DOMContentLoaded", iniciarCuentaRegresiva);

function iniciarCuentaRegresivaPrecioCurso() {
  const STORAGE_KEY = "countdown_target_time";
  const COUNTDOWN_MS = 2 * 60 * 60 * 1000; // 2 horas

  // Recuperar o crear tiempo objetivo
  let targetTime = localStorage.getItem(STORAGE_KEY);

  if (!targetTime) {
    targetTime = Date.now() + COUNTDOWN_MS;
    localStorage.setItem(STORAGE_KEY, targetTime);
  } else {
    targetTime = parseInt(targetTime);
  }

  function updateCountdown() {
    const now = Date.now();
    let distance = targetTime - now;

    // Si se pasó o llegó a cero, reiniciar por otras 2 horas
    if (distance <= 0) {
      targetTime = Date.now() + COUNTDOWN_MS;
      localStorage.setItem(STORAGE_KEY, targetTime);
      distance = targetTime - now;
    }

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 👇 Formatear con cero a la izquierda
    hours   = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    document.getElementById("hoursRegre").textContent = hours;
    document.getElementById("minutesRegre").textContent = minutes;
    document.getElementById("secondsRegre").textContent = seconds;

    setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
}
document.addEventListener("DOMContentLoaded", iniciarCuentaRegresivaPrecioCurso);


  document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const symbol = button.querySelector(".symbol");
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    // Cierra todos los demás
    document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = null);
    document.querySelectorAll(".faq-question .symbol").forEach(s => s.textContent = "+");

    // Abre el seleccionado si estaba cerrado
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      symbol.textContent = "–";
    }
  });
});

  

