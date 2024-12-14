import { printStyles, type TConsoleStyles } from "./css.ts";

const STYLED_STRING = Symbol("StyledString");

/**
 * Internal representation of a string with styles applied
 */
export interface TStyledString {
  [STYLED_STRING]: true;
  string: string;
  styles: TConsoleStyles[];

  toString: () => string;

  /**
   * Print using console.debug
   */
  debug: () => void;

  /**
   * Print using console.log
   */
  log: () => void;

  /**
   * Print using console.info
   */
  info: () => void;

  /**
   * Print using console.warn
   */
  error: () => void;

  /**
   * Get the list of messages to print to the console
   * ```ts
   * const text = red`Hello world`;
   * console.log(...text.messages);
   */
  messages: string[];
}

/**
 * Crate a styled string object
 * @param string
 * @param styles
 * @returns
 */
export function styledString(
  string: string,
  styles: TConsoleStyles[],
): TStyledString {
  let messages: string[] | null = null;
  function getMessages() {
    if (messages) {
      return messages;
    }
    messages = [string, ...styles.map(printStyles)];
    return messages;
  }

  return {
    [STYLED_STRING]: true,
    string,
    styles,
    get messages() {
      return getMessages();
    },

    debug() {
      console.debug(...getMessages());
    },
    log() {
      console.log(...getMessages());
    },
    info() {
      console.info(...getMessages());
    },
    error() {
      console.error(...getMessages());
    },

    toString() {
      return string;
    },
    [Symbol.for("Deno.customInspect")]() {
      return string;
    },
  };
}
