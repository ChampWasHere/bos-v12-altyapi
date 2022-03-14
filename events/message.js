const ayarlar = require('../ayarlar.js');  //Champ?
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {//Champ?
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {  //Champ?
    cmd = client.commands.get(client.aliases.get(command));
  };//Champ?
  if (cmd) {
    if(!message.guild) {
      if(cmd.config.guildOnly === true) {//Champ?
        return;
      };
    };//Champ?
    if (cmd.config.permLevel) {
      if(cmd.config.permLevel === "BOT_OWNER") {
   if(!ayarlar.geliştiriciler.includes(message.author.id)) {
        message.channel.send(`Bu komutu kullanabilmek için \`${cmd.config.permLevel}\` yetkisine sahip olmalısın.`).then(msg => msg.delete({timeout: 3000}));
        return;
   }//Champ?
      }
        if(!message.member.hasPermission(cmd.config.permLevel)) {
      message.channel.send(`Bu komutu kullanabilmek için \`${cmd.config.permLevel}\` yetkisine sahip olmalısın.`).then(msg => msg.delete({timeout: 3000}));
     return;
      };
    };
    cmd.run(client, message, params);
};
};//Champ?