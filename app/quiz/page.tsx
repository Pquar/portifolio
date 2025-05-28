'use client'

import { useState, useEffect } from 'react'
import { genPageMetadata } from 'app/seo'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import type { QuizQuestion, QuizResult, QuizState } from '~/types/quiz'
import quizData from '~/json/quiz.json'

export default function QuizPage() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    startTime: 0,
    timePerQuestion: 180, // 3 minutos por padrão
    isFinished: false,
    selectedTags: []
  })
  
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [timeLeft, setTimeLeft] = useState<number>(180)
  const [questionStartTime, setQuestionStartTime] = useState<number>(0)
  const [showResults, setShowResults] = useState<boolean>(false)
  const [isStarted, setIsStarted] = useState<boolean>(false)
  const [timeLimit, setTimeLimit] = useState<number>(180) // 3 minutos em segundos
  const [hasTimeLimit, setHasTimeLimit] = useState<boolean>(true)
  const [maxQuestions, setMaxQuestions] = useState<number>(10) // Máximo de perguntas

  // Filtrar e embaralhar perguntas com base nas tags selecionadas
  const getFilteredQuestions = (selectedTags: string[]): QuizQuestion[] => {
    let filtered = quizData as QuizQuestion[]
    
    if (selectedTags.length > 0) {
      filtered = filtered.filter(question => 
        question.tags.some(tag => selectedTags.includes(tag))
      )
    }
    
    // Embaralhar perguntas
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)
    
    // Limitar o número de perguntas se especificado
    const limitedQuestions = maxQuestions > 0 && maxQuestions < shuffled.length 
      ? shuffled.slice(0, maxQuestions) 
      : shuffled
    
    // Embaralhar opções de cada pergunta
    return limitedQuestions.map(question => ({
      ...question,
      options: [...question.options].sort(() => Math.random() - 0.5)
    }))
  }

  // Obter todas as tags únicas
  const getAllTags = (): string[] => {
    const allTags = (quizData as QuizQuestion[]).flatMap(q => q.tags)
    return [...new Set(allTags)].sort()
  }

  // Iniciar o quiz
  const startQuiz = () => {
    const questions = getFilteredQuestions(quizState.selectedTags)
    const now = Date.now()
    
    setQuizState(prev => ({
      ...prev,
      questions,
      startTime: now,
      currentQuestionIndex: 0,
      answers: [],
      isFinished: false
    }))
    
    setQuestionStartTime(now)
    setTimeLeft(hasTimeLimit ? timeLimit : 0)
    setSelectedAnswer('')
    setIsStarted(true)
  }

  // Reiniciar o quiz
  const resetQuiz = () => {
    setIsStarted(false)
    setShowResults(false)
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: 0,
      answers: [],
      isFinished: false,
      selectedTags: []
    }))
    setMaxQuestions(10) // Reset para o padrão
    setTimeLimit(180) // Reset para o padrão
    setHasTimeLimit(true) // Reset para o padrão
  }

  // Timer para cada pergunta
  useEffect(() => {
    if (!isStarted || quizState.isFinished || showResults || !hasTimeLimit) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNextQuestion()
          return timeLimit
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isStarted, quizState.isFinished, showResults, quizState.currentQuestionIndex, hasTimeLimit, timeLimit])

  // Próxima pergunta
  const handleNextQuestion = () => {
    const timeSpent = Date.now() - questionStartTime
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    const isCorrect = selectedAnswer === currentQuestion.awser

    const newAnswer: QuizResult = {
      questionIndex: quizState.currentQuestionIndex,
      selectedAnswer,
      isCorrect,
      timeSpent
    }

    const newAnswers = [...quizState.answers, newAnswer]

    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        answers: newAnswers
      }))
      setSelectedAnswer('')
      setTimeLeft(hasTimeLimit ? timeLimit : 0)
      setQuestionStartTime(Date.now())
    } else {
      setQuizState(prev => ({
        ...prev,
        answers: newAnswers,
        isFinished: true
      }))
      setShowResults(true)
    }
  }

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setQuizState(prev => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter(t => t !== tag)
        : [...prev.selectedTags, tag]
    }))
  }

  // Calcular resultados
  const calculateResults = () => {
    const correctAnswers = quizState.answers.filter(a => a.isCorrect).length
    const totalQuestions = quizState.answers.length
    const percentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0
    const totalTime = quizState.answers.reduce((sum, a) => sum + a.timeSpent, 0)
    
    return {
      correctAnswers,
      totalQuestions,
      percentage,
      totalTime: Math.round(totalTime / 1000)
    }
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
  const allTags = getAllTags()
  const results = calculateResults()

  // Página de configuração inicial
  if (!isStarted) {
    return (
      <Container className="pt-4 lg:pt-12">
        <PageHeader
          title="Quiz - Desenvolvedor Full Stack"
          description="Teste seus conhecimentos sobre desenvolvimento web, DNS, HTTP, APIs e muito mais!"
          className="border-b border-gray-200 dark:border-gray-700"
        />
        
        <div className="py-8 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Configurações do Quiz
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-gray-100">
                Filtrar por tags (opcional):
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      quizState.selectedTags.includes(tag)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              {quizState.selectedTags.length > 0 && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {getFilteredQuestions(quizState.selectedTags).length} pergunta(s) selecionada(s)
                </p>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-gray-100">
                Número de Perguntas:
              </h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Máximo de perguntas:
                  </label>
                  <div className="flex items-center space-x-3">
                    <select
                      value={maxQuestions}
                      onChange={(e) => setMaxQuestions(Number(e.target.value))}
                      className="w-40 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option value={0}>Todas as perguntas</option>
                      <option value={5}>5 perguntas</option>
                      <option value={10}>10 perguntas</option>
                      <option value={25}>25 perguntas</option>
                      <option value={45}>45 perguntas</option>
                      <option value={90}>90 perguntas</option>
                    </select>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {(() => {
                        const available = quizState.selectedTags.length > 0 
                          ? (quizData as QuizQuestion[]).filter(q => q.tags.some(tag => quizState.selectedTags.includes(tag))).length
                          : quizData.length;
                        const final = maxQuestions === 0 ? available : Math.min(maxQuestions, available);
                        return `(${final} pergunta${final !== 1 ? 's' : ''} será${final !== 1 ? 'o' : ''} apresentada${final !== 1 ? 's' : ''})`;
                      })()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-gray-100">
                Configuração de Tempo:
              </h3>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={hasTimeLimit}
                    onChange={(e) => setHasTimeLimit(e.target.checked)}
                    className="mr-2 h-4 w-4 text-blue-600 rounded"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Ativar limite de tempo por questão
                  </span>
                </label>
                
                {hasTimeLimit && (
                  <div className="ml-6 space-y-2">
                    <label className="block text-sm text-gray-600 dark:text-gray-400">
                      Tempo limite (segundos):
                    </label>
                    <select
                      value={timeLimit}
                      onChange={(e) => setTimeLimit(Number(e.target.value))}
                      className="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      <option value={30}>30 segundos</option>
                      <option value={60}>1 minuto</option>
                      <option value={120}>2 minutos</option>
                      <option value={180}>3 minutos</option>
                      <option value={300}>5 minutos</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                Instruções:
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• {hasTimeLimit ? `Cada pergunta tem ${Math.floor(timeLimit / 60)}:${(timeLimit % 60).toString().padStart(2, '0')} para ser respondida` : 'Sem limite de tempo por pergunta'}</li>
                <li>• As perguntas e alternativas são embaralhadas</li>
                <li>• Você verá os resultados ao final do quiz</li>
                <li>• {(() => {
                  const available = quizState.selectedTags.length > 0 ? getFilteredQuestions(quizState.selectedTags).length : (quizData as QuizQuestion[]).length;
                  const filtered = quizState.selectedTags.length > 0 ? (quizData as QuizQuestion[]).filter(q => q.tags.some(tag => quizState.selectedTags.includes(tag))).length : quizData.length;
                  const final = maxQuestions === 0 ? filtered : Math.min(maxQuestions, filtered);
                  return `${final} pergunta${final !== 1 ? 's' : ''} no total`;
                })()}</li>
              </ul>
            </div>

            <button
              onClick={startQuiz}
              disabled={getFilteredQuestions(quizState.selectedTags).length === 0}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              {getFilteredQuestions(quizState.selectedTags).length === 0 ? 'Nenhuma pergunta encontrada' : 'Iniciar Quiz'}
            </button>
          </div>
        </div>
      </Container>
    )
  }

  // Página de resultados
  if (showResults) {
    return (
      <Container className="pt-4 lg:pt-12">
        <PageHeader
          title="Resultados do Quiz"
          description="Veja como você se saiu!"
          className="border-b border-gray-200 dark:border-gray-700"
        />
        
        <div className="py-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold mb-2" style={{
                color: results.percentage >= 70 ? '#10B981' : results.percentage >= 50 ? '#F59E0B' : '#EF4444'
              }}>
                {Math.round(results.percentage)}%
              </div>
              <div className="text-xl text-gray-600 dark:text-gray-400">
                {results.correctAnswers} de {results.totalQuestions} corretas
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Tempo total: {Math.floor(results.totalTime / 60)}m {results.totalTime % 60}s
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {results.correctAnswers}
                </div>
                <div className="text-sm text-green-800 dark:text-green-200">Acertos</div>
              </div>
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                  {results.totalQuestions - results.correctAnswers}
                </div>
                <div className="text-sm text-red-800 dark:text-red-200">Erros</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.round(results.totalTime / results.totalQuestions)}s
                </div>
                <div className="text-sm text-blue-800 dark:text-blue-200">Média por pergunta</div>
              </div>
            </div>
          </div>

          {/* Revisão das perguntas */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Revisão das Perguntas
            </h3>
            {quizState.answers.map((answer, index) => {
              const question = quizState.questions[answer.questionIndex]
              const selectedOption = question.options.find(opt => opt.option_id === answer.selectedAnswer)
              const correctOption = question.options.find(opt => opt.option_id === question.awser)

              return (
                <div key={index} className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 ${
                  answer.isCorrect ? 'border-green-500' : 'border-red-500'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium ${
                      answer.isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {answer.isCorrect ? '✓ Correto' : '✗ Incorreto'}
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(answer.timeSpent / 1000)}s
                    </span>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {question.pergunta}
                  </h4>
                  
                  <div className="space-y-2">
                    {answer.selectedAnswer && (
                      <div className={`p-2 rounded ${
                        answer.isCorrect 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                          : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                      }`}>
                        <span className="font-medium">Sua resposta: </span>
                        {selectedOption?.option_text || 'Não respondida'}
                      </div>
                    )}
                    
                    {!answer.isCorrect && (
                      <div className="p-2 rounded bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                        <span className="font-medium">Resposta correta: </span>
                        {correctOption?.option_text}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-2 flex flex-wrap gap-1">
                    {question.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Refazer Quiz
            </button>
          </div>
        </div>
      </Container>
    )
  }

  // Página da pergunta atual
  if (!currentQuestion) {
    return (
      <Container className="pt-4 lg:pt-12">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Carregando pergunta...</p>
        </div>
      </Container>
    )
  }

  return (
    <Container className="pt-4 lg:pt-12">
      <div className="max-w-3xl mx-auto">
        {/* Header com progresso */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Pergunta {quizState.currentQuestionIndex + 1} de {quizState.questions.length}
            </span>
            {hasTimeLimit && (
              <div className={`text-2xl font-bold ${
                timeLeft <= 10 ? 'text-red-500' : 'text-blue-500'
              }`}>
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </div>
            )}
          </div>
          
          {/* Barra de progresso */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100}%`
              }}
            />
          </div>

          {/* Timer visual */}
          {hasTimeLimit && (
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
              <div 
                className={`h-1 rounded-full transition-all duration-1000 ${
                  timeLeft <= 10 ? 'bg-red-500' : 'bg-green-500'
                }`}
                style={{
                  width: `${(timeLeft / timeLimit) * 100}%`
                }}
              />
            </div>
          )}
        </div>

        {/* Pergunta */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div className="mb-4">
            <div className="flex flex-wrap gap-1 mb-3">
              {currentQuestion.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {currentQuestion.pergunta}
            </h2>
          </div>

          {/* Opções */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.option_id}
                onClick={() => setSelectedAnswer(option.option_id)}
                className={`w-full p-4 text-left rounded-lg border transition-all ${
                  selectedAnswer === option.option_id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 flex-shrink-0 ${
                    selectedAnswer === option.option_id
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    {selectedAnswer === option.option_id && (
                      <div className="w-2 h-2 bg-white rounded-full m-auto mt-0.5" />
                    )}
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">
                    {option.option_text}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Botão próxima */}
          <div className="mt-6 text-right">
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              {quizState.currentQuestionIndex < quizState.questions.length - 1 ? 'Próxima' : 'Finalizar'}
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
