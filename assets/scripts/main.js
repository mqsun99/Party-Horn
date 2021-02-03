var slider = document.getElementById('volume-slider');
var vol_num = document.getElementById("volume-number");
var vol_img = document.getElementById("volume-image");
var hornsound = document.getElementById('horn-sound');
var honkbtn = document.getElementById("honk-btn");
var sound_img = document.getElementById("sound-image");
var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");

slider.oninput = function(){
  vol_num.value = this.value;

  if (vol_num.value == 0) {
    honkbtn.disabled = true;
    vol_img.src="./assets/media/icons/volume-level-0.svg";
  } else {
    honkbtn.disabled = false;
    if (vol_num.value >= 67){
      vol_img.src="./assets/media/icons/volume-level-3.svg";
    } else if (vol_num.value >= 34){
      vol_img.src="./assets/media/icons/volume-level-2.svg";
    } else if (vol_num.value >= 1){
      vol_img.src="./assets/media/icons/volume-level-1.svg";
    }
  }
  hornsound.volume = vol_num.value / 100;
}

vol_num.oninput = function(){
  slider.value = this.value;

  if (vol_num.value == 0) {
    honkbtn.disabled = true;
    vol_img.src="./assets/media/icons/volume-level-0.svg";
  } else {
    honkbtn.disabled = false;
    if (vol_num.value >= 67){
      vol_img.src="./assets/media/icons/volume-level-3.svg";
    } else if (vol_num.value >= 34){
      vol_img.src="./assets/media/icons/volume-level-2.svg";
    } else if (vol_num.value >= 1){
      vol_img.src="./assets/media/icons/volume-level-1.svg";
    }
  }
  hornsound.volume = vol_num.value / 100;
}

air.onclick = function(){
  sound_img.src="./assets/media/images/air-horn.svg";
}

car.onclick = function(){
  sound_img.src="./assets/media/images/car.svg";
}

party.onclick = function(){
  sound_img.src="./assets/media/images/party-horn.svg";
}

honkbtn.onclick = function(){
  if (air.checked){
    hornsound.src="./assets/media/audio/air-horn.mp3";
  } else if (car.checked){
    hornsound.src="./assets/media/audio/car-horn.mp3";
  } else if (party.checked){
    hornsound.src="./assets/media/audio/party-horn.mp3";
  }
  hornsound.play();
  return false;
}
