const util = require("../util");

module.exports = {
    name: "invite",
    aliases: ["inv"],
    exec: (msg) => {
        msg.channel.send(util.embed().setDescription("✅ | [INVITE ME](https://discord.com/api/oauth2/authorize?client_id=813364076129812480&permissions=3201024&scope=bot)"));
    }
};
