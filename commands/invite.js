module.exports = 
{
	name: 'invite',
	description: 'Invite this bot to other servers!',
    execute() 
    {
        const invite = new Discord.MessageEmbed()
        {
            invite.setColor('#ffd885');
            invite.setTitle("Invite Link");
            invite.setUrl("https://discord.com/api/oauth2/authorize?client_id=805042259035815956&permissions=2081287414&scope=bot");
        }
	},
};