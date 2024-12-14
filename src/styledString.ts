import { printStyles, type TConsoleStyles } from "./css.ts";

const STYLED_STRING = Symbol("StyledString");

export interface TStyledString {
  [STYLED_STRING]: true;
  content: string;
  styles: TConsoleStyles[];
  log: () => string[];
  toString: () => string;
}

export function styledString(
  content: string,
  styles: TConsoleStyles[],
): TStyledString {
  return {
    [STYLED_STRING]: true,
    content,
    styles,
    log() {
      return [content, ...styles.map(printStyles)];
    },
    toString() {
      return content;
    },
    [Symbol.for("Deno.customInspect")]() {
      return content;
    },
  };
}
