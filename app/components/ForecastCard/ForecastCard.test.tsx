import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ForecastCard from "./ForecastCard";
import { describe, it, expect } from "vitest";
import { mockForecastday } from "./mockData";

describe("<ForecastCard />", () => {
  it("should render the correct day and weather icon", () => {
    render(<ForecastCard weather={mockForecastday} tempScale="celsius" />);

    const day = screen.getByText("Tue");
    expect(day).toBeInTheDocument();

    const iconElement = screen.getByAltText("Patchy rain nearby");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute(
      "src",
      mockForecastday.day.condition.icon
    );
  });

  it("should display the average temperature in Celsius", () => {
    render(<ForecastCard weather={mockForecastday} tempScale="celsius" />);

    const avgTempElement = screen.getByText("10°");
    expect(avgTempElement).toBeInTheDocument();
  });

  it("should display the average temperature in Fahrenheit", () => {
    render(<ForecastCard weather={mockForecastday} tempScale="fahrenheit" />);

    const avgTempElement = screen.getByText("50°");
    expect(avgTempElement).toBeInTheDocument();
  });

  it("should render badges with the correct high and low temperatures in Celsius", () => {
    render(<ForecastCard weather={mockForecastday} tempScale="celsius" />);

    const highBadge = screen.getByLabelText("High");
    expect(highBadge).toBeInTheDocument();
    expect(highBadge).toHaveTextContent("11°");

    const lowBadge = screen.getByLabelText("Low");
    expect(lowBadge).toBeInTheDocument();
    expect(lowBadge).toHaveTextContent("9°");
  });

  it("should render badges with the correct high and low temperatures in Fahrenheit", () => {
    render(<ForecastCard weather={mockForecastday} tempScale="fahrenheit" />);

    const highBadge = screen.getByLabelText("High");
    expect(highBadge).toBeInTheDocument();
    expect(highBadge).toHaveTextContent("52°");

    const lowBadge = screen.getByLabelText("Low");
    expect(lowBadge).toBeInTheDocument();
    expect(lowBadge).toHaveTextContent("48°");
  });
});
