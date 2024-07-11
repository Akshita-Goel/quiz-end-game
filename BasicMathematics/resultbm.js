












document.addEventListener('DOMContentLoaded', function() {
    // Fetch the results stored in local storage
    const results = JSON.parse(localStorage.getItem('quizResults')) || [];
  
    // Calculate final score
    let finalScore = 0;
    results.forEach(result => {
      if (result.isCorrect === "Yes") {
        finalScore += 1; // Add 1 mark for each correct answer
      }
    });
  
    // Display the final score
    document.getElementById('finalScore').textContent = finalScore;
  
    // Determine interpretation based on finalScore
    let interpretation = '';
    if (finalScore >= 0 && finalScore <= 5) {
      interpretation = `Your score indicates a foundational understanding with room for improvement in various areas.`;
    } else if (finalScore >= 6 && finalScore <= 10) {
      interpretation = `Your score indicates a commendable proficiency in the quiz topics.`;
    } else if (finalScore >= 11) {
      interpretation = `Your score indicates an outstanding level of proficiency in the quiz topics.`;
    }
  
    document.getElementById('interpretation').textContent = interpretation;
  
    // Display detailed results
    const detailedResults = document.getElementById('detailedResults');
    const resultsList = document.getElementById('resultsList');
  
    if (detailedResults && resultsList) {
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
  
    // Back to Dashboard Button functionality
    const backToDashboardButton = document.getElementById('back-to-dashboard-button');
    const username = localStorage.getItem('username');
    if (backToDashboardButton) {
      backToDashboardButton.addEventListener('click', function() {
        window.location.href = `/dashboard?username=${username}`;
      });
    }
  
    // Send final score to the server
    fetch('/save-resultbm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, scorededuction: finalScore })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Score saved successfully:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // document.addEventListener('DOMContentLoaded', function() {
  //   // Fetch the results stored in local storage
  //   const results = JSON.parse(localStorage.getItem('quizResults')) || [];
    
  //   // Calculate final score
  //   let finalScore = 0;
  //   results.forEach(result => {
  //       if (result.isCorrect === "Yes") {
  //           finalScore += 1; // Add 1 mark for each correct answer
  //       }
  //   });
  
  //   // Display the final score
  //   document.getElementById('finalScore').textContent = finalScore;
  
  //   // Determine interpretation based on finalScore
  //   let interpretation = '';
  //   if (finalScore >= 0 && finalScore <= 5) {
  //       interpretation = 'Your score indicates a foundational understanding with room for improvement in various areas.';
  //   } else if (finalScore >= 6 && finalScore <= 10) {
  //       interpretation = 'Your score indicates a commendable proficiency in the quiz topics.';
  //   } else if (finalScore >= 11) {
  //       interpretation = 'Your score indicates an outstanding level of proficiency in the quiz topics.';
  //   }
  
  //   document.getElementById('interpretation').textContent = interpretation;
  
  //   // Display detailed results
  //   const toggleResultsBtn = document.getElementById('toggleResults');
  //   const detailedResults = document.getElementById('detailedResults');
  //   const resultsList = document.getElementById('resultsList');
  
  //   toggleResultsBtn.addEventListener('click', function() {
  //       detailedResults.classList.toggle('hidden');
  //       toggleResultsBtn.textContent = detailedResults.classList.contains('hidden') ? 'Show Detailed Results' : 'Hide Detailed Results';
  
  //       if (!detailedResults.classList.contains('hidden')) {
  //           resultsList.innerHTML = ''; // Clear previous results
  //           results.forEach((result, index) => {
  //               const li = document.createElement('li');
  //               li.innerHTML = `
  //                   <strong>Question:</strong> ${result.ques}<br>
  //                   <strong>Correct Answer:</strong> ${result.correct_ans}<br>
  //                   <strong>User's Answer:</strong> ${result.user_ans}<br>
  //                   <strong>Explanation:</strong> ${result.explanation}<br>
  //                   <strong>Is Correct:</strong> <span style="color: ${result.isCorrect === 'Yes' ? 'green' : 'red'};">${result.isCorrect}</span>
  //               `;
  //               resultsList.appendChild(li);
  //           });
  //       }
  //   });
  
    
    
  // });
  //   // Back to Dashboard Button functionality
  //   const username = localStorage.getItem('username');
  //   backToDashboardButton.addEventListener('click', function() {
  //     window.location.href = `/dashboard?username=${username}`;
      
  //   // const backToDashboardButton = document.getElementById('back-to-dashboard-button');
  //   // backToDashboardButton.addEventListener('click', function() {
  //   //     const username = localStorage.getItem('username');
  //   //     window.location.href = `/dashboard?username=${username}`;
  //   });
  
  
    

 