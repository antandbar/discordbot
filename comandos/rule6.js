const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule6",
 alias: ["Rule6"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule6 = new Discord.MessageEmbed()
     .setTitle("Rule 6")
     .setDescription(" Do not use excessive capital letters")
     .setColor("#001BFF")


     return message.channel.send(embedrule6)

   

   
 }

}