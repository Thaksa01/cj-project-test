import { render, screen, fireEvent } from "@testing-library/react";
import { isColor } from "@/app/utils";
import Tag from ".";
import React from "react";
import "@testing-library/jest-dom"; 

jest.mock("@/app/utils", () => ({
  isColor: jest.fn(),
}));

describe("Tag Component", () => {
  test("renders tags correctly", () => {
    const tags = [
      { text: "tag1", count: 1 },
      { text: "tag2", count: 2 },
    ];
    const removeTag = jest.fn();

    render(<Tag tags={tags} removeTag={removeTag} />);

    expect(screen.getByText(/tag1/)).toBeInTheDocument();
    expect(screen.getByText(/tag2/)).toBeInTheDocument();
  });

  test("renders default background color when tag text is not a valid color", () => {
    (isColor as jest.Mock).mockReturnValue(false);
    const tags = [
      { text: "tag1", count: 1 },
      { text: "tag2", count: 2 },
    ];
    const removeTag = jest.fn();

    render(<Tag tags={tags} removeTag={removeTag} />);

    const tag1 = screen.getByText(/tag1/);
    const tag2 = screen.getByText(/tag2/);

    expect(tag1).toHaveStyle("background: rgb(240, 240, 240");
    expect(tag2).toHaveStyle("background: rgb(240, 240, 2400");
  });

  test("calls removeTag function when remove button is clicked", () => {
    const tags = [
      { text: "tag1", count: 1 },
      { text: "tag2", count: 2 },
    ];
    const removeTag = jest.fn();

    render(<Tag tags={tags} removeTag={removeTag} />);

    // Get the remove button for the first tag
    const removeButton = screen.getAllByText("×")[0];

    // Click the remove button
    fireEvent.click(removeButton);

    // Ensure the removeTag function is called with the correct index
    expect(removeTag).toHaveBeenCalledWith(0);
  });
});
