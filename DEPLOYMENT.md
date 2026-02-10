# 🚀 Cloudflare Pages Deployment Instructions

## Automatic Deployment

This repository is configured to deploy automatically to Cloudflare Pages.

## Cloudflare Pages Settings

If setting up for the first time or updating settings:

1. Go to **Cloudflare Dashboard** → **Pages**
2. Select project: **joni-coming-soon**
3. Go to **Settings** → **Builds & deployments**

### Build Configuration

- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave blank)

### Environment Variables

None required for this static site.

## Manual Deployment

If you need to deploy manually:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Deploy to Cloudflare Pages
npx wrangler pages deploy out --project-name=joni-coming-soon
```

## Custom Domain

To add a custom domain:

1. Go to **Cloudflare Pages** → **joni-coming-soon** → **Custom domains**
2. Add your domain
3. Update DNS records as instructed

## Preview Deployments

Every push to a branch creates a preview deployment automatically.

---

**Current Status**: Repository connected to Cloudflare Pages
**Project Name**: joni-coming-soon
**Production Branch**: main
