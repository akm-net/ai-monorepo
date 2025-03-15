// Generated by Wrangler by running `wrangler types`

interface Env {
  CHECKER_AGENT: DurableObjectNamespace<import("./src/index").CheckerAgent>;
  // Service bindings with custom methods
  SEARCH_SERVICE: {
    search(params: SearchRequest): Promise<SearchResult>;
  } & ServiceWorkerGlobalScope;

  SCREENSHOT_SERVICE: {
    screenshot(params: ScreenshotRequest): Promise<ScreenshotResult>;
  } & ServiceWorkerGlobalScope;

  URLSCAN_SERVICE: {
    urlScan(params: URLScanRequest): Promise<URLScanResult>;
  } & ServiceWorkerGlobalScope;

  LANGFUSE_PUBLIC_KEY: string;
  LANGFUSE_SECRET_KEY: string;
  LANGFUSE_HOST: string;
  ENVIRONMENT: string;
}
