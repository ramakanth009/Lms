// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", function () {
    initializeNavigation();
    initializeDashboard();
    initializeCurriculum();
    initializeAssessment();
    initializeQuiz();
});

// Navigation Functionality
function initializeNavigation() {
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("data-target");

            // Hide all sections
            document.querySelectorAll(".main-content > div").forEach((section) => {
                section.style.display = "none";
            });

            // Show target section
            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.style.display = "block";
            }

            // Update active state
            document.querySelectorAll(".nav-link").forEach((nav) => {
                nav.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
}

// Dashboard Initialization
function initializeDashboard() {
    // Metric Value Animation
    document.querySelectorAll('.metric-value').forEach(metric => {
        const target = parseInt(metric.textContent);
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        function updateCount() {
            if (count < target) {
                count += increment;
                metric.textContent = Math.round(count) + '%';
                requestAnimationFrame(updateCount);
            } else {
                metric.textContent = target + '%';
            }
        }
        updateCount();
    });

    // Progress Ring Animation
    document.querySelectorAll('.progress-ring-circle').forEach(circle => {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const percent = 75;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    });
}

// Initialize Curriculum Section
function initializeCurriculum() {
    // Branch Selection
    document.querySelectorAll(".dropdown-item[data-branch]").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedBranch = this.getAttribute("data-branch");

            // Update branch button text
            const branchButton = document.getElementById("dropdown-branch-button");
            branchButton.textContent = selectedBranch;

            // Show second dropdown
            const secondDropdown = document.getElementById("second-dropdown-container");
            secondDropdown.style.display = "block";

            // Reset subject button text
            document.getElementById("dropdown-subject-button").textContent = "Indicate Job Preference";

            // Hide all job roles first
            document.querySelectorAll(".job-roles").forEach(list => {
                list.classList.add("d-none");
            });

            // Show relevant job roles
            // Use the exact ID format from HTML
            const targetRoles = document.getElementById(`${selectedBranch}-roles`);
            if (targetRoles) {
                targetRoles.classList.remove("d-none");
            }

            // Clear previous content
            const contentDisplay = document.getElementById("content-display");
            contentDisplay.style.display = "none";
            contentDisplay.innerHTML = "";
        });
    });

    // Role Selection
    document.querySelectorAll(".dropdown-item[data-role]").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedRole = this.getAttribute("data-role");
            const content = jobDescriptions[selectedRole];
            const contentDisplay = document.getElementById("content-display");

            // Update subject button text
            document.getElementById("dropdown-subject-button").textContent = selectedRole;

            if (content) {
                contentDisplay.innerHTML = generateRoleHTML(content);
                contentDisplay.style.display = "block";
            } else {
                contentDisplay.innerHTML = '<div class="alert alert-warning">Job role details not found.</div>';
                contentDisplay.style.display = "block";
            }
        });
    });
}

