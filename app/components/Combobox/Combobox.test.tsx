import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Combobox, { ComboboxProps } from "./Combobox";
import { describe, it, expect, vi } from "vitest";
import { mockLocationOptions } from "./mockData";

const defaultProps: ComboboxProps = {
  options: [],
  onChange: vi.fn(),
  onSelect: vi.fn(),
  isLoading: false,
};

describe("<Combobox />", () => {
  it("should render input field with placeholder", () => {
    render(<Combobox {...defaultProps} />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should call onChange when typing in input", () => {
    const onChange = vi.fn();
    render(<Combobox {...defaultProps} onChange={onChange} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "New" } });

    expect(onChange).toHaveBeenCalledWith("New");
  });

  it("should show spinner when loading", () => {
    render(<Combobox {...defaultProps} isLoading={true} />);

    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
  });

  it("should render options when expanded", () => {
    render(<Combobox {...defaultProps} options={mockLocationOptions} />);

    const listItems = screen.getAllByRole("button");
    expect(listItems.length).toBe(mockLocationOptions.length);
    expect(listItems[0]).toHaveTextContent("Elgin, Illinois");
    expect(listItems[1]).toHaveTextContent("Elgin, Moray");
  });

  it("should call onSelect when an option is clicked", () => {
    const onSelect = vi.fn();
    render(
      <Combobox
        {...defaultProps}
        options={mockLocationOptions}
        onSelect={onSelect}
      />
    );

    const options = screen.getByTitle(
      "Elgin, Illinois, United States of America"
    );
    fireEvent.click(options);

    expect(onSelect).toHaveBeenCalledWith(mockLocationOptions[0]);
  });
});
