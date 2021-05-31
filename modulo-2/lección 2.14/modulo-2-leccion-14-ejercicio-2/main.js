let counter = 0;
// vamos a realizar un temporizador que empiece en 0 y cada 2 segundos se incremente.

const incrementAndShowCounter = () => {
  if (counter < 12) {
    counter++;
    const time = document.querySelector(".time");
    time.innerHTML = counter;
  }
};

setInterval(incrementAndShowCounter, 1000);
