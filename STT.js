let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let loadingEl = document.getElementById("loading");
let option = {
    method: "GET"
};
let uniqueId = null;

function counter() {
    let counter = 1;
    uniqueId = setInterval(function() {
        timerEl.textContent = counter;
        counter += 1;
    }, 1000);
}
loadingEl.classList.remove("d-none");

fetch("http://localhost:3000/random-string", option)
    .then(function(response) {
        counter();
        return response.json();
    })
    .then(function(jsondata) {
        loadingEl.classList.add("d-none");
        quoteDisplayEl.textContent = jsondata.text;
    });


function validatedata(unique) {
    let quoteInputValue = quoteInputEl.value;
    console.log(quoteInputValue);
    // let quoteDisplayValue = quoteDisplayEl.value;

    if (quoteInputValue === quoteDisplayEl.textContent) {
        clearInterval(unique);
        resultEl.textContent = "";
        resultEl.textContent = "You typed Correctly";
    } else {
        resultEl.textContent = "";
        resultEl.textContent = "You type incorrect sentence";
    }
}

submitBtnEl.onclick = function() {
    validatedata(uniqueId);
};
resetBtnEl.onclick = function() {
    resultEl.textContent = "";
    fetch("http://localhost:3000/random-string", option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            quoteDisplayEl.textContent = jsondata.text;
        });
    clearInterval(uniqueId);
    counter();
    quoteInputEl.value = "";
};