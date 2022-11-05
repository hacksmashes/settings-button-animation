let settings = document.querySelector(".settings");
let close = document.querySelector(".close");
let sound = document.querySelector(".sound");
let bl = document.querySelector(".bl");
let airplane = document.querySelector(".airplane");
let wifi = document.querySelector(".wifi");

function rot() {
  settings.style.animationName = "rotatesetting";
  bl.style.animationName = "right";
  airplane.style.animationName = "bottom";
  wifi.style.animationName = "left";
  sound.style.animationName = "top";

  setTimeout(() => {
    settings.style.display = "none";
    close.style.display = "block";
    close.style.animationName = "rotateclose";

    setTimeout(() => {
      bl.style.zIndex = "1";
      airplane.style.zIndex = "1";
      wifi.style.zIndex = "1";
      sound.style.zIndex = "1";
    }, 2000);
  }, 200);
}

function rotrev() {
  close.style.animationName = "rotatecloserev";
  bl.style.animationName = "rightrev";
  airplane.style.animationName = "bottomrev";
  wifi.style.animationName = "leftrev";
  sound.style.animationName = "toprev";

  bl.style.zIndex = "-1";
  airplane.style.zIndex = "-1";
  wifi.style.zIndex = "-1";
  sound.style.zIndex = "-1";

  setTimeout(() => {
    settings.style.display = "block";
    close.style.display = "none";
    settings.style.animationName = "rotatesettingrev";
  }, 200);
}
