let clicks = 0;
if(window.location.href == "../index.html") {
  document.getElementById("EasterEgg").onclick = function() {
    clicks += 1
    if(clicks == 5) {
      const kod = prompt("Wpisz swój kod:");
      if(kod == 2222) {
        window.location.href = "../cookies.html";
      }
    }
  }
}

document.getElementById("tt").onclick = function() {
  window.location.href = "https://www.tiktok.com/@nightcraft2115?lang=pl-PL";
}
document.getElementById("dc").onclick = function() {
  window.location.href = "https://discord.gg/uWnsGDymhF";
}
document.getElementById("git").onclick = function() {
  window.location.href = "https://github.com/NightCraft666";
}
document.getElementById("yt").onclick = function() {
  window.location.href = "https://www.youtube.com/@nightcraft2137";
}
