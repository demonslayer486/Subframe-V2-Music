const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "cat",
  description: "Get a cat",
  category: "fun",
  run: async (bot, message, args) => {
    let subreddits = ["JellyBeanToes", "CatsStandingUp", "CatsonGlass", "Cats", "Kittens", "CatLoaf", "CatsInBusinessAttire", "TuckedInKitties", "Meow_Irl", "CatsInSinks", "Blep", "StartledCats", "CatPranks", "StuffonCats", "Floof", "CatHighFive", "LOLCats", "MildlyStartledCats", "CatPictures", "CatsvsTechnology", "CatCircles", "CatBellies", "CatReddit", "FromKittenToCat", "CatPics", "Catwallpapers", "SupermodelCats", "SneezingCats", "CatsLookingSeductive", "WhatsWrongWithYourCat", "BarnCat", "KittyHugs", "Unorthocat", "Cathletes", "CatWiggle", "purrkour", "Hovercat", "catsbeingjerks", "scrungycats", "FearlessCats", "catsdoinganything", "CatsSmellingThings", "catculations", "CatConspiracy", "catlogic", "FierceCats", "catsbeingbros", "LazyCats", "DrillCats", "catplops", "HoldMyMilk", "CatKicks", "CatsHiding", "MostInterestingCats", "EvilCats", "CatsAreMetal", "catfreakouts", "catburnouts", "CatsAreAssholes", "Chonkers"];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length - 1)];
    let img = await api(subreddit);
    const Embed = new MessageEmbed()
      .setTitle(`A dog from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};