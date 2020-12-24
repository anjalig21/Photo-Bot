// General Initializations 
const Discord = require('discord.js');

const client = new Discord.Client();

const cheerio = require ('cheerio');

const request = require('request');


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

    function multiple(args){
        for ()
    }

if (command === 'image'){
    image(message, args[1]);
}
});


// object that collects randomized images from a search engine 
function image(message, args){
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + args,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }

        $ = cheerio.load(responseBody);

        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);

        if (!urls.length) {
            return;
        }


        // Send result
        message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
    });
    
}

// Token
client.login('NzkxNTI0NDg4Njg0MjQwOTQ2.X-Qanw.07WOXGyFE3psQ5xbTd-zqBFkKfw');

