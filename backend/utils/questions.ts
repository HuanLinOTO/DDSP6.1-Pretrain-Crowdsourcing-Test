const get_sources = () => {
    var sources: Record<string, Record<string, string>> = {
        "huggingface": {
            "azusa-我多想说再见啊_主_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-我多想说再见啊_主/1.wav?download=true",
            "azusa-我多想说再见啊_主_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-我多想说再见啊_主/2.wav?download=true",
            "azusa-我多想说再见啊_主_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-我多想说再见啊_主/3.wav?download=true",
            "azusa-我多想说再见啊_主_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-我多想说再见啊_主/4.wav?download=true",
            "azusa-我多想说再见啊_主_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-我多想说再见啊_主/5.wav?download=true",
            "azusa-我多想说再见啊_主_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-我多想说再见啊_主/6.wav?download=true",
            "azusa-我多想说再见啊_主_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-我多想说再见啊_主/7.wav?download=true",
            "azusa-我多想说再见啊_主_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-我多想说再见啊_主/8.wav?download=true",
            "azusa-夜空中最亮的星000_2_长歌_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-夜空中最亮的星000_2_长歌/1.wav?download=true",
            "azusa-夜空中最亮的星000_2_长歌_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-夜空中最亮的星000_2_长歌/2.wav?download=true",
            "azusa-夜空中最亮的星000_2_长歌_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-夜空中最亮的星000_2_长歌/3.wav?download=true",
            "azusa-夜空中最亮的星000_2_长歌_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-夜空中最亮的星000_2_长歌/4.wav?download=true",
            "azusa-夜空中最亮的星000_2_长歌_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-夜空中最亮的星000_2_长歌/5.wav?download=true",
            "azusa-夜空中最亮的星000_2_长歌_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-夜空中最亮的星000_2_长歌/6.wav?download=true",
            "azusa-夜空中最亮的星000_2_长歌_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-夜空中最亮的星000_2_长歌/7.wav?download=true",
            "azusa-夜空中最亮的星000_2_长歌_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-夜空中最亮的星000_2_长歌/8.wav?download=true",
            "azusa-Passion_Call_with_echo_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-Passion_Call_with_echo/1.wav?download=true",
            "azusa-Passion_Call_with_echo_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-Passion_Call_with_echo/2.wav?download=true",
            "azusa-Passion_Call_with_echo_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-Passion_Call_with_echo/3.wav?download=true",
            "azusa-Passion_Call_with_echo_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-Passion_Call_with_echo/4.wav?download=true",
            "azusa-Passion_Call_with_echo_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-Passion_Call_with_echo/5.wav?download=true",
            "azusa-Passion_Call_with_echo_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-Passion_Call_with_echo/6.wav?download=true",
            "azusa-Passion_Call_with_echo_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-Passion_Call_with_echo/7.wav?download=true",
            "azusa-Passion_Call_with_echo_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/azusa-Passion_Call_with_echo/8.wav?download=true",
            "nahida-我多想说再见啊_主_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-我多想说再见啊_主/1.wav?download=true",
            "nahida-我多想说再见啊_主_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-我多想说再见啊_主/2.wav?download=true",
            "nahida-我多想说再见啊_主_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-我多想说再见啊_主/3.wav?download=true",
            "nahida-我多想说再见啊_主_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-我多想说再见啊_主/4.wav?download=true",
            "nahida-我多想说再见啊_主_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-我多想说再见啊_主/5.wav?download=true",
            "nahida-我多想说再见啊_主_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-我多想说再见啊_主/6.wav?download=true",
            "nahida-我多想说再见啊_主_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-我多想说再见啊_主/7.wav?download=true",
            "nahida-我多想说再见啊_主_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-我多想说再见啊_主/8.wav?download=true",
            "nahida-夜空中最亮的星000_2_长歌_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-夜空中最亮的星000_2_长歌/1.wav?download=true",
            "nahida-夜空中最亮的星000_2_长歌_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-夜空中最亮的星000_2_长歌/2.wav?download=true",
            "nahida-夜空中最亮的星000_2_长歌_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-夜空中最亮的星000_2_长歌/3.wav?download=true",
            "nahida-夜空中最亮的星000_2_长歌_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-夜空中最亮的星000_2_长歌/4.wav?download=true",
            "nahida-夜空中最亮的星000_2_长歌_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-夜空中最亮的星000_2_长歌/5.wav?download=true",
            "nahida-夜空中最亮的星000_2_长歌_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-夜空中最亮的星000_2_长歌/6.wav?download=true",
            "nahida-夜空中最亮的星000_2_长歌_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-夜空中最亮的星000_2_长歌/7.wav?download=true",
            "nahida-夜空中最亮的星000_2_长歌_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-夜空中最亮的星000_2_长歌/8.wav?download=true",
            "nahida-Passion_Call_with_echo_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-Passion_Call_with_echo/1.wav?download=true",
            "nahida-Passion_Call_with_echo_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-Passion_Call_with_echo/2.wav?download=true",
            "nahida-Passion_Call_with_echo_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-Passion_Call_with_echo/3.wav?download=true",
            "nahida-Passion_Call_with_echo_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-Passion_Call_with_echo/4.wav?download=true",
            "nahida-Passion_Call_with_echo_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-Passion_Call_with_echo/5.wav?download=true",
            "nahida-Passion_Call_with_echo_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-Passion_Call_with_echo/6.wav?download=true",
            "nahida-Passion_Call_with_echo_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-Passion_Call_with_echo/7.wav?download=true",
            "nahida-Passion_Call_with_echo_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/nahida-Passion_Call_with_echo/8.wav?download=true",
            "opencpop-我多想说再见啊_主_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-我多想说再见啊_主/1.wav?download=true",
            "opencpop-我多想说再见啊_主_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-我多想说再见啊_主/2.wav?download=true",
            "opencpop-我多想说再见啊_主_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-我多想说再见啊_主/3.wav?download=true",
            "opencpop-我多想说再见啊_主_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-我多想说再见啊_主/4.wav?download=true",
            "opencpop-我多想说再见啊_主_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-我多想说再见啊_主/5.wav?download=true",
            "opencpop-我多想说再见啊_主_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-我多想说再见啊_主/6.wav?download=true",
            "opencpop-我多想说再见啊_主_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-我多想说再见啊_主/7.wav?download=true",
            "opencpop-我多想说再见啊_主_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-我多想说再见啊_主/8.wav?download=true",
            "opencpop-夜空中最亮的星000_2_长歌_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-夜空中最亮的星000_2_长歌/1.wav?download=true",
            "opencpop-夜空中最亮的星000_2_长歌_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-夜空中最亮的星000_2_长歌/2.wav?download=true",
            "opencpop-夜空中最亮的星000_2_长歌_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-夜空中最亮的星000_2_长歌/3.wav?download=true",
            "opencpop-夜空中最亮的星000_2_长歌_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-夜空中最亮的星000_2_长歌/4.wav?download=true",
            "opencpop-夜空中最亮的星000_2_长歌_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-夜空中最亮的星000_2_长歌/5.wav?download=true",
            "opencpop-夜空中最亮的星000_2_长歌_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-夜空中最亮的星000_2_长歌/6.wav?download=true",
            "opencpop-夜空中最亮的星000_2_长歌_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-夜空中最亮的星000_2_长歌/7.wav?download=true",
            "opencpop-夜空中最亮的星000_2_长歌_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-夜空中最亮的星000_2_长歌/8.wav?download=true",
            "opencpop-Passion_Call_with_echo_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-Passion_Call_with_echo/1.wav?download=true",
            "opencpop-Passion_Call_with_echo_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-Passion_Call_with_echo/2.wav?download=true",
            "opencpop-Passion_Call_with_echo_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-Passion_Call_with_echo/3.wav?download=true",
            "opencpop-Passion_Call_with_echo_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-Passion_Call_with_echo/4.wav?download=true",
            "opencpop-Passion_Call_with_echo_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-Passion_Call_with_echo/5.wav?download=true",
            "opencpop-Passion_Call_with_echo_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-Passion_Call_with_echo/6.wav?download=true",
            "opencpop-Passion_Call_with_echo_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-Passion_Call_with_echo/7.wav?download=true",
            "opencpop-Passion_Call_with_echo_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/opencpop-Passion_Call_with_echo/8.wav?download=true",
            "wanye-我多想说再见啊_主_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-我多想说再见啊_主/1.wav?download=true",
            "wanye-我多想说再见啊_主_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-我多想说再见啊_主/2.wav?download=true",
            "wanye-我多想说再见啊_主_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-我多想说再见啊_主/3.wav?download=true",
            "wanye-我多想说再见啊_主_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-我多想说再见啊_主/4.wav?download=true",
            "wanye-我多想说再见啊_主_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-我多想说再见啊_主/5.wav?download=true",
            "wanye-我多想说再见啊_主_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-我多想说再见啊_主/6.wav?download=true",
            "wanye-我多想说再见啊_主_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-我多想说再见啊_主/7.wav?download=true",
            "wanye-我多想说再见啊_主_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-我多想说再见啊_主/8.wav?download=true",
            "wanye-夜空中最亮的星000_2_长歌_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-夜空中最亮的星000_2_长歌/1.wav?download=true",
            "wanye-夜空中最亮的星000_2_长歌_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-夜空中最亮的星000_2_长歌/2.wav?download=true",
            "wanye-夜空中最亮的星000_2_长歌_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-夜空中最亮的星000_2_长歌/3.wav?download=true",
            "wanye-夜空中最亮的星000_2_长歌_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-夜空中最亮的星000_2_长歌/4.wav?download=true",
            "wanye-夜空中最亮的星000_2_长歌_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-夜空中最亮的星000_2_长歌/5.wav?download=true",
            "wanye-夜空中最亮的星000_2_长歌_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-夜空中最亮的星000_2_长歌/6.wav?download=true",
            "wanye-夜空中最亮的星000_2_长歌_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-夜空中最亮的星000_2_长歌/7.wav?download=true",
            "wanye-夜空中最亮的星000_2_长歌_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-夜空中最亮的星000_2_长歌/8.wav?download=true",
            "wanye-Passion_Call_with_echo_1": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/1.wav?download=true",
            "wanye-Passion_Call_with_echo_2": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/2.wav?download=true",
            "wanye-Passion_Call_with_echo_3": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/3.wav?download=true",
            "wanye-Passion_Call_with_echo_4": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/4.wav?download=true",
            "wanye-Passion_Call_with_echo_5": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/5.wav?download=true",
            "wanye-Passion_Call_with_echo_6": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/6.wav?download=true",
            "wanye-Passion_Call_with_echo_7": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/7.wav?download=true",
            "wanye-Passion_Call_with_echo_8": "https://huggingface.co/datasets/SVCFusion/DDSP6.1-Pretrained-Crowdsourcing-Test/resolve/main/wanye-Passion_Call_with_echo/8.wav?download=true",
        },
        "huggingface-mirror": {}
    }

    // 将sources的huggingface复制一份成 huggingface-mirror，把 huggingface.co 替换成 hf-mirror.com
    for (let key in sources["huggingface"]) {
        sources["huggingface-mirror"][key] = sources["huggingface"][key].replace("huggingface.co", "hf-mirror.com")
    }
    return sources
}


