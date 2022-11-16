const button = document.getElementById("kelly");

button.addEventListener("click", function () {
  const message = document.getElementById("bob").value;
  const padiMi = message.length;
  const williams = document.getElementById("ovie");

  williams.innerHTML = `<h1>${padiMi}</h1>`;
});
