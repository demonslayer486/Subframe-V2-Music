const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema') //"../../models/warns"

module.exports = (client) => {
  client.on('message', (message) => {
    const { guild, member } = message

    addXP(guild.id, member.id, 23, message)
  })
}

// let user = message.mentions.users.first() || message.author;

const getNeededXP = (level) => level * 1000000

const addXP = async (guildId, userId, xpToAdd, message) => {
  await mongo().then(async (mongoose) => {
      
    try {
      const result = await profileSchema.updateOne(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            xp: xpToAdd,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      let { xp, level } = result
      const needed = getNeededXP(level)

      if (xp >= needed) {
        ++level
        xp -= needed

        message.reply(
          `You are now level ${level} with ${xp} experience! You now need ${getNeededXP(
            level
          )} XP to level up again.`
        )

        await profileSchema.updateOne(
          {
            guildId,
            userId,
          },
          {
            level,
            xp,
          }
        )
      }
    } finally {
     mongoose.connection.close() 
     // data.save();
    }
  })
}

module.exports.addXP = addXP

//`findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify`

/*
economy.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
      if(err) {
        return console.error(err);
      }
      
      addXP.findOne({Guild: message.guild.id, User: user.id}, async (err, data) => {
      if(err) {
        return console.error(err);
      }
      
      const addXP = async (guildId, userId, xpToAdd, message) => {
  await mongo().then(async (data) => {
    try {
      
      addXP
*/

/*
const mongo = require('./mongo')
const profileSchema = require('./schemas/profile-schema')

module.exports = (client) => {
  client.on('message', (message) => {
    const { guild, member } = message

    addXP(guild.id, member.id, 23, message)
  })
}

const getNeededXP = (level) => level * level * 100

const addXP = async (guildId, userId, xpToAdd, message) => {
  await mongo().then(async (mongoose) => {
    try {
      const result = await profileSchema.findOneAndUpdate(
        {
          guildId,
          userId,
        },
        {
          guildId,
          userId,
          $inc: {
            xp: xpToAdd,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      let { xp, level } = result
      const needed = getNeededXP(level)

      if (xp >= needed) {
        ++level
        xp -= needed

        message.reply(
          `You are now level ${level} with ${xp} experience! You now need ${getNeededXP(
            level
          )} XP to level up again.`
        )

        await profileSchema.updateOne(
          {
            guildId,
            userId,
          },
          {
            level,
            xp,
          }
        )
      }
    } finally {
      mongoose.connection.close()
    }
  })
}

module.exports.addXP = addXP updateMany
*/