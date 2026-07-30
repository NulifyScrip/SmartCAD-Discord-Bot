require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.once("ready", () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "smartcad") {

        const embed = new EmbedBuilder()
            .setTitle("🖥️ SmartCAD")
            .setDescription("Click the link below to open SmartCAD.")
            .setURL("https://nulifyscrip.github.io/SmartCAD/")
            .setColor("#5865F2")
            .setFooter({
                text: "SmartCAD"
            });

        await interaction.reply({
            embeds: [embed]
        });
    }
});

client.login(process.env.TOKEN);