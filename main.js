const fs = require('fs-extra');
require('dotenv').config();
const { Client, Intents, Collection} = require("discord.js")
// imports
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// time
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
client.commands = new Collection();
const commands = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}
client.once('ready', () => {
	console.log(`Launched at ${dateTime}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (err) {
		console.error(err);
		return interaction.reply({content: "there was an error executing this command.", ephemeral: true});
	}
});
client.login(process.env.DISCORD_TOKEN);

