const permutationCalcBtn = document.querySelector(".permutation-calc-btn");
const permutationResetBtn = document.querySelector(".permutation-reset-btn");
permutationCalcBtn.addEventListener("click", () => {
  const pObjects = document.querySelector("#permutation-objects").value;
  const pSample = document.querySelector("#permutation-sample").value;
  const permutationAnswer = document.querySelector(".permutation-answer");

  if (+pObjects >= +pSample && (pObjects, pSample) >= 0) {
    let pLastAnswer = factorial(pObjects) / factorial(pObjects - pSample);
    pLastAnswer == "Infinity" ? (pLastAnswer = factorial(pObjects)) : pLastAnswer;
    permutationAnswer.innerHTML = showPermutationAns(pObjects, pSample, pLastAnswer);
  } else {
    permutationAnswer.innerHTML = `<p style="color:red;">please enter n ≥ r ≥ 0</p>`;
  }
});

permutationResetBtn.addEventListener("click", () => {
  document.querySelector(".permutation-answer").innerHTML = "";
  pForm.querySelector("input").focus();
});

const pForm = document.querySelector(".permutation-form");
pForm.addEventListener("keyup", function (event) {
  const pObjects = document.querySelector("#permutation-objects").value;
  const pSample = document.querySelector("#permutation-sample").value;

  if (event.keyCode === 13 && +pObjects >= +pSample) {
    event.preventDefault();
    permutationCalcBtn.click();
  } else if (event.keyCode === 13) {
    const permutationAnswer = document.querySelector(".permutation-answer");
    permutationAnswer.innerHTML = `<p style="color:red;">please enter n ≥ r ≥ 0</p>`;
  } else if (event.keyCode === 67) {
    permutationResetBtn.click();
    pForm.querySelector("input").focus();
    document.querySelector(".permutation-answer").innerHTML = "";
  }
});

function showPermutationAns(objects, sample, answer) {
  return `P(n,r) = P(${objects},${sample}) <br>
  = ${answer}`;
}

const combinationCalcBtn = document.querySelector(".combination-calc-btn");
const combinationResetBtn = document.querySelector(".combination-reset-btn");
combinationCalcBtn.addEventListener("click", () => {
  const cObjects = document.querySelector("#combination-objects").value;
  const cSample = document.querySelector("#combination-sample").value;
  const combinationAnswer = document.querySelector(".combination-answer");

  if (+cObjects >= +cSample && (cObjects, cSample) >= 0) {
    let lastAnswer = factorial(cObjects) / (factorial(cSample) * factorial(cObjects - cSample));
    cSample == 0 ? (lastAnswer = 1) : cSample;
    cObjects - cSample == 0 ? (lastAnswer = 1) : lastAnswer;
    combinationAnswer.innerHTML = showCombinationAns(cObjects, cSample, lastAnswer);
    console.log(lastAnswer);
  } else {
    combinationAnswer.innerHTML = `<p style="color:red;">please enter n ≥ r ≥ 0</p>`;
  }
});

combinationResetBtn.addEventListener("click", () => {
  document.querySelector(".combination-answer").innerHTML = "";
  cForm.querySelector("input").focus();
});

const cForm = document.querySelector(".combination-form");
cForm.addEventListener("keyup", function (event) {
  const cObjects = document.querySelector("#permutation-objects").value;
  const cSample = document.querySelector("#permutation-sample").value;

  if (event.keyCode === 13 && +cObjects >= +cSample) {
    combinationCalcBtn.click();
  } else if (event.keyCode === 13) {
    const combinationAnswer = document.querySelector(".permutation-answer");
    combinationAnswer.innerHTML = `<p style="color:red;">please enter n ≥ r ≥ 0</p>`;
  } else if (event.keyCode === 67) {
    combinationResetBtn.click();
    cForm.querySelector("input").focus();
    document.querySelector(".combination-answer").innerHTML = "";
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
