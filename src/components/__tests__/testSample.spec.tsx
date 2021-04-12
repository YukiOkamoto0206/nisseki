import React from "react"
import renderer from "react-test-renderer"
import TestSample from "../testSample"

test("TestSample", () => {
  const component = renderer.create(<TestSample />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
