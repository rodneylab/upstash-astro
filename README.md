# Get Started with Astro and Redis Tutorial

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/rodneylab/upstash-astro)

This is starter code for the <a href="https://upstash.com/blog/getting-started-astro-redis?utm_source=Rodney1">Get Started with Astro and Redis tutorial</a>. In that tutorial we create a basic notes app using Astro in SSR mode. We use Cloudflare Workers to interface with the Upstash serverless database. To get going clone the starter then follow the link to complete the tutorial:

```shell
pnpm create astro -- --template rodneylab/upstash-astro
```

## 🚀 Server Side Rendering (SSR)

Project uses Cloudflare Pages with Cloudflare Workers running in advanced mode. Update `astro.config.js` to switch to directory mode. To preview built site run:

```shell
pnpm preview:cloudflare
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                        | Action                                           |
| :----------------------------- | :----------------------------------------------- |
| `pnpm install`                 | Installs dependencies                            |
| `pnpm astro telemetry disable` | Disable data collection                          |
| `pnpm dev`                     | Starts local dev server at `localhost:3000`      |
| `pnpm build`                   | Build your production site to `./dist/`          |
| `pnpm preview:cloudflare`      | Preview your build locally with Wrangler         |
| `pnpm astro ...`               | Run CLI commands like `astro add`, `astro build` |
| `pnpm astro --help`            | Get help using the Astro CLI                     |

Feel free to jump into the [Rodney Lab matrix chat room](https://matrix.to/#/%23rodney:matrix.org).