const questions = {
    "azusa-我多想说再见啊_主": {
        "description": "此为 阿梓从小就很可爱 的声音，推理源《我多想说再见啊》，共给出两个音频，请选择你认为听感最好的音频。(数据集为 vr 数据，普通干净音频测试)",
        "audio": [
            "azusa-我多想说再见啊_主_1",
            "azusa-我多想说再见啊_主_2",
            "azusa-我多想说再见啊_主_3",
            "azusa-我多想说再见啊_主_4",
            "azusa-我多想说再见啊_主_5",
            "azusa-我多想说再见啊_主_6",
            "azusa-我多想说再见啊_主_7",
            "azusa-我多想说再见啊_主_8"
        ]
    },
    "azusa-夜空中最亮的星000_2_长歌": {
        "description": "此为 阿梓从小就很可爱 的声音，推理源《夜空中最亮的星》，共给出两个音频，请选择你认为听感最好的音频。(数据集为 vr 数据，高音测试，注意该模型数据集为纯说话，属于超音域测试)",
        "audio": [
            "azusa-夜空中最亮的星000_2_长歌_1",
            "azusa-夜空中最亮的星000_2_长歌_2",
            "azusa-夜空中最亮的星000_2_长歌_3",
            "azusa-夜空中最亮的星000_2_长歌_4",
            "azusa-夜空中最亮的星000_2_长歌_5",
            "azusa-夜空中最亮的星000_2_长歌_6",
            "azusa-夜空中最亮的星000_2_长歌_7",
            "azusa-夜空中最亮的星000_2_长歌_8"
        ]
    },
    "azusa-Passion_Call_with_echo": {
        "description": "此为 阿梓从小就很可爱 的声音，推理源《Passion Call》，共给出两个音频，请选择你认为听感最好的音频。(数据集为 vr 数据，带混响，vr 数据测试)",
        "audio": [
            "azusa-Passion_Call_with_echo_1",
            "azusa-Passion_Call_with_echo_2",
            "azusa-Passion_Call_with_echo_3",
            "azusa-Passion_Call_with_echo_4",
            "azusa-Passion_Call_with_echo_5",
            "azusa-Passion_Call_with_echo_6",
            "azusa-Passion_Call_with_echo_7",
            "azusa-Passion_Call_with_echo_8"
        ]
    },
    "nahida-我多想说再见啊_主": {
        "description": "此为 纳西妲 的声音，推理源《我多想说再见啊》，共给出两个音频，请选择你认为听感最好的音频。(普通干净音频测试)",
        "audio": [
            "nahida-我多想说再见啊_主_1",
            "nahida-我多想说再见啊_主_2",
            "nahida-我多想说再见啊_主_3",
            "nahida-我多想说再见啊_主_4",
            "nahida-我多想说再见啊_主_5",
            "nahida-我多想说再见啊_主_6",
            "nahida-我多想说再见啊_主_7",
            "nahida-我多想说再见啊_主_8"
        ]
    },
    "nahida-夜空中最亮的星000_2_长歌": {
        "description": "此为 纳西妲 的声音，推理源《夜空中最亮的星》，共给出两个音频，请选择你认为听感最好的音频。(高音测试，注意该模型数据集为纯说话，属于超音域测试)",
        "audio": [
            "nahida-夜空中最亮的星000_2_长歌_1",
            "nahida-夜空中最亮的星000_2_长歌_2",
            "nahida-夜空中最亮的星000_2_长歌_3",
            "nahida-夜空中最亮的星000_2_长歌_4",
            "nahida-夜空中最亮的星000_2_长歌_5",
            "nahida-夜空中最亮的星000_2_长歌_6",
            "nahida-夜空中最亮的星000_2_长歌_7",
            "nahida-夜空中最亮的星000_2_长歌_8"
        ]
    },
    "nahida-Passion_Call_with_echo": {
        "description": "此为 纳西妲 的声音，推理源《Passion_Call》，共给出两个音频，请选择你认为听感最好的音频。(带混响，vr 数据测试)",
        "audio": [
            "nahida-Passion_Call_with_echo_1",
            "nahida-Passion_Call_with_echo_2",
            "nahida-Passion_Call_with_echo_3",
            "nahida-Passion_Call_with_echo_4",
            "nahida-Passion_Call_with_echo_5",
            "nahida-Passion_Call_with_echo_6",
            "nahida-Passion_Call_with_echo_7",
            "nahida-Passion_Call_with_echo_8"
        ]
    },
    "opencpop-我多想说再见啊_主": {
        "description": "此为 Opencpop 的声音，推理源《我多想说再见啊》，共给出两个音频，请选择你认为听感最好的音频。(普通干净音频测试)",
        "audio": [
            "opencpop-我多想说再见啊_主_1",
            "opencpop-我多想说再见啊_主_2",
            "opencpop-我多想说再见啊_主_3",
            "opencpop-我多想说再见啊_主_4",
            "opencpop-我多想说再见啊_主_5",
            "opencpop-我多想说再见啊_主_6",
            "opencpop-我多想说再见啊_主_7",
            "opencpop-我多想说再见啊_主_8"
        ]
    },
    "opencpop-夜空中最亮的星000_2_长歌": {
        "description": "此为 Opencpop 的声音，推理源《夜空中最亮的星》，共给出两个音频，请选择你认为听感最好的音频。(高音测试，数据集带高音)",
        "audio": [
            "opencpop-夜空中最亮的星000_2_长歌_1",
            "opencpop-夜空中最亮的星000_2_长歌_2",
            "opencpop-夜空中最亮的星000_2_长歌_3",
            "opencpop-夜空中最亮的星000_2_长歌_4",
            "opencpop-夜空中最亮的星000_2_长歌_5",
            "opencpop-夜空中最亮的星000_2_长歌_6",
            "opencpop-夜空中最亮的星000_2_长歌_7",
            "opencpop-夜空中最亮的星000_2_长歌_8"
        ]
    },
    "opencpop-Passion_Call_with_echo": {
        "description": "此为 Opencpop 的声音，推理源《Passion_Call》，共给出两个音频，请选择你认为听感最好的音频。(带混响，vr 数据测试)",
        "audio": [
            "opencpop-Passion_Call_with_echo_1",
            "opencpop-Passion_Call_with_echo_2",
            "opencpop-Passion_Call_with_echo_3",
            "opencpop-Passion_Call_with_echo_4",
            "opencpop-Passion_Call_with_echo_5",
            "opencpop-Passion_Call_with_echo_6",
            "opencpop-Passion_Call_with_echo_7",
            "opencpop-Passion_Call_with_echo_8"
        ]
    },
    "wanye-我多想说再见啊_主": {
        "description": "此为 枫原万叶 的声音，推理源《我多想说再见啊》，共给出两个音频，请选择你认为听感最好的音频。(普通干净音频测试)",
        "audio": [
            "wanye-我多想说再见啊_主_1",
            "wanye-我多想说再见啊_主_2",
            "wanye-我多想说再见啊_主_3",
            "wanye-我多想说再见啊_主_4",
            "wanye-我多想说再见啊_主_5",
            "wanye-我多想说再见啊_主_6",
            "wanye-我多想说再见啊_主_7",
            "wanye-我多想说再见啊_主_8"
        ]
    },
    "wanye-夜空中最亮的星000_2_长歌": {
        "description": "此为 枫原万叶 的声音，推理源《夜空中最亮的星》，共给出两个音频，请选择你认为听感最好的音频。(高音测试，注意该模型数据集为纯说话，属于超音域测试)",
        "audio": [
            "wanye-夜空中最亮的星000_2_长歌_1",
            "wanye-夜空中最亮的星000_2_长歌_2",
            "wanye-夜空中最亮的星000_2_长歌_3",
            "wanye-夜空中最亮的星000_2_长歌_4",
            "wanye-夜空中最亮的星000_2_长歌_5",
            "wanye-夜空中最亮的星000_2_长歌_6",
            "wanye-夜空中最亮的星000_2_长歌_7",
            "wanye-夜空中最亮的星000_2_长歌_8"
        ]
    },
    "wanye-Passion_Call_with_echo": {
        "description": "此为 枫原万叶 的声音，推理源《Passion Call》，共给出两个音频，请选择你认为听感最好的音频。(带混响，vr 数据测试)",
        "audio": [
            "wanye-Passion_Call_with_echo_1",
            "wanye-Passion_Call_with_echo_2",
            "wanye-Passion_Call_with_echo_3",
            "wanye-Passion_Call_with_echo_4",
            "wanye-Passion_Call_with_echo_5",
            "wanye-Passion_Call_with_echo_6",
            "wanye-Passion_Call_with_echo_7",
            "wanye-Passion_Call_with_echo_8"
        ]
    },
}

export {
    get_sources,
    questions
}