module.exports = 
{
	name: 'invite',
    description: 'Invite this bot to other servers!',
    aliases: 'inv',
    
    // Methods that are executed upon calling this command.
    execute(message) 
    {
        // Creates a MessageEmbed object named 'invite'.
        const invite = new Discord.MessageEmbed();

        // Sets variables in the embed.
        invite.setColor(embedColor);
        invite.setTitle("Invite Link");
        invite.setUrl("https://discord.com/api/oauth2/authorize?client_id=805042259035815956&permissions=2081287414&scope=bot");

        // Sends the resulting embed.
        message.channel.send(invite);
	},
};