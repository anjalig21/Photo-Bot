// General Initializations 
require('dotenv').config();
const func_img = require('./Functions/func_img.js')
const Discord = require('discord.js');
const client = new Discord.Client();

// Looks for '!' in order to allow a command 
const prefix = '!';

// Outputs 'Discord Bot is online!' when online
client.once('ready', () => {
    console.log('Discord Bot is online!');
});

// Different Commands 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    
    const command = args[0];

    response_text = "";

    for (var i = 1; i < args.length; i++){
        response_text = response_text + " " + args[i];
    }

    if (command === 'image'){
        func_img.image(message, response_text);
    }
});

// Token
client.login(process.env.TOKEN);

