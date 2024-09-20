// const fs = require("fs");
// const { Command } = require('commander');
// const program  = new Command();

// program
//     .name('counter')
//     .description('CLI to do file based task')
//     .version('0.8.0');

// program.command('count')
//     .description('count the number of lines in the file')
//     .argument('<file>', 'file to count')
//     .action((file)=>{
//         fs.readFile(file, 'utf-8', (err,data)=>{
//             if(err){
//                 console.log(err);
//             } else{
//                 const lines = data.split('\n').length
//                 console.log(`there are ${lines} lines in ${file}`);
//             }
//         });
//     });

// program.parse();


const fs = require("fs");
const { Command } = require('commander');
const program  = new Command();
const file = '/Users/loveleenkaur/Desktop/Cohort/webdev/js/week4/fs.json'

function loadTodos(){
    try {
        if(fs.existsSync(file)){
            const data = fs.readFileSync(file,'utf-8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.log("error reading todo file", error);
    }
    return[];
}

function saveTodos(todos){
    try {
        fs.writeFileSync(file, JSON.stringify(todos,null,2))
    } catch (error) {
        console.log("error saving todo file", error);
    }
}

function addTodo(task, index){
    const todos =loadTodos()
    if(typeof index === 'number' && index >=0 && index <= todos.length){
        todos.splice(index,0,task)
    } else{
        todos.push(task);
    }
    saveTodos(todos);
    console.log(`Added Task: ${task}`);
    console.log("current todos list: ", todos);
}

function deleteTodo(index){
    const todos = loadTodos()
    if(typeof index === 'number' && index >=0 && index < todos.length){
        todos.splice(index,1);
    } else{
        console.log("invalid index, No task deleted");
    }
    saveTodos(todos);
    console.log("current todos list: ", todos);
}

program
    .name("todo")
    .description("simple CLI to manage a todo list")
    .version('1.0.0')

program
    .command('add <task> [index]')
    .description("add a new task to the todo list")
    .action((task,index)=>{
        addTodo(task, parseInt(index));
    })

program
    .command('delete <index>')
    .description('delete task from the list')
    .action((index)=>{
        deleteTodo(parseInt(index));
    })

program.parse(process.argv);