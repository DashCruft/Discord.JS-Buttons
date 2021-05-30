const Discord = require('discord.js');
const bot = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const config = require('./settings.json');
const {
  loadCommands
} = require('./utils/loadCommands');
require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Map()
bot.disbut = require('discord-buttons')(bot);

bot.on('clickButton', async (button) => {
  if (button.id === 'amogus') {
		await button.defer();
    button.channel.send(`<:AMOGUS:848317305090867261>`);
 }
});

loadCommands(bot);
bot.login(config.token);
