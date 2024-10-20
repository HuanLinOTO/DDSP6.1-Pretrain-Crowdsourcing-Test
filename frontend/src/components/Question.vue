<template>
    <div>
        <n-space vertical>
            <div>
                {{ props.question.description }}
            </div>
            <n-radio-group v-model:value="selected_value">
                <n-space vertical>
                    <template v-for="item in props.question.audio">
                        <n-radio :value="item" :selected="selected_value == item">
                        </n-radio>
                        <n-space>
                            <audio :src="item" controls></audio>
                            <n-a :href="item" target="_blank">若无法播放，可点击这里下载</n-a>

                        </n-space>
                    </template>
                </n-space>
            </n-radio-group>
            <n-button secondary @click="submit" class="submit-btn" type="primary">提交</n-button>
        </n-space>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { NRadio, NSpace, NRadioGroup, NButton, NA } from "naive-ui";
import { onMounted, onBeforeUnmount } from 'vue';

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key >= '0' && event.key <= '9') {
        selected_value.value = props.question.audio[parseInt(event.key) - 1];
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
});
const props = defineProps<{
    question: {
        description: string;
        audio: string[];
    };
    on_submit: (value: string) => void;
}>();
const selected_value = ref(props.question.audio[0]);

const submit = () => {
    props.on_submit(selected_value.value);
    selected_value.value = "";
};

// const handleChange = (event: any) => {
//     console.log(event.target.value, selected_value.value);
//     selected_value.value = event.target.value;
// };
</script>

<style lang="less" scoped>
.submit-btn {
    margin-top: 20px;
    width: 100%;
}
</style>
