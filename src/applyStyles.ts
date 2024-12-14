import { CSS_SUBSTITUTIONS } from "./constants.ts";
import type { TConsoleStyles } from "./css.ts";
import { styledString, type TStyledString } from "./styledString.ts";

export function applyStyles(
  value: string | TStyledString,
  styles: TConsoleStyles,
): TStyledString {
  if (typeof value === "string") {
    if (value.includes(CSS_SUBSTITUTIONS)) {
      throw new Error("Unexpected CSS_SUBSTITUTIONS in content");
    }
    return styledString(CSS_SUBSTITUTIONS + value, [styles]);
  }
  if (value.content.startsWith(CSS_SUBSTITUTIONS)) {
    return styledString(
      value.content,
      value.styles.map((s) => ({ ...s, ...styles })),
    );
  }
  return styledString(CSS_SUBSTITUTIONS + value.content, [
    styles,
    ...value.styles.map((s) => ({ ...s, ...styles })),
  ]);
}
