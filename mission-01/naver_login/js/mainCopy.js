const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리ㅁ

*/

const inputEmail = document.querySelector(".user-email-input");
const inputPassword = document.querySelector(".user-password-input");
const button = document.querySelector(".btn-login");
const clickError = document.querySelector(".input-error");

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
inputEmail.addEventListener("input", handleInputEmail);

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
inputPassword.addEventListener("input", handleInputPassword);

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

button.addEventListener("click", handleClick);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
