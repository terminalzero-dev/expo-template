# Expo Template

[![Expo SDK](https://img.shields.io/badge/Expo%20SDK-56-000020?logo=expo&logoColor=white)](https://docs.expo.dev/versions/v56.0.0/)
[![React Native](https://img.shields.io/badge/React%20Native-0.85-61DAFB?logo=react&logoColor=white)](https://reactnative.dev)
[![oxc](https://img.shields.io/badge/lint%20%2B%20format-oxc-c96198)](https://oxc.rs)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> An opinionated, batteries-included **Expo / React Native** starter template by [Terminal Zero](https://terminalzero.dev) — Expo Router with typed routes, native tabs, light/dark theming, and a pure [oxc](https://oxc.rs) toolchain. No ESLint, no Prettier.

Runs on **iOS**, **Android**, and the **web** from a single codebase.

## Features

- ⚡️ **Expo SDK 56** + **React Native 0.85** + **React 19** with the [React Compiler](https://react.dev/learn/react-compiler) enabled.
- 🧭 **Expo Router** file-based routing with [typed routes](https://docs.expo.dev/router/reference/typed-routes/) and **native tabs**.
- 🌗 **Light / dark theming** via a small, typed `Colors` + `Spacing` + `Fonts` design system.
- 🎨 **Pure oxc toolchain** — [oxlint](https://oxc.rs/docs/guide/usage/linter) + [oxfmt](https://oxc.rs/docs/guide/usage/formatter) via [`@terminalzero/oxc-config-expo`](https://www.npmjs.com/package/@terminalzero/oxc-config-expo). Blazing fast, zero ESLint/Prettier.
- 🪝 **Pre-commit hooks** with [lefthook](https://lefthook.dev) — auto lint + format staged files on every commit.
- 🧩 **Reusable components** — themed text/view, collapsible, animated icon, external links, web badge.
- 📦 **Bun-first** workflow with strict **TypeScript** and path aliases (`@/*`).
- ✅ **CI ready** — GitHub Actions workflow runs typecheck, lint, and format checks.

## Tech stack

| Area            | Choice                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Framework       | [Expo](https://docs.expo.dev/) SDK 56 / React Native 0.85                                             |
| Routing         | [Expo Router](https://docs.expo.dev/router/introduction/) (typed)                                     |
| Language        | [TypeScript](https://www.typescriptlang.org/) (strict)                                                |
| Animations      | [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)                        |
| Lint + format   | [oxlint](https://oxc.rs/docs/guide/usage/linter) + [oxfmt](https://oxc.rs/docs/guide/usage/formatter) |
| Git hooks       | [lefthook](https://lefthook.dev)                                                                      |
| Package manager | [Bun](https://bun.sh)                                                                                 |

## Requirements

- [Bun](https://bun.sh) `>= 1.3`
- Node.js `>= 22.18` (used by oxlint/oxfmt to load the TypeScript config files)
- For native builds: [Expo prerequisites](https://docs.expo.dev/get-started/set-up-your-environment/) (Xcode / Android Studio)

## Quick start

Create a new project from this template with `create-expo-app` (scaffolds, installs deps, and inits git):

```sh
bunx create-expo-app my-app --template https://github.com/terminalzero-dev/expo-template
cd my-app
bun start
```

Then press <kbd>i</kbd> for iOS, <kbd>a</kbd> for Android, or <kbd>w</kbd> for web in the Expo CLI.

Other options:

```sh
# A specific branch / tag / commit
bunx create-expo-app my-app --template https://github.com/terminalzero-dev/expo-template/tree/main

# Or just copy the files (no scaffolding), then install
bunx degit terminalzero-dev/expo-template my-app && cd my-app && bun install
```

You can also click **"Use this template"** on GitHub to create your own repository from it.

## Scripts

| Command                 | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| `bun start`             | Start the Expo dev server                              |
| `bun run ios`           | Open on the iOS simulator                              |
| `bun run android`       | Open on the Android emulator                           |
| `bun run web`           | Open in the browser                                    |
| `bun run tunnel`        | Start with an Expo tunnel (works behind a VPN/proxy)   |
| `bun run lint`          | Lint with oxlint                                       |
| `bun run lint:fix`      | Lint and auto-fix with oxlint                          |
| `bun run format`        | Format with oxfmt                                      |
| `bun run format:check`  | Check formatting without writing                       |
| `bun run typecheck`     | Type-aware lint + type-check via oxlint                |
| `bun run check`         | Run typecheck + format check (use in CI)               |
| `bun run reset-project` | Move the example code aside and start from a blank app |

## Project structure

```
.
├── src/
│   ├── app/                # Expo Router screens (file-based routing)
│   │   ├── _layout.tsx     # Root layout + theme provider + native tabs
│   │   ├── index.tsx       # Home screen
│   │   └── explore.tsx     # Explore screen
│   ├── components/         # Reusable UI components (themed, animated, …)
│   ├── constants/          # Design tokens: Colors, Spacing, Fonts
│   ├── hooks/              # Custom hooks (theme, color scheme)
│   ├── types/              # Ambient type declarations (asset imports)
│   └── global.css          # Web font variables
├── assets/                 # Images, icons, fonts
├── oxlint.config.ts        # oxlint config (extends the shared preset)
├── oxfmt.config.ts         # oxfmt config (extends the shared preset)
├── lefthook.yml            # Pre-commit lint + format hooks
└── app.json                # Expo app config
```

> Put application code in `src/`. Only screens and layout files belong in `src/app/`.

## Tooling

### Lint & format (oxc)

Linting and formatting are powered entirely by the [oxc](https://oxc.rs) toolchain through the shared [`@terminalzero/oxc-config-expo`](https://www.npmjs.com/package/@terminalzero/oxc-config-expo) preset — no ESLint or Prettier. Tweak the rules in `oxlint.config.ts` / `oxfmt.config.ts`.

### Pre-commit hooks (lefthook)

Hooks install automatically after `bun install` (via the `prepare` script). On every commit, staged files are auto-fixed by oxlint and formatted by oxfmt — see `lefthook.yml`.

### Editor (VS Code)

Install the recommended [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) extension (prompted automatically). `.vscode/settings.json` enables format-on-save and oxlint quick-fixes.

## Theming

Colors, spacing, and fonts live in [`src/constants/theme.ts`](./src/constants/theme.ts). Components consume them through `ThemedText` / `ThemedView` and the `useTheme()` hook, with automatic light/dark switching via `useColorScheme()`.

## Resetting the project

When you're ready to start fresh, run:

```sh
bun run reset-project
```

This moves the starter code into `example/` (or deletes it) and creates a blank `src/app`. You can then remove the `reset-project` script and `scripts/reset-project.js`.

## License

[MIT](./LICENSE) © [Terminal Zero](https://terminalzero.dev)
