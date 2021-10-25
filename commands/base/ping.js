module.exports = {
    name: "ping",
    description: "command used to test server delay",
    execute(message, args) {
        message.channel.send('Pong! Detecting ping...')
        var ping = Date.now() - message.createdTimestamp;
        message.channel.send(`Message Latency is ${ping}ms.`);
        message.channel.send(`API Latency is ${Math.round(client.ws.ping)}ms.`)
    }
}