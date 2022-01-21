const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule4",
 alias: ["Rule4"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

     const embedrule4 = new Discord.MessageEmbed()
     .setTitle("Rule 4")
     .setDescription("Do not write offensive comments without reason or for fun, on the server you want to maintain a non-toxic environment")
     .setColor("#001BFF")


     return message.channel.send(embedrule4)

   

   
 }

}