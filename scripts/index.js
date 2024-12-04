let clicks = 0;
document.getElementById("EasterEgg").onclick = function() {
  clicks += 1
  if(clicks == 3) {
    const kod = prompt("Wpisz swój kod:");
    if(kod == 2222) {
      window.location.href = "../index.html";
    }
  }
}
