document.addEventListener('DOMContentLoaded', function() {
    // const results = [
    //   { ques: "Question 1", correct_ans: "Option A", user_ans: "Option B", explanation: "Explanation 1", isCorrect: "No" },
    //   { ques: "Question 2", correct_ans: "Option C", user_ans: "Option C", explanation: "Explanation 2", isCorrect: "Yes" },
    //   // Add more results as needed
    // ];
  
    // Example logic to calculate final score
    let finalScore = 0;
    results.forEach(result => {
      if (result.isCorrect === "Yes") {
        finalScore += 1; // Add 1 mark for each correct answer
      }
      // You can add negative scoring logic for incorrect answers if needed
    });
  
    document.getElementById('finalScore').textContent = finalScore;
  
    // Determine interpretation based on finalScore
        let interpretation = '';
    if (finalScore >= 0 && finalScore <= 5) {
        interpretation = 'Your score indicates a foundational understanding with room for improvement in various areas.';
    } else if (finalScore >= 6 && finalScore <= 10) {
        interpretation = 'Your score indicates a commendable proficiency in the quiz topics.';
    } else if (finalScore >= 11) {
        interpretation = 'Your score indicates an outstanding level of proficiency in the quiz topics.';
    }

    document.getElementById('interpretation').textContent = interpretation;

  
    // Display detailed results
    const toggleResultsBtn = document.getElementById('toggleResults');
    const detailedResults = document.getElementById('detailedResults');
    const resultsList = document.getElementById('resultsList');
  
    toggleResultsBtn.addEventListener('click', function() {
      detailedResults.classList.toggle('hidden');
      toggleResultsBtn.textContent = detailedResults.classList.contains('hidden') ? 'Show Detailed Results' : 'Hide Detailed Results';
  
      if (!detailedResults.classList.contains('hidden')) {
        resultsList.innerHTML = ''; // Clear previous results
        results.forEach((result, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>Question:</strong> ${result.ques}<br>
            <strong>Correct Answer:</strong> ${result.correct_ans}<br>
            <strong>User's Answer:</strong> ${result.user_ans}<br>
            <strong>Explanation:</strong> ${result.explanation}<br>
            <strong>Is Correct:</strong> <span style="color: ${result.isCorrect === 'Yes' ? 'green' : 'red'};">${result.isCorrect}</span>
          `;
          resultsList.appendChild(li);
        });
      }
    });
  })