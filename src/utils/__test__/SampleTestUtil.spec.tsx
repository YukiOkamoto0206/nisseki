// SampleTestUtil.ts squareのテストコード(サンプル)
import { square } from "../SampleTestUtil"

describe("SampleTestUtil.tsx Functions TestCases", () => {
  it("should return the squared value", () => {
    const result = square(2)
    const expected = 4

    expect(result).toStrictEqual(expected)
  })
})
