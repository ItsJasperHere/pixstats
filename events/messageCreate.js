module.exports = (client, message) => {
    require(dotenv).config();
    if (message.author.bot || message.content.indexOf(process.env.PREFIX) !== 0) return;
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command.name);

    if (!cmd) return;

    cmd.run(client, message, args);
}