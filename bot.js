const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');
    //client.user.setActivity("hunting down molson's hairline"); 
    //client.user.setActivity('hunting down molsons hairline', { type: 'PLAYING' });
    client.user.setActivity('hunting down molsons hairline', { type: 'PLAYING' })
   .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
   .catch(console.error);
    //client.user.setActivity;

});

 

client.on('message', message => {

    if (message.content === 'ping') {
       console.log('yes!');
       message.reply('pong');

       }

});

client.login("NTQ1NzQ3NjEwNzc0Nzk4MzM2.D0eLSA._HZORQRjPjMWcLyXCeZfPQICw7o");
