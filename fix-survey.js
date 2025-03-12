// This file provides emergency fixes for survey issues
console.log("Survey fix script loaded");

// Fix for questions not displaying
function fixQuestions() {
    // Check if the survey section is active but no questions are displayed
    const surveySection = document.getElementById('survey-section');
    const questionsContainer = document.getElementById('survey-questions');
    
    if (surveySection && 
        surveySection.classList.contains('active') && 
        (!questionsContainer || questionsContainer.innerHTML === '')) {
        
        console.log("No questions displayed, attempting to fix...");
        
        // Create a basic question display if the main script fails
        if (questionsContainer && window.questions) {
            const index = window.currentQuestionIndex || 0;
            
            if (index >= 0 && index < window.questions.length) {
                const question = window.questions[index];
                
                // Create a simple question display
                questionsContainer.innerHTML = `
                    <div class="question">
                        <div class="question-text">${question.question}</div>
                        <div class="options">
                            ${createOptionsHTML(question, index)}
                        </div>
                    </div>
                `;
                
                console.log("Emergency question display created");
                
                // Add event handlers to options
                document.querySelectorAll('.option input').forEach(input => {
                    input.addEventListener('change', function() {
                        if (this.type === 'radio') {
                            // Remove selected class from all options in this group
                            document.querySelectorAll(`.option input[name="${this.name}"]`)
                                .forEach(i => i.closest('.option').classList.remove('selected'));
                        }
                        
                        // Add selected class to this option if checked
                        if (this.checked) {
                            this.closest('.option').classList.add('selected');
                        } else {
                            this.closest('.option').classList.remove('selected');
                        }
                    });
                });
            }
        }
    }
}

// Helper function to create options HTML
function createOptionsHTML(question, questionIndex) {
    if (!question) return '<p>Error: Question not found</p>';
    
    switch (question.type) {
        case 'truefalse':
        case 'singlechoice':
            return question.options.map((option, optionIndex) => `
                <div class="option">
                    <input type="radio" 
                           name="question-${questionIndex}" 
                           id="question-${questionIndex}-option-${optionIndex}" 
                           value="${option}">
                    <label for="question-${questionIndex}-option-${optionIndex}">${option}</label>
                </div>
            `).join('');
            
        case 'multiplechoice':
            return question.options.map((option, optionIndex) => `
                <div class="option">
                    <input type="checkbox" 
                           name="question-${questionIndex}" 
                           id="question-${questionIndex}-option-${optionIndex}" 
                           value="${option}">
                    <label for="question-${questionIndex}-option-${optionIndex}">${option}</label>
                </div>
            `).join('');
            
        case 'openended':
            return `<textarea id="question-${questionIndex}" rows="5" placeholder="Type your answer here..."></textarea>`;
            
        default:
            return '<p>Error: Unknown question type</p>';
    }
}

// Add emergency Fix button
function addEmergencyFixButton() {
    const fixButton = document.createElement('div');
    fixButton.id = 'emergency-fix-questions';
    fixButton.style.cssText = 'position: fixed; bottom: 150px; right: 10px; z-index: 9999;';
    fixButton.innerHTML = `
        <button onclick="fixQuestions()" style="padding: 10px; background: green; color: white; border: none; border-radius: 4px;">
            Fix Questions Display
        </button>
    `;
    document.body.appendChild(fixButton);
}

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Add the emergency fix button
    addEmergencyFixButton();
    
    // Check if questions are displayed properly after a short delay
    setTimeout(() => {
        const surveySection = document.getElementById('survey-section');
        const questionsContainer = document.getElementById('survey-questions');
        
        if (surveySection && 
            surveySection.classList.contains('active') && 
            questionsContainer && 
            questionsContainer.innerHTML === '') {
            
            console.log("Questions not displayed properly, attempting automatic fix");
            fixQuestions();
        }
    }, 2000);
});

// Make the fix function globally available
window.fixQuestions = fixQuestions;
