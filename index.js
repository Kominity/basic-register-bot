const Discord = require("discord.js");
const client = new Discord.Client();
const mesajlar = require("mesajlar.json");
const config = require("config.json");

client.on("ready", () => {
    console.log("Bot ba�lat�ld�!");
});

client.login(config.token);