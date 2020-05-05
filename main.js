const imgs = document.querySelectorAll(".video img");

imgs.forEach(function (img) {
  img.addEventListener("click", handleClick);
});

function handleClick() {
  alert("fait par Dykann Khaov");
}

// console.log(imgs);
