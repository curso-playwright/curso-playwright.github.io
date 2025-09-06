document.addEventListener("DOMContentLoaded", function () {
  const targetTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 horas desde ahora
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance <= 0) {
      document.querySelector(".countdown-container").innerHTML = "<p>¡La oferta ha terminado!</p>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
});

// 🔔 Alertas flotantes cada 10 segundos
const alerta = document.getElementById("alerta");
const nombres = ["Juan", "María", "Carlos", "Lucía", "Pedro", "Ana", "Diego", "Sofía"];
const paises = ["Perú", "México", "Argentina", "Chile", "Colombia", "España", "Ecuador", "Uruguay"];
const cursos = ["JavaScript", "Playwright", "Cucumber", "TypeScript", "Automatización QA"];

function mostrarAlerta() {
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const pais = paises[Math.floor(Math.random() * paises.length)];
  const curso = cursos[Math.floor(Math.random() * cursos.length)];
  alerta.textContent = `${nombre}, de ${pais}, acaba de comprar el curso con ${curso}`;
  alerta.style.opacity = 1;
  setTimeout(() => { alerta.style.opacity = 0; }, 5000);
}
setInterval(mostrarAlerta, 10000);


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


