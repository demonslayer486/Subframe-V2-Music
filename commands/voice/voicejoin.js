  module.exports = {
  name: "voicejoin",
  category: "moderation",
    category: "voice",
  run: async (client, message, args) => {
    
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
    
  }
 