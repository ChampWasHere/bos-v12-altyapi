const Discord = require("discord.js");
const ayarlar = require('../ayarlar.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "PLAYING", name: `Champ? Boş Altyapı`}, status: 'dnd' })
};

//Champ?
// Status
// online - Çevrimiçi
// idle - Boşta
// dnd - Rahatsız Etmeyin
//Champ?
// Type
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR
//Champ?
// Name
//Champ?
// "Champ? Boş Altyapı" Yazan Kısıma İstediğiniz Oynuyor Durumunu Yazabilirsiniz 
