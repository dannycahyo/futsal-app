import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "@containers/Login";

describe("Login", () => {
  it("renders a heading", () => {
    render(<Login />);

    const heading = screen.getByRole("heading", {
      name: /sign in to your account/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
