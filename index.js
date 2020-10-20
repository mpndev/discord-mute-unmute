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
        message.channel.send('Shutup; vaymoodu; mindathe');
    } else if (shouldUnMute(message.content)) {
        members.forEach(member => {
            member.voice.setMute(false)
            member.voice.setDeaf(false)
        });
        message.channel.send('പറ പറ പറ പറ');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);

const shouldMute = (messageContent) => ['/shutup', '/vaymoodu', '/muteall'].includes(messageContent)
const shouldUnMute = (messageContent) => ['/speakup', '/vaythora', '/unmuteall'].includes(messageContent)


