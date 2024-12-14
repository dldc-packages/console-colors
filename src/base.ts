import { CSS_SUBSTITUTIONS } from "./constants.ts";
import type { TConsoleStyles } from "./css.ts";
import { styledString, type TStyledString } from "./styledString.ts";

/**
 * Join multiple strings or styled strings into a single styled string.
 * Can be used as a function or as a template literal
 */
export function base(
  ...values: (string | TStyledString)[]
): TStyledString;
export function base(
  strings: TemplateStringsArray,
  ...values: (string | TStyledString)[]
): TStyledString;
export function base(
  arg0: TemplateStringsArray | string | TStyledString,
  ...rest: (string | TStyledString)[]
): TStyledString {
  const parts: (string | TStyledString)[] = [];
  const addPart = (part: string | TStyledString) => {
    if (part === "") {
      return;
    }
    const lastPart = parts[parts.length - 1];
    if (typeof part === "string" && typeof lastPart === "string") {
      parts[parts.length - 1] = lastPart + part;
    } else {
      parts.push(part);
    }
  };
  if (arg0 instanceof Array) {
    for (let i = 0; i < arg0.length; i++) {
      addPart(arg0[i]);
      if (i < rest.length) {
        addPart(rest[i]);
      }
    }
  } else {
    addPart(arg0);
    for (const part of rest) {
      addPart(part);
    }
  }

  let content = "";
  const styles: TConsoleStyles[] = [];
  let onlyString = true;

  parts.forEach((part) => {
    if (typeof part === "string") {
      if (onlyString) {
        content += part;
        return;
      }
      content += CSS_SUBSTITUTIONS + part;
      styles.push({});
      return;
    }
    onlyString = false;
    content += part.string;
    styles.push(...part.styles);
  });

  return styledString(content, styles);
}
