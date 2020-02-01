const soma = (a, b) => a + b;

test("testing example", () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
