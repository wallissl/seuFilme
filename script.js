/* let index = 0;
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");

function mudarSlide() {
//   index.classList.remove("active");

  index = (index + 1) % slides.length;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

//   slides[index].classList.add("active");
}

setInterval(mudarSlide, 3000); // troca a cada 3s
 */

  // ====== JS ======
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const btnPrev = document.getElementById('prev');
    const btnNext = document.getElementById('next');
    const dotsContainer = document.querySelector('.dots');

    let index = 0;
    const total = slides.length;
    const intervalTime = 3000; // 3s
    let timer = null;

    // cria dots (indicadores) dinamicamente
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.dataset.index = i;
      dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    function updateSlide() {
      // move o container usando translateX; cada slide tem 100% de largura
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;

      // atualiza dots visuais
      dots.forEach(d => d.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
    }

    function nextSlide() {
      index = (index + 1) % total;
      updateSlide();
    }

    function prevSlide() {
      index = (index - 1 + total) % total;
      updateSlide();
    }

    // autoplay
    function startAutoplay() {
      stopAutoplay(); // garante não duplicar timers
      timer = setInterval(nextSlide, intervalTime);
    }
    function stopAutoplay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // listeners dos botões
    btnNext.addEventListener('click', () => {
      nextSlide();
      startAutoplay(); // reinicia autoplay (opcional: para UX mais previsível)
    });

    btnPrev.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });

    // clicar no dot pula para o slide correspondente
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        index = Number(e.currentTarget.dataset.index);
        updateSlide();
        startAutoplay();
      });
    });

    // pausa autoplay ao passar o mouse (opcional, bom para UX)
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // inicia
    updateSlide();
    startAutoplay();