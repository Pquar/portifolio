export interface QuizOption {
  option_id: string
  option_text: string
}

export interface QuizQuestion {
  pergunta: string
  modulo: string
  tags: string[]
  options: QuizOption[]
  awser: string
}

export interface QuizResult {
  questionIndex: number
  selectedAnswer: string
  isCorrect: boolean
  timeSpent: number
}

export interface QuizState {
  currentQuestionIndex: number
  questions: QuizQuestion[]
  answers: QuizResult[]
  startTime: number
  timePerQuestion: number
  isFinished: boolean
  selectedTags: string[]
}
