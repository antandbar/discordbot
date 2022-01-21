const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "verification",
 alias: ["Verification"],

 execute (client, message, args){
     
     var perms = message.member.hasPermission("ADMINISTRATOR")
    if (!perms) return message.channel.send("you have no **permissions**")
    
    const mencion = message.mentions.users.first()

     const embedverification = new Discord.MessageEmbed()
     .setTitle("verification")
     .setDescription("react to ✅ to verificate yourself and get access to the rest of the server")
     .setColor("#001BFF")

     


     message.channel.send(embedverification).then(msg =>{

    msg.react("✅")
     

     

   

   
 })
 }

}