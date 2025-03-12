// Survey questions data with correct answers
const questions = [
    // Group 1: True/False Questions
    {
        question: "1. HTML stands for HyperText Markup Language.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "True",
        group: 1
    },
    {
        question: "2. CSS is a programming language.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "False",
        group: 1
    },
    {
        question: "3. JavaScript can only run in web browsers.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "False",
        group: 1
    },
    {
        question: "4. Google Chrome is an operating system.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "False",
        group: 1
    },
    {
        question: "5. Open source software means it's free to use.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "False",
        group: 1
    },
    {
        question: "6. IPv6 has longer addresses than IPv4.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "True",
        group: 1
    },
    {
        question: "7. SQL is an object-oriented programming language.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "False",
        group: 1
    },
    {
        question: "8. SSDs are faster than HDDs.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "True",
        group: 1
    },
    {
        question: "9. HTTP is a hypertext transfer protocol.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "True",
        group: 1
    },
    {
        question: "10. Blockchain is only used for cryptocurrencies.",
        type: "truefalse",
        options: ["True", "False"],
        correctAnswer: "False",
        group: 1
    },
    
    // Group 2: Multiple Choice Questions
    {
        question: "11. Which of these is NOT a programming language?",
        type: "singlechoice",
        options: ["HTML", "Python", "Java", "C++"],
        correctAnswer: "HTML",
        group: 2
    },
    {
        question: "12. What is the default port for HTTPS?",
        type: "singlechoice",
        options: ["80", "443", "8080", "21"],
        correctAnswer: "443",
        group: 2
    },
    {
        question: "13. Which of these is NOT a database management system?",
        type: "singlechoice",
        options: ["MySQL", "MongoDB", "Apache", "PostgreSQL"],
        correctAnswer: "Apache",
        group: 2
    },
    {
        question: "14. Which is NOT a cloud computing model?",
        type: "singlechoice",
        options: ["IaaS", "PaaS", "SaaS", "DaaS (Desktop as a Service)"],
        correctAnswer: "DaaS (Desktop as a Service)",
        group: 2
    },
    {
        question: "15. Which is NOT a JavaScript framework?",
        type: "singlechoice",
        options: ["React", "Angular", "Django", "Vue"],
        correctAnswer: "Django",
        group: 2
    },
    {
        question: "16. Who is considered the father of the World Wide Web?",
        type: "singlechoice",
        options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
        correctAnswer: "Tim Berners-Lee",
        group: 2
    },
    {
        question: "17. Which HTTP method does NOT exist?",
        type: "singlechoice",
        options: ["GET", "POST", "DELETE", "RETRIEVE"],
        correctAnswer: "RETRIEVE",
        group: 2
    },
    {
        question: "18. Which of these is NOT an operating system?",
        type: "singlechoice",
        options: ["Windows", "macOS", "Firefox", "Linux"],
        correctAnswer: "Firefox",
        group: 2
    },
    {
        question: "19. What is the unit of processor speed?",
        type: "singlechoice",
        options: ["Megabyte", "Hertz", "Pixel", "Bit"],
        correctAnswer: "Hertz",
        group: 2
    },
    {
        question: "20. Which is NOT a type of wireless network?",
        type: "singlechoice",
        options: ["Wi-Fi", "Bluetooth", "NFC", "HDMI"],
        correctAnswer: "HDMI",
        group: 2
    },
    
    // Group 3: Multiple Answer Questions
    {
        question: "21. Which of these are programming languages?",
        type: "multiplechoice",
        options: ["Java", "CSS", "Python", "HTML"],
        correctAnswers: ["Java", "Python"],
        group: 3
    },
    {
        question: "22. Which operating systems are based on Unix?",
        type: "multiplechoice",
        options: ["macOS", "Linux", "Android", "Windows"],
        correctAnswers: ["macOS", "Linux", "Android"],
        group: 3
    },
    {
        question: "23. Which technologies are commonly used for frontend web development?",
        type: "multiplechoice",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        correctAnswers: ["HTML", "CSS", "JavaScript"],
        group: 3
    },
    {
        question: "24. Which services are part of cloud computing?",
        type: "multiplechoice",
        options: ["Amazon AWS", "Microsoft Azure", "Google Drive", "Adobe Photoshop"],
        correctAnswers: ["Amazon AWS", "Microsoft Azure", "Google Drive"],
        group: 3
    },
    {
        question: "25. Which technologies are used in AI?",
        type: "multiplechoice",
        options: ["Machine Learning", "Neural Networks", "Blockchain", "Deep Learning"],
        correctAnswers: ["Machine Learning", "Neural Networks", "Deep Learning"],
        group: 3
    },
    {
        question: "26. Which are common connection ports?",
        type: "multiplechoice",
        options: ["USB", "HDMI", "Bluetooth", "RAM"],
        correctAnswers: ["USB", "HDMI", "Bluetooth"],
        group: 3
    },
    {
        question: "27. Which terms are related to information security?",
        type: "multiplechoice",
        options: ["Firewall", "Encryption", "VPN", "RAM"],
        correctAnswers: ["Firewall", "Encryption", "VPN"],
        group: 3
    },
    {
        question: "28. Which are common Internet protocols?",
        type: "multiplechoice",
        options: ["HTTP", "FTP", "SMTP", "USB"],
        correctAnswers: ["HTTP", "FTP", "SMTP"],
        group: 3
    },
    {
        question: "29. Which technologies are used in mobile app development?",
        type: "multiplechoice",
        options: ["React Native", "Flutter", "Swift", "WordPress"],
        correctAnswers: ["React Native", "Flutter", "Swift"],
        group: 3
    },
    {
        question: "30. Which companies have developed web browsers?",
        type: "multiplechoice",
        options: ["Google", "Microsoft", "Mozilla", "Amazon"],
        correctAnswers: ["Google", "Microsoft", "Mozilla"],
        group: 3
    },
    
    // Group 4: Open-ended Questions
    {
        question: "31. In your opinion, how will the Internet of Things (IoT) affect daily life?",
        type: "openended",
        group: 4
    },
    {
        question: "32. Describe some practical applications of artificial intelligence (AI) that you are aware of.",
        type: "openended",
        group: 4
    },
    {
        question: "33. How do you think blockchain technology will transform the finance industry?",
        type: "openended",
        group: 4
    },
    {
        question: "34. How can personal data be effectively protected on the Internet?",
        type: "openended",
        group: 4
    },
    {
        question: "35. What do you think are the advantages and disadvantages of cloud computing?",
        type: "openended",
        group: 4
    },
    {
        question: "36. What are your thoughts on the future of virtual reality (VR) and augmented reality (AR)?",
        type: "openended",
        group: 4
    },
    {
        question: "37. What do you think is the role of social media in modern society?",
        type: "openended",
        group: 4
    },
    {
        question: "38. Explain how technology has changed education in recent years.",
        type: "openended",
        group: 4
    },
    {
        question: "39. What are your thoughts on privacy issues in the digital age?",
        type: "openended",
        group: 4
    },
    {
        question: "40. In your opinion, which tech skills will become the most important in the next 10 years?",
        type: "openended",
        group: 4
    }
];

