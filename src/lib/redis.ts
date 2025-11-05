import { createClient } from "redis";
// For cluster mode, use ioredis
import { Cluster } from "ioredis";

if (!process.env.REDIS_HOST) {
  throw new Error("Please define the REDIS_HOST environment variable");
}

let client: any;

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || "6379"),
  username: process.env.REDIS_USERNAME || undefined,
  password: process.env.REDIS_PASSWORD || undefined,
  tls: process.env.REDIS_TLS === "true" ? {} : undefined,
  database: parseInt(process.env.REDIS_DATABASE || "0"),
};

if (process.env.REDIS_CLUSTER_MODE === "true") {
  const nodes = (process.env.REDIS_CLUSTER_NODES || "")
    .split(",")
    .map((node) => {
      const [host, port] = node.split(":");
      return { host, port: parseInt(port) };
    });

  client = new Cluster(nodes, {
    redisOptions: redisConfig,
  });
} else {
  client = createClient(redisConfig);
}

client.on("error", (err: any) => console.error("Redis Client Error:", err));
if (process.env.REDIS_CLUSTER_MODE === "true") {
  // ioredis Cluster connects automatically
} else {
  client.connect().catch(console.error);
}
client.connect().catch(console.error);

export default client;

// Utility functions
export async function getCachedData(key: string) {
  return await client.get(key);
}

export async function setCachedData(
  key: string,
  value: string,
  expirationSeconds?: number
) {
  if (expirationSeconds) {
    return await client.set(key, value, { EX: expirationSeconds });
  }
  return await client.set(key, value);
}

export async function deleteCachedData(key: string) {
  return await client.del(key);
}

export async function clearCache() {
  return await client.flushDb();
}
