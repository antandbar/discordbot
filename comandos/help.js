const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "Help",
 alias: ["help"],

 execute (client, message, args){

   const embedprincipal = new Discord.MessageEmbed()

   .setTitle("Welcome to the help section!!!")
   .setDescription("React in ⚙️ to go to the ** General Information ** section\n\n React in 💻 to go to the ** general actions ** section\n\n React in 📕 to go to the rules section\n\nReact in ↩️ to return to the ** main page ** ")
   .setFooter("PleiBot")
   .setColor("#48C9B0")

   const embedgeneral = new Discord.MessageEmbed()

   .setTitle("General Information")
   .setDescription("**This Discord Bot Belongs To:**\nPleiClub\n\n**prefix**\nplei!")
   .setColor("#A65EC1")
   .setFooter("PleiBot")


   const embedcomandos = new Discord.MessageEmbed()
  
   .setTitle("General Actions")
   .setDescription("")
   .setColor("#A6E55B")
   .setFooter("PleiBot")

   const embedrules = new Discord.MessageEmbed()

   .setTitle("Rules Commands")
   .setDescription("**plei!rule1**\n\n**plei!rule2**\n\n**plei!rule3**\n\n**plei!rule4**\n\n**plei!rule5**\n\n**plei!rule6**\n\n**plei!rule7**\n\n**plei!rule8**\n\n**plei!rule9**\n\n**plei!rule10**")
   .setFooter("Any user who does not respect the rules will receive a maximum of three notices before being permanently expelled from the server")
   .setColor("#001BFF")
   
    
  
  message.channel.send(embedprincipal).then(msg =>{

    msg.react("↩️")
    msg.react("⚙️")
   
    msg.react("💻")
    msg.react("📕")
    
    msg.awaitReactions((reaction, user) => {
       if(message.author.id !== user.id) return;
       if(reaction.emoji.name === "↩️"){
         msg.edit(embedprincipal)
       }

       if(reaction.emoji.name === "⚙️"){
         msg.edit(embedgeneral)
       }
       if(reaction.emoji.name === "💻"){
         msg.edit(embedcomandos)
       }
       if(reaction.emoji.name === "📕"){
         msg.edit(embedrules)
       }
    })

  })

 }

}