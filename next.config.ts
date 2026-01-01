import type { NextConfig } from "next";

import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";

// Import env files using jiti to validate environment variables
const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./config/env/server");
// jiti("./config/env/client");

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  typedRoutes: true,
};

export default nextConfig;
