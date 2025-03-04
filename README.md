# Introduction

This is a monorepo for the Cloudflare Workers-based AI service that CheckMate users.

# Installation

1. Install pnpm globally (if not already installed):

```bash
npm install -g pnpm
```

2. Clone the repository:

```bash
git clone https://github.com/your-username/checkmate-ai-monorepo.git
cd checkmate-ai-monorepo
```

3. Install dependencies:

```bash
pnpm install
```

4. Set up environment variables:

   - Copy `.dev.vars.example` to `.dev.vars` in each worker directory
   - Fill in the required environment variables in each `.dev.vars` file

# Development

- To run a specific worker:

```bash
pnpm run dev:<worker-name>
```

- To run all workers simultaneously:

```bash
pnpm run dev
```

This will start all workers concurrently based on the pipeline configuration in `turbo.json`. You can access them at:

- api-entrypoint: http://127.0.0.1:8787
- agent-service: http://127.0.0.1:8788
- screenshot-service: http://127.0.0.1:8789
- search-service: http://127.0.0.1:8790
- urlscan-service: http://127.0.0.1:8791



# Cloudflare Workers Deployment via GitHub Actions

## Prerequisites
Set the following environment variables in GitHub:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Cloudflare API token can be created using the `Edit Worker` template.


## Automated Deployment
Triggered on PRs to `staging` or `main`:
- `main` branch: `wrangler deploy --env production`
- `staging` branch: `wrangler deploy --env staging`

### Selective Deployment
- Changes in a specific worker folder trigger deployment for that worker only.
- Changes in a shared folder trigger deployment for all workers.

## Manual Deployment
**Note:** Workflow YAML must be merged into `main` before manual execution.

### When to Use Manual Deployment
- Worker deleted with no changes to trigger automation.
- Deployment drift between GitHub Actions and local `wrangler deploy`.

### Steps
1. Go to **Actions** > **Deploy CF Worker**.
2. Click **Run workflow**.
3. Choose **Force all deployment** or input a specific worker name.

