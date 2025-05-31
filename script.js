// INTERACTIVE QUIZ APPLICATION - JavaScript Logic
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Central Style Sheet",
      "Computer Style Sheet",
      "Creative Style System"
    ],
    answer: "Cascading Style Sheets"
  }
];

let currentQ = 0;
let score = 0;

const questionBox = document.getElementById("question");
const optionsList = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score");

function loadQuestion() {
  feedback.textContent = "";
  optionsList.innerHTML = "";
  const q = questions[currentQ];
  questionBox.textContent = q.question;
  q.options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(opt);
    optionsList.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQ].answer;
  if (selected === correct) {
    feedback.textContent = "✅ Correct!";
    score++;
  } else {
    feedback.textContent = `❌ Wrong! Correct answer is: ${correct}`;
  }
  Array.from(optionsList.children).forEach(li => {
    li.onclick = null; // disable click
  });
}

nextBtn.onclick = () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `${score} / ${questions.length}`;
  }
};

// Initial load
loadQuestion();
