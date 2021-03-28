const util = require("../util");

const unlisted = ["eval", "source"];
prefix=process.env.PREFIX
module.exports = {
    name: "help",
    aliases: ["h", "hp"],
    exec: (msg) => {
        const commands = msg.client.commands
            .filter(c => !unlisted.includes(c.name))
            .map(c => `\`${c.name}\``);

        const embed = util.embed()
            .setDescription(' ***Command List*** ')
            .addField(' **❯ INFO**', `My Prefix is\`${prefix}\``)
            .addField(' **❯ MUSIC[14] :**', ' `play`, `loop`, `lyrics`, `nowplaying`, `pause`, `queue`, `remove`, `resume`, `search`, `shuffle`, `skip`, `skipto`, `stop`, `volume`')
            .addField(' **❯ FILTERS & MISC[4] :**','`seek`,`move`')
            .addField(' **❯ UTILITIES[4] :**','`stats`,`invite`,`help`, `ping`')
            .setFooter(`© ${msg.guild.me.displayName}`)
            .setColor('#0cc56e')
            .setImage('https://cdn.discordapp.com/attachments/816783702968369152/818058952117583902/MOSHED-2021-3-5-23-16-57.gif') 
            .setThumbnail(msg.client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setTimestamp();

        msg.channel.send(embed);
    }
};
