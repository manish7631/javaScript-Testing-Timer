const sum = require("./index")

describe('Testing Sum Function', () => {
test("add 2 positive numbers", () => {
    expect(sum(360000)).toBe("00:06:00");
})

})