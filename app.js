const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '@Loren Goodwin')   {
        message.channel.sendMessage('Oh yeah the game is hardcodedly hiding those meshes for rocke_v. When you rename the car it no longer does that.');
    }
    if (message.includes('steamed hams')) {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
