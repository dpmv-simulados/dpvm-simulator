// quiz.js - Atualizado para suportar todas as questões
let currentQuestions = [];
let userAnswers = [];
let currentQuestionIndex = 0;
let feedbackMode = 'instant';
let score = 0;
let timer = 0;
let timerInterval = null;
let markedQuestions = new Set();
let quizMode = 'random-40';
let customQuestionCount = 40;

// Elementos DOM
const quizModeSelect = document.getElementById('quiz-mode');
const customNumberGroup = document.getElementById('custom-number-group');
const customNumberInput = document.getElementById('custom-number');
const feedbackModeSelect = document.getElementById('feedback-mode');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const instructionsContainer = document.getElementById('instructions-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const questionCounter = document.getElementById('question-counter');
const progressFill = document.getElementById('progress-fill');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const timerDisplay = document.getElementById('timer');
const markBtn = document.getElementById('mark-btn');
const markedCount = document.getElementById('marked-count');
const markedQuestionsDiv = document.getElementById('marked-questions');
const scorePercentage = document.getElementById('score-percentage');
const scoreText = document.getElementById('score-text');
const scoreGrade = document.getElementById('score-grade');
const totalTime = document.getElementById('total-time');
const accuracyRate = document.getElementById('accuracy-rate');
const reviewCount = document.getElementById('review-count');
const testDate = document.getElementById('test-date');
const reviewBtn = document.getElementById('review-btn');
const restartBtn = document.getElementById('restart-btn');
const exportBtn = document.getElementById('export-btn');
const detailsSection = document.getElementById('details-section');
const questionsDetails = document.getElementById('questions-details');
const instructionsBtn = document.getElementById('instructions-btn');
const closeInstructionsBtn = document.getElementById('close-instructions-btn');
const allQuestionsWarning = document.getElementById('all-questions-warning');
const selectedQuestions = document.getElementById('selected-questions');
const estimatedTime = document.getElementById('estimated-time');

// Atualizar contador de questões selecionadas
function updateQuestionCount() {
    quizMode = quizModeSelect.value;
    
    if (quizMode === 'all-questions') {
        selectedQuestions.textContent = 'Questões selecionadas: 280';
        estimatedTime.textContent = 'Tempo estimado: 2-3 horas';
        allQuestionsWarning.style.display = 'block';
        customNumberGroup.style.display = 'none';
    } else if (quizMode === 'custom') {
        customNumberGroup.style.display = 'block';
        const count = parseInt(customNumberInput.value) || 40;
        selectedQuestions.textContent = `Questões selecionadas: ${count}`;
        estimatedTime.textContent = `Tempo estimado: ${Math.ceil(count * 0.75)}-${Math.ceil(count * 1.5)} minutos`;
        allQuestionsWarning.style.display = 'none';
    } else {
        selectedQuestions.textContent = 'Questões selecionadas: 40';
        estimatedTime.textContent = 'Tempo estimado: 20-30 minutos';
        allQuestionsWarning.style.display = 'none';
        customNumberGroup.style.display = 'none';
    }
}

// Event Listeners
quizModeSelect.addEventListener('change', updateQuestionCount);
customNumberInput.addEventListener('input', updateQuestionCount);
updateQuestionCount(); // Inicializar

// Iniciar quiz
startBtn.addEventListener('click', startQuiz);
instructionsBtn.addEventListener('click', () => {
    document.querySelector('.quiz-config').style.display = 'none';
    instructionsContainer.style.display = 'block';
});
closeInstructionsBtn.addEventListener('click', () => {
    instructionsContainer.style.display = 'none';
    document.querySelector('.quiz-config').style.display = 'block';
});

function startQuiz() {
    quizMode = quizModeSelect.value;
    feedbackMode = feedbackModeSelect.value;
    
    // Determinar número de questões
    let questionCount;
    if (quizMode === 'all-questions') {
        questionCount = allQuestions.length;
    } else if (quizMode === 'custom') {
        questionCount = Math.min(Math.max(1, parseInt(customNumberInput.value) || 40), allQuestions.length);
    } else {
        questionCount = 40;
    }
    
    // Selecionar questões
    if (quizMode === 'all-questions') {
        currentQuestions = [...allQuestions];
    } else {
        currentQuestions = [...allQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, questionCount);
    }
    
    // Inicializar arrays
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentQuestionIndex = 0;
    score = 0;
    timer = 0;
    markedQuestions.clear();
    
    // Mostrar quiz, esconder configuração
    document.querySelector('.quiz-config').style.display = 'none';
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    
    // Iniciar timer
    startTimer();
    
    // Carregar primeira questão
    loadQuestion();
    updateNavigation();
    updateStats();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer++;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;
    
    if (hours > 0) {
        timerDisplay.textContent = `⏱️ ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        timerDisplay.textContent = `⏱️ ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function loadQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    questionText.textContent = `${q.id}. ${q.question}`;
    
    // Atualizar contador e progresso
    questionCounter.textContent = `Questão ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    // Criar opções
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = `${String.fromCharCode(97 + index)}) ${option}`;
        optionDiv.dataset.index = index;
        
        // Verificar se já foi respondida
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Limpar feedback
    feedback.textContent = '';
    feedback.className = '';
    feedback.style.display = 'none';
    
    // Atualizar botão de marcação
    updateMarkButton();
}

function selectOption(selectedIndex) {
    userAnswers[currentQuestionIndex] = selectedIndex;
    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.correctAnswer;
    
    // Atualizar visual da opção selecionada
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    options[selectedIndex].classList.add('selected');
    
    // Feedback instantâneo
    if (feedbackMode === 'instant') {
        // Mostrar resposta correta
        options[q.correctAnswer].classList.add('correct');
        
        if (!isCorrect) {
            options[selectedIndex].classList.add('incorrect');
        }
        
        // Mostrar feedback
        feedback.textContent = isCorrect ? '✅ Resposta correta!' : '❌ Resposta incorreta.';
        feedback.className = isCorrect ? 'correct' : 'incorrect';
        feedback.style.display = 'block';
        
        // Atualizar pontuação imediatamente
        if (isCorrect) score++;
    }
    
    // Atualizar estatísticas
    updateStats();
    
    // Se for modo final, ir para próxima questão automaticamente
    if (feedbackMode === 'instant') {
        setTimeout(() => {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
                updateNavigation();
            } else {
                // Última questão
                submitBtn.style.display = 'block';
            }
        }, 1500);
    }
}

function updateStats() {
    let correct = 0;
    let incorrect = 0;
    
    if (feedbackMode === 'instant') {
        correct = score;
        incorrect = currentQuestionIndex - score;
    } else {
        // No modo final, contar apenas as respondidas
        for (let i = 0; i <= currentQuestionIndex; i++) {
            if (userAnswers[i] !== null) {
                const isCorrect = userAnswers[i] === currentQuestions[i].correctAnswer;
                if (isCorrect) correct++;
                else incorrect++;
            }
        }
    }
    
    correctCount.textContent = `✅ ${correct}`;
    incorrectCount.textContent = `❌ ${incorrect}`;
    
    // Atualizar contador de questões marcadas
    const marked = markedQuestions.size;
    markedCount.textContent = marked;
    if (marked > 0) {
        markedQuestionsDiv.style.display = 'block';
    } else {
        markedQuestionsDiv.style.display = 'none';
    }
}

function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;
    submitBtn.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'block' : 'none';
}

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        updateNavigation();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        updateNavigation();
    }
});

// Marcar questão para revisão
markBtn.addEventListener('click', () => {
    if (markedQuestions.has(currentQuestionIndex)) {
        markedQuestions.delete(currentQuestionIndex);
        markBtn.textContent = '🚩 Marcar para Revisão';
    } else {
        markedQuestions.add(currentQuestionIndex);
        markBtn.textContent = '✅ Questão Marcada';
    }
    updateStats();
});

function updateMarkButton() {
    if (markedQuestions.has(currentQuestionIndex)) {
        markBtn.textContent = '✅ Questão Marcada';
    } else {
        markBtn.textContent = '🚩 Marcar para Revisão';
    }
}

// Finalizar prova
submitBtn.addEventListener('click', showResults);

function showResults() {
    // Parar timer
    if (timerInterval) clearInterval(timerInterval);
    
    // Calcular pontuação
    score = 0;
    let detailsHTML = '<ol>';
    
    currentQuestions.forEach((q, idx) => {
        const userAnswer = userAnswers[idx];
        const isCorrect = userAnswer === q.correctAnswer;
        if (isCorrect) score++;
        
        const answerText = userAnswer !== null ? 
            `${String.fromCharCode(97 + userAnswer)}. ${q.options[userAnswer]}` : 
            'Não respondida';
        
        const correctText = `${String.fromCharCode(97 + q.correctAnswer)}. ${q.options[q.correctAnswer]}`;
        
        detailsHTML += `
            <li style="margin: 15px 0; padding: 10px; border-radius: 5px; background: ${isCorrect ? '#d4edda' : '#f8d7da'}">
                <strong>Questão ${q.id}:</strong> ${isCorrect ? '✅' : '❌'}<br>
                <small>Sua resposta: ${answerText}</small><br>
                <small>Resposta correta: ${correctText}</small>
            </li>`;
    });
    
    detailsHTML += '</ol>';
    
    const percentage = (score / currentQuestions.length) * 100;
    
    // Atualizar resultados
    scorePercentage.textContent = `${percentage.toFixed(1)}%`;
    scoreText.textContent = `Você acertou ${score} de ${currentQuestions.length} questões`;
    
    // Classificação
    let grade = '';
    if (percentage >= 90) grade = 'Excelente 🏆';
    else if (percentage >= 70) grade = 'Bom 👍';
    else if (percentage >= 50) grade = 'Satisfatório 👌';
    else grade = 'Precisa estudar mais 📚';
    
    scoreGrade.textContent = `Classificação: ${grade}`;
    
    // Tempo total
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;
    
    if (hours > 0) {
        totalTime.textContent = `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
        totalTime.textContent = `${minutes}m ${seconds}s`;
    } else {
        totalTime.textContent = `${seconds}s`;
    }
    
    // Taxa de acerto
    accuracyRate.textContent = `${percentage.toFixed(1)}%`;
    
    // Questões para revisão
    reviewCount.textContent = markedQuestions.size;
    
    // Data
    const now = new Date();
    testDate.textContent = now.toLocaleDateString('pt-BR');
    
    // Detalhes
    questionsDetails.innerHTML = detailsHTML;
    
    // Mostrar resultados
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// Botões de resultado
reviewBtn.addEventListener('click', () => {
    detailsSection.style.display = detailsSection.style.display === 'none' ? 'block' : 'none';
});

restartBtn.addEventListener('click', () => {
    resultContainer.style.display = 'none';
    document.querySelector('.quiz-config').style.display = 'block';
    updateQuestionCount();
});

exportBtn.addEventListener('click', () => {
    const result = {
        date: new Date().toISOString(),
        mode: quizMode,
        totalQuestions: currentQuestions.length,
        score: score,
        percentage: (score / currentQuestions.length * 100).toFixed(1),
        time: timer,
        markedQuestions: Array.from(markedQuestions)
    };
    
    const dataStr = JSON.stringify(result, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `dpvm-result-${new Date().toISOString().slice(0,10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
});

// Pausar prova
document.getElementById('pause-btn').addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById('pause-btn').textContent = '▶️ Continuar';
        alert('Prova pausada. Clique em Continuar para retomar.');
    } else {
        startTimer();
        document.getElementById('pause-btn').textContent = '⏸️ Pausar';
    }
});