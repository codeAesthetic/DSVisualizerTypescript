import Home from "./App";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Home: load with title", async () => {
  const { getByText } = render(<Home />);
  await waitFor(() => {
    expect(getByText("Welcome To LinkedList Creator!!")).toBeInTheDocument();
  });
});
