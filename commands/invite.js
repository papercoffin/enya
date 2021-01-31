module.exports = 
{
	name: 'invite',
    description: 'Invite this bot to other servers!',
    aliases: 'inv',
    
    // Parameters passed into the methods being executed.
    execute(message, embed) 
    {
        // Sets variables in the embed.
        embed.setColor(embedColor);
        embed.setTitle("Invite Link");
        embed.setUrl("https://discord.com/api/oauth2/authorize?client_id=805042259035815956&permissions=2081287414&scope=bot");

        // Sends the resulting embed.
        message.channel.send(embed);
	},
};