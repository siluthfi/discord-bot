const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');

// const commands = [
// 	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
//       .addStringOption(option => option.setName('input').setDescription('Enter a string')),
// 	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
// 	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
// 	new SlashCommandBuilder().setName('joinat').setDescription('Replies with join info!'),
// 	new SlashCommandBuilder().setName('confirm').setDescription('Testing confirm with 3 seconds timeout!'),
// ]
// 	.map(command => command.toJSON());

const commands = [
  {
    name: 'ping',
    description: 'Replies with pong!'
  },
  {
    name: 'server',
    description: 'Replies with server info!'
  },
  {
    name: 'user',
    description: 'Replies with user info!'
  },
  {
    name: 'joinat',
    description: 'Replies with join info!'
  },
  {
    name: 'confirm',
    description: 'Testing confirm with 3 seconds timeout!'
  },
]

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);