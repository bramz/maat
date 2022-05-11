import { BaseCommandInteraction, Client } from "discord.js";
import { SlashCommand } from "core/interfaces/command";

export const test: SlashCommand = {
    name: "test",
    description: "Returns a test message.",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Testing message complete...";
        console.log(client)

        await interaction.followUp({
            ephemeral: true,
            content,
        });
    }
};