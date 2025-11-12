import { sum } from "../Components/sum";

test("Sum function should calculate the sum if 2 number", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);   // Assertion
});
