const pForm = document.querySelector(".permutation-form");
pForm.addEventListener("submit", () => {
  const pObjects = parseInt(document.querySelector("#permutation-objects").value);
  const pSample = parseInt(document.querySelector("#permutation-sample").value);
  const permutationAnswer = document.querySelector(".permutation-answer");

  if (pObjects >= pSample && (pObjects, pSample) >= 0) {
    let pLastAnswer = Math.round(factorial(pObjects) / factorial(pObjects - pSample));
    pLastAnswer == "Infinity" ? (pLastAnswer = factorial(pObjects)) : pLastAnswer;
    permutationAnswer.innerHTML = showPermutationAns(pObjects, pSample, pLastAnswer);
  } else {
    permutationAnswer.innerHTML = `<p style="color:red;">please enter n ≥ r ≥ 0</p>`;
  }
});

const permutationResetBtn = document.querySelector(".permutation-reset-btn");
permutationResetBtn.addEventListener("click", () => {
  document.querySelector(".permutation-answer").innerHTML = "";
  pForm.querySelector("input").focus();
});

pForm.addEventListener("keyup", (event) => {
  if (event.keyCode === 67) {
    event.preventDefault();
    permutationResetBtn.click();
    pForm.querySelector("input").focus();
  }
});

function showPermutationAns(objects, sample, answer) {
  return `P(n,r) = P(${objects},${sample}) <br>
  = ${answer}`;
}

const cForm = document.querySelector(".combination-form");
cForm.addEventListener("submit", () => {
  const cObjects = document.querySelector("#combination-objects").value;
  const cSample = document.querySelector("#combination-sample").value;
  const combinationAnswer = document.querySelector(".combination-answer");

  if (+cObjects >= +cSample && (cObjects, cSample) >= 0) {
    let cLastAnswer = Math.round(factorial(cObjects) / (factorial(cSample) * factorial(cObjects - cSample)));
    cSample == 0 ? (cLastAnswer = 1) : cSample;
    cObjects - cSample == 0 ? (cLastAnswer = 1) : cLastAnswer;
    combinationAnswer.innerHTML = showCombinationAns(cObjects, cSample, cLastAnswer);
  } else {
    combinationAnswer.innerHTML = `<p style="color:red;">please enter n ≥ r ≥ 0</p>`;
  }
});

const combinationResetBtn = document.querySelector(".combination-reset-btn");
combinationResetBtn.addEventListener("click", () => {
  document.querySelector(".combination-answer").innerHTML = "";
  cForm.querySelector("input").focus();
});

cForm.addEventListener("keyup", (event) => {
  if (event.keyCode === 67) {
    event.preventDefault();
    combinationResetBtn.click();
    cForm.querySelector("input").focus();
  }
});

function showCombinationAns(objects, sample, answer) {
  return `C(n,r) = C(${objects},${sample}) <br>
    = ${answer}`;
}

// factorial function using recursion
function factorial(num) {
  if (num != 0) {
    if (num == 1) {
      return 1;
    }
    return num * factorial(num - 1);
  } else {
    return num;
  }
}
