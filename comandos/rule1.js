const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "rule1",
 alias: ["Rule1"],

 execute (client, message, args){
     
    
    const mencion = message.mentions.users.first()

    

     const embedrule1 = new Discord.MessageEmbed()
     .setTitle("Rule 1")
     .setDescription("Be respectful to all members of the server")
     .setColor("#001BFF")


     return message.channel.send(embedrule1)

   

   
 }

}