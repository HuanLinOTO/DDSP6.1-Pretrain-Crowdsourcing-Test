<template>
    <div class="container">
        <NCard class="card">
            <template #header>
                <div>DDSP6.1 底模众测</div>
            </template>
            <div>
                <Question :question="{ ...question, audio: [ranking_audio_a as string, ranking_audio_b as string] }"
                    :on_submit="on_submit" v-if="show_question"></Question>
                <n-space v-else vertical>
                    <InviteCode :on_right="on_invite_code_right" v-if="!is_verified"></InviteCode>
                    <n-result v-else-if="show_finish" status="success" title="你已完成全部评测"
                        description="感谢你的参与，SVC 社区有你更精彩~">
                        <template #footer>
                            <n-a href="https://qm.qq.com/cgi-bin/qm/qr?k=EFVwFb29W5_iIOQsilu2G6BvAdqqyZAN&jump_from=webapi&authKey=zo1f2u3Z/ZNXb0JxTZhYewXzf/OA9cMxro3x7j/U/CHVasGnHyuMvtVKOyU1r5wT"
                                target="blank">
                                点击此处加入众测群
                            </n-a>，将在完成所有测试后在群内公布本次众测的所有模型，密码为 G6BvA
                        </template>
                    </n-result>
                    <n-result v-else-if="show_finish_single" status="success" title="你已完成一次评测"
                        description="可以继续完成接下来的评测，或者止步于此">
                        <template #footer>
                            <n-button @click="on_continue">继续</n-button>
                        </template>
                    </n-result>
                    <n-result v-else status="error" title="错误">
                        <template #footer>
                            刷新网页吧~
                        </template>
                    </n-result>
                </n-space>
            </div>
            <template #footer>
                <n-space vertical>
                    <n-space vertical v-if="!show_question">
                        <audio
                            :src="use_hfm ? 'https://hf-mirror.com/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/4.wav?download=true' : 'https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/4.wav?download=true'"
                            controls></audio>
                        <n-a :href="use_hfm ? 'https://hf-mirror.com/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/4.wav?download=true' : 'https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/4.wav?download=true'"
                            target="_blank">对应链接</n-a>
                        <div>若无法听到上面的音频，请在开始答题之前勾上这个(启用后有概率需要通过链接下载，无法直接试听)</div>
                        <n-space>
                            启用 HuggingFace Mirror
                            <n-switch v-model:value="use_hfm"></n-switch>
                        </n-space>
                    </n-space>
                    <br>
                    <div>本次众测由红血球提供服务器支持</div>
                    <div>欢迎访问 <n-a href="https://www.ai-hobbyist.com" target="_blank">www.ai-hobbyist.com</n-a></div>
                </n-space>
            </template>
        </NCard>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NCard, NSpace, NResult, NButton, NA, useMessage, NSwitch } from "naive-ui";
import InviteCode from "./InviteCode.vue";
import Question from "./Question.vue";
import { quickSort } from "../utils";
import { Question as TypeQuestion } from '../../../types/api/getQuestion';
import { getQuestion, submitQuestion } from "../api";

var question: TypeQuestion = {} as any;
const ranking_audio_a = ref<string>();
const ranking_audio_b = ref<string>();

const message = useMessage()

const show_question = ref<boolean>(false);
const show_finish = ref<boolean>(false);
const show_finish_single = ref<boolean>(false);
// 是否验证过了
const is_verified = ref<boolean>(false);

const use_hfm = ref<boolean>(false);

var submit_callback: Function;

var token: string;

const on_invite_code_right = async (_token: string) => {
    show_question.value = true;
    is_verified.value = true;
    token = _token
    const result = await getQuestion(token, use_hfm.value ? "huggingface-mirror" : "huggingface")
    if (result.success) {
        question = result.data;
        start();
    } else {
        message.error(result.msg);
        show_question.value = false;
        if (result.finished) {
            show_finish.value = true;
        }
    }
};

const deal_single_question = (audio_a: string, audio_b: string) => {
    ranking_audio_a.value = audio_a;
    ranking_audio_b.value = audio_b;
    return new Promise((resolve, _reject) => {
        submit_callback = resolve;
    }) as Promise<boolean>;
};

const on_submit = (value: string) => {
    console.log(value);
    if (!value) return
    submit_callback(value === ranking_audio_a.value);
    // show_question.value = false;
};

const start = async () => {
    const result = await quickSort(question.audio, deal_single_question);
    console.log(result);
    show_finish_single.value = true
    // 把 result 变成 index array
    const ranking = result.map((item) => {
        return question.audio.indexOf(item);
    });
    const submit_result = await submitQuestion(token, question.id, ranking)
    if (submit_result.success) {
        message.success(submit_result.msg)
    } else {
        message.error(submit_result.msg)
    }
    show_question.value = false;
};

const on_continue = async () => {
    show_question.value = true;
    const result = await getQuestion(token, use_hfm.value ? "huggingface-mirror" : "huggingface")
    if (result.success) {
        question = result.data;
        start();
    } else {
        message.error(result.msg);
        show_question.value = false;
        if (result.finished) {
            show_finish.value = true;
        }
    }
};

</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    .card {
        width: 900px;
    }
}
</style>