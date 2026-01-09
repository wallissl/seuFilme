const carousel = document.querySelector('.carousel');
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const dotsContainer = document.querySelector('.dots');

let index = 0; // Guardar qual slide está sendo exibido
const total = slides.length;
const intervalTime = 3000;
let timer = null;

// cria dots
for (let i = 0; i < total; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.dataset.index = i; // Criar a classe data-index = "i" para mapear cada dot criado atraves do seu índice.
  dotsContainer.appendChild(dot);
}
const dots = document.querySelectorAll('.dot');

function updateSlide() {
  // calcula largura atual de um slide em px (mais robusto que %)
  const slideWidth = slides[0].getBoundingClientRect().width; // Função nativa do javascript que retorna um objeto com medidas do objeto na tela.
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`; // Aqui vamos utilizar um cálculo para mover os slides para a esquerda: posição = - (índice do slide atual × largura do slide) | O - é para mover para a esquerda.

  // atualiza dots
  dots.forEach(d => d.classList.remove('active')); // Remover a classe do dots atual
  if (dots[index]) dots[index].classList.add('active'); // Adicionar novamente para o dots da vez
}

// next / prev
function nextSlide() {
  index = (index + 1) % total;
  updateSlide();
} /* O operador % (resto de divisão) cria um loop infinito, ele utiliza o resto da divisão que zera quando o indice chega no total dos slides para retornar para o início*/ 
function prevSlide() {
  index = (index - 1 + total) % total;
  updateSlide();
} /* Aqui acontece a mesma coisa, com a diferença de estarmos subritraindo um número antes do mesmo cálculo para ele retornar para o slide anterior */


// autoplay
function startAutoplay() {
  stopAutoplay();
  timer = setInterval(nextSlide, intervalTime);
}
function stopAutoplay() {
  if (timer) { clearInterval(timer); timer = null; }
}

// listeners
btnNext.addEventListener('click', () => { nextSlide(); startAutoplay(); });
btnPrev.addEventListener('click', () => { prevSlide(); startAutoplay(); });

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    index = Number(e.currentTarget.dataset.index);
    updateSlide();
    startAutoplay();
  });
});

carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

// quando redimensionar, recalcula e mantém o slide atual visível com o resize
let resizeTimer;
window.addEventListener('resize', () => {
  // debouce rápido para evitar chamadas continuas | Atrasar a execução até o usuário “parar de chamar a função” (Só executar a ação depois que o usuário parar de mexer).
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateSlide();
  }, 50);
}); // Vamos utilizar o resizeTimer | O navegador dispara muitos eventos de resize em sequência, Para evitar recalcular o slide centenas de vezes, usamos debounce: só rodamos updateSlide() quando o usuário parar de mexer na tela por 50ms

// inicializa
updateSlide();
startAutoplay();
