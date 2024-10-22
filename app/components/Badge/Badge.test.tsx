import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge, { BadgeProps } from "./Badge";
import { describe, it, expect } from "vitest";

const defaultProps: BadgeProps = {
  title: "Temperature",
  ariaLabel: "High",
  value: 25,
};

describe("<Badge />", () => {
  it("should render with the correct title and value", () => {
    render(<Badge {...defaultProps} />);

    const title = screen.getByText("Temperature");
    expect(title).toBeInTheDocument();

    const value = screen.getByText("25°");
    expect(value).toBeInTheDocument();
  });

  it("should apply the 'small' class when isSmall is true", () => {
    render(<Badge {...defaultProps} isSmall={true} />);

    const badge = screen.getByRole("list");
    expect(badge).toHaveClass("small");
  });

  it("should have the correct aria-label", () => {
    render(<Badge title="Temperature" value={25} ariaLabel="High" />);

    const title = screen.getByLabelText("High");
    expect(title).toBeInTheDocument();
  });
});
