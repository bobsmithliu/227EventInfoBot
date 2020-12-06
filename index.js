const Discord = require('discord.js');
const bot = new Discord.Client();
//Nzg0OTI4NDE0Mzg0NTIxMjg2.X8wbjQ.PU3NLhJ3JY0l3kuEz08JbOFC1pQ
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
const prefix = '!';
bot.on('message', msg => {
    if(msg.content.startsWith(prefix + 'Reina')) {
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

