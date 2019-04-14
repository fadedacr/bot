const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
//const rp = require('request-promise');
const cheerio = require('cheerio');
const Gamedig = require('gamedig');
var onlineplayers = "? Players Online"
client.on('ready', () => {

    console.log('I am ready!');
    //client.user.setActivity("hunting down molson's hairline"); 
    //client.user.setActivity('hunting down molsons hairline', { type: 'PLAYING' });
    //client.user.setActivity("nou", {type: 'WATCHING'});
   // client.user.setActivity('hunting down molsons hairline', { type: 'PLAYING' })
   //.then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  // .catch(console.error);
    //client.user.setActivity;

});

function sendrequest(){
    console.log("Sent request to server")
    Gamedig.query({
    type: 'garrysmod',
    host: '45.76.63.38',
    port: '27015'
    }).then((state) => {
    onlineplayers = state.players.length + " Players Online"
    }).catch((error) => {
    onlineplayers = "0 Players Online"
    });
}

client.on('message', message => {
  if (message.content === 'asdfasbrqw4512412qred!') {
    //message.guild.leave();
    const embed = new Discord.RichEmbed()
      .setTitle("Re-Imagined Networks | DARKRP | $50000 START | HIRING ADMINS")
      .setColor("BLUE")
      .setThumbnail("https://files.gamebanana.com/img/ss/maps/55ec8835dbbb3.jpg")
      .setDescription("steam://connect/45.76.63.38:27015");
    message.channel.send(embed);
  }
});

function updatename(){
  client.user.setActivity('Re-Imagined Networks', { type: 'STREAMING', url: 'https://www.twitch.tv/urmom'})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
}

function updateplayers(){
  client.user.setActivity(onlineplayers, { type: 'STREAMING', url: 'https://www.twitch.tv/urmom'})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
}

setInterval(sendrequest, 100000)
setInterval(updatename, 10000);
setInterval(updateplayers, 4600);

client.login(process.env.BOT_NEW);
