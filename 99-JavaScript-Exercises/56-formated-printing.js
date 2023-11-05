// Print an interview based on an array of questions and answers.
function printInterview(questionsAndAnswers, title) {
console.log('Topic: About the trainer')
    console.log()
    questionsAndAnswers.forEach((question) =>{
        console.log('Q:' + question.question)
        console.log('A:' + question.answer)
        console.log()
    } )
}
printInterview([
    { question: 'Who are you?', answer: 'I am a trainer within GDSC.' },
    { question: 'What do you teach?', answer: 'I teach React Native.' },
    { question: 'Since when?', answer: 'Since 2021, three years now.' },
], 'About the trainer')
/* Expected output:
Topic: About the trainer

Q: Who are you?
A: I am a trainer within GDSC.

Q: What do you teach?
A: I teach React Native.

Q: Since when?
A: Since 2021, three years now.
*/