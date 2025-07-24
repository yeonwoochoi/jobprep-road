import { chain } from "@/lib/middleware/chain";
import { authMiddleware } from "@/lib/middleware/auth";
import { redirectMiddleware } from "@/lib/middleware/redirects";
import { aggregatedConfig } from "@/lib/middleware/config-aggregator";

export default chain([authMiddleware, redirectMiddleware])

export const config = aggregatedConfig;