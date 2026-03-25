const questions = [
  {
    question: "Depuis combien d'années dure notre amitié ?",
    answers: ["9 ans", "8 ans", "7 ans "],
    correct: 2
  },
  {
    question: "Ce qui te distingue des autres à mes yeux ?",
    answers: ["Humour", "Authenticité ", "Pureté"],
    correct: 1
  },
  {
    question: "Combien d'anniversaires on a fêté ensemble ?",
    answers: ["8 ", "9", "10"],
    correct: 0
  }
];

let current = 0;

function loadQuestion() {
  const container = document.getElementById("question-container");
  container.classList.add("fade");

  setTimeout(() => {
    const q = questions[current];

    document.getElementById("question").innerText = q.question;
    document.getElementById("current").innerText = current + 1;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    document.getElementById("feedback").innerText = "";

    q.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.onclick = () => checkAnswer(index);
      answersDiv.appendChild(btn);
    });

    container.classList.remove("fade");
  }, 300);
}

function checkAnswer(index) {
  const feedback = document.getElementById("feedback");

  if (index === questions[current].correct) {
    feedback.innerText = "Ouiiii ❤️";
    feedback.className = "correct";

    // 🎉 CONFETTI
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });

    current++;

    setTimeout(() => {
      if (current < questions.length) {
        loadQuestion();
      } else {
        window.location.href = "final.html";
      }
    }, 900);

  } else {
    feedback.innerText = "Nooon 😭 ";
    feedback.className = "wrong";
  }
}

loadQuestion();