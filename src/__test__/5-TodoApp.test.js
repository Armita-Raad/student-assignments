/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import TodoContainer from "../components/5-TodoApp/TodoContainer";

describe("todo application", () => {
  test("should render a single li when the form is submitted once", () => {
    render(<TodoContainer />);
    const input = screen.getByPlaceholderText("write a todo");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "new li item" } });
    fireEvent.click(button);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems.length).toBe(1);
    expect(listItems[0]).toHaveTextContent("new li item");
  });

  test("should render li elements when the form is submited for several times", () => {
    render(<TodoContainer />);

    const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText("write a todo");

    const todos = ["first", "second", "third"];

    todos.forEach((todo) => {
      fireEvent.change(input, { target: { value: todo } });
      fireEvent.click(button);
    });

    const listItems = screen.getAllByRole("listitem");

    expect(listItems.length).toBe(3);
    todos.forEach((todo, index) => {
      expect(listItems[index]).toHaveTextContent(todo);
    });
  });
});
