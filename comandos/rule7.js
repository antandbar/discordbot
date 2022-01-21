const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule7",
 alias: ["Rule7"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule7 = new Discord.MessageEmbed()
     .setTitle("Rule 7")
     .setDescription(" Do not spam links from other domains that may be considered competition or are out of context")
     .setColor("#001BFF")


     return message.channel.send(embedrule7)

   

   
 }

}