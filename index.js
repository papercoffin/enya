// Variables.
var ownerID = "655475175185448985"
const prefix = '!'

// Packages.
const fs = require('fs');
const Discord = require('discord.js')
const client = new Discord.Client({presence: {status: 'online', activity: {name: '!help'}}, disableMentions: 'everyone'})
const http = require('http')
const express = require('express')
const app = express()

// Page.
var port = (process.env.PORT || 0)
app.get('/', (req, res) => res.sendStatus(200))
app.listen(port, () => console.log('Listening at port ' + port))
setInterval(() => {http.get("https://enya-bot.herokuapp.com/SITE_URL")}, 280000)

// Retrieves command files.

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) 
{
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


// Ready.
client.once('ready', () => {console.log('---')})

// Message Event Listener.
client.on('message', message => 
{
    // Responses using if/else statements.

    // When a user sends and pastes a link to a Discord message, the bot will display it in an embed.
    if (message.content.startsWith("https://discord.com/channels/")) 
    {
        var parts = message.content.split('/'), quoteEmbed = new Discord.MessageEmbed();
        message.delete();
        client.channels.cache.get(parts[5]).messages.fetch(parts[6]).then(nMessage =>
        {
            quoteEmbed.setColor('#ffd885');
            quoteEmbed.setAuthor(nMessage.author.tag, nMessage.author.displayAvatarURL({ format: 'png', dynamic: true }));
            quoteEmbed.setDescription(nMessage.content + '\n[[Jump to Message]](' + message.content + ')');
            quoteEmbed.setImage((Array.from(nMessage.attachments.values(), x => x.url)[0]));
            quoteEmbed.setFooter(`ID: ${nMessage.id}`);
            quoteEmbed.setTimestamp(nMessage.createdAt);

            // Sends the embed.
            message.channel.send(quoteEmbed);
        });
    }
});

// Token.
client.login(process.env.TOKEN)
