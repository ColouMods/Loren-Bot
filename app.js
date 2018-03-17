const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(message.author.bot) return;
    if (message.content === '@Loren Goodwin')   {
        message.channel.sendMessage('Oh yeah the game is hardcodedly hiding those meshes for rocke_v. When you rename the car it no longer does that.');
    }
    if (message.content.match(/steamed hams/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/aurora borealis/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/oh egads/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/delightfully devilish/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    } 
    if (message.content.match(/steamed clams/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/the house is on fire/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/unforgettable luncheon/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/well seymour i made it/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/despite your directions/i)) 
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/seymore/i)) 
    {
        message.channel.sendMessage('*Seymore*...What are you, fucking gay?');
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
