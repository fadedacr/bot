const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
//const rp = require('request-promise');
const cheerio = require('cheerio');
const Gamedig = require('gamedig');
var onlineplayers = "24/7 Imperial RP"
var darkrponlineplayers = "24/7 Imperial RP"
var map = "N/A"
var darkrpmap = "N/A"
client.on('ready', () => {
    console.log('I am ready!');
});

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
 //   console.log(`Our app is running on port ${ PORT }`);
//});

function sendrequest(){
    console.log("Sent request to server")
    Gamedig.query({
    type: 'garrysmod',
    host: '144.202.49.19',
    port: '27015'
    }).then((state) => {
        if (state.players.length == 1){
            onlineplayers = state.players.length + " Player Online"
	    map = state.map
        } else {
            onlineplayers = state.players.length + " Players Online"
	    map = state.map
        }
    }).catch((error) => {
    onlineplayers = "SERVER OFFLINE"
	map = "N/A"
    });
}

function sendrequestdarkrp(){
    console.log("Sent request to DarkRP server")
    Gamedig.query({
    type: 'garrysmod',
    host: '66.42.117.162',
    port: '27015'
    }).then((state) => {
        if (state.players.length == 1){
            darkrponlineplayers = state.players.length + " Player Online"
	    darkrpmap = state.map
        } else {
            darkrponlineplayers = state.players.length + " Players Online"
	    darkrpmap = state.map
        }
    }).catch((error) => {
    darkrponlineplayers = "SERVER OFFLINE"
	darkrpmap = "N/A"
    });
}

//client.on('guildMemberAdd', member => {
//  member.addRole("561027558423003137")
//  .then(console.log("Roled member"))
//  .catch(console.error);
//});

function updatename(){
  client.user.setActivity('24/7 Imperial RP', { type: 'STREAMING', url: 'https://www.twitch.tv/urmom'})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
}

function updateplayers(){
  client.user.setActivity(onlineplayers, { type: 'STREAMING', url: 'https://www.twitch.tv/urmom'})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
}

function sendmessage(){
    var guild = client.guilds.get('581921321446014987');
    if(guild && guild.channels.get('663172964858069022')){
        const exampleEmbed = new Discord.RichEmbed()
	    .setColor('#0099ff')
	    .setTitle('Defined Networks Server Status')
	    //.setURL('steam://connect/96.30.193.219:27015')
	    //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	    .setDescription("This displays the current server status of all of our Garry's Mod servers.")
	    .setThumbnail('https://justatestasdasd.000webhostapp.com/menu/servericon.png')
	    //.addField('Server Direct Connect', 'steam://connect/144.202.49.19:27015')
	    .addField('ImperialRP Server Status', onlineplayers)
	    .addField('DarkRP Server Status', darkrponlineplayers)
	    //.setImage('https://i.imgur.com/wSTFkRM.png')
	    .setTimestamp()
	    .setFooter('Please DM a developer if this bot breaks', 'https://justatestasdasd.000webhostapp.com/menu/config/uploads/icons/icon.png');
        guild.channels.get('663172964858069022').send(exampleEmbed);
	    console.log("Sending server status message");
    }

}

function editmessage(){
    message.channel.fetchMessages({around: '662015148671631381', limit: 1})
    .then(msg => {
        const fetchedMsg = msg.first();
        fetchedMsg.edit("test");
    });
}

client.on('messageReactionAdd', (reaction, user) => {
	console.log("detected reaction addition");
	if (reaction.message.guild.get('417421748552728587')) {
		console.log("guild");
  		if (reaction.message.channel === '417421748552728589') {
			console.log("channel");
    			if (reaction.emoji.name === "reminder_ribbon") {
				console.log("adding role");
      				const guildMember = reaction.message.guild.members.get(user.id);
      				const role = reaction.message.guild.roles.get('671533162970611722');
      				guildMember.addRole(role);
				console.log("added role");
   			}
  		}
	}
});

sendrequest(); // at init so it shows the player count for the first 100 seconds
sendrequestdarkrp();
setInterval(sendmessage, 300000);
setInterval(sendrequest, 100000);
setInterval(sendrequestdarkrp, 100000);
setInterval(updatename, 10000);
setInterval(updateplayers, 4600);

client.login(process.env.BOT_NEW);
