const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule5",
 alias: ["Rule5"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule5 = new Discord.MessageEmbed()
     .setTitle("Rule 5")
     .setDescription("Do not spam the chat of mentions, emojis and / or emoticons")
     .setColor("#001BFF")


     return message.channel.send(embedrule5)

   

   
 }

}