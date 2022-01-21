
const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "Ticket",
 alias: ["ticket"],

 execute (client, message, args){


   let everyone = message.guild.roles.cache.find(rol => rol.name === "@everyone")
   let e = message.guild.channels.cache.find(canal => canal.name === `ticket${message.author.username}`)
   if(e) return mesage.channel.send("You cannot open **another ticket**")

   const usuario = message.author 
   
   const ticketembed = new Discord.MessageEmbed()
   .setTitle("New Ticket")
   .setDescription(`Created by: ${usuario.tag }`)
   .setTimestamp()
   .setColor("RANDOM")

   message.guild.channels.create(`ticket${message.author.username}`,  {
     premissionOverwrites: [
       {
         id: everyone.id, 
         deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
       },

       {
         id: message.author.id,
         allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
       }
     ],
     parent: "865419613411737630"
   }).then((c) => c.send(ticketembed)).then((msg) => {
     msg.react("🔒")

     msg.awaitReactions((reaction, user) => {
       if(message.author.id !== user.id) return;
       if (reaction.emoji.name === "🔒"){
         msg.channel.delete()
       }
     })
   })

  



   
 }

}