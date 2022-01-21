const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule9",
 alias: ["Rule9"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule9 = new Discord.MessageEmbed()
     .setTitle("Rule 9")
     .setDescription(" Try to communicate only in English, as the moderators do not understand other languages")
     .setColor("#001BFF")


     return message.channel.send(embedrule9)

   

   
 }

}