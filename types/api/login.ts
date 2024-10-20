export type LoginQuery = { 
    username: string
    password: string
    verifyCode: string
    verifyKey: string
}

type LoginSuccess = {
    success: true
    msg: string
    token: string
    is_admin: boolean
}

type LoginFail = {
    success: false
    msg: string
}

export type LoginResponse = LoginSuccess | LoginFail