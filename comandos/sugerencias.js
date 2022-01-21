const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");
const db = require("megadb")
const canalsgr = new db.crearDB("suggestions")

module.exports = {
 name: "canalsgr",
 alias: ["csgr"],

 execute (client, message, args){

    
    const canal = message.mentions.channels.first()
    if(!canal) return message.channel.send("you have to **mention** a **channel**")

    message.channel.send(`perfecto!, las sugerencias serán enviadas a ${canal}`)


    canalsgr.establecer(`${message.guild.id}`, `${canal.id}`)



   

   
 }

}