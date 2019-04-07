const Discord = require('discord.js');

const client = new Discord.Client();

 

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

 

client.on('message', message => {

    if (message.content === 'ping') {
       message.reply('pong');
     client.user.setActivity("nou", {type: 'WATCHING'});
       console.log('yes!');
       }

});

client.login("NTY0MjkwMzYyMjMxODgxNzI4.XKoYHw.5jo5WJzvto_ax2RxFSdn4l4nteY");
