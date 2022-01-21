const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule10",
 alias: ["Rule10"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule10 = new Discord.MessageEmbed()
     .setTitle("Rule 10")
     .setDescription("Do not write private messages to the staff to request scholarships")
     .setColor("#001BFF")


     return message.channel.send(embedrule10)

   

   
 }

}