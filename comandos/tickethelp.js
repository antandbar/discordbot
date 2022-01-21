const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "tickethelp",
 alias: ["Tickethelp"],

 execute (client, message, args){

   var perms = message.member.hasPermission("ADMINISTRATOR")
    if (!perms) return message.channel.send("you have no **permissions**")

   const tickethelp = new Discord.MessageEmbed()

   .setTitle("WELCOME TO THE TICKET SECTION AND CONGRATULATIONS!!!")
   .setDescription("To open a ticket just type: **plei!ticket**")
   .setFooter("Remember to be respectfull with the staff")
   .setColor("#D500FF")

   message.channel.send(tickethelp)

   

   
 }

}