// Use bootstrap to make projects nice, if you don't want to loose time on writing CSS

// ========================================================
// Task 1 - Lorem ipsum Generator
/*
Need possibility to choose what you want to generate: Sentences, paragraphs, words.
And must choose how many you want to generate.
*/
// https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Lorem-Ipsum-Generator.md
// https://www.npmjs.com/package/lorem-ipsum
// ========================================================

//import { LoremIpsum } from "lorem-ipsum";

const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
for(let i=0;i<6;i++){
    let p=document.createElement('p');
    p.innerHTML=lorem.generateParagraphs(7);
    document.body.append(p);
}