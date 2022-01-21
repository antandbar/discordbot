const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed }= require("discord.js");
const db = require("megadb")
const cosa = new db.crearDB("suggestions")

module.exports = {
 name: "suggest",
 alias: ["Suggest"],

async execute (client, message, args){

  const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}` )
  const canalsugerencias = client.channels.cache.get(canal)

const usuario = message.author

  const sugerencia = args.join(" ")
  if(!sugerencia) return message.channel.send("You have to suggest something")

  const suggestembed = new Discord.MessageEmbed()

  


  .setTitle("New suggestion")
  .setAuthor(usuario.tag, message.author.displayAvatarURL())
  .setDescription(`${sugerencia}`)
  .setColor("RANDOM")
  .setFooter("If you want to suggest something just type: plei!suggest")


  const confirmembed = new Discord.MessageEmbed()

  .setTitle("everything is good")
  .setDescription("The suggestion has been sended to the staff")
  .setColor("RANDOM")
  .setFooter("if you want to suggest something too just type: plei!suggest")

  message.channel.send(confirmembed)

  canalsugerencias.send(suggestembed).then(async msg => {
    await msg.react("✅")
    await msg.react("❌")
  })

   

   
 }

}