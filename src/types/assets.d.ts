/**
 * Ambient module declarations for static image assets imported with ESM syntax
 * (e.g. `import logo from "@/assets/images/logo.png"`).
 *
 * Metro resolves these to an asset source at runtime. `require("...")` calls are
 * already typed by `expo/types`; these declarations cover the `import` form.
 */

declare module "*.png" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.jpg" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.jpeg" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.gif" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.webp" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.avif" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.bmp" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}

declare module "*.svg" {
  import type { ImageSourcePropType } from "react-native";

  const content: ImageSourcePropType;
  export default content;
}
