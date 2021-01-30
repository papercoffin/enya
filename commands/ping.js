module.exports = 
{
	name: 'ping',
	description: 'Ping! Check if the bot is online and responsive!',
    execute(message) 
    {
	    message.channel.send('Pong!');
	},
};