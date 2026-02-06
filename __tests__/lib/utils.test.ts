import { formatPrice, isValidEmail, truncate } from "@/lib/utils";

describe("Utils functions", () => {
  it("should format number as Rupiah price", () => {
    expect(formatPrice(199000)).toBe("Rp 199.000");
    expect(formatPrice(1000)).toBe("Rp 1.000");
  });

  it("should validate email correctly", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("invalid-email")).toBe(false);
    expect(isValidEmail("test@com")).toBe(false);
    expect(isValidEmail("a@b.c")).toBe(true);
  });

  it("should truncate string correctly", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
    expect(truncate("Hello", 10)).toBe("Hello");
    expect(truncate("", 3)).toBe("");
  });
});
