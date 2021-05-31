let counter = 0;
// vamos a realizar un temporizador que empiece en 0 y cada 2 segundos se incremente.

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);
