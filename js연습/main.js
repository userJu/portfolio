const loginForm = document.querySelector('#login-form');
const loginId = document.querySelector(".loginId");
const loginBtn = document.querySelector(".loginBtn");
const greeting = document.querySelector('#greeting');

function onLoginBtn (event) {
    event.preventDefault();
}

loginBtn.addEventListener("click", onLoginBtn);

const HIDDEN_CLASSNAME ="hidden"

function onLoginId (event {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginId.value;
    greeting.innerText=`Hello ${loginId.value}`
    loginForm.classList.add('hidden')
    greeting.classList.remove('hidden')

})



/*
해야 할 것
1. loginBtn을 클릭하면 console에 띄우기
2. button누르면 reload되는 현상 없애기
3. loginId.value값을 h1에 도출하기
4. login-form을 지우고 h1만 보여주기
*/






/*해야 할 일 
1. 사용자가 지정한 숫자까지의 범위에서 랜덤한 수 찾기
*/
const userNumLimit = document.querySelector(".userNumLim");
const playBtn = document.querySelector(".playBtn");
const userNumGuess = document.querySelector(".userNumGue");
const gameResult__compare = document.querySelector(".gameResult__compare");
const gameResult__win = document.querySelector(".gameResult__win");

/*user가 userNum에 작성한 수를 기억했다가 사용해야 한다
play! 버튼을 눌렀을 때 작성한 수보다 범위가 작아야 한다*/

// number을 무작위로 나타내는 것
//그런데 user가 userNum에 작성한 수 사이에서
function showNumber(event) {
  event.preventDefault();
  const userNumVal = userNumLimit.valueAsNumber;
  const userNumGue = userNumGuess.valueAsNumber;
  const randomNumVal = parseInt(Math.random() * 100);

  gameResult__compare.innerHTML = `You choose: ${userNumGue}, the machine chose: ${randomNumVal}.`;

  //else if로 하나 더 써야한다
  if (userNumGue === randomNumVal) {
    gameResult__win.innerHTML = `You won!`;
  } else {
    gameResult__win.innerHTML = `You lost!`;
  }
}

function numberRange() {
  if (randomNumVal > userNumVal) {
    return;
  } else {
    showNumber();
  }
}

playBtn.addEventListener("click", showNumber);



//2

/*해야 할 일 
1. 사용자가 지정한 숫자까지의 범위에서 랜덤한 수 찾기
*/
const userNumLimit = document.querySelector(".userNumLim");
const playBtn = document.querySelector(".playBtn");
const userNumGuess = document.querySelector(".userNumGue");
const gameResult__compare = document.querySelector(".gameResult__compare");
const gameResult__win = document.querySelector(".gameResult__win");

/*user가 userNum에 작성한 수를 기억했다가 사용해야 한다
play! 버튼을 눌렀을 때 작성한 수보다 범위가 작아야 한다*/

// number을 무작위로 나타내는 것
//그런데 user가 userNum에 작성한 수 사이에서
function showNumber(event) {
  event.preventDefault();
  const userNumVal = userNumLimit.valueAsNumber;
  const userNumGue = userNumGuess.valueAsNumber;
  const randomNumVal = parseInt(Math.random() * 100);
  gameResult__compare.innerHTML = `You choose: ${userNumGue}, the machine chose: ${randomNumVal}.`;

  if (userNumGue === randomNumVal && userNumVal > randomNumVal) {
    gameResult__compare.innerHTML = `You choose: ${userNumGue}, the machine chose: ${randomNumVal}.`;
    gameResult__win.innerHTML = `You won!`;
  } else if (userNumVal > randomNumVal) {
    gameResult__compare.innerHTML = `You choose: ${userNumGue}, the machine chose: ${randomNumVal}.`;
    gameResult__win.innerHTML = `You lost!`;
  }
}

playBtn.addEventListener("click", showNumber);
