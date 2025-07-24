import { authConfig } from "@/lib/middleware/auth";
import { redirectConfig } from "@/lib/middleware/redirects";

export const aggregatedConfig = {
  matcher: [
    ...authConfig.matcher,
    ...redirectConfig.matcher
  ]
}