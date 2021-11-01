const commonWord = require("./utils/common-word.js");

describe("Get most common word", () => {
  it("should count the word God 59 times", async () => {
    const common = await commonWord("God");
    expect(common).toBe(59);
  });

  it("should count the word LORD 20 times", async () => {
    const common = await commonWord("LORD");
    expect(common).toBe(20);
  });

  it("should count the word And 221 times", async () => {
    const common = await commonWord("And");
    expect(common).toBe(20);
  });

  it("should count the word the 221 times", async () => {
    const common = await commonWord("the");
    expect(common).toBe(20);
  });
});
