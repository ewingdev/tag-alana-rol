const {MessageEmbed} = require('discord.js')
const db = require("quick.db")

module.exports = {
   name: 'tag-alınca-rol',
   run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
     
     if(args[0] === "ayarla") {
     let rol = message.mentions.roles.first()  
    const hata = new MessageEmbed()
     .setColor("#3f007f")
     .setAuthor("Ewing", "https://cdn.discordapp.com/avatars/873192637438496768/470a265ff53ee284ad266a4e05f41253.webp?size=4096")
     .setDescription(`** | Yanlış Kullanım ?tag-alınca-rol ayarla @rol tagınız**`)
     .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      if(!rol && !args[2]) return message.channel.send(hata) 
       
       db.set(`tagalanarol_${message.guild.id}.rol`, rol.id)
        db.set(`tagalanarol_${message.guild.id}.tag`, args[2])
       
       const ewing = new MessageEmbed()
        .setColor("#3f007f")
        .setAuthor("Ewing", "https://cdn.discordapp.com/avatars/873192637438496768/470a265ff53ee284ad266a4e05f41253.webp?size=4096")
        .setDescription(`** | ${args[2]} Tagını Alınca \`${rol.name}\` Rolü Verilecek**`)
        .setFooter(`🔮 Tüm Hakları Saklıdır.`)
       return message.channel.send(ewing)
     }
     
     if(args[0] === "sıfırla") {
       db.delete(`tagalanarol_${message.guild.id}`)
       const ewing = new MessageEmbed()
        .setColor("#3f007f")
        .setAuthor("Ewing", "https://cdn.discordapp.com/avatars/873192637438496768/470a265ff53ee284ad266a4e05f41253.webp?size=4096")
        .setDescription(`** | Tag Alınca Rol Verme Sistemi Deaktif Edildi**`)
        .setFooter(`🔮 Tüm Hakları Saklıdır.`)
      return message.channel.send(ewing)
     }
     
    const ewing = new MessageEmbed()
     .setColor("#3f007f")
     .setAuthor("Ewing", "https://cdn.discordapp.com/avatars/873192637438496768/470a265ff53ee284ad266a4e05f41253.webp?size=4096")
     .setDescription(`** | Yanlış Kullanım ?tag-alınca-rol ayarla/sıfırla**`)
     .setFooter(`🔮 Tüm Hakları Saklıdır.`)
    if(!args[0])  return message.channel.send(ewing)
   }
}