// Global variables
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let userInfo = {};
let flaggedQuestions = new Set(); // Track flagged questions

// DOM elements
const infoForm = document.getElementById('info-form');
const surveyForm = document.getElementById('survey-form');
const userInfoSection = document.getElementById('user-info');
const surveySection = document.getElementById('survey-section');
const resultsSection = document.getElementById('results-section');
const surveyQuestions = document.getElementById('survey-questions');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.querySelector('.progress');
const toggleNavBtn = document.getElementById('toggle-nav');
const navPanel = document.getElementById('nav-panel');
const closeNavBtn = document.getElementById('close-nav');
const progressPercentage = document.getElementById('progress-percentage');
const flagBtn = document.getElementById('flag-btn');
const timerDisplay = document.getElementById('timer-display');

// Timer variables
let startTime;
let timerInterval;

// Form validation functions
function validateFullName(fullname) {
    if (!fullname) return "Full name is required";
    if (fullname.trim().length < 3) return "Full name must be at least 3 characters";
    if (!/^[a-zA-Z\s]+$/.test(fullname)) return "Full name should contain only letters and spaces";
    return "";
}

function validateBirthdate(birthdate) {
    if (!birthdate) return "Date of birth is required";
    
    const today = new Date();
    const birthdateObj = new Date(birthdate);
    const age = today.getFullYear() - birthdateObj.getFullYear();
    
    if (birthdateObj > today) return "Date of birth cannot be in the future";
    if (age < 18) return "You must be at least 18 years old";
    if (age > 120) return "Please enter a valid date of birth";
    
    return "";
}

