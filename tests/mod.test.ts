import { expect } from "@std/expect";
import * as c from "../mod.ts";

Deno.test("Basic usxage", () => {
  const res = c.red("Hello world");
  expect(res.messages).toEqual(["%cHello world", "color: #f87171"]);
});

Deno.test("Template literal usage", () => {
  const res = c.red`Hello world`;
  expect(res.messages).toEqual(["%cHello world", "color: #f87171"]);
});

Deno.test("Nested styles", () => {
  const res = c.italic(c.red("Hello world"));
  expect(res.messages).toEqual([
    "%cHello world",
    "fontStyle: italic; color: #f87171",
  ]);
});

Deno.test("Template literal", () => {
  const res = c.blue`Hello ${c.red`world`}`;
  expect(res.messages).toEqual([
    "%cHello %cworld",
    "color: #60a5fa",
    "color: #f87171",
  ]);
});

Deno.test("Base", () => {
  const res = c.base`This message is ${c.red`Very`} important`;
  expect(res.messages).toEqual([
    "This message is %cVery%c important",
    "color: #f87171",
    "",
  ]);
});
