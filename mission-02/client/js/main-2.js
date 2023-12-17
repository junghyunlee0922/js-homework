// 모든 변수 관리.
const ul = document.querySelector(".ul");
const visualImage = document.querySelector(".visual img");
const body = document.querySelector("body");
const nickName = document.querySelector(".nickName");
let audio;

function handleClick(e) {
  e.preventDefault();

  let li = e.target.closest("li");

  if (!li) return;
  const list = Array.from(ul.children);
  // const list = [...ul.children];
  list.forEach((li) => li.classList.remove("is-active"));
  li.classList.add("is-active");

  let index = li.dataset.index;

  // 함수 안의 선언
  setImage(index);
  setBgColor(index);
  setNameText(index);
  setAudio(index);
}

// img 변경.
function setImage(index) {
  visualImage.src = `./assets/${data[index - 1]["name"].toLowerCase()}.jpeg`;
  visualImage.alt = data[index - 1]["alt"];
}

// background color 변경.
function setBgColor(index) {
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1]["color"][0]
  },
  ${data[index - 1]["color"][1]})`;
}

// name 변경.
function setNameText(index) {
  nickName.textContent = data[index - 1]["name"];
}

// 오디오 변경.
function setAudio(index) {
  if (audio && audio.isPlaying()) {
    audio.stop();
  }
  audio = new AudioPlayer(
    `./assets/audio/${data[index - 1]["name"].toLowerCase()}.m4a`
  );
  audio.play();
  audio.volume(0.1);
}

ul.addEventListener("click", handleClick);
