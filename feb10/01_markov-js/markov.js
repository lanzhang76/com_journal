list = ['Aziz Ansari', 'Amy Wong']

// compiling any length of markov model
markovCount = (text, num) => {
    const textArr = text.split(' ');
    const markov_dict = {}
    for (let i = 0; i < (textArr.length) - num; i++) {
        let gram = textArr.slice(i, i + num);
        let next = textArr[i + num];
        if (!markov_dict[gram]) {
            markov_dict[gram] = []
        }
        markov_dict[gram].push(next);
    }
    return markov_dict
}

clamp = (min_val, value, max_val) => {
    num = Math.max(min_val, Math.min(value, max_val))
    return num
}

nextWord = (sentence, text) => {
    sentence = sentence.replace("'", "’");
    let s_length = sentence.split(" ").length;
    let current = sentence.split(" ");
    model = markovCount(text, s_length);
    next_value = model[current];
    var count = 1;
    while (current in model === false) {
        console.log(next_value);
        var cap = clamp(0, count, s_length - 2)
        if (count > cap) {
            next_value = ['.'];
            break;
        } else {
            new_length = (sentence.split(" ").slice(count, s_length)).length;
            model = markovCount(text, new_length);
            current = sentence.split(" ").slice(count, s_length);
            next_value = model[current];
            count += 1;
        }
    }
    console.log(next_value)
    var next_word = next_value[Math.floor(Math.random() * next_value.length)]
    console.log(`${sentence} + ${next_word}`);
    return next_value
}
// model = markovCount(aziz, 3);
nextWord("months.", aziz);

