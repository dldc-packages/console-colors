import { expect } from "@std/expect";
import { applyStyles, styledString } from "../mod.ts";

Deno.test("Basic applyStyles", () => {
  const res = applyStyles("Hello world", { color: "red" });

  expect(res.string).toEqual("%cHello world");
  expect(res.styles).toEqual([{ color: "red" }]);
});

Deno.test("Basic applyStyles on styledString", () => {
  const str = styledString("Hello %cworld", [{ color: "red" }]);
  const res = applyStyles(str, { color: "blue" });

  expect(res.string).toEqual("%cHello %cworld");
  expect(res.styles).toEqual([{ color: "blue" }, { color: "red" }]);
});
