const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: Discord.Intents.ALL },  partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment')
require('moment-duration-format')

const commands = client.commands = new Discord.Collection();
const aliases = client.aliases = new Discord.Collection();

fs.readdirSync('./commands', {encoding: 'utf8'}).filter(file => file.endsWith(".js")).forEach((files) => {
  let command = require(`./commands/${files}`);
  commands.set(command.name, command);
})

const prefix = "?" // değiştirebilirsin

client.on('ready',() => {
  console.log("I'm Ready!")
  client.user.setStatus("dnd")
  client.user.setActivity("ewing tarafından kodlandım", {type: 'PLAYING'})
})

 client.on('message', async function(message){

    if(!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    var cmd = client.commands.get(args.shift())
    if(cmd) {
      cmd.run(client, message, args);
    }
})

client.on('message', message => {
    if(db.get(`tagalanarol_${message.guild.id}`)){
     let data = db.get(`tagalanarol_${message.guild.id}`);
     if(message.author.username.toLowerCase().includes(data.tag)){
       message.member.roles.add(data.rol)
     } else {
       if(message.member.roles.cache.has(data.rol)){
         message.member.roles.remove(data.rol)
       }
     }
    }
  })

client.login('token kanka')