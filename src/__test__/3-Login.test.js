/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../components/3-Login/Login";
import { click } from "@testing-library/user-event/dist/cjs/convenience/click.js";

// eslint-disable-next-line no-undef
describe("login function", () => {
  it("should render a button", () => {
    render(<Login />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it('should display "login" as its initial value', () => {
    render(<Login />);
    expect(screen.getByRole("button")).toHaveTextContent("login");
  });

  it('should change to "logout" when the button is clicked', () => {
    render(<Login handleClick={click} />);

    const button = screen.getByRole("button");
    
    fireEvent.click(button);

    expect(button).toHaveTextContent("logout");
  });
});
