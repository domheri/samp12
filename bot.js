const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("551710400186417155")
setInterval(function() {
channel.send(`انا بحب اصحابي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
