import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../app/page";

describe("Hexadecimal Calculator", () => {
  it("renders all buttons", () => {
    render(<Home />);

    ["A", "F", "+", "AC", "="].forEach((symbol) => {
      expect(screen.getByText(symbol)).toBeInTheDocument();
    });
  });

  // it("updates display when buttons are clicked", async () => {
  //   const user = userEvent.setup();
  //   render(<Home />);

  //   await user.click(screen.getByText("A"));
  //   await user.click(screen.getByText("+"));
  //   await user.click(screen.getByText("1"));

  //   expect(screen.getByText("A+1")).toBeInTheDocument();
  // });

  // it("clears display on AC", async () => {
  //   const user = userEvent.setup();
  //   render(<Home />);

  //   await user.click(screen.getByText("B"));
  //   await user.click(screen.getByText("AC"));

  //   const display = screen.getByTestId((_, node) => node?.textContent === "");
  //   expect(display).toBeInTheDocument()
  // });

  // it("performs addition correctly", async () => {
  //   const user = userEvent.setup();
  //   render(<Home />);

  //   await user.click(screen.getByText("A"));
  //   await user.click(screen.getByText("+"));
  //   await user.click(screen.getByText("1"));
  //   await user.click(screen.getByText("="));

  //   expect(screen.getByText("B")).toBeInTheDocument();
  // });

  // it("performs subtraction correctly", async () => {
  //   const user = userEvent.setup();
  //   render(<Home />);

  //   await user.click(screen.getByText("C"));
  //   await user.click(screen.getByText("-"));
  //   await user.click(screen.getByText("4"));
  //   await user.click(screen.getByText("="));

  //   expect(screen.getByText("8")).toBeInTheDocument();
  // });
});
