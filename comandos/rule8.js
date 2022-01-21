const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule8",
 alias: ["Rule8"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule8 = new Discord.MessageEmbed()
     .setTitle("Rule 8")
     .setDescription(" And last but not least ... fun first and foremost!")
     .setColor("#001BFF")


     return message.channel.send(embedrule8)

   

   
 }

}