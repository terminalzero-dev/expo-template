# AGENTS

## Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v56.0.0/ before writing any code. Do not rely on memory of older Expo SDKs.

## Stack

- Expo SDK 56 · React Native 0.85 · React 19 (React Compiler enabled)
- Expo Router (file-based, typed routes) with native tabs
- TypeScript (strict), path alias `@/*` → `src/*`
- Bun as the package manager (a `bun.lock` is committed)

## Conventions

- Use **Bun** for everything: `bun install`, `bun start`, `bun run <script>`.
- Lint & format with **oxc** only — `bun run lint` / `bun run format`. Do **not** add ESLint or Prettier. Rules live in `oxlint.config.ts` and `oxfmt.config.ts`.
- Application code goes in `src/`; only screens and layout files go in `src/app/`.
- Read design tokens (`Colors`, `Spacing`, `Fonts`) from `src/constants/theme.ts`; prefer `ThemedText` / `ThemedView` and `useTheme()` over hard-coded colors.
- Type checking is done by oxlint's type-aware mode (`bun run typecheck` → `oxlint --type-aware --type-check`), not `tsc`. It needs the `oxlint-tsgolint` dev dependency.
- Before finishing, run `bun run check` (type-check + format check).