// Helper function to generate role HTML
function generateRoleHTML(content) {
    return `
        <div class="role-card">
            <div class="role-header">
                <h2 class="role-title">Job Title: ${content.title || "Role Title Not Available"}</h2>
            </div>
            ${content.note ? `<div class="role-note"><i class="fas fa-info-circle"></i> ${content.note}</div>` : ""}
            ${content.description ? `
                <div class="description-section mb-4">
                    <h4 class="mb-2">Job Description</h4>
                    <p>${content.description}</p>
                </div>` : ""
        }
            ${content.sectionDescription ? `
                <div class="section-description mb-4">
                    <h4 class="mb-2">Overview</h4>
                    <p>${content.sectionDescription}</p>
                </div>` : ""
        }
            <div class="skills-section">
                <h4 class="mb-3">Required Skills</h4>
                <div class="skills-container">
                    ${content.skills.map(skill => `
                        <div class="skill-badge">
                            <i class="fas fa-check-circle"></i>
                            ${skill}
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>`;
}

// Update initializeAssessment function
function initializeAssessment() {
    // Add assessment initialization logic
    document.getElementById('timer').textContent = '90:00';

    if (document.getElementById('assessment-intro')) {
        document.getElementById('assessment-intro').style.display = 'block';
    }
    if (document.getElementById('main-assessment')) {
        document.getElementById('main-assessment').style.display = 'none';
    }
}

// Add Assessment Event Handlers
function startAssessment() {
    if (document.getElementById('assessment-intro')) {
        document.getElementById('assessment-intro').style.display = 'none';
    }
    if (document.getElementById('main-assessment')) {
        document.getElementById('main-assessment').style.display = 'block';
        startTimer();
    }
}

let timer;
let timeLeft = 5400; // 90 minutes in seconds

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        if (document.getElementById('timer')) {
            document.getElementById('timer').textContent =
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAssessment();
        }
    }, 1000);
}

// Update existing functions
function selectOption(option) {
    const options = option.parentElement.getElementsByClassName('assessment-option');
    Array.from(options).forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
}

function nextSection(section) {
    document.querySelectorAll('.assessment-section').forEach(sect => {
        sect.style.display = 'none';
    });

    const targetSection = document.getElementById(`${section}Section`);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    document.querySelectorAll('.progress-step').forEach(step => {
        step.classList.remove('active');
        if (step.dataset.step === section) {
            step.classList.add('active');
        }
    });
}

function submitAssessment() {
    clearInterval(timer);
    alert('Assessment submitted successfully!');
    // Reset timer and sections
    timeLeft = 5400;
    document.getElementById('timer').textContent = '90:00';
    document.getElementById('assessment-intro').style.display = 'block';
    document.getElementById('main-assessment').style.display = 'none';
}

// Quiz Functionality
function initializeQuiz() {
    const quizManager = new QuizManager();
}

// Helper Functions
function generateRoleHTML(content) {
    return `
      <div class="role-card">
          <div class="role-header">
              <h2 class="role-title">Job Title: ${content.title || "Role Title Not Available"}</h2>
          </div>
          ${content.note ? `<div class="role-note"><i class="fas fa-info-circle"></i> ${content.note}</div>` : ""}
          ${content.description ? `
              <div class="description-section mb-4">
                  <h4 class="mb-2">Job Description</h4>
                  <p>${content.description}</p>
              </div>` : ""
        }
          ${content.sectionDescription ? `
              <div class="section-description mb-4">
                  <h4 class="mb-2">Overview</h4>
                  <p>${content.sectionDescription}</p>
              </div>` : ""
        }
          <div class="skills-section">
              <h4 class="mb-3">Required Skills</h4>
              <div class="skills-container">
                  ${content.skills.map(skill => `
                      <div class="skill-badge">
                          <i class="fas fa-check-circle"></i>
                          ${skill}
                      </div>
                  `).join("")}
              </div>
          </div>
      </div>`;
}

// Quiz Manager Class
// Quiz Manager Class with both functionalities
class QuizManager {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];
        this.initialize();
    }

    initialize() {
        // Initialize both quiz and review functionality
        document.querySelector('.start-quiz-btn').addEventListener('click', () => this.startQuiz('new'));
        document.querySelectorAll('.review-quiz-btn').forEach(btn => {
            btn.addEventListener('click', () => this.showQuizReview(
                btn.closest('.quiz-detail-card').querySelector('.quiz-title').textContent
            ));
        });

        document.querySelector('.close-modal').addEventListener('click', () => this.closeQuiz());
        document.getElementById('nextButton')?.addEventListener('click', () => this.nextQuestion());
        document.getElementById('closeResults')?.addEventListener('click', () => this.closeQuiz());
    }

    startQuiz(type) {
        this.currentQuiz = newQuizQuestions;
        this.currentQuestion = 0;
        this.score = 0;
        this.answers = [];

        document.getElementById('quizModal').style.display = 'block';
        document.getElementById('quizContent').innerHTML = this.getQuizTemplate();
        document.getElementById('quizContent').classList.remove('d-none');
        document.getElementById('resultsContainer').classList.add('d-none');

        this.updateProgress();
        this.displayQuestion();
    }

    getQuizTemplate() {
        return `
            <div class="progress-container">
                <div class="progress">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 0%"></div>
                </div>
                <p class="text-end mt-2">
                    <span id="currentQuestion">1</span>/<span id="totalQuestions">10</span>
                </p>
            </div>
            <h3 class="mb-4" id="questionText"></h3>
            <div id="optionsContainer"></div>
            <button class="btn btn-primary mt-4 d-none" id="nextButton">Next Question</button>
        `;
    }

    showQuizReview(quizTitle) {
        const quizData = completedQuizData[quizTitle];
        if (!quizData) return;

        document.getElementById('quizModal').style.display = 'block';
        document.getElementById('quizContent').innerHTML = `
            <div class="quiz-review-header">
                <h2>${quizTitle}</h2>
                <div class="quiz-meta">
                    <span class="topic-badge">${quizData.topic}</span>
                    <span class="score-badge">${quizData.score}</span>
                    <span class="time-badge"><i class="fas fa-clock"></i> ${quizData.timeSpent}</span>
                </div>
                <p class="completion-date">Completed on: ${new Date(quizData.completion).toLocaleDateString()}</p>
            </div>
            <div class="quiz-review-content">
                <h3>Question Review</h3>
                ${quizData.questions.map((q, index) => `
                    <div class="question-review ${q.correct ? 'correct' : 'incorrect'}">
                        <div class="question-number">Q${index + 1}</div>
                        <div class="question-details">
                            <p class="question-text">${q.question}</p>
                            <p class="user-answer">Your answer: ${q.userAnswer}</p>
                        </div>
                        <div class="answer-status">
                            <i class="fas fa-${q.correct ? 'check' : 'times'}"></i>
                        </div>
                    </div>
                `).join('')}
                <div class="performance-summary">
                    <h3>Performance Summary</h3>
                    <p>${quizData.performance}</p>
                </div>
            </div>
        `;
    }

    displayQuestion() {
        const question = this.currentQuiz[this.currentQuestion];
        document.getElementById('questionText').textContent = question.question;

        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'quiz-option';
            button.textContent = option;
            button.addEventListener('click', () => this.selectAnswer(index));
            optionsContainer.appendChild(button);
        });

        document.getElementById('nextButton').classList.add('d-none');
        document.getElementById('nextButton').addEventListener('click', () => this.nextQuestion());
    }

    selectAnswer(index) {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => option.classList.remove('selected'));
        options[index].classList.add('selected');

        const question = this.currentQuiz[this.currentQuestion];
        const isCorrect = index === question.correct;

        options.forEach(option => option.disabled = true);
        options[index].classList.add(isCorrect ? 'correct' : 'incorrect');
        if (!isCorrect) options[question.correct].classList.add('correct');

        this.answers.push({
            question: this.currentQuestion,
            selected: index,
            correct: question.correct
        });

        if (isCorrect) this.score++;
        document.getElementById('nextButton').classList.remove('d-none');
    }

    nextQuestion() {
        this.currentQuestion++;

        if (this.currentQuestion < this.currentQuiz.length) {
            this.updateProgress();
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    updateProgress() {
        const progress = (this.currentQuestion / this.currentQuiz.length) * 100;
        document.querySelector('.progress-bar').style.width = `${progress}%`;
        document.getElementById('currentQuestion').textContent = this.currentQuestion + 1;
        document.getElementById('totalQuestions').textContent = this.currentQuiz.length;
    }

    showResults() {
        document.getElementById('quizContent').classList.add('d-none');
        document.getElementById('resultsContainer').classList.remove('d-none');

        document.getElementById('finalScore').textContent = this.score;
        document.getElementById('totalScore').textContent = this.currentQuiz.length;

        const detailedResults = document.getElementById('detailedResults');
        detailedResults.innerHTML = '';

        this.answers.forEach((answer, index) => {
            const question = this.currentQuiz[index];
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <p class="mb-2"><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <p class="mb-1">Your answer: ${question.options[answer.selected]}</p>
                <p class="mb-0 ${answer.selected === answer.correct ? 'text-success' : 'text-danger'}">
                    ${answer.selected === answer.correct ? '✓ Correct' : '✗ Incorrect - Correct answer: ' + question.options[answer.correct]}
                </p>
            `;
            detailedResults.appendChild(resultItem);
        });
    }

    closeQuiz() {
        document.getElementById('quizModal').style.display = 'none';
    }
}

