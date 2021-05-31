"use strict";

const usersInfo = [
  {
    name: "Rocío",
    surname: "Garrido",
    phone: 111111111,
  },
  {
    name: "Lucía",
    surname: "Cano",
    phone: 222222222,
  },
  {
    name: "Amparo",
    surname: "Catacrocker",
    phone: 333333333,
  },
];

const select = document.querySelector(".js-select");
const input = document.querySelectorAll(".js-input");

function fillGaps(event) {
  for (let i = 0; i < usersInfo.length; i++) {
    if (event.currentTarget.value === usersInfo[i].name) {
      input[0].value = usersInfo[i].name;
      input[1].value = usersInfo[i].surname;
      input[2].value = usersInfo[i].phone;
    }
  }
}

select.addEventListener("change", fillGaps);