function validateCCCD(cccd) {
    if (!cccd) return "ID Number is required";
    if (!/^\d{12}$/.test(cccd)) return "ID Number must be exactly 12 digits";
    return "";
}

function validateAddress(address) {
    if (!address) return "Address is required";
    if (address.trim().length < 10) return "Please enter a more detailed address";
    return "";
}

// Input field validation event listeners
document.getElementById('fullname').addEventListener('blur', function() {
    const error = validateFullName(this.value);
    document.getElementById('fullname-error').textContent = error;
    this.classList.toggle('invalid-input', error !== "");
});

document.getElementById('birthdate').addEventListener('blur', function() {
    const error = validateBirthdate(this.value);
    document.getElementById('birthdate-error').textContent = error;
    this.classList.toggle('invalid-input', error !== "");
});

document.getElementById('cccd').addEventListener('blur', function() {
    const error = validateCCCD(this.value);
    document.getElementById('cccd-error').textContent = error;
    this.classList.toggle('invalid-input', error !== "");
});

document.getElementById('address').addEventListener('blur', function() {
    const error = validateAddress(this.value);
    document.getElementById('address-error').textContent = error;
    this.classList.toggle('invalid-input', error !== "");
});

// Handle user information form submission with enhanced validation
infoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Form submitted"); // Debug log
    
    const fullname = document.getElementById('fullname').value;
    const birthdate = document.getElementById('birthdate').value;
    const cccd = document.getElementById('cccd').value;
    const address = document.getElementById('address').value;
    
    // Validate all fields
    const fullnameError = validateFullName(fullname);
    const birthdateError = validateBirthdate(birthdate);
    const cccdError = validateCCCD(cccd);
    const addressError = validateAddress(address);
    
    // Update error messages
    document.getElementById('fullname-error').textContent = fullnameError;
    document.getElementById('birthdate-error').textContent = birthdateError;
    document.getElementById('cccd-error').textContent = cccdError;
    document.getElementById('address-error').textContent = addressError;
    
    // Update input styling
    document.getElementById('fullname').classList.toggle('invalid-input', fullnameError !== "");
    document.getElementById('birthdate').classList.toggle('invalid-input', birthdateError !== "");
    document.getElementById('cccd').classList.toggle('invalid-input', cccdError !== "");
    document.getElementById('address').classList.toggle('invalid-input', addressError !== "");
    
    // Check if there are any errors
    if (fullnameError || birthdateError || cccdError || addressError) {
        // Shake the form to indicate error
        const card = document.querySelector('#user-info .card');
        card.classList.add('shake');
        setTimeout(() => {
            card.classList.remove('shake');
        }, 500);
        return; // Stop form submission if any errors
    }
    
    // Get user information
    userInfo = {
        fullname,
        birthdate,
        cccd,
        address
    };
    console.log("User info stored:", userInfo); // Debug log
    
    // Force direct display change - this is important!
    userInfoSection.style.display = 'none';
    surveySection.style.display = 'block';
    
    // Update classes after display is set
    userInfoSection.classList.remove('active');
    surveySection.classList.add('active');
    
    // Initialize everything immediately - make sure this runs
    currentQuestionIndex = 0;
    console.log("About to display first question");
    
    // Wait a moment for the DOM to update before displaying the question
    setTimeout(() => {
        try {
            // Make sure the questions container exists
            if (!surveyQuestions) {
                console.error('Survey questions container not found, trying to get it again');
                surveyQuestions = document.getElementById('survey-questions');
            }
            
            displayQuestion(currentQuestionIndex);
            initNavigationPanel();
            startTimer();
            
            console.log("Questions should now be visible");
        } catch (error) {
            console.error("Error displaying questions:", error);
            // Show an error message
            document.getElementById('loading-message').textContent = 'Error displaying questions. Please try again.';
            document.getElementById('loading-message').style.backgroundColor = '#f44336';
            document.getElementById('loading-message').style.display = 'block';
        }
    }, 100);
});

