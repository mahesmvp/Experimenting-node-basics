// process.stdout.write('Hello');
// process.stdout.write('World \n\n\n');

const questions = [
    "What is your name?",
    "Whats up?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask()

var answer = [];
process.stdin.on("data", data =>{
    answer.push(data.toString().trim());

    if(answer.length < questions.length){
        ask(answer.length)
    }else{
        process.exit();
    }
})

process.on('exit', () => {
    const [name, whatsUp] = answer
    console.log(`
    Thanks you for your answers ${name}. 
    Have a good time doing ${whatsUp}.
    `)
})