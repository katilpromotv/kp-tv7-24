const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor("RANDOM")
  .addField("**» Botun Ana Komutları**", `k!yardım = BOT Komutlarını Atar. \nk!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nk!ping = BOT Gecikme Süresini Söyler. \nk!davet = BOT Davet Linkini Atar. \nk!site  = BOT Site Linki Atar. \nk!sunucutanıt = Sunucunuzu tanıtır. \np!destekgrup = Botun destek sunucusunun davet linkini atar.`)
  .addField("**» Eğlence Komutları**",`k!gif = Gifleri gösterir.`)
  .setFooter('KP-TV Güncel Sürüm [ BETA v0.2.5 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'k!yardım [komut]'
};
