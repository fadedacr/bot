const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');
    client.user.setActivity("hunting down molson's hairline"); 

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.login("NTQ1NzQ3NjEwNzc0Nzk4MzM2.D0eLSA._HZORQRjPjMWcLyXCeZfPQICw7o");
