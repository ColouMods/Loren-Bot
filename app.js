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
    if (message.content.match(/steamed hams/i) ||
        message.content.match(/aurora borealis/i) ||
        message.content.match(/oh egads/i) ||
        message.content.match(/delightfully devilish/i) ||
        message.content.match(/steamed clams/i) ||
        message.content.match(/the house is on fire/i) ||
        message.content.match(/unforgettable luncheon/i) ||
        message.content.match(/well seymour i made it/i) ||
        message.content.match(/ah superintendent chalmers/i) ||
        message.content.match(/i hope you're prepared for an/i) ||
        message.content.match(/my roast is ruined/i) ||
        message.content.match(/i were to purchase/i) ||
        message.content.match(/and disguise it as my own/i) ||
        message.content.match(/crazy explanations/i) ||
        message.content.match(/need his medications/i) ||
        message.content.match(/lame exaggerations/i) ||
        message.content.match(/trouble in town tonight/i) ||
        message.content.match(/stretching my calves/i) ||
        message.content.match(/isometric exercise/i) ||
        message.content.match(/that isn't smoke it's steam/i) ||
        message.content.match(/regional dialect/i) ||
        message.content.match(/obviously grilled/i) ||
        message.content.match(/patented skinner burgers/i) ||
        message.content.match(/steam a good ham/i) ||        
        message.content.match(/despite your directions/i)
        )
    {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
    }
    if (message.content.match(/map builder/i)) 
    {
        message.channel.sendMessage('I realize the wait for it has been tremendous and I apologize to those who have been looking forward to it.');
    return;
    }
    if (message.content.match(/Loren is the gayest/i)) 
    {
        message.channel.sendMessage('TIL.');
    }
    if (message.content.match(/piracy/i)) 
    {
        message.channel.sendMessage("Please don't discuss piracy here.");
    }
    if (message.content.match(/nocd/i)) 
    {
        message.channel.sendMessage("Using a No CD crack isn't really piracy (morally speaking at least) if you actually own the game but I'd rather we not discuss the subject in this server.");
    }
    if (message.content == '@Loren Goodwin View GitHub')   {
        message.channel.sendMessage("My GitHub link is https://github.com/ColouMods/Loren-Bot/ Wait, I don't have a Github link, I'm Loren Goodwin.");
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