// Mock data for completed quizzes
// const completedQuizData = {
//     "JavaScript Fundamentals": {
//         topic: "JavaScript",
//         score: "8/10",
//         timeSpent: "45 minutes",
//         questions: [
//             {
//                 question: "What is closure in JavaScript?",
//                 userAnswer: "A function that has access to variables in its outer scope",
//                 correct: true
//             },
//             {
//                 question: "What is hoisting?",
//                 userAnswer: "Moving declarations to the top",
//                 correct: true
//             },
//             {
//                 question: "What is the event loop?",
//                 userAnswer: "Incorrect answer about event loop",
//                 correct: false
//             }
//         ],
//         completion: "2024-01-15",
//         performance: "Great understanding of core concepts!"
//     },
//     "React Components": {
//         topic: "React",
//         score: "9/10",
//         timeSpent: "40 minutes",
//         questions: [
//             {
//                 question: "What is the purpose of useState?",
//                 userAnswer: "To manage state in functional components",
//                 correct: true
//             },
//             {
//                 question: "Explain component lifecycle",
//                 userAnswer: "Series of methods that are called during component rendering",
//                 correct: true
//             }
//         ],
//         completion: "2024-01-20",
//         performance: "Excellent work on component lifecycle!"
//     }
//     // Add other quiz data as needed
// };
// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const curriculumIntro = document.querySelector('.curriculum-intro');
    const contentDisplay = document.getElementById('content-display');

    // Show intro initially if no content is displayed
    if (contentDisplay.style.display === 'none' || !contentDisplay.innerHTML.trim()) {
        curriculumIntro.style.display = 'block';
    }

    // Hide intro when branch is selected
    document.querySelectorAll('.dropdown-item[data-branch]').forEach(item => {
        item.addEventListener('click', () => {
            curriculumIntro.style.display = 'none';
        });
    });
});
// Update the branch selection event listener
document.querySelectorAll(".dropdown-item[data-branch]").forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedBranch = this.getAttribute("data-branch");

        // Update branch button text
        const branchButton = document.getElementById("dropdown-branch-button");
        branchButton.textContent = selectedBranch;

        // Show second dropdown
        const secondDropdown = document.getElementById("second-dropdown-container");
        secondDropdown.style.display = "block";

        // Show the guidance message
        document.getElementById("branch-selected-message").style.display = "block";

        // Hide curriculum intro
        document.querySelector(".curriculum-intro").style.display = "none";

        // Reset subject button text
        document.getElementById("dropdown-subject-button").textContent = "Indicate Job Preference";

        // Hide all job roles first
        document.querySelectorAll(".job-roles").forEach(list => {
            list.classList.add("d-none");
        });

        // Show relevant job roles
        const targetRoles = document.getElementById(`${selectedBranch}-roles`);
        if (targetRoles) {
            targetRoles.classList.remove("d-none");
        }

        // Clear previous content
        const contentDisplay = document.getElementById("content-display");
        contentDisplay.style.display = "none";
        contentDisplay.innerHTML = "";
    });
});
// Update the role selection event listener
document.querySelectorAll(".dropdown-item[data-role]").forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedRole = this.getAttribute("data-role");

        // Hide branch message and show role message
        document.getElementById("branch-selected-message").style.display = "none";
        document.getElementById("role-selected-message").style.display = "block";

        // Update subject button text
        document.getElementById("dropdown-subject-button").textContent = selectedRole;

        const content = jobDescriptions[selectedRole];
        const contentDisplay = document.getElementById("content-display");

        if (content) {
            contentDisplay.innerHTML = generateRoleHTML(content);
            contentDisplay.style.display = "block";
        } else {
            contentDisplay.innerHTML = '<div class="alert alert-warning">Job role details not found.</div>';
            contentDisplay.style.display = "block";
        }
    });
});
// Initialize the quiz manager when the document loads
document.addEventListener('DOMContentLoaded', function () {
    const quizManager = new QuizManager();
});

document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('editButton');
    const form = document.getElementById('profileForm');
    const inputs = form.getElementsByTagName('input');
    const successMessage = document.getElementById('successMessage');
    let isEditing = false;

    editButton.addEventListener('click', function () {
        if (!isEditing) {
            // Enable editing
            Array.from(inputs).forEach(input => {
                input.disabled = false;
                input.classList.add('editing');
            });
            editButton.textContent = 'Save Changes';
            editButton.classList.add('saving');
        } else {
            // Save changes
            Array.from(inputs).forEach(input => {
                input.disabled = true;
                input.classList.remove('editing');
            });
            editButton.textContent = 'Edit Profile';
            editButton.classList.remove('saving');

            // Show success message
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
        isEditing = !isEditing;
    });
});