const addMsg = () => {
  const msg = document.querySelector(".msg");
  msg.innerHTML = "Su sesión ha expirado";
};

setTimeout(addMsg, 15000);
