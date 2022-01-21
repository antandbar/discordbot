const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule3",
 alias: ["Rule3"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule3 = new Discord.MessageEmbed()
     .setTitle("Rule 3")
     .setDescription("Respect the staff first and foremost and do not question their actions")
     .setColor("#001BFF")


     return message.channel.send(embedrule3)

   

   
 }

}