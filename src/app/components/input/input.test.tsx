import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TagInput from "./index";
import '@testing-library/jest-dom';

describe("TagInput Component", () => {
  test("renders input field", () => {
    render(<TagInput onAddTag={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText("Enter tags...");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onAddTag when a tag is added via Enter key", () => {
    const mockOnAddTag = jest.fn();
    render(<TagInput onAddTag={mockOnAddTag} />);

    const inputElement = screen.getByPlaceholderText("Enter tags...");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(mockOnAddTag).toHaveBeenCalledWith("test");
  });

  test("calls onAddTag when a tag is added via space key", () => {
    const mockOnAddTag = jest.fn();
    render(<TagInput onAddTag={mockOnAddTag} />);

    const inputElement = screen.getByPlaceholderText("Enter tags...");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.keyDown(inputElement, { key: " ", code: "Space" });

    expect(mockOnAddTag).toHaveBeenCalledWith("test");
  });

  test("clears input after adding tag", () => {
    const mockOnAddTag = jest.fn();
    render(<TagInput onAddTag={mockOnAddTag} />);

    const inputElement = screen.getByPlaceholderText("Enter tags...");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect((inputElement as HTMLInputElement).value).toBe("");
  });
});
