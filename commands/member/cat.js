const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "cat",
        description: "sends a picture of a cat! This command won't work in a channel where the bot can't send images.",
        usage: "!cat",
        category: "member",
        accessableby: "Members",
        aliases: ["catto"]
    },
    run: async (bot, message, args) => {
   

    fetch(`http://aws.random.cat/meow`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let cEmbed = new RichEmbed()
        .setColor(cyan)
        .setAuthor(`${bot.user.username} CATS!`, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            message.channel.send(cEmbed)
            msg.delete();
        })
    }
}