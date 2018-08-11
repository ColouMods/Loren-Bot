const Discord = require('discord.js');
const client = new Discord.Client();

//var willChannel;
client.on('ready', () => {
    console.log('I am ready!');
    //willChannel = client.channels.find('id', '422215368782643202');
    var update = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[update.getMonth()];
    var year = update.getFullYear();
    //client.channels.get('447499927220781068').sendMessage("Hey everyone, this is Loren Bot from Donut Team. Welcome to the " + month + " " + year + " Loren Bot Update.");
    client.user.setStatus('dnd');
	setTimeout(() => { 
		client.user.setStatus('online');
	}, 1000);
    return;
        
});
//message.channel.sendMessage('content',{tts: true});
client.on('message', message => {
    if (message.author.bot) return;

    /*if (message.content.match(/ /i))
 	var bored = new Date();
 	var minute = bored.getMinutes();
 	var second = bored.getSeconds();
 	var second2;
 	if (second2 > second && minute != bored.getMinutes)
     {
     message.channel.sendMessage("bored");
     var second = bored.getSeconds();
     var second2 = second;
     });*/
    if (message.content.match(/spider/i)) {
        message.channel.sendMessage("<@" + message.author.id + "> pls actually never talk about spiders again lol");
        message.channel.sendMessage("Spiders are fucking spoopy man");
        return;
    }
    if (message.content.match(/loren you useless piece of shit/i)) {
        message.channel.sendMessage("I was gone for 10 minutes and everything is on fire.");
        return;
    }
    if (message.content.match(/the car fucks up there badly/i)) {
        message.channel.sendMessage("nope");
        return;
    }
    if (message.content.match(/( ͡° ͜ʖ ͡°)/i)) {
        message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
        message.channel.sendMessage('I have a dedicated button on my mouse for that face.');
        return;
    }
    if (message.content.match(/siivagunner/i) ||
        message.content.match(/silvagunner/i) ||
        message.content.match(/please read the channel description/i)
    ) {
        message.channel.sendMessage(':ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes::ok_hand::eyes: good shit go౦ԁ sHit:ok_hand: thats :heavy_check_mark: some good:ok_hand::ok_hand:shit right:ok_hand::ok_hand:there:ok_hand::ok_hand::ok_hand: right:heavy_check_mark:there :heavy_check_mark::heavy_check_mark:if i do ƽaү so my self :100: i say so :100: thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ:100: :ok_hand::ok_hand: :ok_hand:НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ:ok_hand: :ok_hand::ok_hand: :ok_hand: :100: :ok_hand: :eyes: :eyes: :eyes: :ok_hand::ok_hand:Good shit');
        return;
    }
    if (message.content.match(/g2a/i)) {
        message.channel.sendMessage("G2A is incredibly sketchy and I wouldn't put my money anywhere near that website.");
        return;
    }
    if (message.content.match(/slippery hill/i)) {
        message.channel.sendMessage("pls explain slippery hill joke");
        setTimeout(() => {
            message.channel.sendMessage("^ there's a good line for Loren Bot whenever anyone says that.");
            message.channel.sendMessage("Not what I originally intended since I JUST WANT TO UNDERSTAND but I realized it could work for that.");
        }, 2000);
        return;
    }
    if (message.content.match(/80s cars mixed/i) ||
        message.content.match(/80's cars mixed/i) ||
        (message.content.match(/ecto/i) && message.content.match(/delorean/i))
    ) {
        message.channel.sendMessage("Ghostbusters/BTTF crossover when.");
        return;
    }
    if (message.content.match(/rms/i))
    {
        message.channel.sendMessage("RMS files are scary so we don't really know how to do anything beyond what I told you at the moment.");
        return;
    }
    if (message.content.match(/steamed hams/i) ||
        message.content.match(/aurora borealis/i) ||
        message.content.match(/northern lights/i) ||
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
        message.content.match(/disguise it as my own/i) ||
        message.content.match(/crazy explanations/i) ||
        message.content.match(/need his medications/i) ||
        message.content.match(/lame exaggerations/i) ||
        message.content.match(/trouble in town tonight/i) ||
        message.content.match(/stretching my calves/i) ||
        message.content.match(/isometric exercise/i) ||
        message.content.match(/that isn't smoke it's steam/i) ||
        message.content.match(/upstate new york/i) ||
        message.content.match(/albany expression/i) ||
        message.content.match(/regional dialect/i) ||
        message.content.match(/obviously grilled/i) ||
        message.content.match(/patented skinner burgers/i) ||
        message.content.match(/what is happening/i) ||
        message.content.match(/at this time of year/i) ||
        message.content.match(/at this time of day/i) ||
        message.content.match(/in this part of the country/i) ||
        message.content.match(/localized entirely within your kitchen/i) ||
        message.content.match(/steam a good ham/i) ||
        message.content.match(/despite your directions/i)
    ) {
        message.channel.sendMessage('Can we cool it on the constant Steamed Hams references in this chat?');
        return;
    }
    //greeting code

    if (message.content.match(/hi loren/i)) {
        message.channel.sendMessage("Hi.");
    }
    if (message.content.match(/fat tony be released/i) || message.content.match(/fat tony come out/i) || message.content.match(/fat tony will come out/i) || message.content.match(/fat tony will be released/i)) {
        message.channel.sendMessage("Sometime.");
    }
    if (message.content.match(/cappy/i)) {
        message.channel.sendMessage("If you're one of those people that doesn't care to shop at GameStop, there's probably similar hats online somewhere.");
    }
    if (message.content.match(/destroy skinner/i)) {
        message.channel.sendMessage("This scene but Skinner instead of the printer.");
        message.channel.sendMessage("https://www.youtube.com/watch?v=N9wsjroVlu8");
    }
    if (message.content.match(/s t e a m e d h a m s/i)) {
        message.channel.sendMessage("Why");
    }
    if (message.content.match(/barney ate milhouse again/i)) {
        message.channel.sendMessage("`again`");
    }

    //This is basic content searching
    if (message.content.match(/status/i) || message.content.match(/update/i)) {
        var update = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = months[update.getMonth()];
        var year = update.getFullYear();
        message.channel.sendMessage("Hey everyone, this is Loren from Donut Team. Welcome to the " + month + " " + year + " Status Update.");
        return;
    }
    if (message.content.match(/spaghetti/i) ||
        message.content.match(/meatballs/i) ||
        message.content.match(/pasta/i) ||
        message.content.match(/rice/i) ||
        message.content.match(/ice cream/i) ||
        message.content.match(/pizza/i) ||
        message.content.match(/oh wow i am not a healthy person/i) ||
        message.content.match(/taqutio/i) || //what the fuck's a taqutio?
        message.content.match(/taquito/i) ||
        message.content.match(/taco/i)) {
        message.channel.sendMessage("Fuck now I'm hungry.");
        return;
    }
    if (message.content.match(/donut mod trailer/i) || message.content.match(/trailer for donut mod/i)) {
        message.channel.sendMessage('The year 2077.');
        return;
    }
    if (message.content.match(/right channel/i) || message.content.match(/correct channel/i)) {
        message.channel.sendMessage('banned.');
        return;
    }
    if (message.content.match(/map builder/i)) {
        message.channel.sendMessage('The map builder should be out sometime this year. I realize the wait for it has been tremendous and I apologize to those who have been looking forward to it.');
        return;
    }
    if (message.content.match(/fuck road nodes/i)) {
        message.channel.sendMessage('Also I have to stop referring to them as "Road Nodes" since the actual name is just "Roads"');
        message.channel.sendMessage('Which is confusing but its the official name for that chunk type.');
        return;
    }
    if (message.content.match(/fucking game gets crash/i)) {
        message.channel.sendMessage("Calm down.");
        return;
    }
    if (message.content.match(/splatoon/i)) {
        message.channel.sendMessage("I want to play Splatoon.");
        message.channel.sendMessage("I'm going to play Splatoon.");
        return;
    }
    if (message.content.match(/map/i)) {
        message.channel.sendMessage("Yeah that map is insanely cool and it'd be totally bonkers to have something like that in SHAR.");
        return;
    }
    if (message.content.match(/launcher/i)) {
        message.channel.sendMessage("Our Mod Launcher includes a hack called *Modern Computer Support* that does some stuff to the game to make it work much closer to how it's supposed to on modern versions of Windows.");
        return;
    }
    if (message.content.match(/Loren is the gayest/i)) {
        message.channel.sendMessage('TIL.');
        return;
    }
    if (message.content.match(/piracy/i)) {
        message.channel.sendMessage("Please don't discuss piracy here.");
        return;
    }
    if (message.content.match(/road/i)) {
        message.channel.sendMessage("Making new roads with the map builder is pretty easy.");
        return;
    }
    if (message.content.match(/sketchup/i) || message.content.match(/3d model/i)) {
        sketchNum = (Math.floor(Math.random() * 2) + 1);
        if (sketchNum == 1) {
            message.channel.sendMessage("SketchUp. I have a love/hate relationship with that software.");
            message.channel.sendMessage("Or is it more like tolerate/hate?");
            message.channel.sendMessage("I'm not sure.");
        } else {
            message.channel.sendMessage("*indistinct growling noises*");
        }
    }
    if (message.content.match(/nocd/i) || message.content.match(/no cd/i) || message.content.match(/crack/i)) {
        message.channel.sendMessage("Using a No CD crack isn't really piracy (morally speaking at least) if you actually own the game but I'd rather we not discuss the subject in this server.");
        return;
    }
    if (message.content.match(/loren is a girls name/i) || message.content.match(/loren is a her name/i)) {
        message.channel.sendMessage("I'm a guy lol");
        return;
    }
    //STUPID EASTER EGGS, SPECIFIC CASES
    if (message.content.match(/When Donut Mod 4 is revealed as a suppository, there will be ass activity./i) || message.content.match(/ass activity/i)) {
        message.channel.sendMessage("That's an impressive level of shock factor in that message.");
        return;
    }
    if (message.content.match(/loren is my sugar daddy/i)) {
        message.channel.sendMessage("http://i.imgur.com/3PFqxIp.gifv");
        return;
    }

    //This is his mention code
    if (message.content.match(/@loren goodwin/i))
        if (message.content.match(/view github/i)) {
            message.channel.sendMessage("My GitHub link is https://github.com/ColouMods/Loren-Bot/ Wait, I don't have a Github link, I'm Loren Goodwin.");
        }
    else if (message.content.match(/quote the lion king/i)) {
        message.channel.sendMessage("I've never seen the Lion King.");
    } else if (message.content.match(/how many screenshots/i)) {
        message.channel.sendMessage("Yeah I have 13,478 screenshots in my dropbox lol");
        setTimeout(() => {
            message.channel.sendMessage("That's like 5 years worth of screenshots.");
            message.channel.sendMessage("That's an average of 7.38 screenshots per day.");
        }, 2000);
    } else if (message.content.match(/How do I make Colou into a transparent wheel?/i)) {
        message.channel.sendMessage("You don't.");
    } else if (message.content.match(/wheels/i) || message.content.match(/transparent/i)) {
        message.channel.sendMessage("Oh yeah the game is hardcodedly hiding those meshes for rocke_v. When you rename the car it no longer does that.");
    } else if (message.content.match(/crash/i)) {
        message.channel.sendMessage("Sweet jesus.");
        message.channel.sendMessage("Yeah that sounds scary and I don't really know what the hell is going on there.");
    } else if (message.content.match(/what is your name?/i)) {
        message.channel.sendMessage("My name is Loren Bot#6687.");
    } else if (message.content.match(/works now/i)) {
        message.channel.sendMessage("ok cool");
    } else if (message.content.match(/yo whaddup my brotato can you go ahead and ask me to try out that condition now fo shizzle/i)) {
           message.channel.sendMessage("<@" + message.author.id + "> yo whaddup my brotato can you go ahead and try out that condition now fo shizzle");
    } else if (message.content.match(/having a stroke/i)) {
        message.channel.sendMessage("Who isn't?");
    } else if (message.content.match(/goodnight/i)) {
        nightNum = (Math.floor(Math.random() * 2) + 1);
        if (nightNum == 1) {
            message.channel.sendMessage("Night night.");
        } else {
            message.channel.sendMessage("Nighty night, sweet dreams.");
        }
    } else if (message.content.match(/goodjgifgt/i)) {
        nightNum = (Math.floor(Math.random() * 2) + 1);
        if (nightNum == 1) {
            message.channel.sendMessage("Nightyadgfg.");
        } else {
            message.channel.sendMessage("Nightyadhgfg.");
        }
    } else if (message.content.match(/greasy dinosaur bastard/i)) {
        message.channel.sendMessage("I feel like it's less authentic if the bot of me says stuff you explicitly asked me to say.");
    } else {
        message.channel.sendMessage("Hm?");
    }
  return;
});

client.on('message', message => {
randNum = (Math.floor(Math.random() * 100)+1);
    if (randNum == 1)
    {
        message.channel.sendMessage("My imagination stopped working during the war of 1812 where I was a fireman for the British regime who wanted to overthrow their own parliament in favour of a Nazi propaganda spewing lunatic who had eaten all of the ham sandwiches in the regimes breakroom during a different unrelated war a year prior.");
    }
});

client.on('message', message => {
randNum = (Math.floor(Math.random() * 100)+1);
    if (randNum == 1)
    {
        message.channel.sendMessage("<@" + message.author.id + "> yo whaddup my brotato can you go ahead and try out that condition now fo shizzle");
    }
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
