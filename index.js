const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (message) => {
    const channel = message.channel
    const members = channel.members
    if (shouldMute(message.content)) {
        members.forEach(member => {
            if (member.voice.channel) {
                member.voice.setMute(true)
                member.voice.setDeaf(true)
            }
        });
        message.channel.send('All members are muted');
    } else if (shouldUnMute(message.content)) {
        members.forEach(member => {
            if (member.voice.channel) {
                member.voice.setMute(false)
                member.voice.setDeaf(false)
            }
        });
        message.channel.send('All members are unmuted');
    }
});

const shouldMute = (messageContent) => ['/shutup', '/vaymoodu', '/muteall', 'm'].includes(messageContent)
const shouldUnMute = (messageContent) => ['/speakup', '/vaythora', '/unmuteall', 'u'].includes(messageContent)

client.login(process.env.DISCORD_BOT_TOKEN);
