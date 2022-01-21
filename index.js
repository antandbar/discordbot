const config = require('./config.json');
const fs = require("fs")
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

//PREFIX

let prefix = "plei!"

//HANDLER

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file =>file.endsWith(".js"));

for (const file of commandFiles){
  const commands = require(`./comandos/${file}`);
  client.commands.set(commands.name, commands)
} 


//EVENTO MENSAJE

client.on("message", (message) => {

    if(!message.content.startsWith(prefix))
    if (message.author.bot) return;
    
    let usuario = message.mentions.members.first() || message.member;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //const command = args.shift().toLowerCase();
    const command = message.content.toLowerCase();

    
    //HANDLER
    
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if (cmd){
      cmd.execute(client, message, args)
    }
    
    }); 



client.login(config.BOT_TOKEN); 


