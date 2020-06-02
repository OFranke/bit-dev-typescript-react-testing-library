import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./button";

describe("Button", () => {
  it("render the button inside", () => {
    const { getByText } = render(<Button />);
    expect(getByText("Click Me!")).toBeInTheDocument();
  });
});
