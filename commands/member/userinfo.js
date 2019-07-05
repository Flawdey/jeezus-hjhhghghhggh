const { RichEmbed } = require("discord.js")
const { green_light } = require("../../colours.json");
const moment = require('moment');

module.exports = {
    config: {
        name: "userinfo",
        description: "Pulls the userinfo of yourself or a user!",
        usage: "!userinfo (@mention), or just !userinfo",
        category: "member",
        accessableby: "Members",
        aliases: ["ui"]
    },
    run: async (bot, message, args) => {

        let user;

        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        const member = message.guild.member(user);

    let uEmbed = new RichEmbed()
        .setColor(green_light)
        .setTitle("User Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username:**", `${user.username}`, true)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField("**Discriminator:**", `${user.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Joined server:**", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField("**Created At:**", `${message.author.createdAt}`, true)
        .addField("**Roles:**", member.roles.map(roles => `${roles.name}`).join(', '), true)
        .setFooter(`:) | Replying to ${message.author.username}`, bot.user.displayAvatarURL);

    message.channel.send(uEmbed);
    }
}
