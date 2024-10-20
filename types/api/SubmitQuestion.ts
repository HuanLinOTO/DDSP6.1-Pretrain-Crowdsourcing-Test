export type SubmitQuestionQuery = {
    token: string
    ranking: number[]
    question_id: string
}

type SubmitQuestionSuccess = {
    success: true
    msg: string
}

type SubmitQuestionFail = {
    success: false
    msg: string
}

export type SubmitQuestionResponse = SubmitQuestionSuccess | SubmitQuestionFail
