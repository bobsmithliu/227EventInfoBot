const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';
function Task (description,isDone){
    this.description = description;
    this.isDone = isDone;
}

bot.login(process.env.token);

bot.on('ready', () =>{
    console.log('Logged in as ' + bot.user.tag);
});

bot.on('message', msg => {
    if(msg.content === 'check' && msg.author != bot.user) {
        msg.reply('recieve');
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
    if(msg.author != bot.user) {
        msg.channel.send(msg.author.username);
    }
});


