import { CheckTokenQuery, CheckTokenResponse } from "../../../../types/api/checkToken"
import useDB from "../../../utils/db";

export default defineEventHandler(async (event): Promise<CheckTokenResponse> => {
    const query = getQuery(event) as CheckTokenQuery;

    if (!query.token) {
        return {
            success: false,
            msg: "参数错误"
        }
    }

    const db = await useDB();

    // 获取用户
    const user = await db.get("record", {
        token: query.token
    });

    if (user.length == 0) {
        return {
            success: false,
            msg: "邀请码不存在"
        }
    }

    return {
        success: true,
        msg: "验证成功，欢迎参加众测！",
    }
});