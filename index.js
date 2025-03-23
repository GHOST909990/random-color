function randomColor() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;

  const my_p = document.getElementById("my_p");

  my_p.innerText = color.toUpperCase();
}

function copyToClipboard() {
  const text = document.getElementById("my_p").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
    })
    .catch((err) => {
      console.error("Ошибка копирования: ", err);
    });
}
