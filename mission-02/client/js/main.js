/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// 모든 변수 관리.
const ul = getNode(".ul");
const visualImage = getNode(".visual img");
const body = getNode("body");
const nickName = getNode(".nickName");

function handleClick(e) {
  e.preventDefault();

  let li = e.target.closest("li");

  if (!li) return;
  const list = Array.from(ul.children);
  // const list = [...ul.children];
  list.forEach((li) => li.classList.remove("is-active"));
  li.classList.add("is-active");

  let index = li.dataset.index;

  // img 변경.
  const imgName = data[index - 1]["name"].toLowerCase();
  visualImage.src = `./assets/${imgName}.jpeg`;
  visualImage.alt = data[index - 1].alt;

  // background color 변경.
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1]["color"][0]
  },${data[index - 1]["color"][1]})`;

  // name 변경.
  nickName.textContent = data[index - 1]["name"];
}

ul.addEventListener("click", handleClick);
