import Redis from "ioredis";
import config from ".";

// kalau Redis ada password, tambahkan { password: "xxx" }
const redis = new Redis({
  host: config.REDIS_HOST,
  port: Number(config.REDIS_PORT),
});

redis.on("connect", () => console.log("Redis connected"));
redis.on("error", (err) => console.error("Redis error", err));

export default redis;
