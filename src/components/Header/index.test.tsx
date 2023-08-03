import Header from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeContextProvider } from "../../context/theme/ThemeContext";
import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";

const RenderHeader = () => {
  render(
    <ThemeContextProvider>
      <ThemeProvider theme={light}>
        <Header />
      </ThemeProvider>
    </ThemeContextProvider>
  );
};
describe("testing header", () => {
  it("button should change the text to dark when toggled the first time", () => {
    RenderHeader();
    const button = screen.getByText("switch to dark");
    fireEvent.click(button);
    const text = screen.getByText("switch to light");
    expect(text).toBeInTheDocument();
  });
});
