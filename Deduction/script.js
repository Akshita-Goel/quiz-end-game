let currentQuestion = 0;
const questions = [
    {
        question:"While circle A, circle B, and circle C are red, circle D and circle E are blue. Circle A and circle B also have a triangle inside. Circle B, circle D, and circle E have dotted borders.",
        questionText:"Which circle has a triangle inside and also has a dotted border?",
        options: ["Circle A","Circle B","Circle C","Circle D","Circle E","Cannot Say"],
        answer: "Circle B"
    },
    {
        question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
        questionText:"What color is Square A?",
        options : ["Red","Blue","Green","Yellow","Purple","Cannot Say"],
        answer:"Red"
    },
    {
        question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
        questionText:"Which shape has a striped pattern?",
        options : ["Square A","Circle B","Triangle C","Rectangle D","Pentagon E","Cannot Say"],
        answer:"Pentagon E"
    },
    {
        question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
        questionText:"How many shapes have a dotted pattern?",
        options : ["One","Two","Three","Four","Five","Cannot Say"],
        answer:"Two"
    },
    {
        question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
        questionText:"Which flower is unscented and has a pattern?",
        options : ["Crimson Roses","Golden Tulips","Ivory Daisies","Violet Orchids","Amber Sunflowers","Cannot Say"],
        answer:"Violet Orchids"
    },
    {
        question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
        questionText:"What is the characteristic of Golden Tulips?",
        options : ["Fragrance","Size","Color","Pattern","Stem","Cannot Say"],
        answer:"Fragrance"
    },
    {
        question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
        questionText:"Which flower has a pleasant fragrance and is not large?",
        options : ["Crimson Roses","Golden Tulips","Ivory Daisies","Violet Orchids","Amber Sunflowers","Cannot Say"],
        answer:"Crimson Roses"
    },
    {
        question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
        questionText:"Which creature has both wings and magical ability?",
        options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
        answer:"Pixies"
    },
    {
        question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
        questionText:"What is the primary attribute of Gnomes?",
        options : ["Winged","Magical Ability","Quadruped","Water Affinity","Underground Dwellers","Cannot Say"],
        answer:"Underground Dwellers"
    },
    {
        question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
        questionText:"Which creature is a quadruped?",
        options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
        answer:"Centaurs"
    },
    {
        question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
        questionText:"Which creature is a quadruped?",
        options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
        answer:"Centaurs"
    },
    {
        question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
        questionText:"Which creature has water affinity?",
        options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
        answer:"Nymphs"
    },
    {
        question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
        questionText:"Which creature is a quadruped?",
        options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
        answer:"Centaurs"
    },
    {
        question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
        questionText:"Which robot has a green color and advanced AI?",
        options : ["X1","Y2","Z3","W4","V5","Cannot Say"],
        answer:"Cannot Say"
    },
    {
        question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
        questionText:"What is the power source of W4 robots?",
        options : ["Nuclear Fusion","Solar Energy","Quantum Batteries","Antimatter","Electric Grid","Cannot Say"],
        answer:"Cannot Say"
    },
    {
        question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
        questionText:"Which robot is equipped with holographic projection capabilities and has the highest intelligence level?",
        options : ["X1","Y2","Z3","W4","V5","Cannot Say"],
        answer:"V5"
    },
    {
        question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
        questionText:"Which animal species is diurnal and has crimson feathers?",
        options : ["Swift Tigers","Dusk Panthers","Ivory Elephants","Crimson Macaws","Silverback Gorillas","Cannot Say"],
        answer:"Crimson Macaws"
    },
    {
        question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
        questionText:"What is the dominant status of Silverback Gorillas?",
        options : ["Alpha","Beta","Gamma","Delta","Omega","Cannot Say"],
        answer:"Alpha"
    },
    {
        question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
        questionText:"Which species is nocturnal and lacks prominent tusks?",
        options : ["Swift Tigers","Dusk Panthers","Ivory Elephants","Crimson Macaws","Silverback Gorillas","Cannot Say"],
        answer:"Dusk Panthers"
    },
    {
        question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
        questionText:"What is the habitat of Dusk Panthers?",
        options : ["Dense Forests","Savannah Plains","Tropical Rainforests","Alpine Meadows","Mangrove Swamps","Cannot Say"],
        answer:"Dense Forests"
    },
    {
        question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
        questionText:"Who is particularly skilled in Geometry?",
        options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
        answer:"Cannot Say"
    },
    {
        question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
        questionText:"In which mathematical field is Bob an expert?",
        options : ["Algebra","Geometry","Number Theory","Probability","Calculus","Cannot Say"],
        answer:"Algebra"
    },
    {
        question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
        questionText:"Who has a strong grasp of Probability?",
        options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
        answer:"Emma"
    },
    {
        question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
        questionText:"Which participant is known for expertise in Number Theory?",
        options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
        answer:"Charlie"
    },
    {
        question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
        questionText:"What is the mathematical field in which Emma excels?",
        options : ["Algebra","Geometry","Number Theory","Probability","Calculus","Cannot Say"],
        answer:"Probability"
    },
];
const totalQuestions = questions.length;
const timeLimit = 25 * 60;
let timeRemaining = timeLimit;

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    generateQuestionNav();

    document.getElementById("next").addEventListener("click", () => {
        saveAnswer();
        currentQuestion++;
        if (currentQuestion >= totalQuestions) {
            finishQuiz();
        } else {
            loadQuestion();
        }
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

    const optionsHtml = q.options.map(option => `
        <li>
            <input type="radio" name="q${currentQuestion}" value="${option}" ${q.user_ans === option ? 'checked' : ''}>
            ${option}
        </li>
    `).join('');

    questionEl.innerHTML = `
        <p>Q${currentQuestion + 1}. ${q.question}</p>
        <p>${q.questionText}</p>
        <ul>${optionsHtml}</ul>
    `;

    updateNavigationButtons();
    updateQuestionNav();
}

function generateQuestionNav() {
    const questionNav = document.getElementById("questionNav");
    questionNav.innerHTML = '';

    for (let i = 0; i < totalQuestions; i++) {
        const questionNumber = i + 1;
        const button = document.createElement('button');
        button.className = 'q-button';
        button.textContent = questionNumber;
        button.addEventListener('click', () => {
            currentQuestion = i;
            loadQuestion();
        });
        if (i === currentQuestion) {
            button.classList.add('active');
        }
        questionNav.appendChild(button);
        if ((i + 1) % 5 === 0) {
            questionNav.appendChild(document.createElement('br'));
        }
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selectedOption) {
        questions[currentQuestion].user_ans = selectedOption.value;
    }
}

function updateNavigationButtons() {
    document.getElementById("prev").disabled = currentQuestion === 0;
    document.getElementById("next").disabled = currentQuestion >= totalQuestions - 1;
}

function updateQuestionNav() {
    document.querySelectorAll('.q-button').forEach((button, index) => {
        if (index === currentQuestion) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
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

    // Calculate the results
    const results = questions.map(q => ({
        ques: q.question,
        correct_ans: q.answer,
        user_ans: q.user_ans,
        explanation: "N/A", // Add your explanations if available
        isCorrect: q.answer === q.user_ans ? "Yes" : "No"
    }));

    // Save results to local storage
    localStorage.setItem('quizResults', JSON.stringify(results));

    // Redirect to the results page
    window.location.href = 'result.html';
}












// let currentQuestion = 0;
// const questions = [
//         {
//         question:"While circle A, circle B, and circle C are red, circle D and circle E are blue. Circle A and circle B also have a triangle inside. Circle B, circle D, and circle E have dotted borders.",
//         questionText:"Which circle has a triangle inside and also has a dotted border?",
//         options: ["Circle A","Circle B","Circle C","Circle D","Circle E","Cannot Say"],
//         answer: "Circle B"
//     },
//     {
//         question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
//         questionText:"What color is Square A?",
//         options : ["Red","Blue","Green","Yellow","Purple","Cannot Say"],
//         answer:"Red"
//     },
//     {
//         question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
//         questionText:"Which shape has a striped pattern?",
//         options : ["Square A","Circle B","Triangle C","Rectangle D","Pentagon E","Cannot Say"],
//         answer:"Pentagon E"
//     },
//     {
//         question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
//         questionText:"How many shapes have a dotted pattern?",
//         options : ["One","Two","Three","Four","Five","Cannot Say"],
//         answer:"Two"
//     },
//     {
//         question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
//         questionText:"Which flower is unscented and has a pattern?",
//         options : ["Crimson Roses","Golden Tulips","Ivory Daisies","Violet Orchids","Amber Sunflowers","Cannot Say"],
//         answer:"Violet Orchids"
//     },
//     {
//         question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
//         questionText:"What is the characteristic of Golden Tulips?",
//         options : ["Fragrance","Size","Color","Pattern","Stem","Cannot Say"],
//         answer:"Fragrance"
//     },
//     {
//         question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
//         questionText:"Which flower has a pleasant fragrance and is not large?",
//         options : ["Crimson Roses","Golden Tulips","Ivory Daisies","Violet Orchids","Amber Sunflowers","Cannot Say"],
//         answer:"Crimson Roses"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature has both wings and magical ability?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Pixies"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"What is the primary attribute of Gnomes?",
//         options : ["Winged","Magical Ability","Quadruped","Water Affinity","Underground Dwellers","Cannot Say"],
//         answer:"Underground Dwellers"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature is a quadruped?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Centaurs"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature is a quadruped?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Centaurs"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature has water affinity?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Nymphs"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature is a quadruped?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Centaurs"
//     },
//     {
//         question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
//         questionText:"Which robot has a green color and advanced AI?",
//         options : ["X1","Y2","Z3","W4","V5","Cannot Say"],
//         answer:"Cannot Say"
//     },
//     {
//         question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
//         questionText:"What is the power source of W4 robots?",
//         options : ["Nuclear Fusion","Solar Energy","Quantum Batteries","Antimatter","Electric Grid","Cannot Say"],
//         answer:"Cannot Say"
//     },
//     {
//         question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
//         questionText:"Which robot is equipped with holographic projection capabilities and has the highest intelligence level?",
//         options : ["X1","Y2","Z3","W4","V5","Cannot Say"],
//         answer:"V5"
//     },
//     {
//         question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
//         questionText:"Which animal species is diurnal and has crimson feathers?",
//         options : ["Swift Tigers","Dusk Panthers","Ivory Elephants","Crimson Macaws","Silverback Gorillas","Cannot Say"],
//         answer:"Crimson Macaws"
//     },
//     {
//         question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
//         questionText:"What is the dominant status of Silverback Gorillas?",
//         options : ["Alpha","Beta","Gamma","Delta","Omega","Cannot Say"],
//         answer:"Alpha"
//     },
//     {
//         question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
//         questionText:"Which species is nocturnal and lacks prominent tusks?",
//         options : ["Swift Tigers","Dusk Panthers","Ivory Elephants","Crimson Macaws","Silverback Gorillas","Cannot Say"],
//         answer:"Dusk Panthers"
//     },
//     {
//         question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
//         questionText:"What is the habitat of Dusk Panthers?",
//         options : ["Dense Forests","Savannah Plains","Tropical Rainforests","Alpine Meadows","Mangrove Swamps","Cannot Say"],
//         answer:"Dense Forests"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"Who is particularly skilled in Geometry?",
//         options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
//         answer:"Cannot Say"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"In which mathematical field is Bob an expert?",
//         options : ["Algebra","Geometry","Number Theory","Probability","Calculus","Cannot Say"],
//         answer:"Algebra"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"Who has a strong grasp of Probability?",
//         options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
//         answer:"Emma"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"Which participant is known for expertise in Number Theory?",
//         options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
//         answer:"Charlie"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"What is the mathematical field in which Emma excels?",
//         options : ["Algebra","Geometry","Number Theory","Probability","Calculus","Cannot Say"],
//         answer:"Probability"
//     },
// ];

// const totalQuestions = questions.length;
// const timeLimit = 25 * 60;
// let timeRemaining = timeLimit;

// document.addEventListener("DOMContentLoaded", () => {
//     loadQuestion();
//     generateQuestionNav();

//     document.getElementById("next").addEventListener("click", () => {
//         saveAnswer();
//         currentQuestion++;
//         if (currentQuestion >= totalQuestions) {
//             finishQuiz();
//         } else {
//             loadQuestion();
//         }
//     });

//     document.getElementById("prev").addEventListener("click", () => {
//         saveAnswer();
//         currentQuestion--;
//         loadQuestion();
//     });

//     document.getElementById("finish").addEventListener("click", finishQuiz);

//     setInterval(updateTimer, 1000);
// });

// function loadQuestion() {
//     const questionEl = document.getElementById("question");
//     const q = questions[currentQuestion];

//     let tableHtml = "";
//     if (q.table) {
//         tableHtml = `
//             <table>
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th>Rating 1-10</th>
//                         <th>Call resolution</th>
//                         <th>Average handling time</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     ${q.tableData.map(row => `
//                         <tr>
//                             <td>${row.name}</td>
//                             <td>${row.rating}</td>
//                             <td>${row.resolution}</td>
//                             <td>${row.handling}</td>
//                         </tr>
//                     `).join('')}
//                 </tbody>
//             </table>`;
//     }

//     const optionsHtml = q.options.map(option => `
//         <li>
//             <input type="radio" name="q${currentQuestion}" value="${option}">
//             ${option}
//         </li>
//     `).join('');

//     questionEl.innerHTML = `
//         <p>Q${currentQuestion + 1}. ${q.question}</p>
//         ${tableHtml}
//         <p>${q.questionText}</p>
//         <ul>${optionsHtml}</ul>
//     `;

//     updateNavigationButtons();
//     updateQuestionNav();
// }

// function generateQuestionNav() {
//     const questionNav = document.getElementById("questionNav");
//     questionNav.innerHTML = '';

//     for (let i = 0; i < totalQuestions; i++) {
//         const questionNumber = i + 1;
//         const button = document.createElement('button');
//         button.className = 'q-button';
//         button.textContent = questionNumber;
//         button.addEventListener('click', () => {
//             currentQuestion = i;
//             loadQuestion();
//         });
//         if (i === currentQuestion) {
//             button.classList.add('active');
//         }
//         questionNav.appendChild(button);
//         if ((i + 1) % 5 === 0) {
//             questionNav.appendChild(document.createElement('br'));
//         }
//     }
// }

// function saveAnswer() {
//     const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
//     if (selectedOption) {
//         questions[currentQuestion].user_ans = selectedOption.value;
//     }
// }

// function updateNavigationButtons() {
//     document.getElementById("prev").disabled = currentQuestion === 0;
//     document.getElementById("next").disabled = currentQuestion >= totalQuestions - 1;
// }

// function updateQuestionNav() {
//     document.querySelectorAll('.q-button').forEach((button, index) => {
//         if (index === currentQuestion) {
//             button.classList.add('active');
//         } else {
//             button.classList.remove('active');
//         }
//     });
// }

// function updateTimer() {
//     if (timeRemaining <= 0) {
//         finishQuiz();
//     } else {
//         timeRemaining--;
//         const minutes = Math.floor(timeRemaining / 60);
//         const seconds = timeRemaining % 60;
//         document.getElementById("time").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     }
// }

// function finishQuiz() {
//     saveAnswer(); // Save the final answer before finishing
//     alert("Quiz completed!");
//     // You can also redirect to the result page or submit the answers here
// }

























































// let currentQuestion = 0;

// const questions = [
//     {
//         question:"While circle A, circle B, and circle C are red, circle D and circle E are blue. Circle A and circle B also have a triangle inside. Circle B, circle D, and circle E have dotted borders.",
//         questionText:"Which circle has a triangle inside and also has a dotted border?",
//         options: ["Circle A","Circle B","Circle C","Circle D","Circle E","Cannot Say"],
//         answer: "Circle B"
//     },
//     {
//         question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
//         questionText:"What color is Square A?",
//         options : ["Red","Blue","Green","Yellow","Purple","Cannot Say"],
//         answer:"Red"
//     },
//     {
//         question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
//         questionText:"Which shape has a striped pattern?",
//         options : ["Square A","Circle B","Triangle C","Rectangle D","Pentagon E","Cannot Say"],
//         answer:"Pentagon E"
//     },
//     {
//         question:"There are five geometric shapes: Square A, Circle B, Triangle C, Rectangle D, and Pentagon E. Each shape has a different color: Red, Blue, Green, Yellow, and Purple. Additionally, Square A and Circle B have a dotted pattern, while Triangle C and Rectangle D are solid. Pentagon E is the only shape with a striped pattern",
//         questionText:"How many shapes have a dotted pattern?",
//         options : ["One","Two","Three","Four","Five","Cannot Say"],
//         answer:"Two"
//     },
//     {
//         question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
//         questionText:"Which flower is unscented and has a pattern?",
//         options : ["Crimson Roses","Golden Tulips","Ivory Daisies","Violet Orchids","Amber Sunflowers","Cannot Say"],
//         answer:"Violet Orchids"
//     },
//     {
//         question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
//         questionText:"What is the characteristic of Golden Tulips?",
//         options : ["Fragrance","Size","Color","Pattern","Stem","Cannot Say"],
//         answer:"Fragrance"
//     },
//     {
//         question:"In a botanical garden, there are five different types of exotic flowers: Crimson Roses, Golden Tulips, Ivory Daisies, Violet Orchids, and Amber Sunflowers. Each flower has a unique characteristic: Fragrance, Size, Color, Pattern, and Stem. Additionally, Crimson Roses and Golden Tulips have a pleasant fragrance, while Ivory Daisies and Violet Orchids are unscented. Amber Sunflowers are the only flowers with both yellow petals and a large size.",
//         questionText:"Which flower has a pleasant fragrance and is not large?",
//         options : ["Crimson Roses","Golden Tulips","Ivory Daisies","Violet Orchids","Amber Sunflowers","Cannot Say"],
//         answer:"Crimson Roses"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature has both wings and magical ability?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Pixies"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"What is the primary attribute of Gnomes?",
//         options : ["Winged","Magical Ability","Quadruped","Water Affinity","Underground Dwellers","Cannot Say"],
//         answer:"Underground Dwellers"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature is a quadruped?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Centaurs"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature is a quadruped?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Centaurs"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature has water affinity?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Nymphs"
//     },
//     {
//         question:"In a magical forest, there are five mystical creatures: Gryphons, Pixies, Centaurs, Nymphs, and Gnomes. Each creature possesses unique attributes: Winged, Magical Ability, Quadruped, Water Affinity, and Underground Dwellers. Additionally, Gryphons and Pixies have wings, while Nymphs and Gnomes are underground dwellers. Centaurs are quadrupeds.",
//         questionText:"Which creature is a quadruped?",
//         options : ["Gryphons","Pixies","Centaurs","Nymphs","Gnomes","Cannot Say"],
//         answer:"Centaurs"
//     },
//     {
//         question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
//         questionText:"Which robot has a green color and advanced AI?",
//         options : ["X1","Y2","Z3","W4","V5","Cannot Say"],
//         answer:"Cannot Say"
//     },
//     {
//         question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
//         questionText:"What is the power source of W4 robots?",
//         options : ["Nuclear Fusion","Solar Energy","Quantum Batteries","Antimatter","Electric Grid","Cannot Say"],
//         answer:"Cannot Say"
//     },
//     {
//         question:"In a futuristic city, there are five types of robots: X1, Y2, Z3, W4, and V5. Each robot has distinct features: Power Source, Mobility, Function, Color, and Intelligence Level. Additionally, X1 and Y2 robots have advanced Artificial Intelligence (AI), while W4 and V5 robots are equipped with holographic projection capabilities. Z3 robots are the only ones with a green color.",
//         questionText:"Which robot is equipped with holographic projection capabilities and has the highest intelligence level?",
//         options : ["X1","Y2","Z3","W4","V5","Cannot Say"],
//         answer:"V5"
//     },
//     {
//         question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
//         questionText:"Which animal species is diurnal and has crimson feathers?",
//         options : ["Swift Tigers","Dusk Panthers","Ivory Elephants","Crimson Macaws","Silverback Gorillas","Cannot Say"],
//         answer:"Crimson Macaws"
//     },
//     {
//         question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
//         questionText:"What is the dominant status of Silverback Gorillas?",
//         options : ["Alpha","Beta","Gamma","Delta","Omega","Cannot Say"],
//         answer:"Alpha"
//     },
//     {
//         question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
//         questionText:"Which species is nocturnal and lacks prominent tusks?",
//         options : ["Swift Tigers","Dusk Panthers","Ivory Elephants","Crimson Macaws","Silverback Gorillas","Cannot Say"],
//         answer:"Dusk Panthers"
//     },
//     {
//         question:"In a wildlife sanctuary, there are five species of rare animals: Swift Tigers, Dusk Panthers, Ivory Elephants, Crimson Macaws, and Silverback Gorillas. Each species has unique characteristics: Habitat, Nocturnal or Diurnal, Tusk Presence, Feather Color, and Dominance Status. Additionally, Swift Tigers and Dusk Panthers are nocturnal, while Ivory Elephants and Silverback Gorillas have prominent tusks.",
//         questionText:"What is the habitat of Dusk Panthers?",
//         options : ["Dense Forests","Savannah Plains","Tropical Rainforests","Alpine Meadows","Mangrove Swamps","Cannot Say"],
//         answer:"Dense Forests"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"Who is particularly skilled in Geometry?",
//         options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
//         answer:"Cannot Say"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"In which mathematical field is Bob an expert?",
//         options : ["Algebra","Geometry","Number Theory","Probability","Calculus","Cannot Say"],
//         answer:"Algebra"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"Who has a strong grasp of Probability?",
//         options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
//         answer:"Emma"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"Which participant is known for expertise in Number Theory?",
//         options : ["Alice","Bob","Charlie","David","Emma","Cannot Say"],
//         answer:"Charlie"
//     },
//     {
//         question:"In a mathematics competition, there were five participants: Alice, Bob, Charlie, David, and Emma. Each participant excels in a specific mathematical field: Algebra, Geometry, Number Theory, Probability, and Calculus. Additionally, Alice and Bob are particularly skilled in Algebra, while Charlie is known for his expertise in Number Theory. Emma has a strong grasp of Probability, and David excels in Calculus.",
//         questionText:"What is the mathematical field in which Emma excels?",
//         options : ["Algebra","Geometry","Number Theory","Probability","Calculus","Cannot Say"],
//         answer:"Probability"
//     },
// ];


// const totalQuestions = questions.length;
// const timeLimit = 15 * 60;
// let timeRemaining = timeLimit;

// document.addEventListener("DOMContentLoaded", () => {
//     loadQuestion();

//     document.getElementById("next").addEventListener("click", () => {
//         saveAnswer();
//         currentQuestion++;
//         loadQuestion();
//     });

//     document.getElementById("prev").addEventListener("click", () => {
//         saveAnswer();
//         currentQuestion--;
//         loadQuestion();
//     });

//     document.getElementById("finish").addEventListener("click", finishQuiz);

//     setInterval(updateTimer, 1000);
// });

// function loadQuestion() {
//     const questionEl = document.getElementById("question");
//     const q = questions[currentQuestion];

//     let tableHtml = "";
//     if (q.table) {
//         tableHtml = `
//             <table>
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th>Rating 1-10</th>
//                         <th>Call resolution</th>
//                         <th>Average handling time</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     ${q.tableData.map(row => `
//                         <tr>
//                             <td>${row.name}</td>
//                             <td>${row.rating}</td>
//                             <td>${row.resolution}</td>
//                             <td>${row.handling}</td>
//                         </tr>
//                     `).join('')}
//                 </tbody>
//             </table>`;
//     }

//     const optionsHtml = q.options.map(option => `
//         <li>
//             <input type="radio" name="q${currentQuestion}" value="${option}">
//             ${option}
//         </li>
//     `).join('');

//     questionEl.innerHTML = `
//         <p>Q${currentQuestion + 1}. ${q.question}</p>
//         ${tableHtml}
//         <p>${q.questionText}</p>
//         <ul>${optionsHtml}</ul>
//     `;

//     updateNavigationButtons();
// }
// function updateQuestionNav() {
//     const questionNav = document.querySelector(".question-nav");
//     questionNav.innerHTML = '';

//     questions.forEach((q, index) => {
//         const li = document.createElement('li');
//         li.textContent = `Q${index + 1}`;
//         if (index === currentQuestion) {
//             li.classList.add('current'); // Apply current class to the current question
//         }
//         li.addEventListener('click', () => {
//             currentQuestion = index;
//             loadQuestion();
//             updateQuestionNav();
//         });
//         questionNav.appendChild(li);
//     });
// }

// function saveAnswer() {
//     const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
//     if (selectedOption) {
//         questions[currentQuestion].user_ans = selectedOption.value;
//     }
// }

// function updateNavigationButtons() {
//     document.getElementById("prev").disabled = currentQuestion === 0;
//     document.getElementById("next").disabled = currentQuestion === totalQuestions - 1;
// }

// function updateTimer() {
//     if (timeRemaining <= 0) {
//         finishQuiz();
//     } else {
//         timeRemaining--;
//         const minutes = Math.floor(timeRemaining / 60);
//         const seconds = timeRemaining % 60;
//         document.getElementById("time").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     }
// }

// function finishQuiz() {
//     saveAnswer(); // Save the final answer before finishing
//     // Display results or perform final actions here
//     alert("Time's up! Quiz submitted.");
// }