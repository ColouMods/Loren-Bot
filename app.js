const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '@Loren Bot') {
    message.reply('Oh yeah the game is hardcodedly hiding those meshes for rocke_v. When you rename the car it no longer does that.');
  }
});

client.login(process.env.BOT_TOKEN);
