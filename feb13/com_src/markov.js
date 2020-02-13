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


// pushes the next most likely word of the text input
nextWord = (sentence, text) => {
    sentence = sentence.replace("'", "’");
    let s_length = sentence.split(" ").length;
    let current = sentence.split(" ");
    model = markovCount(text, s_length);
    next_value = model[current];
    console.log(next_value)
    var count = 1;
    while (current in model === false) {
        console.log(next_value);
        // clamp function
        var cap = Math.max(0, Math.min(count, s_length - 1));
        if (count > cap) {
            next_value = [''];
            break;
        } else {
            new_length = (sentence.split(" ").slice(count, s_length)).length;
            model = markovCount(text, new_length);
            current = sentence.split(" ").slice(count, s_length);
            next_value = model[current];
            count += 1;
        }
    }
    // randomly selects a word from the values
    var next_word = next_value[Math.floor(Math.random() * next_value.length)]
    console.log(`${sentence} + ${next_word}`);
    return next_word
}

generateEnd = (current_sentence, text) => {
    var trimmed = current_sentence.trim()
    var sen = trimmed;
    var reg = /[a-z][.?!)}][\"']?/g; //end of sentence
    // var found = sen.match(reg);
    while (sen.match(reg) == null) {
        var word_to_add = nextWord(sen, text)
        word_to_add == ''
            ? sen = sen + "."
            : sen = sen + " " + word_to_add
    }
    return [trimmed, sen]
}


nextWord('I and', aziz)

