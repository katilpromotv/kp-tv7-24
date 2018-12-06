const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Destek Sunucusu Komutu")
  .setDescription('')
  .setColor("RANDOM")
  .addField("**» Destek Sunucum**", "https://discord.gg/fGNYY48")
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
  aliases: ['destek-grup', 'supportgroup'],
  permLevel: 0
};

exports.help = {
  name: 'destekgrup',
  description: 'Botun destek sunucusunun davet linkini atar.',
  usage: 'k!destekgrup'
};
