import { defineConfig } from "@terminalzero/oxc-config-expo/oxfmt";

export default defineConfig({
  // React Native project: no Tailwind/uniwind className usage, so disable class sorting.
  sortTailwindcss: false,
});
