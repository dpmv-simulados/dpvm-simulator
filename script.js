// script.js - Lógica principal do simulador DPVM
document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const screens = {
        login: document.getElementById('login-screen'),
        test: document.getElementById('test-screen'),
        results: document.getElementById('results-screen'),
        history: document.getElementById('history-screen')
    };
    
    // Elementos da tela de login
    const userNameInput = document.getElementById('user-name');
    const startTestBtn = document.getElementById('start-test-btn');
    const viewHistoryBtn = document.getElementById('view-history-btn');
    
    // Elementos da tela de teste
    const currentUserSpan = document.getElementById('current-user');
    const exitTestBtn = document.getElementById('exit-test-btn');
    const currentQuestionNum = document.getElementById('current-question-num');
    const totalQuestions = document.getElementById('total-questions');
    const progressFill = document.getElementById('progress-fill');
    const progressPercent = document.getElementById('progress-percent');
    const correctCount = document.getElementById('correct-count');
    const wrongCount = document.getElementById('wrong-count');
    const currentPercent = document.getElementById('current-percent');
    const questionId = document.getElementById('question-id');
    const questionTopic = document.getElementById('question-topic');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const answerFeedback = document.getElementById('answer-feedback');
    const prevQuestionBtn = document.getElementById('prev-question-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const finishTestBtn = document.getElementById('finish-test-btn');
    
    // Elementos da tela de resultados
    const resultsUserName = document.getElementById('results-user-name');
    const passCard = document.getElementById('pass-card');
    const failCard = document.getElementById('fail-card');
    const finalScorePass = document.getElementById('final-score-pass');
    const finalScoreFail = document.getElementById('final-score-fail');
    const detailTotal = document.getElementById('detail-total');
    const detailCorrect = document.getElementById('detail-correct');
    const detailWrong = document.getElementById('detail-wrong');
    const detailPercent = document.getElementById('detail-percent');
    const detailDatetime = document.getElementById('detail-datetime');
    const wrongQuestionsContainer = document.getElementById('wrong-questions-container');
    const wrongQuestionsList = document.getElementById('wrong-questions-list');
    const newTestBtn = document.getElementById('new-test-btn');
    const reviewQuestionsBtn = document.getElementById('review-questions-btn');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    
    // Elementos da tela de histórico
    const backFromHistoryBtn = document.getElementById('back-from-history-btn');
    const historySearch = document.getElementById('history-search');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const totalTests = document.getElementById('total-tests');
    const passRate = document.getElementById('pass-rate');
    const bestScore = document.getElementById('best-score');
    const historyTableBody = document.getElementById('history-table-body');
    const noHistoryMessage = document.getElementById('no-history-message');
    
    // Instâncias de gerenciamento
    const resultsManager = new ResultsManager();
    
    // Estado da aplicação
    let currentTest = {
        questions: [],
        currentQuestionIndex: 0,
        userAnswers: [],
        correctAnswers: 0,
        wrongAnswers: 0,
        completed: false,
        userName: ''
    };
    
    // Inicialização
    init();
    
    function init() {
        // Verificar se há usuário atual
        const currentUser = resultsManager.getCurrentUser();
        if (currentUser) {
            userNameInput.value = currentUser;
        }
        
        // Configurar event listeners
        setupEventListeners();
        
        // Mostrar tela de login
        showScreen('login');
    }
    
    function setupEventListeners() {
        // Tela de login
        startTestBtn.addEventListener('click', startNewTest);
        viewHistoryBtn.addEventListener('click', showHistory);
        
        // Tela de teste
        exitTestBtn.addEventListener('click', exitTest);
        prevQuestionBtn.addEventListener('click', showPreviousQuestion);
        nextQuestionBtn.addEventListener('click', showNextQuestion);
        finishTestBtn.addEventListener('click', finishTest);
        
        // Tela de resultados
        newTestBtn.addEventListener('click', startNewTestFromResults);
        reviewQuestionsBtn.addEventListener('click', reviewWrongQuestions);
        backToHomeBtn.addEventListener('click', backToHome);
        
        // Tela de histórico
        backFromHistoryBtn.addEventListener('click', backToHomeFromHistory);
        clearHistoryBtn.addEventListener('click', clearHistory);
        historySearch.addEventListener('input', filterHistory);
        
        // Permitir pressionar Enter no campo de nome
        userNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                startNewTest();
            }
        });
    }
    
    // Funções de navegação entre telas
    function showScreen(screenName) {
        // Esconder todas as telas
        Object.values(screens).forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Mostrar tela solicitada
        screens[screenName].classList.add('active');
    }
    
    // Iniciar novo teste
    function startNewTest() {
        const userName = userNameInput.value.trim();
        
        if (!userName) {
            alert('Por favor, digite seu nome antes de iniciar o teste.');
            userNameInput.focus();
            return;
        }
        
        // Salvar usuário atual
        resultsManager.saveCurrentUser(userName);
        
        // Limpar questões usadas anteriormente
        resultsManager.clearUsedQuestions(userName);
        
        // Preparar novo teste
        prepareNewTest(userName);
        
        // Mostrar tela de teste
        showScreen('test');
    }
    
    function prepareNewTest(userName) {
        // Resetar estado do teste
        currentTest = {
            questions: [],
            currentQuestionIndex: 0,
            userAnswers: [],
            correctAnswers: 0,
            wrongAnswers: 0,
            completed: false,
            userName: userName
        };
        
        // Obter questões para o teste
        currentTest.questions = selectQuestionsForTest(userName);
        
        // Inicializar array de respostas
        currentTest.userAnswers = new Array(currentTest.questions.length).fill(null);
        
        // Atualizar interface
        currentUserSpan.textContent = `Usuário: ${userName}`;
        totalQuestions.textContent = currentTest.questions.length;
        
        // Mostrar primeira questão
        displayCurrentQuestion();
        updateProgress();
    }
    
    function selectQuestionsForTest(userName) {
        const testSize = 40; // 40 questões por simulado
        const selectedQuestions = [];
        
        // Obter questões erradas anteriores
        const wrongQuestions = resultsManager.getWrongQuestions(userName);
        const wrongQuestionIds = wrongQuestions.map(q => q.questionId);
        
        // Obter questões já usadas
        const usedQuestionIds = resultsManager.getUsedQuestions(userName);
        
        // Selecionar questões erradas primeiro (máximo 10)
        const wrongQuestionsToInclude = Math.min(wrongQuestions.length, 10);
        
        if (wrongQuestionsToInclude > 0) {
            // Selecionar aleatoriamente entre as questões erradas
            const shuffledWrong = [...wrongQuestions].sort(() => Math.random() - 0.5);
            
            for (let i = 0; i < wrongQuestionsToInclude && i < shuffledWrong.length; i++) {
                const wrongQuestion = allQuestions.find(q => q.id === shuffledWrong[i].questionId);
                if (wrongQuestion && !selectedQuestions.some(q => q.id === wrongQuestion.id)) {
                    selectedQuestions.push(wrongQuestion);
                }
            }
        }
        
        // Organizar questões por tópico para garantir variedade
        const questionsByTopicCopy = JSON.parse(JSON.stringify(questionsByTopic));
        const topics = Object.keys(questionsByTopicCopy);
        
        // Calcular quantas questões por tópico (aproximadamente)
        const questionsPerTopic = Math.ceil((testSize - selectedQuestions.length) / topics.length);
        
        // Selecionar questões de cada tópico
        for (const topic of topics) {
            // Filtrar questões não usadas e não selecionadas
            const availableQuestions = questionsByTopicCopy[topic].filter(q => 
                !usedQuestionIds.includes(q.id) && 
                !selectedQuestions.some(sq => sq.id === q.id) &&
                !wrongQuestionIds.includes(q.id)
            );
            
            // Selecionar aleatoriamente questões deste tópico
            const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
            const questionsToTake = Math.min(questionsPerTopic, shuffled.length);
            
            for (let i = 0; i < questionsToTake && selectedQuestions.length < testSize; i++) {
                selectedQuestions.push(shuffled[i]);
            }
        }
        
        // Se ainda não temos questões suficientes, adicionar aleatórias
        if (selectedQuestions.length < testSize) {
            const allAvailableQuestions = allQuestions.filter(q => 
                !usedQuestionIds.includes(q.id) && 
                !selectedQuestions.some(sq => sq.id === q.id)
            );
            
            const shuffledAll = [...allAvailableQuestions].sort(() => Math.random() - 0.5);
            const needed = testSize - selectedQuestions.length;
            
            for (let i = 0; i < needed && i < shuffledAll.length; i++) {
                selectedQuestions.push(shuffledAll[i]);
            }
        }
        
        // Embaralhar a ordem final das questões
        return selectedQuestions.sort(() => Math.random() - 0.5);
    }
    
    function displayCurrentQuestion() {
        const question = currentTest.questions[currentTest.currentQuestionIndex];
        const userAnswer = currentTest.userAnswers[currentTest.currentQuestionIndex];
        
        // Atualizar informações da questão
        questionId.textContent = `Q${currentTest.currentQuestionIndex + 1}`;
        questionTopic.textContent = question.topic || "Geral";
        questionText.textContent = question.question;
        
        // Atualizar número da questão
        currentQuestionNum.textContent = currentTest.currentQuestionIndex + 1;
        
        // Limpar opções anteriores
        optionsContainer.innerHTML = '';
        
        // Criar opções
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            
            // Verificar se esta opção foi selecionada
            if (userAnswer !== null && userAnswer.answerIndex === index) {
                optionElement.classList.add('selected');
                
                // Se a questão já foi respondida, mostrar se está correta ou errada
                if (userAnswer.answered) {
                    if (userAnswer.isCorrect) {
                        optionElement.classList.add('correct');
                    } else {
                        optionElement.classList.add('incorrect');
                        
                        // Destacar a resposta correta
                        const correctOption = document.createElement('div');
                        correctOption.className = 'option';
                        correctOption.classList.add('correct');
                        correctOption.innerHTML = `
                            <div class="option-letter">${String.fromCharCode(65 + question.correctAnswer)}</div>
                            <div class="option-text">${question.options[question.correctAnswer]}</div>
                        `;
                        optionElement.parentNode.insertBefore(correctOption, optionElement.nextSibling);
                    }
                }
            }
            
            // Se a questão já foi respondida, desabilitar clique
            if (userAnswer !== null && userAnswer.answered) {
                optionElement.classList.add('disabled');
            }
            
            optionElement.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;
            
            // Adicionar evento de clique
            if (!(userAnswer !== null && userAnswer.answered)) {
                optionElement.addEventListener('click', () => selectOption(index));
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Mostrar feedback se a questão já foi respondida
        if (userAnswer !== null && userAnswer.answered) {
            showAnswerFeedback(question, userAnswer.isCorrect);
        } else {
            answerFeedback.style.display = 'none';
            answerFeedback.className = 'answer-feedback';
        }
        
        // Atualizar botões de navegação
        prevQuestionBtn.disabled = currentTest.currentQuestionIndex === 0;
        
        // Se for a última questão, mudar texto do botão "Próxima"
        if (currentTest.currentQuestionIndex === currentTest.questions.length - 1) {
            nextQuestionBtn.textContent = 'Finalizar';
            nextQuestionBtn.innerHTML = 'Finalizar <i class="fas fa-flag-checkered"></i>';
        } else {
            nextQuestionBtn.textContent = 'Próxima';
            nextQuestionBtn.innerHTML = 'Próxima <i class="fas fa-arrow-right"></i>';
        }
    }
    
    function selectOption(optionIndex) {
        const question = currentTest.questions[currentTest.currentQuestionIndex];
        const isCorrect = optionIndex === question.correctAnswer;
        
        // Registrar resposta do usuário
        currentTest.userAnswers[currentTest.currentQuestionIndex] = {
            answerIndex: optionIndex,
            answered: true,
            isCorrect: isCorrect
        };
        
        // Atualizar contadores
        if (isCorrect) {
            currentTest.correctAnswers++;
        } else {
            currentTest.wrongAnswers++;
        }
        
        // Mostrar feedback
        showAnswerFeedback(question, isCorrect);
        
        // Atualizar interface
        updateProgress();
        displayCurrentQuestion();
    }
    
    function showAnswerFeedback(question, isCorrect) {
        answerFeedback.style.display = 'block';
        answerFeedback.className = `answer-feedback feedback-${isCorrect ? 'correct' : 'incorrect'}`;
        
        const icon = isCorrect ? 'fa-check-circle' : 'fa-times-circle';
        const title = isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta';
        
        answerFeedback.innerHTML = `
            <div class="feedback-title">
                <i class="fas ${icon}"></i>
                <span>${title}</span>
            </div>
            <div class="feedback-explanation">${question.explanation}</div>
        `;
    }
    
    function updateProgress() {
        const total = currentTest.questions.length;
        const answered = currentTest.userAnswers.filter(a => a !== null && a.answered).length;
        const percent = Math.round((answered / total) * 100);
        
        // Atualizar barra de progresso
        progressFill.style.width = `${percent}%`;
        progressPercent.textContent = `${percent}%`;
        
        // Atualizar contadores
        correctCount.textContent = currentTest.correctAnswers;
        wrongCount.textContent = currentTest.wrongAnswers;
        
        // Calcular porcentagem atual
        const totalAnswered = currentTest.correctAnswers + currentTest.wrongAnswers;
        const currentPercentValue = totalAnswered > 0 ? 
            Math.round((currentTest.correctAnswers / totalAnswered) * 100) : 0;
        
        currentPercent.textContent = `${currentPercentValue}%`;
    }
    
    function showPreviousQuestion() {
        if (currentTest.currentQuestionIndex > 0) {
            currentTest.currentQuestionIndex--;
            displayCurrentQuestion();
        }
    }
    
    function showNextQuestion() {
        // Se for a última questão, finalizar teste
        if (currentTest.currentQuestionIndex === currentTest.questions.length - 1) {
            finishTest();
            return;
        }
        
        currentTest.currentQuestionIndex++;
        displayCurrentQuestion();
    }
    
    function finishTest() {
        // Verificar se todas as questões foram respondidas
        const unanswered = currentTest.userAnswers.filter(a => a === null || !a.answered).length;
        
        if (unanswered > 0) {
            const confirmFinish = confirm(`Você tem ${unanswered} questão(ões) não respondida(s). Deseja finalizar mesmo assim?`);
            if (!confirmFinish) {
                return;
            }
        }
        
        // Marcar teste como concluído
        currentTest.completed = true;
        
        // Calcular resultados finais
        const totalQuestions = currentTest.questions.length;
        const correctAnswers = currentTest.correctAnswers;
        const wrongAnswers = currentTest.wrongAnswers;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const passed = percentage >= 70;
        
        // Identificar questões erradas
        const wrongQuestions = [];
        currentTest.userAnswers.forEach((answer, index) => {
            if (answer && !answer.isCorrect) {
                wrongQuestions.push(currentTest.questions[index]);
            }
        });
        
        // Salvar questões usadas
        const usedQuestionIds = currentTest.questions.map(q => q.id);
        resultsManager.saveUsedQuestions(currentTest.userName, usedQuestionIds);
        
        // Salvar questões erradas
        if (wrongQuestions.length > 0) {
            resultsManager.saveWrongQuestions(currentTest.userName, wrongQuestions);
        }
        
        // Salvar resultado do teste
        const testResult = {
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers,
            percentage: percentage,
            passed: passed,
            wrongQuestions: wrongQuestions
        };
        
        resultsManager.saveTestResult(currentTest.userName, testResult);
        
        // Mostrar tela de resultados
        showResults(testResult);
    }
    
    function showResults(result) {
        // Atualizar informações do usuário
        resultsUserName.textContent = currentTest.userName;
        
        // Mostrar/ocultar cartões de aprovação/reprovação
        if (result.passed) {
            passCard.style.display = 'block';
            failCard.style.display = 'none';
            finalScorePass.textContent = `${result.percentage}%`;
        } else {
            passCard.style.display = 'none';
            failCard.style.display = 'block';
            finalScoreFail.textContent = `${result.percentage}%`;
        }
        
        // Atualizar detalhes
        detailTotal.textContent = result.totalQuestions;
        detailCorrect.textContent = result.correctAnswers;
        detailWrong.textContent = result.wrongAnswers;
        detailPercent.textContent = `${result.percentage}%`;
        detailDatetime.textContent = new Date().toLocaleString('pt-BR');
        
        // Mostrar questões erradas
        if (result.wrongQuestions.length > 0) {
            wrongQuestionsContainer.style.display = 'block';
            wrongQuestionsList.innerHTML = '';
            
            result.wrongQuestions.forEach((question, index) => {
                const questionItem = document.createElement('div');
                questionItem.className = 'wrong-question-item';
                questionItem.innerHTML = `
                    <strong>Q${index + 1}:</strong> ${question.question}
                `;
                wrongQuestionsList.appendChild(questionItem);
            });
        } else {
            wrongQuestionsContainer.style.display = 'none';
        }
        
        // Mostrar tela de resultados
        showScreen('results');
    }
    
    function startNewTestFromResults() {
        startNewTest();
    }
    
    function reviewWrongQuestions() {
        // Navegar de volta para a tela de login
        showScreen('login');
        
        // Aqui poderíamos implementar um modo de revisão específico
        alert('Modo de revisão será implementado em uma versão futura.');
    }
    
    function backToHome() {
        showScreen('login');
    }
    
    function exitTest() {
        const confirmExit = confirm('Deseja realmente sair do teste? Seu progresso será perdido.');
        if (confirmExit) {
            showScreen('login');
        }
    }
    
    function showHistory() {
        // Carregar histórico
        loadHistory();
        
        // Mostrar tela de histórico
        showScreen('history');
    }
    
    function loadHistory() {
        const results = resultsManager.getAllResults();
        
        // Atualizar estatísticas
        const stats = resultsManager.getStatistics();
        totalTests.textContent = stats.totalTests;
        passRate.textContent = `${stats.passRate}%`;
        bestScore.textContent = `${stats.bestScore}%`;
        
        // Atualizar tabela
        if (results.length === 0) {
            historyTableBody.innerHTML = '';
            noHistoryMessage.style.display = 'block';
            return;
        }
        
        noHistoryMessage.style.display = 'none';
        historyTableBody.innerHTML = '';
        
        results.forEach(result => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.userName}</td>
                <td>${result.dateTime}</td>
                <td>${result.totalQuestions}</td>
                <td>${result.correctAnswers}</td>
                <td>${result.percentage}%</td>
                <td class="${result.passed ? 'status-approved' : 'status-failed'}">
                    ${result.passed ? 'Aprovado' : 'Reprovado'}
                </td>
            `;
            historyTableBody.appendChild(row);
        });
    }
    
    function filterHistory() {
        const searchTerm = historySearch.value.trim();
        const filteredResults = resultsManager.filterResults(searchTerm);
        
        // Atualizar tabela com resultados filtrados
        if (filteredResults.length === 0) {
            historyTableBody.innerHTML = '';
            noHistoryMessage.style.display = 'block';
            return;
        }
        
        noHistoryMessage.style.display = 'none';
        historyTableBody.innerHTML = '';
        
        filteredResults.forEach(result => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.userName}</td>
                <td>${result.dateTime}</td>
                <td>${result.totalQuestions}</td>
                <td>${result.correctAnswers}</td>
                <td>${result.percentage}%</td>
                <td class="${result.passed ? 'status-approved' : 'status-failed'}">
                    ${result.passed ? 'Aprovado' : 'Reprovado'}
                </td>
            `;
            historyTableBody.appendChild(row);
        });
    }
    
    function clearHistory() {
        const confirmClear = confirm('Tem certeza que deseja limpar todo o histórico? Esta ação não pode ser desfeita.');
        if (confirmClear) {
            resultsManager.clearAllHistory();
            loadHistory();
        }
    }
    
    function backToHomeFromHistory() {
        showScreen('login');
    }
    
    // Nota: Para uma implementação completa, todas as 280 questões devem ser incluídas
    // no arquivo questions.js. Esta demonstração usa apenas um subconjunto.
});
