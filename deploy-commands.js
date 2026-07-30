require("dotenv").config();

const { REST, Routes } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const commands = [
    new SlashCommandBuilder()
        .setName("smartcad")
        .setDescription("Open the SmartCAD website.")
        .toJSON()
];

const rest = new REST({ version: "10" })
    .setToken(process.env.TOKEN);

const CLIENT_ID = "1531042598813434107";
const GUILD_ID = "1471232712751845472";

async function main() {
    try {
        console.log("Registering slash commands...");

        await rest.put(
            Routes.applicationGuildCommands(
                CLIENT_ID,
                GUILD_ID
            ),
            {
                body: commands
            }
        );

        console.log("✅ Slash commands registered!");
    } catch (error) {
        console.error(error);
    }
}

main();