const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot is ready as ${client.user.tag}`);
    client.user.setStatus('dnd');

    console.log(client.user.presence.status);
    
    //const testChannel = client.channels.find(channel => channel.name === 'test');
    //console.log(testChannel);
});


client.on('message', (message) => {
    console.log(message.content);
    if (message.content === 'ping') {
        message.reply('pong');
    }
    if (message.content === 'hello') {
        message.channel.send(`hello ${message.author}!`);
    }
    if(message.content.includes('!test')) {
        message.channel.send(`Glad your are testing`);
    }
    if (message.content === '!Plei') {
        message.channel.send(`http://youtube.com`);
        message.channel.send(`http://youtube.com`);
    }

});



client.login(config.BOT_TOKEN);
