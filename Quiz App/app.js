const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1,
  },
  {
    question: "Which is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    answer: 0,
  },
  {
    question: "What is 5 x 3?",
    options: ["8", "15", "12", "20"],
    answer: 1,
  },
  {
    question: "What is 5 / 5?",
    options: ["1", "0", "2", "20"],
    answer: 0,
  },
  {
    question: "What is 5 - 3?",
    options: ["8", "15", "2", "20"],
    answer: 2,
  },
  {
    question: "Which is the capital of India?",
    options: ["Chennai", "Hyderabad", "Bangalore", "Delhi"],
    answer: 3,
  },
  {
    question: "Who is the Winner of 2021 BGT?",
    options: ["Australia", "England", "India", "Newzland"],
    answer: 2,
  },
  {
    question: "Who is the current Deputy CM of Andhra Pradesh?",
    options: ["Chiranjeevi", "Pawan Kalyan", "Lokesh", "Jagan"],
    answer: 1,
  },
  {
    question: "What is 5 x 4?",
    options: ["8", "15", "12", "20"],
    answer: 3,
  },
  {
    question: "What is 4 x 3?",
    options: ["8", "15", "12", "20"],
    answer: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");
const restartContainer = document.getElementById("restart-container");
const restartButton = document.getElementById("restart-button");
const questionNumberElement = document.getElementById("question-number");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}/${
    questions.length
  }`;

  // Clear previous options
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className =
      "w-full bg-gray-100 py-2 px-4 border rounded hover:bg-gray-200";
    button.addEventListener("click", () => checkAnswer(index, button));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex, button) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    button.classList.add("bg-green-500", "text-white");
    score++;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    button.classList.add("bg-red-500", "text-white");
  }

  // Disable all buttons after selection
  Array.from(optionsContainer.children).forEach((btn) =>
    btn.setAttribute("disabled", true)
  );
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showRestartScreen();
  }
});

function showRestartScreen() {
  quizContainer.classList.add("hidden");
  restartContainer.classList.remove("hidden");
}

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  quizContainer.classList.remove("hidden");
  restartContainer.classList.add("hidden");
  loadQuestion();
});

// Initialize the quiz
loadQuestion();
