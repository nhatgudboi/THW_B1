// Debug script to track section transitions and form submissions
console.log("Debug script loaded");

// Check if elements exist
document.addEventListener('DOMContentLoaded', function() {
    const sections = ['user-info', 'survey-section', 'results-section'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        console.log(`Section ${id} exists: ${!!section}`);
    });
    
    const forms = ['info-form', 'survey-form'];
    forms.forEach(id => {
        const form = document.getElementById(id);
        console.log(`Form ${id} exists: ${!!form}`);
        
        if (form) {
            console.log(`Form ${id} has ${form.elements.length} elements`);
            
            // Add a simple listener to track form submission
            form.addEventListener('submit', function(e) {
                console.log(`Form ${id} submitted`);
                console.log('Form validity: ', form.checkValidity());
                console.log('Target: ', e.target);
                console.log('Current Target: ', e.currentTarget);
                
                // If it's the info form, let's manually check the section transition
                if (id === 'info-form') {
                    setTimeout(() => {
                        const userInfo = document.getElementById('user-info');
                        const survey = document.getElementById('survey-section');
                        
                        console.log('After submit:');
                        console.log('User info display: ', userInfo.style.display);
                        console.log('User info class: ', userInfo.className);
                        console.log('Survey display: ', survey.style.display);
                        console.log('Survey class: ', survey.className);
                        
                        // Force transition if needed
                        if (userInfo.classList.contains('active') && !survey.classList.contains('active')) {
                            console.log('DEBUG: Forcing transition...');
                            userInfo.style.display = 'none';
                            userInfo.classList.remove('active');
                            survey.style.display = 'block';
                            survey.classList.add('active');
                        }
                    }, 1000);
                }
            });
        }
    });
    
    // Check content of survey questions
    const surveyQuestionsDiv = document.getElementById('survey-questions');
    if (surveyQuestionsDiv) {
        console.log('Survey questions container exists.');
        console.log('Initial content: ', surveyQuestionsDiv.innerHTML);
    }
    
    // Monitor section changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.classList.contains('section')) {
                console.log(`Section changed: ${mutation.target.id}`);
                console.log('Display: ', mutation.target.style.display);
                console.log('Class: ', mutation.target.className);
            }
        });
    });
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            observer.observe(section, { 
                attributes: true, 
                attributeFilter: ['style', 'class'] 
            });
        }
    });
    
    // Create emergency results button
    const emergencyResultsButton = document.createElement('div');
    emergencyResultsButton.id = 'emergency-results-fix';
    emergencyResultsButton.style.cssText = 'position: fixed; bottom: 100px; right: 10px; z-index: 9999; display: none;';
    emergencyResultsButton.innerHTML = `
        <button onclick="forceShowResults()" style="padding: 10px; background: purple; color: white; border: none; border-radius: 4px;">
            Show Results (Emergency)
        </button>
    `;
    document.body.appendChild(emergencyResultsButton);
    
    // Show emergency results button when form is submitted
    const surveyForm = document.getElementById('survey-form');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            setTimeout(() => {
                const surveySection = document.getElementById('survey-section');
                const resultsSection = document.getElementById('results-section');
                if (surveySection && 
                    resultsSection && 
                    !resultsSection.classList.contains('active')) {
                    document.getElementById('emergency-results-fix').style.display = 'block';
                }
            }, 2000);
        });
    }
});

// Function to manually trigger section changes
window.forceShowSurvey = function() {
    const userInfo = document.getElementById('user-info');
    const survey = document.getElementById('survey-section');
    
    if (userInfo && survey) {
        userInfo.style.display = 'none';
        userInfo.classList.remove('active');
        survey.style.display = 'block';
        survey.classList.add('active');
        
        // Also try to initialize questions
        if (window.displayQuestion && typeof window.displayQuestion === 'function') {
            window.displayQuestion(0);
        }
        
        if (window.initNavigationPanel && typeof window.initNavigationPanel === 'function') {
            window.initNavigationPanel();
        }
        
        console.log('Manual transition triggered');
        return true;
    }
    return false;
};

// Function to manually show results
window.forceShowResults = function() {
    console.log('Forcing results display');
    const surveySection = document.getElementById('survey-section');
    const resultsSection = document.getElementById('results-section');
    
    if (surveySection && resultsSection) {
        surveySection.style.display = 'none';
        surveySection.classList.remove('active');
        resultsSection.style.display = 'block';
        resultsSection.classList.add('active');
        
        // Try to run showResults if it exists
        if (window.showResults && typeof window.showResults === 'function') {
            try {
                window.showResults();
                return true;
            } catch (e) {
                console.error("Error in showResults:", e);
            }
        }
    }
    return false;
};
