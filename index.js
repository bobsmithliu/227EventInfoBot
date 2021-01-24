const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';
let taskList = [];
function Task(taskdescription,isDone){
    this.taskdescription = taskdescription;
    this.isDone = isDone;
};
bot.login(process.env.token);

bot.on('ready', () =>{
    console.log('Logged in as ' + bot.user.tag);
});

bot.on('message', msg => {
    if(msg.content === 'check' && msg.author != bot.user) {
        msg.reply('recieve');
        
        msg.pin(msg.content);
    }
});

bot.on('message', msg => {
    if(msg.content.startsWith(prefix + 'reina')) {
        msg.reply('Big sexy');
    }
});

bot.on('message', msg => {
    if(msg.content.startsWith(prefix + 'Senna')) {
        msg.reply('is Sally');
    }
});

bot.on('message', msg => {
    console.log(msg.author.username);
});
//display task list
bot.on('message', msg => {
    if(msg.content.startsWith(prefix + "task")) {
        if(taskList.length == 0){
            msg.reply("Please add new task! No task");
        } else {
            msg.reply("Your current task: ")
            for (t in taskList) {
                msg.reply(t.taskdescription);
                msg.reply(t.isDone);
            }
        }
    }
});
//add task
bot.on('message',msg =>{
    let addprefix = "!add"
    const args = msg.content.slice(addprefix.length);
    const context = args.shift().toLowerCase();
    if(msg.content.startsWith(prefix + "add")){
        msg.reply("Your new task is: " + context);
        taskList.push(new Task(context,false));
    }
});

//clear task list 
bot.on('message',msg =>{
    if(msg.content.startsWith(prefix+"clear")){
        taskList = [];
        msg.reply("Task list cleared");
    }
});