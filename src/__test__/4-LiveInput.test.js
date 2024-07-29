/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import LiveInput from "../components/4-LiveInput/LiveInput";

describe("live input function", () => {
  it('should have an input with the placeholder "Enter a text"', () => {
    render(<LiveInput />);
    expect(screen.getByPlaceholderText("Enter a text")).toBeInTheDocument();
  });

  it("should have a h2 element", () => {
    render(<LiveInput />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("When a user types into the input element, the h2 element displays the entered text.", () => {
    render(<LiveInput />);

    const input = screen.getByPlaceholderText("Enter a text");
    const heading = screen.getByRole("heading", { level: 2 });

    fireEvent.change(input, { target: { value: "this is a test" } });

    expect(heading.textContent).toBe("this is a test");
  });

  it("heading should return the same value as the input value", () => {
    render(<LiveInput />);

    const input = screen.getByPlaceholderText("Enter a text");
    const heading = screen.getByRole("heading", { level: 2 });

    fireEvent.change(input, { target: { value: "hello world" } });

    expect(heading.textContent).toBe("hello world");
  });
});
