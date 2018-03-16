const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '@Loren Goodwin') {
        channel.send('test')
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error);
    	//message.reply('');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
