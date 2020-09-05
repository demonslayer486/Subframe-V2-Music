/* const {ShardingManager} = require("discord.js");
const config = require("./config.json"); // Optional
 
const shards = new ShardingManager("./index.js", {
    token: "NzQ2MTQyMDIzMjMyNTIwMjQ0.Xz8A6A.Zc3--w7WDj059i4KwQKhYW3Gw-A", // If your token was inside .env, use process.env
    totalShards: "auto"
});
 
shards.on("shardCreate", shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});
 
shards.spawn(shards.totalShards, 10000);*/   // For safety reason, try to use 10 seconds to respawn the shard. CCC