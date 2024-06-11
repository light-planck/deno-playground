import { assertEquals } from "jsr:@std/assert/assert-equals";
import { sayHello } from "./person.ts";

Deno.test("Person", () => {
  const ada = {
    lastName: "Lovelace",
    firstName: "Ada",
  };
  assertEquals(sayHello(ada), "Hello, Ada!");
});
