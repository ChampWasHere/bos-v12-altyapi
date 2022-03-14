const Discord = require("discord.js")     
const client = new Discord.Client();       
const ayarlar = require("./ayarlar.js")    
const fs = require("fs");                
require('./util/Loader.js')(client);     
//Champ?//Champ?
client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Komut Yüklenecek.`);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} Komutu Yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });//Champ?
})
//Bir Sorun olursa Ćhàmp?#1576 Kullanıcısna Ulaşabilirsiniz ID: (914879528512409650)
client.login(process.env.token)
