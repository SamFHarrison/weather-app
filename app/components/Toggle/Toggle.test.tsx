import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle, { ToggleProps } from "./Toggle";
import { describe, it, expect, vi } from "vitest";
import { mockTempScaleOptions } from "./mockData";

const defaultProps: ToggleProps = {
  options: mockTempScaleOptions,
  onClick: vi.fn(),
};

describe("<Toggle />", () => {
  it("should render all options", () => {
    render(<Toggle {...defaultProps} />);

    mockTempScaleOptions.forEach((option) => {
      expect(
        screen.getByRole("button", { name: option.label })
      ).toBeInTheDocument();
    });
  });

  it("should have the first option selected by default", () => {
    render(<Toggle {...defaultProps} />);

    const activeButton = screen.getByRole("button", { name: "°C" });
    expect(activeButton).toHaveClass("active");
  });

  it("should call onClick with the correct value when an option is clicked", () => {
    render(<Toggle {...defaultProps} />);

    const secondOptionButton = screen.getByRole("button", { name: "°F" });
    fireEvent.click(secondOptionButton);

    expect(defaultProps.onClick).toHaveBeenCalledWith("fahrenheit");
  });

  it("should change the active option when a new option is clicked", () => {
    render(<Toggle {...defaultProps} />);

    const secondOptionButton = screen.getByRole("button", { name: "°F" });
    fireEvent.click(secondOptionButton);

    const activeButton = screen.getByRole("button", { name: "°F" });
    expect(activeButton).toHaveClass("active");

    const firstOptionButton = screen.getByRole("button", { name: "°C" });
    expect(firstOptionButton).not.toHaveClass("active");
  });

  it("should set the default option based on the defaultOptionIndex prop", () => {
    render(<Toggle {...defaultProps} defaultOptionIndex={1} />);

    const activeButton = screen.getByRole("button", { name: "°F" });
    expect(activeButton).toHaveClass("active");
  });
});
