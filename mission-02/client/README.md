| 작동할때                                              |
| ----------------------------------------------------- |
| ![작동방식](/mission-02/client/assets/Mission-02.gif) |

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
