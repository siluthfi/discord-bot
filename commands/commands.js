const help = require('./help');
const { prefix } = require('../config.json')
const maped = Object.keys(help).map(arr => {
    return {
        name: `${prefix}${arr}`,
        value: help[arr].description
    }
});

const commands = {
  help: {
    title: "**HELP MENU**",
    color: 10181046,
    description: "This is a description guide for commands",
    fields: maped
  },
  quiz: [
    {},
  ]
}

module.exports = commands