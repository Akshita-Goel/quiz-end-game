document.addEventListener('DOMContentLoaded', () => {
    const resultData = JSON.parse(localStorage.getItem('quizResult'));
    const setsCompleted = JSON.parse(localStorage.getItem('setsCompleted')) || 0;
    const bestScore = JSON.parse(localStorage.getItem('bestScore')) || 0;

    if (resultData) {
        document.getElementById('set-score').innerHTML = `
            <strong>Score for Set ${setsCompleted}:</strong> ${resultData.score} / ${resultData.totalQuestions}
        `;

        document.getElementById('explanations').innerHTML = resultData.explanations.map((explanation, index) => `
            <div class="explanation">
                <h4>Question ${index + 1}: ${explanation.question}</h4>
                <p>${explanation.explanation}</p>
            </div>
        `).join('');

        if (setsCompleted >= 3) {
            document.getElementById('overall-score').innerHTML = `
                <h3>Overall Best Score</h3>
                <p>Your best score out of 3 sets is ${bestScore}</p>
            `;
            document.getElementById('restart').innerHTML = 'Restart Quiz';
            document.getElementById('end').style.display = 'block';
        } else {
            document.getElementById('restart').innerHTML = 'Next Set';
            document.getElementById('end').style.display = 'none';
        }
    } else {
        document.getElementById('result-container').innerHTML = '<p>No result data available.</p>';
    }
});

function restartQuiz() {
    window.location.href = 'index.html';
}

function endQuiz() {
    localStorage.clear();
    window.location.href = 'index.html';
}
