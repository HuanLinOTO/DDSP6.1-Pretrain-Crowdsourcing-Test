import useDB from "../../../utils/db";
import { GetQuestionQuery, GetQuestionResponse, Question } from "../../../../types/api/getQuestion";
import { get_sources, questions } from "../../../utils/questions";

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}


export default defineEventHandler(async (event): Promise<GetQuestionResponse> => {
    const db = await useDB()

    const query = getQuery(event) as GetQuestionQuery;

    const sources = get_sources()


    if (!query.token || !query.source || !sources[query.source]) {
        return {
            success: false,
            msg: "参数错误"
        }
    }
    const token_info_result = await db.get("record", {
        token: query.token
    })

    if (token_info_result.length == 0) {
        return {
            success: false,
            msg: "邀请码不存在"
        }
    }

    const token_info = token_info_result[0]
    const answered_questions = JSON.parse(token_info.answered_questions || "[]")

    // 从问题库挑一个没回答过的问题
    let question_id = ""
    let question: Question = null
    for (let key of shuffle(Object.keys(questions))) {
        if (answered_questions.indexOf(key) == -1) {
            question_id = key
            question = structuredClone(questions[key])
            break
        }
    }

    if (!question) {
        return {
            success: false,
            msg: "没有更多能够评测的了~ 感谢参与众测！",
            finished: true
        }
    }

    for (let audio in question.audio) {
        question.audio[audio] = sources[query.source][question.audio[audio]]
    }
    question.id = question_id
    return {
        success: true,
        msg: "获取成功",
        data: question,
    }
});