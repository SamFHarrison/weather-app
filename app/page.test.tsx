import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";
import Home from "./page";
import useSearchLocation from "./hooks/useLocationSearch";
import useGetWeather from "./hooks/useGetWeather";
import { mockWeather } from "./mocks/weather";

vi.mock("./hooks/useLocationSearch");
vi.mock("./hooks/useGetWeather");

describe("Home page", () => {
  it("should render search bar and toggle", () => {
    (useSearchLocation as Mock).mockReturnValue({
      searchResults: [],
      isLoading: false,
      error: null,
      searchLocations: vi.fn(),
    });

    (useGetWeather as Mock).mockReturnValue({
      weather: null,
      isLoading: false,
      error: null,
      locationError: null,
    });

    render(<Home />);

    expect(screen.getByRole("combobox")).toBeDefined();
    expect(screen.getByText("°C")).toBeDefined();
  });

  it("should display loading spinner when weather is loading", () => {
    (useGetWeather as Mock).mockReturnValue({
      weather: null,
      isLoading: true,
      error: null,
      locationError: null,
    });

    render(<Home />);

    expect(screen.getByRole("status")).toBeDefined();
  });

  it("should display error messages when there's an error", () => {
    (useGetWeather as Mock).mockReturnValue({
      weather: null,
      isLoading: false,
      error: "Error fetching weather",
      locationError: "Error fetching location",
    });

    render(<Home />);

    const alertElement = screen.getByRole("alert");

    expect(alertElement).toHaveTextContent("Error fetching weather");
    expect(alertElement).toHaveTextContent("Error fetching location");
  });

  it("should render weather and forecast if data is available", () => {
    (useGetWeather as Mock).mockReturnValue({
      weather: mockWeather,
      isLoading: false,
      error: null,
      locationError: null,
    });

    render(<Home />);

    expect(screen.getByText("Elgin, UK")).toBeDefined();
  });
});
