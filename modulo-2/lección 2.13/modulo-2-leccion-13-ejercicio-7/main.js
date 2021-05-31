const times = [56, 9, 45, 28, 35];

const media = times.reduce((acc, time) => acc + time, 0) / times.length;
// con reduce calculamos la suma total y eso lo dividimos por el nº de items:
// average = (suma total con reduce) / nº items (items.length)

console.log(media);
