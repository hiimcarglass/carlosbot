const Discord = require('discord.js');
const client = new Discord.Client();
const art = require('ascii-art');

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {

  if (msg.content === '!ascii') {

    art.font ("Demo!","Doom",function(rendered){

      console.log(rendered);
      msg.channel.send(rendered);

    })

  }

});

client.login('NDMzNzU0MzM4MzQ3OTc0NjU2.DeW7OA.qikYv8sGm2rMF8Vm9k5TN_OshL4');
