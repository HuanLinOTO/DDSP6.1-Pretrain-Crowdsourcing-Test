<template>
    <div>
        <n-space vertical>
            <div>欢迎参加 DDSP6.1 底模众测，请在下方输入邀请码</div>
            <n-input v-model:value="inviteCode" @keyup.enter="submit"></n-input>
            <n-button secondary style="width: 100%" type="primary" @click="submit">提交</n-button>
        </n-space>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NInput, NButton, NSpace, useMessage } from 'naive-ui';
import { checkToken } from '../api';

const props = defineProps<{
    on_right: (token: string) => void;
}>();

const message = useMessage()

const inviteCode = ref<string>();

const submit = async () => {
    try {
        console.log(inviteCode.value);
        const res = await checkToken(inviteCode.value as string);

        if (res.success) {
            props.on_right(inviteCode.value as string);
            message.success(res.msg)
        } else {
            message.error(res.msg)
        }
    } catch {
        message.error('网络错误')
    }
};
</script>

<style lang="less" scoped></style>