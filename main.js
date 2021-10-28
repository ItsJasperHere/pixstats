// imports
const express = require('express');
const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
const fs = require('fs-extra');
const chalk = require('chalk');
const mongoose = require('mongoose');
var validator = require('validator');
require('dotenv').config();
// imports
const { Client, Intents, Collection} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
client.commands = new Collection();
console.log("Launching..");
// discordjs inititialization
client.once('ready', () => {
    console.log(`Bot up at ${Date.getFullYear() + "-" + Date.getMonth() + "-" + Date.getDate() + "\n" + Date.getHours() + ":" + Date.getMinutes()}`)
})
client.commands = new Discord.Collection();

const events = fs.readdirSync("./events")
client.login(process.env.DISCORD_TOKEN);

