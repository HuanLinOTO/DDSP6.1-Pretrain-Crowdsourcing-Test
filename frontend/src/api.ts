import axios from "axios";
import { CheckTokenResponse } from "../../types/api/checkToken";
import { GetQuestionResponse } from "../../types/api/getQuestion";
import { SubmitQuestionResponse } from "../../types/api/submitQuestion";

const http = axios.create({
    baseURL: '/',
});

export const checkToken = async (token: string): Promise<CheckTokenResponse> => {
    const res = await http.get('/api/token/check', {
        params: {
            token
        }
    });
    return res.data;
}

export const getQuestion = async (token: string, source: "huggingface" | "huggingface-mirror" = "huggingface"): Promise<GetQuestionResponse> => {
    const res = await http.get('/api/question/get', {
        params: {
            token,
            source
        }
    });
    return res.data;
}

export const submitQuestion = async (token: string, question_id: string, ranking: number[]): Promise<SubmitQuestionResponse> => {
    const res = await http.post('/api/question/submit', {
        token,
        question_id,
        ranking
    });
    return res.data;
}