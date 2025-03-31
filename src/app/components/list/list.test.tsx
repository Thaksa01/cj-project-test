import React from "react";
import { render, screen } from "@testing-library/react";
import { isColor } from "@/app/utils"; 
import List from ".";

import '@testing-library/jest-dom';

jest.mock("@/app/utils", () => ({
  isColor: jest.fn(),
}));

describe("List Component", () => {
  test("renders list with title", () => {
    render(<List dataList={["item1", "item2"]} title="My List" />);
    const titleElement = screen.getByText("My List");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders list without title", () => {
    render(<List dataList={["item1", "item2"]} title="" />);
    const titleElement = screen.queryByText("My List");
    expect(titleElement).not.toBeInTheDocument();
  });

  test("renders background color for valid color item", () => {
    (isColor as jest.Mock).mockReturnValueOnce(true);  
    (isColor as jest.Mock).mockReturnValueOnce(false);
    
    render(<List dataList={["red", "item2"]} title="Color List" />);
  
    expect(isColor).toHaveBeenCalledWith("red");
    expect(isColor).toHaveBeenCalledWith("item2");
  
    const itemElements = screen.getAllByText(/item/);
  
    expect(itemElements[0]).toHaveStyle("background-color: rgb(249, 249, 249)");
  });
  

  test("renders default background color for invalid color item", () => {
    (isColor as jest.Mock).mockReturnValue(false); 
    render(<List dataList={["invalidColor", "item2"]} title="Default List" />);
    const itemElements = screen.getAllByText(/item/);
    expect(itemElements[0]).toHaveStyle("background-color: #f9f9f9");
  });

  test("displays 'No items available' when list is empty", () => {
    render(<List dataList={[]} title="Empty List" />);
    const message = screen.getByText("No items available");
    expect(message).toBeInTheDocument();
  });
});
