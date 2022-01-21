const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule2",
 alias: ["Rule2"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule2 = new Discord.MessageEmbed()
     .setTitle("Rule 2")
     .setDescription("Do not talk about sensitive topics such as politics, religion, soccer, sex or any other topic that may annoy")
     .setColor("#001BFF")


     return message.channel.send(embedrule2)

   

   
 }

}