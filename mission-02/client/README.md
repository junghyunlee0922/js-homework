| 작동할때                                              |
| ----------------------------------------------------- |
| ![작동방식](/mission-02/client/assets/Mission-02.gif) |

---

#main.js

###변수 선언 getNode를 이용한 변수

선언변수 ul - html에 따로 ul태그에 ul이라는 속성을 주고 변수지정을 해줬다.

```js
// 모든 변수 관리.
const ul = getNode(".ul");
const visualImage = getNode(".visual img");
const body = getNode("body");
const nickName = getNode(".nickName");
```

###getNode.js

따로 getNode.js파일을 만들어 지정해줬습니다.

```js
// getNode.js 파일
function getNode(node, context = document) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다.");
  }

  if (context.nodeType !== document.DOCUMENT_NODE) {
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}
```

###이미지 변경

```js
// img 변경.
const imgName = data[index - 1]["name"].toLowerCase();
visualImage.src = `./assets/${imgName}.jpeg`;
visualImage.alt = data[index - 1].alt;
```

###배경색 변경

```js
// background color 변경.
body.style.background = `linear-gradient(to bottom, ${
  data[index - 1]["color"][0]
},${data[index - 1]["color"][1]})`;
```

###이름 변경

```js
// name 변경.
nickName.textContent = data[index - 1]["name"];
```

---

#main-2.js(함수 분리)

### 변수 선언

```js
// 모든 변수 관리.
const ul = document.querySelector(".ul");
const visualImage = document.querySelector(".visual img");
const body = document.querySelector("body");
const nickName = document.querySelector(".nickName");
```

### 클릭 이벤트 함수

```js
// 클릭 이벤트 함수
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
```

###이미지 함수

```js
// img함수
function setImage(index) {
  visualImage.src = `./assets/${data[index - 1]["name"].toLowerCase()}.jpeg`;
  visualImage.alt = data[index - 1]["alt"];
}
```

###배경색 함수

```js
// background color함수
function setBgColor(index) {
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1]["color"][0]
  },
  ${data[index - 1]["color"][1]})`;
}
```

###이름 함수

```js
// name함수
function setNameText(index) {
  nickName.textContent = data[index - 1]["name"];
}
```

###오디오 함수

audio.play() - 오디오 재생. audio.volume - 오디오 볼륨 조절.

```js
// 오디오 함수
function setAudio(index) {
  const audio = new Audio(
    `./assets/audio/${data[index - 1]["name"].toLowerCase()}.m4a`
  );
  audio.play();
  audio.volume = 0.1;
}
```
