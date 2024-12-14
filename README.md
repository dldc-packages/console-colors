# CSS console

Print styled text in the console using CSS styles
([using `%c` flag](https://developer.mozilla.org/en-US/docs/Web/API/console#styling_console_output)).

```typescript
import * as c from "@dldc/css-console";

c.red`Hello world`.log(); // Print "Hello world" in red

c.base`This message is ${c.red`Very`} important`.log();
```
