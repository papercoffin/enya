module.exports = 
{
	name: 'ping',
	description: 'Ping! Check if the bot is online and responsive!',
    execute() 
    {
	    message.channel.send('Pong!');
	},
};