// Handle survey form submission animation
surveyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("Survey form submitted"); // Debug log
    
    // Save the answer to the final question
    saveAnswer();
    
    // Show loading message
    document.getElementById('loading-message').style.display = 'block';
    document.getElementById('loading-message').textContent = 'Processing survey results...';
    document.getElementById('loading-message').style.backgroundColor = '#2196f3';
    
    // Display results with a slight delay to ensure UI updates
    setTimeout(() => {
        try {
            showResults();
            console.log("Results should now be displayed");
            
            document.getElementById('loading-message').textContent = 'Results generated successfully!';
            setTimeout(() => {
                document.getElementById('loading-message').style.display = 'none';
            }, 1500);
        } catch(err) {
            console.error("Error showing results:", err);
            document.getElementById('loading-message').textContent = 'Error displaying results. Check console.';
            document.getElementById('loading-message').style.backgroundColor = '#f44336';
            
            // Force display of results anyway
            surveySection.style.display = 'none';
            surveySection.classList.remove('active');
            resultsSection.style.display = 'block';
            resultsSection.classList.add('active');
        }
    }, 300);
});

// Previous button
prevBtn.addEventListener('click', function() {
    saveAnswer();
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
});

// Next button
nextBtn.addEventListener('click', function() {
    saveAnswer();
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
});

// Restart button
restartBtn.addEventListener('click', function() {
    // Reset everything
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    userInfo = {};
    
    // Reset forms
    infoForm.reset();
    surveyForm.reset();
    
    // Show user info section
    resultsSection.classList.remove('active');
    userInfoSection.classList.add('active');
});

