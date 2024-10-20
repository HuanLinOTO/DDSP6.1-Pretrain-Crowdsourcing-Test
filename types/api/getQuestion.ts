export type GetQuestionQuery = {
    token: string
    source: string
}

type GetQuestionSuccess = {
    success: true
    msg: string
    data: Question
}

type GetQuestionFail = {
    success: false
    msg: string
    finished?: boolean

}

export type GetQuestionResponse = GetQuestionSuccess | GetQuestionFail

export interface Question {
    description: string
    id: string
    audio: string[]
}