import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { loadEnv } from "vite";

const env = loadEnv("production", process.cwd(), "");
const isHostingerBuild = process.env.HOSTINGER_BUILD === "1" || env.HOSTINGER_BUILD === "1";
const args = [join("node_modules", "vite", "bin", "vite.js"), "build"];

if (isHostingerBuild) {
  args.push("--config", "vite.hostinger.config.ts");
}

const result = spawnSync(process.execPath, args, {
  cwd: process.cwd(),
  env: process.env,
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
