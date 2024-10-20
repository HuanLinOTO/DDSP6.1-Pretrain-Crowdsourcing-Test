import useDB from "../../../utils/db";
import { SubmitQuestionQuery, SubmitQuestionResponse } from "../../../../types/api/SubmitQuestion";
import { get_sources } from "../../../utils/questions";

export default defineEventHandler(async (event): Promise<SubmitQuestionResponse> => {
    const db = await useDB()

    const query = await readBody(event) as SubmitQuestionQuery;

    if (!query.token || !query.question_id || !query.ranking) {
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
    if (answered_questions.indexOf(query.question_id) != -1) {
        return {
            success: false,
            msg: "问题已经回答过了哦~"
        }
    }
    const answer_record = JSON.parse(token_info.answer_record || "{}")
    const new_data = {
        answer_record: JSON.stringify({
            ...answer_record,
            [query.question_id]: query.ranking
        }),
        answered_questions: JSON.stringify([...answered_questions, query.question_id])
    }
    db.set("record", {
        id: token_info.id,
        token: token_info.token
    }, new_data)

    return {
        success: true,
        msg: "提交成功",
    }
});