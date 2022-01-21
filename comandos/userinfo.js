const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");

module.exports = {
 name: "info",
 alias: ["Info"],

 execute (client, message, args){

   let estados = {
     "online": "en linea",
     "idle": "Ausente",
     "dnd": "no molestar",
     "offline": "Desconectado"
   };

   const member = message.mentions.members.first() || message.member;

   function formatDate (template, date){
   var tiempo = "YYYY:MM:DD:HH:mm:ss".split(":")
   date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);

   return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
   return template.split(tiempo[i]).join(item)
   }, template)
   }

   const embedInfo = new Discord.MessageEmbed()

   .setColor("RANDOM")
   .setDescription(`**información de ${member}:**`)
   .addField(`**Nombre:**`, `**${member.user.tag}**`)
   .addField(`**ID:**`, `${member.user.id}`)
   .addField(`**Se unió el:**`, formatDate("DD/MM/YYYY, a las HH:MM", member.joinedAt))
   .addField(`**Roles:**`)

  message.channel.send(embedInfo)

   

   
 }

}