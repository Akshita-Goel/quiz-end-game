let currentQuestion = 0;
const questions = [
    {
        Sno:1,
        type:"MCQ",
       
        question:`You are a project manager responsible for overseeing a team working on a critical project for a client. During a review of the project timeline, you notice that a key milestone deadline has been incorrectly set one week earlier than agreed upon with the client.,
            <br><br> A. Review other project milestones to identify any additional discrepancies or errors.,
            <br> B. Adjust the milestone deadline in the project timeline to reflect the correct agreement with the client.,
            <br> C. Inform the team members about the discrepancy and emphasize the importance of adhering to the revised timelines.,
            <br> D. Immediately contact the client to discuss the discrepancy and renegotiate the deadline.,
            <br> E. Document the discrepancy and corrective actions taken for future reference."
        `,
        options : ["BCEDA","DBACE","ADCBE"],
        correctAnswer:"DBACE",
        explanation:"",
    },
    {
        Sno:2,
        type:"MCQ",
        attachement:`\tA.	Immediately inform the project team and stakeholders to mitigate the impact.\n\tB.	Try to fix the error yourself without involving others.\n\tC.	Wait to see if the error resolves itself before taking action.\n\tD.	Inform your supervisor about the error and seek guidance.\n\tE.	Delegate the task of fixing the error to another team member.
        `,
        question:`You're a project manager and discover a critical error in the project timeline that could delay delivery. What action do you take?," ,
        <br><br> A.	Immediately inform the project team and stakeholders to mitigate the impact.
        <br> B.	Try to fix the error yourself without involving others.
        <br> C.	Wait to see if the error resolves itself before taking action.
        <br> D.	Inform your supervisor about the error and seek guidance.
        <br> E.	Delegate the task of fixing the error to another team member.
        `,
        options : ["BCEAD","ACBDE","BCEDA"],
        correctAnswer:"BCEDA",
        explanation:"",
    },
    {
        Sno:3,
        type:"MCQ",
        attachement:`\tA.	Contact the customer immediately and offer a refund or replacement.\n\tB.	Wait for the customer to report the issue before taking action.\n\tC.	Ignore the issue and hope the customer doesn't notice.\n\tD.	Inform the production team about the defect and ask for a solution.\n\tE.	Consult with your manager before deciding on a course of action.
        `,
        question:`As a sales representative, you realize that a product you sold to a customer has a manufacturing defect. What is your next step?",
        <br><br> A.	Contact the customer immediately and offer a refund or replacement.
        <br> B.	Wait for the customer to report the issue before taking action.
        <br> C.	Ignore the issue and hope the customer doesn't notice.
        <br> D.	Inform the production team about the defect and ask for a solution.
        <br> E.	Consult with your manager before deciding on a course of action.`,
        options : ["BDECA","BCDEA","ABDEC"],
        correctAnswer:"BCDEA",
        explanation:"",
    },
    {
        Sno:4,
        type:"MCQ",
        attachement:`\tA.	Conduct an immediate investigation into the allegations.\n\tB.	Ignore the reports to avoid conflict among employees.\n\tC.	Wait for more reports before taking action.\n\tD.	Address the issue privately with the alleged parties involved.\n\tE.	Inform senior management about the reports for guidance.
        `,
        question:`You're an HR manager and receive reports of discrimination in the workplace. What action should you prioritize?",
        <br><br> A.	Conduct an immediate investigation into the allegations.
        <br> B.	Ignore the reports to avoid conflict among employees.
        <br> C.	Wait for more reports before taking action.
        ,br> D.	Address the issue privately with the alleged parties involved.
        <br> E.	Inform senior management about the reports for guidance.`,
        options : ["CDEBA","BCDEA","ECADB"],
        correctAnswer:"BCDEA",
        explanation:"",
    },
    {
        Sno:5,
        type:"MCQ",
        attachement:`\tA.	Apologize to the customer and escalate the complaint to management.\n\tB.	Disregard the complaint as an isolated incident.\n\tC.	Investigate the complaint further before taking action.\n\tD.	Inform the colleague about the complaint and offer guidance on appropriate behavior.\n\tE.	Keep the complaint to yourself to avoid confrontation.
        `,
        question:`As a customer service representative, you receive a complaint about a rude interaction with a colleague. What should you do?",<br><br> A.	Apologize to the customer and escalate the complaint to management.<br> B.	Disregard the complaint as an isolated incident.<br> C.	Investigate the complaint further before taking action.<br> D.	Inform the colleague about the complaint and offer guidance on appropriate behavior.<br> E.	Keep the complaint to yourself to avoid confrontation.`,
        options : ["ABCDE","ACBED","ADCEB"],
        correctAnswer:"ADCEB",
        explanation:"",
    },
    {
        Sno:6,
        type:"MCQ",
        attachement:`\tA.	Immediately investigate the discrepancies and rectify them.\n\tB.	Wait for someone else to notice the discrepancies before taking action.\n\tC.	Ignore the discrepancies and hope they resolve themselves.\n\tD.	Inform the accounting team about the discrepancies for clarification.\n\tE.	Review the financial reports again to confirm the discrepancies.
        `,
        question:`You're a finance manager and notice discrepancies in the quarterly financial reports. How do you proceed?",<br><br> A.	Immediately investigate the discrepancies and rectify them.<br> B.	Wait for someone else to notice the discrepancies before taking action.<br> C.	Ignore the discrepancies and hope they resolve themselves.<br> D.	Inform the accounting team about the discrepancies for clarification.<br> E.	Review the financial reports again to confirm the discrepancies.`,
        options : ["ADEBC","CDBEA","DBECA"],
        correctAnswer:"ADEBC",
        explanation:"",
    },
    {
        Sno:7,
        type:"MCQ",
        attachement:`\tA.	Immediately retract the campaign and issue a correction.\n\tB.  Wait for customer complaints before taking action.\n\tC.	Ignore the error and continue with the campaign as planned.\n\tD.	Inform the marketing team about the error and brainstorm solutions.\n\tE.	Consult with legal counsel before making any decisions.
        `,
        question:`As a marketing coordinator, you realize that a promotional campaign you launched contains incorrect information. What should you do first?",<br><br> A.	Immediately retract the campaign and issue a correction.<br> B.  Wait for customer complaints before taking action.<br> C.	Ignore the error and continue with the campaign as planned.<br> D.	Inform the marketing team about the error and brainstorm solutions.<br> E.	Consult with legal counsel before making any decisions.`,
        options : ["ADCBE","ADBEC","ADBCE"],
        correctAnswer:"ADBEC",
        explanation:"",
    },
    {
        Sno:8,
        type:"MCQ",
        attachement:`\tA.  Immediately reorder the item to prevent stockouts.\n\tB.	Wait until the next inventory cycle to reorder the item.\n\tC.	Ignore the low inventory levels and hope they improve on their own.\n\tD.	Inform the purchasing department about the low inventory levels for action.\n\tE.	Reduce promotions on the item to slow down sales until inventory levels are replenished.
        `,
        question:`You're a store manager and notice that inventory levels for a popular item are critically low. How do you handle the situation?",<br><br> A.  Immediately reorder the item to prevent stockouts.<br> B.	Wait until the next inventory cycle to reorder the item.<br> C.	Ignore the low inventory levels and hope they improve on their own.<br> D.	Inform the purchasing department about the low inventory levels for action.<br> E.	Reduce promotions on the item to slow down sales until inventory levels are replenished.`,
        options : ["ADEBC","ABCED","ADCEB"],
        correctAnswer:"ADEBC",
        explanation:"",
    },
    {
        Sno:9,
        type:"MCQ",
        attachement:`\tA.  Notify the IT security team about the vulnerability for immediate action. \n\tB.	Ignore the vulnerability to avoid causing panic.\n\tC.	Wait for someone else to notice the vulnerability before taking action.\n\tD.	Attempt to fix the vulnerability yourself without informing anyone.\n\tE.	Consult with senior developers about the best course of action.
        `,
        question: `You're a software developer and discover a security vulnerability in the company's application. What is your immediate action?",<br> A.  Notify the IT security team about the vulnerability for immediate action. <br> B.	Ignore the vulnerability to avoid causing panic.<br> C.	Wait for someone else to notice the vulnerability before taking action.<br> D.	Attempt to fix the vulnerability yourself without informing anyone.<br> E.	Consult with senior developers about the best course of action.`,
        options : ["BAECD","CADEB","AECDB"],
        correctAnswer:"AECDB",
        explanation:"",
    },
];

const totalQuestions = questions.length;
const timeLimit = 10 * 60;
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
    const q = questions[currentQuestion];

    let tableHtml = "";
    if (q.table) {
        tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Rating 1-10</th>
                        <th>Call resolution</th>
                        <th>Average handling time</th>
                    </tr>
                </thead>
                <tbody>
                    ${q.tableData.map(row => `
                        <tr>
                            <td>${row.name}</td>
                            <td>${row.rating}</td>
                            <td>${row.resolution}</td>
                            <td>${row.handling}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>`;
    }

    const optionsHtml = q.options.map(option => `
        <li>
            <input type="radio" name="q${currentQuestion}" value="${option}">
            ${option}
        </li>
    `).join('');

    questionEl.innerHTML = `
        <p>Q${currentQuestion + 1}. ${q.question}</p>
          ${tableHtml}
         
         <ul>${optionsHtml}</ul>
    `;
    // <p>${q.questionText}</p>
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
        document.getElementById("time").textContent = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
}


function finishQuiz() {
    saveAnswer(); // Save the final answer before finishing
    // Display results or perform final actions here
    alert("Time's up! Quiz submitted.");
}