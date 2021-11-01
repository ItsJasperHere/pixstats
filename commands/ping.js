exports.run = (client, message, args) => {
    currentUTC = new Date();
    currentDate = currentUTC.getFullYear() + "-" + currentUTC.getMonth() + "-" + currentUTC.getDate();
    currentTime = currentUTC.getHours() + ":" + currentUTC.getMinutes() + ":" + currentUTC.getSeconds();

    message.channel.send(`Current Date and Time: ${currentDate + "        " + currentTime} \n Bot Latency is ${Date.now() - message.createdTimestamp}ms`)
}