// Improve the displayQuestion function for better error handling
function displayQuestion(index) {
    console.log(`Attempting to display question ${index + 1}`);
    
    // Make sure the survey questions container exists
    const questionsContainer = document.getElementById('survey-questions');
    if (!questionsContainer) {
        console.error('Survey questions container not found');
        return;
    }
    
    // Make sure we have valid questions data
    if (!questions || questions.length === 0) {
        console.error('No questions data available');
        questionsContainer.innerHTML = '<p>Error: No questions available</p>';
        return;
    }
    
    // Make sure the index is valid
    if (index < 0 || index >= questions.length) {
        console.error(`Invalid question index: ${index}`);
        return;
    }
    
    // Update question counter and progress percentage
    questionCounter.textContent = `Question ${index + 1}/${questions.length}`;
    progressPercentage.textContent = `${Math.round(((index + 1) / questions.length) * 100)}%`;
    
    // Update progress bar
    const progress = ((index + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Enable/disable prev button
    prevBtn.disabled = index === 0;
    
    // Show submit button on last question, otherwise show next button
    if (index === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
    
    // Update flag button state
    if (flagBtn) {
        flagBtn.innerHTML = flaggedQuestions.has(index) 
            ? '<i class="fas fa-flag"></i> Unflag Question' 
            : '<i class="far fa-flag"></i> Flag Question';
        flagBtn.classList.toggle('flagged', flaggedQuestions.has(index));
    }
    
    const question = questions[index];
    questionsContainer.innerHTML = ''; // Clear previous question
    
    console.log(`Creating question element for ${question.question}`);
    
    // Create question element
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    
    // Add question text
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = question.question;
    questionElement.appendChild(questionText);
    
    // Add options based on question type
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';
    
    try {
        switch (question.type) {
            case 'truefalse':
            case 'singlechoice':
                question.options.forEach((option, optionIndex) => {
                    const optionElement = createRadioOption(option, index, optionIndex);
                    optionsContainer.appendChild(optionElement);
                });
                break;
            case 'multiplechoice':
                question.options.forEach((option, optionIndex) => {
                    const optionElement = createCheckboxOption(option, index, optionIndex);
                    optionsContainer.appendChild(optionElement);
                });
                break;
            case 'openended':
                const textareaElement = document.createElement('textarea');
                textareaElement.id = `question-${index}`;
                textareaElement.rows = 5;
                textareaElement.placeholder = "Type your answer here...";
                
                // If there's a saved answer, populate it
                if (userAnswers[index]) {
                    textareaElement.value = userAnswers[index];
                }
                
                optionsContainer.appendChild(textareaElement);
                break;
            default:
                console.error(`Unknown question type: ${question.type}`);
                optionsContainer.innerHTML = `<p>Error: Unknown question type "${question.type}"</p>`;
        }
    } catch (error) {
        console.error(`Error creating options for question ${index}:`, error);
        optionsContainer.innerHTML = `<p>Error creating options: ${error.message}</p>`;
    }
    
    questionElement.appendChild(optionsContainer);
    questionsContainer.appendChild(questionElement);
    
    console.log(`Question ${index + 1} displayed successfully`);
}

// Create radio option element with enhanced styling
function createRadioOption(option, questionIndex, optionIndex) {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question-${questionIndex}`;
    input.id = `question-${questionIndex}-option-${optionIndex}`;
    input.value = option;
    
    // Check if this option was previously selected
    if (userAnswers[questionIndex] === option) {
        input.checked = true;
        optionElement.classList.add('selected');
    }
    
    // Add event listener to apply selected styling
    input.addEventListener('change', function() {
        // Remove selected class from all options in this group
        document.querySelectorAll(`.option input[name="question-${questionIndex}"]`)
            .forEach(input => input.closest('.option').classList.remove('selected'));
        
        if (this.checked) {
            optionElement.classList.add('selected');
        }
    });
    
    const label = document.createElement('label');
    label.htmlFor = `question-${questionIndex}-option-${optionIndex}`;
    label.textContent = option;
    
    optionElement.appendChild(input);
    optionElement.appendChild(label);
    
    return optionElement;
}

// Create checkbox option element with enhanced styling
function createCheckboxOption(option, questionIndex, optionIndex) {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = `question-${questionIndex}`;
    input.id = `question-${questionIndex}-option-${optionIndex}`;
    input.value = option;
    
    // Check if this option was previously selected
    if (userAnswers[questionIndex] && userAnswers[questionIndex].includes(option)) {
        input.checked = true;
        optionElement.classList.add('selected');
    }
    
    // Add event listener to apply selected styling
    input.addEventListener('change', function() {
        if (this.checked) {
            optionElement.classList.add('selected');
        } else {
            optionElement.classList.remove('selected');
        }
    });
    
    const label = document.createElement('label');
    label.htmlFor = `question-${questionIndex}-option-${optionIndex}`;
    label.textContent = option;
    
    optionElement.appendChild(input);
    optionElement.appendChild(label);
    
    return optionElement;
}

// Save the current answer
function saveAnswer() {
    const question = questions[currentQuestionIndex];
    
    switch (question.type) {
        case 'truefalse':
        case 'singlechoice':
            const selectedRadio = document.querySelector(`input[name="question-${currentQuestionIndex}"]:checked`);
            userAnswers[currentQuestionIndex] = selectedRadio ? selectedRadio.value : null;
            break;
        case 'multiplechoice':
            const selectedCheckboxes = document.querySelectorAll(`input[name="question-${currentQuestionIndex}"]:checked`);
            userAnswers[currentQuestionIndex] = Array.from(selectedCheckboxes).map(cb => cb.value);
            break;
        case 'openended':
            const textareaValue = document.getElementById(`question-${currentQuestionIndex}`).value;
            userAnswers[currentQuestionIndex] = textareaValue;
            break;
    }
    updateNavigationPanel();
}

// Calculate correct answers and score
function calculateScore() {
    let score = 0;
    let totalPossible = 0;
    
    // Only count groups 1-3 for score (not the open-ended questions)
    questions.forEach((question, index) => {
        if (question.group < 4) {
            totalPossible++;
            
            if (question.type === 'truefalse' || question.type === 'singlechoice') {
                if (userAnswers[index] === question.correctAnswer) {
                    score++;
                }
            } else if (question.type === 'multiplechoice' && userAnswers[index]) {
                // For multiple choice, check if all correct answers were selected and no incorrect ones
                const correctAnswers = question.correctAnswers;
                const userSelectedAnswers = userAnswers[index];
                
                // Check if all selected answers are correct and all correct answers are selected
                const allSelectedAreCorrect = userSelectedAnswers.every(answer => 
                    correctAnswers.includes(answer));
                const allCorrectAreSelected = correctAnswers.every(answer => 
                    userSelectedAnswers.includes(answer));
                    
                if (allSelectedAreCorrect && allCorrectAreSelected) {
                    score++;
                }
            }
        }
    });
    
    return {
        score,
        totalPossible,
        percentage: Math.round((score / totalPossible) * 100)
    };
}

// Show results
function showResults() {
    console.log("Showing results");
    
    // Make sure to explicitly set display properties
    surveySection.style.display = 'none';
    surveySection.classList.remove('active');
    
    resultsSection.style.display = 'block';
    resultsSection.classList.add('active');
    
    console.log("Results section should be visible");
    
    // Display user info
    document.getElementById('result-name').textContent = userInfo.fullname || 'Not provided';
    document.getElementById('result-birthdate').textContent = userInfo.birthdate ? formatDate(userInfo.birthdate) : 'Not provided';
    document.getElementById('result-cccd').textContent = userInfo.cccd || 'Not provided';
    document.getElementById('result-address').textContent = userInfo.address || 'Not provided';
    
    // Calculate score
    const scoreResult = calculateScore();
    console.log("Score calculated:", scoreResult);
    
    // Display survey answers
    const resultsContainer = document.getElementById('results-container');
    if (!resultsContainer) {
        console.error("Results container not found");
        return;
    }
    
    resultsContainer.innerHTML = '';
    
    // Add score summary
    const scoreElement = document.createElement('div');
    scoreElement.className = 'score-summary';
    
    // Define score class based on percentage
    let scoreClass = 'average-score';
    let scoreMessage = 'Good effort!';
    
    if (scoreResult.percentage >= 80) {
        scoreClass = 'good-score';
        scoreMessage = 'Excellent work!';
    } else if (scoreResult.percentage < 50) {
        scoreClass = 'poor-score';
        scoreMessage = 'Keep learning!';
    }
    
    scoreElement.innerHTML = `
        <h3>Your Score</h3>
        <div class="score-display ${scoreClass}">
            <span class="score-number">${scoreResult.percentage}%</span>
            <span class="score-details">${scoreResult.score} out of ${scoreResult.totalPossible} correct</span>
            <span class="score-message">${scoreMessage}</span>
        </div>
    `;
    
    resultsContainer.appendChild(scoreElement);
    
    // Create charts for score visualization if Chart.js is available
    try {
        if (window.Chart && document.getElementById('score-chart')) {
            createScoreChart(scoreResult);
        }
    } catch (error) {
        console.error("Error creating chart:", error);
    }

    // Group headers with icons
    const groupHeaders = [
        { title: "Group 1: True/False Questions", icon: "fas fa-check-circle" },
        { title: "Group 2: Single Choice Questions", icon: "fas fa-list-ul" },
        { title: "Group 3: Multiple Choice Questions", icon: "fas fa-check-square" },
        { title: "Group 4: Open-ended Questions", icon: "fas fa-pen" }
    ];
    
    let currentGroup = 0;
    
    // Add results by group
    questions.forEach((question, index) => {
        try {
            // If we're moving to a new group, add a group header
            if (question.group > currentGroup) {
                currentGroup = question.group;
                const headerElement = document.createElement('h4');
                headerElement.className = 'result-group-header';
                headerElement.innerHTML = `<i class="${groupHeaders[currentGroup - 1].icon}"></i> ${groupHeaders[currentGroup - 1].title}`;
                resultsContainer.appendChild(headerElement);
            }
            
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            const questionText = document.createElement('div');
            questionText.className = 'result-question';
            questionText.textContent = question.question;
            resultItem.appendChild(questionText);
            
            const answerContainer = document.createElement('div');
            answerContainer.className = 'result-answer';
            
            // Format the answer based on question type
            if (userAnswers[index]) {
                switch (question.type) {
                    case 'truefalse':
                    case 'singlechoice':
                        const isCorrect = userAnswers[index] === question.correctAnswer;
                        const answerClass = isCorrect ? 'correct-answer' : 'incorrect-answer';
                        
                        answerContainer.innerHTML = `
                            <div class="answer-header">Your Answer:</div>
                            <div class="${answerClass}">${userAnswers[index]}</div>
                            ${!isCorrect ? `
                                <div class="answer-explanation">
                                    <strong>Correct answer:</strong> ${question.correctAnswer}
                                </div>
                            ` : ''}
                        `;
                        break;
                    
                    case 'multiplechoice':
                        const correctAnswers = question.correctAnswers;
                        const userSelectedAnswers = userAnswers[index];
                        
                        answerContainer.innerHTML = '<div class="answer-header">Your Answers:</div>';
                        
                        // Create a list for selected answers
                        const answerList = document.createElement('ul');
                        answerList.className = 'answer-list';
                        
                        // Add each selected answer
                        userSelectedAnswers.forEach(answer => {
                            const isCorrect = correctAnswers.includes(answer);
                            const answerClass = isCorrect ? 'correct-answer' : 'incorrect-answer';
                            const listItem = document.createElement('li');
                            listItem.className = answerClass;
                            listItem.textContent = answer;
                            answerList.appendChild(listItem);
                        });
                        
                        answerContainer.appendChild(answerList);
                        
                        // Add missing correct answers
                        const missingAnswers = correctAnswers.filter(answer => !userSelectedAnswers.includes(answer));
                        if (missingAnswers.length > 0) {
                            const missingSection = document.createElement('div');
                            missingSection.className = 'answer-explanation';
                            missingSection.innerHTML = '<strong>You missed:</strong>';
                            
                            const missingList = document.createElement('ul');
                            missingList.className = 'answer-list';
                            
                            missingAnswers.forEach(answer => {
                                const listItem = document.createElement('li');
                                listItem.className = 'missing-answer';
                                listItem.textContent = answer;
                                missingList.appendChild(listItem);
                            });
                            
                            missingSection.appendChild(missingList);
                            answerContainer.appendChild(missingSection);
                        }
                        break;
                    
                    case 'openended':
                        answerContainer.innerHTML = `
                            <div class="answer-header">Your Response:</div>
                            <div class="open-answer">${userAnswers[index]}</div>
                        `;
                        break;
                }
            } else {
                answerContainer.innerHTML = `<div class="not-answered">Not answered</div>`;
                if (question.type !== 'openended') {
                    if (question.type === 'multiplechoice') {
                        answerContainer.innerHTML += `
                            <div class="answer-explanation">
                                <strong>Correct answers:</strong>
                                <ul>
                                    ${question.correctAnswers.map(ans => `<li>${ans}</li>`).join('')}
                                </ul>
                            </div>
                        `;
                    } else {
                        answerContainer.innerHTML += `
                            <div class="answer-explanation">
                                <strong>Correct answer:</strong> ${question.correctAnswer}
                            </div>
                        `;
                    }
                }
            }
            
            resultItem.appendChild(answerContainer);
            resultsContainer.appendChild(resultItem);
        } catch (error) {
            console.error(`Error processing question ${index}:`, error);
        }
    });
    
    console.log("Results displayed successfully");
}

// Create chart for score visualization
function createScoreChart(scoreResult) {
    const ctx = document.getElementById('score-chart').getContext('2d');
    
    // Destroy any existing chart
    if (window.scoreChart) {
        window.scoreChart.destroy();
    }
    
    // Create new chart
    window.scoreChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [scoreResult.score, scoreResult.totalPossible - scoreResult.score],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(244, 67, 54, 0.7)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(244, 67, 54, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Initialize the navigation panel
function initNavigationPanel() {
    // Create navigation buttons for each question group
    for (let group = 1; group <= 4; group++) {
        const buttonContainer = document.getElementById(`group-${group}-buttons`);
        buttonContainer.innerHTML = ''; // Clear existing buttons
        
        // Find all questions for this group
        const groupQuestions = questions.filter(q => q.group === group);
        
        groupQuestions.forEach((question, groupIndex) => {
            // Find the actual index in the main questions array
            const questionIndex = questions.findIndex(q => q === question);
            
            // Create the button
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'question-btn';
            button.textContent = groupIndex + 1; // The number within this group
            button.dataset.index = questionIndex;
            
            // Add click event to navigate to this question
            button.addEventListener('click', () => {
                saveAnswer(); // Save current answer before navigating
                currentQuestionIndex = parseInt(button.dataset.index);
                displayQuestion(currentQuestionIndex);
                updateNavigationPanel(); // Update the panel to reflect the new current question
            });
            
            // Right-click to flag/unflag question
            button.addEventListener('contextmenu', (e) => {
                e.preventDefault(); // Prevent the browser context menu
                const index = parseInt(button.dataset.index);
                if (flaggedQuestions.has(index)) {
                    flaggedQuestions.delete(index);
                } else {
                    flaggedQuestions.add(index);
                }
                updateNavigationPanel(); // Update the panel to reflect the change
            });
            
            buttonContainer.appendChild(button);
        });
    }
    
    // Initially update the navigation panel
    updateNavigationPanel();
}

// Update the navigation panel to reflect current state
function updateNavigationPanel() {
    // Update all buttons
    document.querySelectorAll('.question-btn').forEach(button => {
        const index = parseInt(button.dataset.index);
        
        // Clear existing classes except 'question-btn'
        button.className = 'question-btn';
        
        // Add appropriate classes
        if (index === currentQuestionIndex) {
            button.classList.add('current');
        }
        if (userAnswers[index] !== null && (userAnswers[index].length > 0 || typeof userAnswers[index] !== 'object')) {
            button.classList.add('answered');
        }
        if (flaggedQuestions.has(index)) {
            button.classList.add('flagged');
        }
    });
}

// Toggle navigation panel visibility
toggleNavBtn.addEventListener('click', function() {
    navPanel.classList.toggle('hidden');
});

// Close navigation panel when close button is clicked
closeNavBtn.addEventListener('click', function() {
    navPanel.classList.add('hidden');
});

// Close navigation panel when clicking outside of it
document.addEventListener('click', function(event) {
    const isClickInsideNav = navPanel.contains(event.target);
    const isClickOnToggleBtn = toggleNavBtn.contains(event.target);
    if (!isClickInsideNav && !isClickOnToggleBtn && !navPanel.classList.contains('hidden')) {
        navPanel.classList.add('hidden');
    }
});

// Enhance the save answer function to update the navigation panel
const originalSaveAnswer = saveAnswer;
saveAnswer = function() {
    originalSaveAnswer();
    updateNavigationPanel();
};

// Enhance the displayQuestion function to update the navigation panel
const originalDisplayQuestion = displayQuestion;
displayQuestion = function(index) {
    originalDisplayQuestion(index);
    updateNavigationPanel();
};

// Initialize the navigation panel after the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    
    // Check if we're supposed to be on the survey page
    if (!userInfoSection.classList.contains('active') && 
        surveySection.classList.contains('active')) {
        console.log("Survey section is active on page load, initializing");
        
        // Make sure we have the right elements
        const surveyQuestions = document.getElementById('survey-questions');
        if (!surveyQuestions) {
            console.error("Survey questions container still not found after DOM loaded");
        }
        
        // Try to display the first question
        try {
            displayQuestion(currentQuestionIndex);
            initNavigationPanel();
            startTimer();
        } catch (error) {
            console.error("Error initializing survey:", error);
        }
    }
});

// Set up theme toggle if it exists
const themeSwitch = document.getElementById('theme-switch');
if (themeSwitch) {
    themeSwitch.addEventListener('click', function() {
        document.body.setAttribute('data-theme', 
            document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        
        // Update icon
        const icon = themeSwitch.querySelector('i');
        if (document.body.getAttribute('data-theme') === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Set up PDF download button if it exists
const downloadPdfBtn = document.getElementById('download-pdf');
if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', function() {
        if (typeof window.jspdf !== 'undefined') {
            generatePDF();
        } else {
            alert('PDF generation library not loaded. Please try again later.');
        }
    });
}

// Timer functions
function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = new Date();
    const diff = now - startTime;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Flag button functionality
if (flagBtn) {
    flagBtn.addEventListener('click', function() {
        if (flaggedQuestions.has(currentQuestionIndex)) {
            flaggedQuestions.delete(currentQuestionIndex);
            flagBtn.innerHTML = '<i class="far fa-flag"></i> Flag Question';
            flagBtn.classList.remove('flagged');
        } else {
            flaggedQuestions.add(currentQuestionIndex);
            flagBtn.innerHTML = '<i class="fas fa-flag"></i> Unflag Question';
            flagBtn.classList.add('flagged');
        }
        updateNavigationPanel();
    });
}
