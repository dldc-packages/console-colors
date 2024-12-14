import { CSS_SUBSTITUTIONS } from "./constants.ts";
import type { TConsoleStyles } from "./css.ts";
import { styledString, type TStyledString } from "./styledString.ts";

/**
 * Apply a given style to a string or styled string
 * @param value
 * @param styles
 * @returns A new styled string
 */
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
  if (value.string.startsWith(CSS_SUBSTITUTIONS)) {
    return styledString(
      value.string,
      value.styles.map((s) => ({ ...styles, ...s })),
    );
  }
  return styledString(CSS_SUBSTITUTIONS + value.string, [
    styles,
    ...value.styles.map((s) => ({ ...styles, ...s })),
  ]);
}
