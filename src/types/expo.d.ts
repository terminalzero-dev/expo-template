// Committed counterpart to the (git-ignored) `expo-env.d.ts`, so type checking
// works in CI / fresh clones where Expo hasn't regenerated that file yet.
// Pulls in Expo's ambient types (CSS modules, `require` assets, metro, etc.).
/// <reference types="expo/types" />
