let currentQuestion = 0;
const questions = [
    {
        question: "Answer the following questions based on the data provided in the table",
        img: "/BasicMathematics/images/ques1.png",
        questionText: "Which agent has the lowest call resolution?",
        options: ["Agent A", "Agent B", "Agent C", "Agent D"],
        answer: "Agent D"
    },
    {
        question: "When a new employee joined, their rating was 3 points lower than the highest score. What was the rating of the new employee?",
        img: "/BasicMathematics/images/ques1.png",
        questionText: "New employee's rating compared to the highest score.",
        options: ["6", "7", "8", "9"],
        answer: "6"
    },
    {
        question: "Find the average call resolution percentage across the 4 agents",
        img: "/BasicMathematics/images/ques1.png",
        questionText: "Average call resolution percentage across the 4 agents",
        options: ["50%", "55%", "59.5%", "62.5%"],
        answer: "59.5%"
    },
    {
        question: "If agent C's average handling time goes up by 5 percent, what would be their new average call handling time? (Answer in mins upto 1 decimal place)",
        img: "/BasicMathematics/images/ques1.png",
        questionText: "New average call handling time after a 5% increase.",
        options: ["7.6", "7.8", "8.2", "8.4"],
        answer: "8.4"
    },
    {
        question: "What is the total sales for the first five months?",
        img: "/BasicMathematics/images/ques2.png",
        questionText: "Total sales for the first five months",
        options: ["570000", "590000", "610000", "630000"],
        answer: "610000"
    },
    {
        question: "What is the average sales per month for the given period?",
        img: "/BasicMathematics/images/ques2.png",
        questionText: "Average sales per month for the given period",
        options: ["116000", "120000", "124000", "128000"],
        answer: "122000"
    },
    {
        question: "Calculate the percentage increase in sales from February to March.(Round off to nearest Integer)",
        img: "/BasicMathematics/images/ques2.png",
        questionText: "Percentage increase in sales from February to March",
        options: ["54", "56", "58", "60"],
        answer: "58"
    },
    {
        question: "Identify the month with the highest sales and the month with the lowest sales.",
        img: "/BasicMathematics/images/ques2.png",
        questionText: "Highest and lowest sales months",
        options: ["January & February", "March & April", "April & May", "March & February"],
        answer: "March & February"
    },
    {
        question: "Compare the total sales in April and May. How much higher or lower are the sales in May compared to April?",
        img: "/BasicMathematics/images/ques2.png",
        questionText: "Difference in sales between April and May",
        options: ["20000", "25000", "30000", "35000"],
        answer: "25000"
    },
    {
        question: "If the trip with an arrival time of 08:00 AM and a departure time of 12:00 PM included an unexpected delay of 45 minutes, at what time did the trip actually depart?",
        img: "/BasicMathematics/images/ques3.png",
        questionText: "Actual departure time after delay",
        options: ["1145", "1200", "1245", "1300"],
        answer: "1245"
    },
    {
        question: "If the cost per person for the trip with an arrival time of 09:30 AM and a departure time of 02:00 PM increased by 15%, what would be the new cost per person?",
        img: "/BasicMathematics/images/ques3.png",
        questionText: "New cost per person after 15% increase",
        options: ["70.25", "72.50", "74.75", "77.00"],
        answer: "74.75"
    },
    {
        question: "Compare the average number of stops for trips that have an arrival time before 11:00 AM to those that have an arrival time after 11:00 AM. Which set of trips has a higher average number of stops?",
        img: "/BasicMathematics/images/ques3.png",
        questionText: "Average number of stops comparison",
        options: ["Trips after 11:00 AM", "Trips before 11:00 AM"],
        answer: "Trips after 11:00 AM"
    },
    {
        question: "If the total revenue generated from a trip with an arrival time of 10:45 AM and a departure time of 03:30 PM was $1750, what was the average cost per person for this trip?",
        img: "/BasicMathematics/images/ques3.png",
        questionText: "Average cost per person for the trip",
        options: ["300", "325", "350", "375"],
        answer: "350"
    },
    {
        question: "The trip with an arrival time of 12:30 PM and a departure time of 06:30 PM experienced an unexpected delay of 30 minutes at one of the stops. What was the total duration of the trip after considering this delay?",
        img: "/BasicMathematics/images/ques3.png",
        questionText: "Total duration of the trip with delay",
        options: ["6 hours 40 mins", "7 hours 00 mins", "6 hours 30 mins", "12 hours 40 mins"],
        answer: "6 hours 30 mins"
    }
];

const totalQuestions = questions.length;
const timeLimit = 15 * 60; // 15 minutes in seconds
let timeRemaining = timeLimit;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();

    document.getElementById("next").addEventListener("click", () => {
        saveAnswer();
        currentQuestion++;
        loadQuestion();
    });

    document.getElementById("prev").addEventListener("click", () => {
        saveAnswer();
        currentQuestion--;
        loadQuestion();
    });

    document.getElementById("finish").addEventListener("click", finishQuiz);

    setInterval(updateTimer, 1000);
});

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const imgEl = document.getElementById("question-image");
    const questionTextEl = document.getElementById("question-text");
    const optionsListEl = document.getElementById("options-list");
    const q = questions[currentQuestion];

    imgEl.src = q.img;
    imgEl.style.display = q.img ? 'block' : 'none'; // Show image if there is one

    questionTextEl.textContent = `Q${currentQuestion + 1}: ${q.questionText}`;

    const optionsHtml = q.options.map(option => `
        <li>
            <input type="radio" name="q${currentQuestion}" value="${option}">
            ${option}
        </li>
    `).join('');

    optionsListEl.innerHTML = optionsHtml;

    updateNavigationButtons();
    updateQuestionNav();
    updateQuestionButtons();
}

function updateQuestionButtons() {
    const buttons = document.querySelector(".question-nav .buttons");
    buttons.innerHTML = ''; // Clear existing buttons
    questions.forEach((_, index) => {
        const button = document.createElement("button");
        button.textContent = index + 1;
        button.className = "q-button";
        if (index === currentQuestion) {
            button.classList.add("active");
        }
        button.addEventListener("click", () => {
            saveAnswer();
            currentQuestion = index;
            loadQuestion();
        });
        buttons.appendChild(button);
    });
}

function updateQuestionNav() {
    const buttons = document.querySelectorAll(".q-button");
    buttons.forEach((button, index) => {
        if (index === currentQuestion) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

function saveAnswer() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selectedOption) {
        questions[currentQuestion].user_ans = selectedOption.value;
    }
}

function updateNavigationButtons() {
    document.getElementById("prev").disabled = currentQuestion === 0;
    document.getElementById("next").disabled = currentQuestion === totalQuestions - 1;
}

function updateTimer() {
    if (timeRemaining <= 0) {
        finishQuiz();
    } else {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById("time").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

function finishQuiz() {
    saveAnswer(); // Save the final answer before finishing
    // Display results or perform final actions here
    alert("Time's up! Quiz submitted.");
}
