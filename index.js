const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
	console.log('Ready!')
});

client.on('message', (message) => {
    const channel = message.channel
    const members = channel.members
    if (shouldMute(message.content)) {
        members.forEach(member => {
            member.voice.setMute(true)
            member.voice.setDeaf(true)
        });
        message.channel.send('Shushhhhh is ON');
    } else if (shouldUnMute(message.content)) {
        members.forEach(member => {
            member.voice.setMute(false)
            member.voice.setDeaf(false)
        });
        message.channel.send('Shushhhhh is OFF');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);

const shouldMute = (messageContent) => ['/shutup', '/vaymoodu', '/muteall', 'm'].includes(messageContent)
const shouldUnMute = (messageContent) => ['/speakup', '/vaythora', '/unmuteall', 'u'].includes(messageContent)


