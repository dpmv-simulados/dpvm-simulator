// results.js - Gerenciamento de histórico de resultados
class ResultsManager {
    constructor() {
        this.resultsKey = 'dpvm_test_results';
        this.userResultsKey = 'dpvm_user_results';
        this.wrongQuestionsKey = 'dpvm_wrong_questions';
        this.usedQuestionsKey = 'dpvm_used_questions';
        this.currentUserKey = 'dpvm_current_user';
    }

    // Salvar resultado de teste
    saveTestResult(userName, result) {
        const results = this.getAllResults();
        const userResults = this.getUserResults(userName);
        
        const testResult = {
            id: Date.now(),
            userName: userName,
            dateTime: new Date().toLocaleString('pt-BR'),
            totalQuestions: result.totalQuestions,
            correctAnswers: result.correctAnswers,
            wrongAnswers: result.wrongAnswers,
            percentage: result.percentage,
            passed: result.passed,
            wrongQuestions: result.wrongQuestions
        };
        
        results.push(testResult);
        userResults.push(testResult);
        
        // Salvar no localStorage
        localStorage.setItem(this.resultsKey, JSON.stringify(results));
        localStorage.setItem(this.userResultsKey, JSON.stringify(userResults));
        
        return testResult;
    }

    // Obter todos os resultados
    getAllResults() {
        const results = localStorage.getItem(this.resultsKey);
        return results ? JSON.parse(results) : [];
    }

    // Obter resultados do usuário
    getUserResults(userName) {
        const allResults = this.getAllResults();
        return allResults.filter(result => result.userName === userName);
    }

    // Salvar questões erradas para repetição
    saveWrongQuestions(userName, wrongQuestions) {
        const allWrongQuestions = this.getWrongQuestions();
        
        // Adicionar ou atualizar questões erradas
        wrongQuestions.forEach(question => {
            const existingIndex = allWrongQuestions.findIndex(
                q => q.userName === userName && q.questionId === question.id
            );
            
            if (existingIndex === -1) {
                allWrongQuestions.push({
                    userName: userName,
                    questionId: question.id,
                    topic: question.topic,
                    question: question.question,
                    attempts: 1,
                    lastAttempt: new Date().toISOString()
                });
            } else {
                allWrongQuestions[existingIndex].attempts++;
                allWrongQuestions[existingIndex].lastAttempt = new Date().toISOString();
            }
        });
        
        localStorage.setItem(this.wrongQuestionsKey, JSON.stringify(allWrongQuestions));
    }

    // Obter questões erradas do usuário
    getWrongQuestions(userName) {
        const allWrongQuestions = localStorage.getItem(this.wrongQuestionsKey);
        const wrongQuestions = allWrongQuestions ? JSON.parse(allWrongQuestions) : [];
        
        if (userName) {
            return wrongQuestions.filter(q => q.userName === userName);
        }
        
        return wrongQuestions;
    }

    // Marcar questão como acertada (remover da lista de erradas)
    markQuestionAsCorrect(userName, questionId) {
        const wrongQuestions = this.getWrongQuestions();
        const updatedWrongQuestions = wrongQuestions.filter(
            q => !(q.userName === userName && q.questionId === questionId)
        );
        
        localStorage.setItem(this.wrongQuestionsKey, JSON.stringify(updatedWrongQuestions));
    }

    // Rastrear questões usadas
    saveUsedQuestions(userName, questionIds) {
        const usedQuestions = this.getUsedQuestions(userName);
        const newUsedQuestions = [...new Set([...usedQuestions, ...questionIds])];
        
        const allUsedQuestions = this.getAllUsedQuestions();
        allUsedQuestions[userName] = newUsedQuestions;
        
        localStorage.setItem(this.usedQuestionsKey, JSON.stringify(allUsedQuestions));
    }

    // Obter questões usadas pelo usuário
    getUsedQuestions(userName) {
        const allUsedQuestions = this.getAllUsedQuestions();
        return allUsedQuestions[userName] || [];
    }

    // Obter todas as questões usadas
    getAllUsedQuestions() {
        const usedQuestions = localStorage.getItem(this.usedQuestionsKey);
        return usedQuestions ? JSON.parse(usedQuestions) : {};
    }

    // Limpar histórico de questões usadas (para novo teste)
    clearUsedQuestions(userName) {
        const allUsedQuestions = this.getAllUsedQuestions();
        delete allUsedQuestions[userName];
        localStorage.setItem(this.usedQuestionsKey, JSON.stringify(allUsedQuestions));
    }

    // Salvar usuário atual
    saveCurrentUser(userName) {
        localStorage.setItem(this.currentUserKey, userName);
    }

    // Obter usuário atual
    getCurrentUser() {
        return localStorage.getItem(this.currentUserKey);
    }

    // Limpar histórico completo
    clearAllHistory() {
        localStorage.removeItem(this.resultsKey);
        localStorage.removeItem(this.userResultsKey);
        localStorage.removeItem(this.wrongQuestionsKey);
        localStorage.removeItem(this.usedQuestionsKey);
        localStorage.removeItem(this.currentUserKey);
    }

    // Obter estatísticas
    getStatistics(userName = null) {
        const results = userName ? this.getUserResults(userName) : this.getAllResults();
        
        if (results.length === 0) {
            return {
                totalTests: 0,
                passedTests: 0,
                passRate: 0,
                averageScore: 0,
                bestScore: 0,
                totalQuestionsAnswered: 0
            };
        }
        
        const passedTests = results.filter(r => r.passed).length;
        const totalScore = results.reduce((sum, r) => sum + r.percentage, 0);
        const bestScore = Math.max(...results.map(r => r.percentage));
        const totalQuestions = results.reduce((sum, r) => sum + r.totalQuestions, 0);
        
        return {
            totalTests: results.length,
            passedTests: passedTests,
            passRate: Math.round((passedTests / results.length) * 100),
            averageScore: Math.round(totalScore / results.length),
            bestScore: Math.round(bestScore),
            totalQuestionsAnswered: totalQuestions
        };
    }

    // Filtrar resultados
    filterResults(searchTerm) {
        const results = this.getAllResults();
        
        if (!searchTerm) return results;
        
        const term = searchTerm.toLowerCase();
        return results.filter(result => 
            result.userName.toLowerCase().includes(term) ||
            result.dateTime.toLowerCase().includes(term) ||
            result.percentage.toString().includes(term)
        );
    }
}