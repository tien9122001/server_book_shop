const redis = require("redis");

const PORT = process.env.REDIS_PORT;
const HOST = process.env.REDIS_HOST;

// const client = redis.createClient({
//     socket: {
//         host: HOST,
//         port: PORT
//     }
// });

const client = redis.createClient({
  url: process.env.REDIS_URI,
});
client.connect();
client.on("error", (err) => console.log("Redis Client Error", err));
client.on("connect", (err) => console.log("Connect Redis server"));
client.ping((err, pong) => console.log(pong));

module.exports = client;
