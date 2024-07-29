/* eslint-disable no-undef */
import { screen, render } from "@testing-library/react";
import ListOfLi from "../components/2-ListOfLi/ListOfLi";

describe("list of li function", () => {
  it("should return the correct number of elements", () => {
    const names = ["john", "sam", "jasem", "tom"];
    
    render(<ListOfLi usernames={names} />);

    const lis = screen.getAllByRole("listitem");

    expect(lis.length).toEqual(names.length);
  });
});
