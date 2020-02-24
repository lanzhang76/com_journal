<template>
  <div class="comedian-module" draggable="true">
    <h3>{{comedian}}</h3>
    <div class="output_box">
      <p>
        <span v-for="({input, output},key) in conversationChain" :key="key">
          <span>{{input}}</span>
          <span style="color: #9770EA;">{{" "+output}}</span>
        </span>
      </p>
    </div>
    <textarea ref="textinput" id="input1" cols="40" rows="5" placeholder="Start typing here"></textarea>
    <button v-on:click="init">Write</button>
  </div>
</template>


<script>
import { markovCount, nextWord, generateEnd } from "./Markov.js";
// import aziz from "!raw-loader! ./assets/aziz.txt";
import aziz from "raw-loader!../assets/aziz.txt";

export default {
  name: "Com",
  data() {
    return {
      comedian: "Some guy",
      text_label: "aziz",
      conversationChain: [
        {
          input: "",
          output: ""
        }
      ]
    };
  },
  computed: {},
  methods: {
    init: function() {
      let current_sentence = this.$refs.textinput.value;

      let selected_corpus = (label = "aziz") => {
        if (label == "aziz") {
          return aziz;
        }
      };
      let sentence = generateEnd(
        current_sentence,
        selected_corpus(this.text_label)
      );
      this.appendToConversation(sentence[0], sentence[1]);
    },
    appendToConversation(input1, input2) {
      this.conversationChain.push({
        input: input1,
        output: input2.replace(input1, "")
      });
    }
  },
  mounted() {
    console.log(this.text_label);
    // this.appendToConversation("User");
  }
};
</script>

<style scope>
.comedian-module {
  text-align: left;
  padding: 1vw;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  width: 22vw;
  margin: 0 auto;
}

textarea {
  font-family: "Roboto Mono", monospace;
  outline: none;
  width: 100%;
  font-family: sans-serif;
  font-size: inherit;
}

.output_box {
  margin-top: 1vh;
  margin-bottom: 1vh;
  /* overflow-y: scroll; */
}
</style>