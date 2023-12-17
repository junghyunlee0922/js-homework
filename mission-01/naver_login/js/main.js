const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const inputEmail = document.querySelector(".user-email-input");
const inputPassword = document.querySelector(".user-password-input");
const button = document.querySelector(".btn-login");
const clickError = document.querySelector(".input-error");

let emailPass = false; // 상태변수 관리
let pwPass = false;

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 아이디 잘못 입력시 오류
function handleInputEmail(e) {
  e.preventDefault();
  if (emailReg(inputEmail.value) || inputEmail.value === "") {
    inputEmail.classList.remove("is--invalid");
  } else {
    inputEmail.classList.add("is--invalid");
    clickError.style.display = "none";
  }
}

// 비밀번호 잘못 입력시 오류
function handleInputPassword(e) {
  e.preventDefault();
  if (pwReg(inputPassword.value) || inputPassword.value === "") {
    inputPassword.classList.remove("is--invalid");
  } else {
    inputPassword.classList.add("is--invalid");
    clickError.style.display = "none";
  }
}

// 아이디 비밀번호 일치하면 다음 페이지 넘어가기.
function handleClick(e) {
  e.preventDefault();

  if (inputEmail.value === user.id && inputPassword.value === user.pw) {
    window.location.href = "welcome.html";
  } else {
    clickError.style.display = "block";
    inputEmail.classList.remove("is--invalid");
    inputPassword.classList.remove("is--invalid");
  }
}

inputEmail.addEventListener("input", handleInputEmail);
inputPassword.addEventListener("input", handleInputPassword);
button.addEventListener("click", handleClick);

// 코드는 너무 깔끔하게 잘 작성해 주셨습니다. 다만 가독성을 위해 함수의 선언부들과 이벤트 핸들러 함수들을 따로 모아서 관리해주시는게 좋을 것 같아요
// 보통 이벤트핸들러는 하단부에 선언되고 사용되는 형태로 갑니다.
// 그리고, 수업시간에 언급드린 상태변수의 관리만 추가해 주시면 더 좋을것 같습니다.

/* ---------------------------------- 범쌤 코드 --------------------------------- */

(function () {
  const user = {
    id: "asd@naver.com",
    pw: "spdlqj123!@",
  };

  /*
  1. email 정규표현식을 사용한 validation
    - false면 해당 input에 is--invalid 클래스 추가     
    - true 해당 input에 is--invalid 클래스 제거     

  2. pw 정규표현식을 사용한 validation
    - false면 해당 input에 is--invalid 클래스 추가     
    - true 해당 input에 is--invalid 클래스 제거     

  3. 상태 변수 관리


  4. 로그인 버튼을 클릭시 조건처리

  */

  const emailInput = document.querySelector("#userEmail");
  const pwInput = document.querySelector("#userPassword");
  const loginButton = document.querySelector(".btn-login");

  let emailPass = false; // 상태변수 관리
  let pwPass = false;

  function emailReg(text) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(text).toLowerCase());
  }

  function pwReg(text) {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  }

  function handleCheckEmail() {
    let value = this.value;

    if (emailReg(value)) {
      // success
      this.classList.remove("is--invalid");
      emailPass = true;
    } else {
      this.classList.add("is--invalid");
      emailPass = false;
    }
  }

  function handleCheckPw() {
    let value = this.value;

    if (pwReg(value)) {
      // success
      this.classList.remove("is--invalid");
      pwPass = true;
    } else {
      this.classList.add("is--invalid");
      pwPass = false;
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    if (emailPass && pwPass) {
      const id = emailInput.value;
      const pw = pwInput.value;
      const getUserId = user.id; // 비동기 => 1s
      const getUserPw = user.pw; // 비동기 => 1s

      console.log(getUserId, getUserPw);

      if (id === getUserId && pw === getUserPw) {
        // console.log('로그인 성공!');

        window.location.href = "./welcome.html";
      }
    } else {
      console.log("입력부터 똑바로 하고와! ");
      // alert('dlqfurEhrqkfhgo!')
      gsap.to("form", {
        y: 10,
        repeat: 8,
        yoyo: true,
        duration: 0.08,
        clearProps: true,
      });
    }
  }

  emailInput.addEventListener("input", handleCheckEmail);
  pwInput.addEventListener("input", handleCheckPw);
  loginButton.addEventListener("click", handleLogin);
})();

/*<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>;
  html에 GSAP코드 추가.*/
