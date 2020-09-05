const Discord = require("discord.js")

module.exports = {
    name: "page3",
    category: "help",
    description: "Sends a user a dm",
    usage: "ping",
    run: async (client, message, args) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle("Snomanomaly Rules")
        .setDescription("Rules")
        .setColor("RANDOM") 
        .addField("Don't be mean/rude/disrespectful to others.", "We want a safe and comfortable community here, so please treat each other with respect. This includes no racism and showing hate towards someone. Swearing is allowed but not to be used against a person. Don't shame anyone just to bring attention and cause drama. If you publicly start accusing a scammer without telling the stuff about them or doing it in general, you'll be punished, no matter if they have scammed anyone or not.")
        .addField("Please refrain from discussing controversial issues/sensitive topics such as sexuality, religion, politics.", "Any depression/suicide topics go to #🔸╎vent on the irl area. Don't cause drama of any kind. Furthermore, do not mention any illegal activity such as drugs or pirated movies, games & music.")
        .addField("No NSFW.", "This includes any kind of pornography and gore/explicit content, as well as inappropriate names, profile pictures and images.")
        .addFiled("No inappropriate usernames or avatars & impersonation of any bot/staff/member to prevent confusion.")
        .addFiled("Don't expose anyone or anyone's address, phone number, face reveal and private life information.")
        .addFiled("NO SPAMMING.", "Spam isn't only sending the same message repeatedly; it also means not to post low effort, irrelevant or inappropriate messages that have little to no meaning in the discussion. Refrain from posting meaningless messages. If you it get levels on mee6, we'll be deleting your level progress. Random emoji are cool though UwU.")
        .addFiled("NO MASS PINGING/ABUSE OF PINGS.", "Do NOT attempt time ping @ everyone or @ here. Those pings sre disabled to all members outside of the staff team. This also goes for using the notification pings multiple times. Do NOT attempt to ping the mods/admins for no reason or when they have closed dms. This also means to not harass the members of the community by dming them unnecessarly.")
        .addFiled("According on discord's TOS, people under 13 aren't allowed to have a discord account. Meaning if you are under that age, we will be kicking/banning you till and you can join back freely when you are that age.")
        .addFiled("DO NOT offer, request or  advertise REAL MONEY or REAL LIFE ITEMS for IN-GAME TRADES FOR ITEMS/PERKS on this server. It's forbidden here.")
        .addFiled("NO ALT ACCOUNTS.", "Bypassing a mute/ban with an alt will result on a permanent ban on all accounts and being reported to discord.")
        .addFiled("No hacked pokemon allowed whatsoever", " You may find them elsewhere, but not here; we do not want to be blamed if you are caught with these mons. If we find you trading/offering those mons you will be getting insta banned.")
        message.author.send(Embed); }
    }