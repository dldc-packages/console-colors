import { CSS_SUBSTITUTIONS } from "./constants.ts";
import type { TConsoleStyles } from "./css.ts";
import { styledString, type TStyledString } from "./styledString.ts";

// template literal fn
export function base(
  strings: TemplateStringsArray,
  ...values: (string | TStyledString)[]
): TStyledString {
  const parts: (string | TStyledString)[] = [];
  const addPart = (part: string | TStyledString) => {
    if (part === "") {
      return;
    }
    const lastPart = parts[parts.length - 1];
    if (typeof lastPart === "string") {
      parts[parts.length - 1] = lastPart + part;
    } else {
      parts.push(part);
    }
  };

  for (let i = 0; i < strings.length; i++) {
    addPart(strings[i]);
    if (i < values.length) {
      addPart(values[i]);
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
    content += part.content;
    styles.push(...part.styles);
  });

  return styledString(content, styles);
}
