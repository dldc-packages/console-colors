import { applyStyles } from "./applyStyles.ts";
import { base } from "./base.ts";
import type { TConsoleStyles } from "./css.ts";
import type { TStyledString } from "./styledString.ts";

/**
 * A styled function, can be executed directly or as a template literal
 */
export interface TStyled {
  (...content: (string | TStyledString)[]): TStyledString;
  // template literal fn
  (
    strings: TemplateStringsArray,
    ...values: (string | TStyledString)[]
  ): TStyledString;
}

/**
 * Create a styled function with the given styles
 * ```ts
 * const red = styled({ color: "#f87171" });
 * const res = red`Hello world`;
 * ```
 */
export function styled(styles: TConsoleStyles): TStyled {
  return function styledFn(): TStyledString {
    return applyStyles(base(...arguments), styles);
  };
}
