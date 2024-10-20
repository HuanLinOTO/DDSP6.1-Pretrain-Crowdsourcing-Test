export type CheckTokenQuery = {
    token: string
}

type CheckTokenSuccess = {
    success: true
    msg: string
}

type CheckTokenFail = {
    success: false
    msg: string
}

export type CheckTokenResponse = CheckTokenSuccess | CheckTokenFail