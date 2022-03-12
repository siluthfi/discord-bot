const { Client, MessageEmbed, Intents } = require("discord.js");
const { help } = require('./commands/commands.js')
const { prefix, token } = require('./config.json');

const client = new Client({ 
  intents: ["GUILDS", "GUILD_MESSAGES"],
  presence: {
    status: "online",
    activity: {
      name: `${prefix}help`,
      type: 'LISTENING'
    }
  }
});

const wait = require('node:timers/promises').setTimeout;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
		await wait(2000);
		await interaction.editReply('Pong again!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server ${interaction.guild.name}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour username: ${interaction.user.username}`);
	} else if (commandName === 'joinat') {
		await interaction.reply(`Join at ${interaction.guild.joinedAt}`);
	}
});

client.on('messageCreate', async msg => {
  switch(msg.content) {
    case '-whoareyou':
      return msg.channel.send(`${client.user.tag} :smirk:`);

    case '-confirm':
      return msg.channel.send(`**${client.user.username}** are you sure? type confirm to agree`);

    case '-ping':
      return msg.channel.send(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`);

    case '-roll':
      const count = Math.round(Math.random() * 100) + 1
      if(count == 100) {
        return msg.channel.send(`You hit ${count}! Congratulations!`);
      } else if (count == 69) {
        return msg.channel.send(`${count} :smirk:`);
      }
      return msg.channel.send(`You rolled ${count}`);

    case '-help' :
      const exampleEmbeds = new MessageEmbed(help);
      return msg.reply({ embeds: [exampleEmbeds] });
  }
  
  if(msg.content === 'do who is ari') {
    msg.reply(`:smirk:`);
  }

  if(msg.content === 'do roll help') {
    msg.channel.send('By default it will return 1-100');
  }
});

// Access token in replit
client.login(process.env.TOKEN);

// client.login(token);
