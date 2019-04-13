const Discord = require('discord.js');
const client = new Discord.Client();
const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  uri: `https://www.gametracker.com/server_info/45.76.63.38:27015/`,
  transform: function (body) {
    return cheerio.load(body);
  }
}; 

rp(options)
  .then(($) => {
    console.log($);
  })
  .catch((err) => {
    console.log(err);
  });


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

function updatename(){
  client.user.setActivity('Re-Imagined Networks', { type: 'STREAMING', url: 'https://www.twitch.tv/urmom'})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
}

function updateplayers(){
  client.user.setActivity('21 Players Online', { type: 'STREAMING', url: 'https://www.twitch.tv/urmom'})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
}

setInterval(updatename, 10000);
setInterval(updateplayers, 4600);

client.on('message', message => {

    if (message.content === 'ping') {
       message.reply('pong');
       rp()
    }
    if (message.content === 'yes') {
       message.reply('no');
       // Set the client user's presence
       client.user.setActivity('Re-Imagined Networks', { type: 'STREAMING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
    }

});

client.login(process.env.BOT_NEW);
